"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { divIcon, latLngBounds } from "leaflet";

type MapStop = {
  name: string;
  position: [number, number];
};

type TourMapClientProps = {
  stops: MapStop[];
};

type RoutePosition = [number, number];

const BRAND_COLOR = "#d45a0a";

function FitMapBounds({
  positions,
}: {
  positions: RoutePosition[];
}) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;

    const bounds = latLngBounds(positions);

    map.fitBounds(bounds, {
      paddingTopLeft: [30, 30],
      paddingBottomRight: [30, 30],
      maxZoom: 9,
      animate: true,
    });
  }, [map, positions]);

  return null;
}

function createStopIcon({
  number,
  important,
}: {
  number: number;
  important: boolean;
}) {
  return divIcon({
    className: "",
    iconSize: important ? [38, 38] : [32, 32],
    iconAnchor: important ? [19, 19] : [16, 16],
    popupAnchor: [0, -20],

    html: `
      <div
        style="
          width: ${important ? "38px" : "32px"};
          height: ${important ? "38px" : "32px"};
          border-radius: 9999px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: ${important ? BRAND_COLOR : "#ffffff"};
          color: ${important ? "#ffffff" : BRAND_COLOR};

          border: ${
            important
              ? "4px solid #ffffff"
              : `3px solid ${BRAND_COLOR}`
          };

          font-size: ${important ? "13px" : "12px"};
          font-weight: 800;
          font-family: Arial, sans-serif;

          box-shadow:
            0 3px 10px rgba(0,0,0,0.18),
            0 0 0 1px rgba(0,0,0,0.04);
        "
      >
        ${number}
      </div>
    `,
  });
}

export default function TourMapClient({
  stops,
}: TourMapClientProps) {
  const [route, setRoute] = useState<RoutePosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [routeError, setRouteError] = useState(false);

  const fallbackRoute = useMemo(
    () => stops.map((stop) => stop.position),
    [stops]
  );

  const isRoundTrip = useMemo(() => {
    if (stops.length < 2) return false;

    const first = stops[0].position;
    const last = stops[stops.length - 1].position;

    return first[0] === last[0] && first[1] === last[1];
  }, [stops]);

  const visibleStops = useMemo(() => {
    return isRoundTrip ? stops.slice(0, -1) : stops;
  }, [isRoundTrip, stops]);

  useEffect(() => {
    if (stops.length === 0) {
      setLoading(false);
      return;
    }

    if (stops.length === 1) {
      setRoute([stops[0].position]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadRoute() {
      try {
        setLoading(true);
        setRouteError(false);

        // OSRM needs: longitude,latitude
        const coordinates = stops
          .map(
            (stop) =>
              `${stop.position[1]},${stop.position[0]}`
          )
          .join(";");

        const url =
          `https://router.project-osrm.org/route/v1/driving/${coordinates}` +
          `?overview=full&geometries=geojson`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load road route");
        }

        const data = await response.json();

        const routeCoordinates:
          | [number, number][]
          | undefined =
          data.routes?.[0]?.geometry?.coordinates;

        if (!routeCoordinates) {
          throw new Error("Road route not found");
        }

        // OSRM: [longitude, latitude]
        // Leaflet: [latitude, longitude]
        const formattedRoute: RoutePosition[] =
          routeCoordinates.map(([lng, lat]) => [
            lat,
            lng,
          ]);

        setRoute(formattedRoute);
      } catch (error) {
        if (
          error instanceof Error &&
          error.name === "AbortError"
        ) {
          return;
        }

        console.error("Tour map route error:", error);

        setRoute(fallbackRoute);
        setRouteError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRoute();

    return () => {
      controller.abort();
    };
  }, [fallbackRoute, stops]);

  if (stops.length === 0) {
    return null;
  }

  const boundsPositions =
    route.length > 0 ? route : fallbackRoute;

  return (
    <div className="relative">
      <MapContainer
        center={stops[0].position}
        zoom={6}
        minZoom={4}
        maxZoom={18}
        zoomControl={false}
        scrollWheelZoom={false}
        className="h-[360px] w-full sm:h-[440px]"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topright" />

        <FitMapBounds positions={boundsPositions} />

        {/* Route white outline */}
        {route.length > 1 && (
          <Polyline
            positions={route}
            pathOptions={{
              color: "#ffffff",
              weight: 9,
              opacity: 0.95,
              lineCap: "round",
              lineJoin: "round",
            }}
          />
        )}

        {/* Main brand route */}
        {route.length > 1 && (
          <Polyline
            positions={route}
            pathOptions={{
              color: BRAND_COLOR,
              weight: 4.5,
              opacity: 1,
              lineCap: "round",
              lineJoin: "round",
            }}
          />
        )}

        {/* Numbered stops */}
        {visibleStops.map((stop, index) => {
          const isStart = index === 0;

          const isEnd =
            !isRoundTrip &&
            index === visibleStops.length - 1;

          const important = isStart || isEnd;

          let stopLabel = `Stop ${index + 1}`;

          if (isStart && isRoundTrip) {
            stopLabel = "Start & Finish";
          } else if (isStart) {
            stopLabel = "Starting Point";
          } else if (isEnd) {
            stopLabel = "Final Destination";
          }

          return (
            <Marker
              key={`${stop.name}-${index}`}
              position={stop.position}
              icon={createStopIcon({
                number: index + 1,
                important,
              })}
            >
              <Popup>
                <div className="min-w-[145px] py-1">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      color: BRAND_COLOR,
                    }}
                  >
                    {stopLabel}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {stop.name}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Route information badge */}
      {!loading && !routeError && (
        <div className="pointer-events-none absolute bottom-6 left-4 z-[500] hidden items-center gap-2.5 rounded-full border border-black/5 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md sm:flex">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: BRAND_COLOR,
            }}
          />

          <span className="text-xs font-semibold text-neutral-700">
            {visibleStops.length} tour stops
          </span>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="pointer-events-none absolute left-1/2 top-4 z-[500] -translate-x-1/2 rounded-full border border-black/5 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            />

            <span className="text-xs font-semibold text-neutral-700">
              Loading tour route...
            </span>
          </div>
        </div>
      )}

      {/* Fallback message */}
      {!loading && routeError && (
        <div className="pointer-events-none absolute bottom-6 left-4 z-[500] rounded-full border border-black/5 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
          <span className="text-xs font-semibold text-neutral-700">
            Approximate tour route
          </span>
        </div>
      )}
    </div>
  );
}