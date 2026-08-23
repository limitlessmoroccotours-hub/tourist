import type { MetadataRoute } from "next";

import { getBlogSlugs } from "@/data/blog";
import { getTourSlugs } from "@/data/tours";
import { getDayTripSlugs } from "@/data/dayTrips";
import { getShopProductSlugs } from "@/data/shop";
import { getSpecialOfferSlugs } from "@/data/specialOffers";


const SITE_URL = "https://moroccan-trip.com";


export default function sitemap(): MetadataRoute.Sitemap {


  const staticPages = [
    "",
    "/about-us",
    "/contact",
    "/blog",
    "/day-trips",
    "/custom-tour",
    "/shop",
    "/special-offers",
    "/tours",
  ];


  const staticUrls = staticPages.map((page) => ({
    url: `${SITE_URL}${page}`,
    lastModified: new Date(),
  }));


  const tourUrls = getTourSlugs().map((slug) => ({
    url: `${SITE_URL}/tours/${slug}`,
    lastModified: new Date(),
  }));


  const blogUrls = getBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));


  const dayTripUrls = getDayTripSlugs().map((slug) => ({
    url: `${SITE_URL}/day-trips/${slug}`,
    lastModified: new Date(),
  }));


  const shopUrls = getShopProductSlugs().map((slug) => ({
    url: `${SITE_URL}/shop/${slug}`,
    lastModified: new Date(),
  }));


  const specialOfferUrls = getSpecialOfferSlugs().map((slug) => ({
    url: `${SITE_URL}/special-offers/${slug}`,
    lastModified: new Date(),
  }));



  return [
    ...staticUrls,
    ...tourUrls,
    ...blogUrls,
    ...dayTripUrls,
    ...shopUrls,
    ...specialOfferUrls,
  ];

}