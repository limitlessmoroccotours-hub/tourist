import type { Tour } from "@/data/tours";

export const toursEs: Tour[] = [
    {
        id: "1",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "3-dias-marrakech-merzouga",
      
        title:
          "Tour de 3 días desde Marrakech al desierto de Merzouga",
      
        shortDescription:
          "Descubre el Sahara en un tour privado de 3 días desde Marrakech a Merzouga, cruzando el Alto Atlas, Ait Ben Haddou, el Valle del Dades y las Gargantas del Todra.",
      
        image:
          "/images/tours/3-day-desert-tour-marrakech-merzouga.webp",
      
        badge: "Más reservado",
      
        featured: true,
      
        category: "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration: "3 días / 2 noches",
      
        nights: 2,
      
        tourType: "Tour privado",
      
        groupSize: "Hasta 4 personas",
      
        languages: ["Inglés", "Francés"],
      
        departure: "Marrakech",
      
        arrival: "Marrakech",
      
        locations: [
          "Marrakech",
          "Alto Atlas",
          "Ait Ben Haddou",
          "Ouarzazate",
          "Valle del Dades",
          "Gargantas del Todra",
          "Merzouga",
          "Erg Chebbi",
          "Desierto del Sahara",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Valle del Dades",
              position: [31.45, -5.97],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Cruza el Alto Atlas y disfruta de sus paisajes de montaña",
          "Visita el histórico pueblo fortificado de Ait Ben Haddou",
          "Recorre Ouarzazate y los paisajes del sur de Marruecos",
          "Descubre el Valle del Dades",
          "Camina por las Gargantas del Todra",
          "Llega a Merzouga y las dunas de Erg Chebbi",
          "Disfruta de un paseo en camello por el Sahara",
          "Contempla la puesta de sol sobre las dunas",
          "Pasa una noche en un campamento del desierto",
          "Viaja en un tour privado con paradas flexibles",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Vive una de las rutas más emblemáticas del sur de Marruecos en este tour
          privado de 3 días desde Marrakech al desierto de Merzouga.
      
          El viaje comienza cruzando el Alto Atlas, donde las carreteras de montaña
          ofrecen amplias vistas y atraviesan pequeños pueblos antes de llegar a
          Ait Ben Haddou. Después de la visita, la ruta continúa por Ouarzazate
          hasta el Valle del Dades, donde pasarás la primera noche.
      
          Al día siguiente viajarás hacia las Gargantas del Todra y continuarás hasta
          Merzouga. Allí comienzan las dunas de Erg Chebbi, uno de los paisajes más
          conocidos del Sahara marroquí.
      
          Por la tarde recorrerás las dunas en camello y podrás contemplar la puesta
          de sol antes de llegar al campamento del desierto. La noche se pasa en el
          Sahara, lejos de las ciudades y rodeado por las dunas.
      
          El tercer día comienza con la posibilidad de ver el amanecer antes del
          desayuno. Después iniciaremos el regreso hacia Marrakech atravesando de
          nuevo los paisajes del sur de Marruecos.
      
          Esta excursión de 3 días desde Marrakech al desierto de Merzouga es una
          opción adecuada para quienes quieren conocer Erg Chebbi, pasar una noche
          en el Sahara y regresar a Marrakech en un viaje privado.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description: `
              Salida por la mañana desde Marrakech para comenzar el viaje hacia el
              sur de Marruecos.
      
              Cruzaremos el Alto Atlas por una carretera de montaña con paradas
              panorámicas durante el recorrido.
      
              Continuaremos hasta Ait Ben Haddou, conocido por su arquitectura de
              tierra y su histórico ksar. Tendrás tiempo para conocer el lugar antes
              de seguir hacia Ouarzazate.
      
              Por la tarde, la ruta continúa hasta el Valle del Dades atravesando
              paisajes secos, pequeños pueblos y valles del sur de Marruecos.
      
              Llegada al Dades, cena y alojamiento.
            `,
      
            highlights: [
              "Salida desde Marrakech",
              "Cruce del Alto Atlas",
              "Paradas panorámicas",
              "Visita a Ait Ben Haddou",
              "Paso por Ouarzazate",
              "Llegada al Valle del Dades",
              "Cena y alojamiento",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Valle del Dades – Gargantas del Todra – Merzouga – Erg Chebbi",
      
            description: `
              Después del desayuno, dejaremos el Valle del Dades y continuaremos
              hacia el sureste de Marruecos.
      
              La primera parada importante será en las Gargantas del Todra, donde
              tendrás tiempo para caminar entre las paredes del cañón.
      
              Después continuaremos hacia Merzouga. A medida que nos acercamos,
              aparecerán las grandes dunas de Erg Chebbi.
      
              Por la tarde comenzarás el paseo en camello por el Sahara. El recorrido
              atraviesa las dunas y permite disfrutar del paisaje mientras cae el sol.
      
              Después de la puesta de sol continuarás hasta el campamento del
              desierto, donde disfrutarás de la cena y pasarás la noche.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Visita a las Gargantas del Todra",
              "Llegada a Merzouga",
              "Dunas de Erg Chebbi",
              "Paseo en camello",
              "Puesta de sol en el Sahara",
              "Cena en el campamento",
              "Noche en el desierto",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Amanecer en el Sahara – Regreso a Marrakech",
      
            description: `
              Si lo deseas, puedes levantarte temprano para ver el amanecer sobre
              las dunas de Erg Chebbi.
      
              Después del desayuno comenzaremos el viaje de regreso hacia Marrakech.
      
              Durante el recorrido atravesaremos nuevamente los paisajes del sur de
              Marruecos, con paradas para descansar, comer y tomar fotografías.
      
              La llegada a Marrakech está prevista para más tarde durante el día,
              marcando el final de tu tour privado de 3 días por el desierto.
            `,
      
            highlights: [
              "Amanecer opcional en Erg Chebbi",
              "Desayuno en el campamento",
              "Salida desde Merzouga",
              "Regreso por el sur de Marruecos",
              "Paradas para descansar y hacer fotografías",
              "Llegada a Marrakech",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado durante todo el recorrido",
          "Conductor de habla inglesa o francesa",
          "Dos noches de alojamiento",
          "Una noche en la zona del Valle del Dades",
          "Una noche en un campamento del Sahara",
          "Desayunos y cenas durante el tour",
          "Paseo en camello en Merzouga",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Actividades o servicios no indicados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Campamento en el desierto del Sahara",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/3-day-desert-tour-marrakech-merzouga.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El tour de 3 días desde Marrakech al desierto de Merzouga es privado?",
      
            answer:
              "Sí. El viaje se realiza en privado para ti y tu grupo, lo que permite mayor flexibilidad para las paradas y el ritmo del recorrido.",
          },
      
          {
            question:
              "¿Qué incluye el tour de 3 días desde Marrakech a Merzouga?",
      
            answer:
              "Incluye transporte privado, dos noches de alojamiento, desayunos y cenas, paseo en camello en Merzouga y una noche en un campamento del Sahara.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello en Merzouga?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi forma parte de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Dónde se duerme durante el tour?",
      
            answer:
              "La primera noche se pasa en la zona del Valle del Dades y la segunda en un campamento del desierto cerca de Merzouga.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou es una de las principales paradas del primer día antes de continuar hacia Ouarzazate y el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan durante el segundo día antes de continuar hacia Merzouga.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera?",
      
            answer:
              "Sí. Marrakech y Merzouga están separadas por una distancia considerable. El itinerario divide el recorrido en tres días e incluye paradas, visitas y descansos durante el trayecto.",
          },
      
          {
            question:
              "¿Se puede personalizar este tour por el desierto?",
      
            answer:
              "Sí. Al ser un tour privado, algunos detalles pueden adaptarse a tus fechas, preferencias de alojamiento e intereses.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede bajar después de la puesta de sol.",
          },
      
          {
            question:
              "¿Este tour es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar este recorrido. Si viajas con niños pequeños, indícanos sus edades para adaptar mejor los desplazamientos y la organización.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "3 días desde Marrakech al desierto de Merzouga | Moroccan Trip",
      
          description:
            "Tour privado de 3 días desde Marrakech a Merzouga con Alto Atlas, Ait Ben Haddou, Gargantas del Todra, paseo en camello y noche en el Sahara.",
      
          // Solo para nuestro mapa interno de SEO.
          // No convertirlo en meta keywords.
          keywords: [
            "3 dias desde marrakech al desierto de merzouga",
            "tour desierto merzouga desde marrakech",
            "tour 3 dias desierto marrakech",
            "desde marrakech excursion de 3 dias al desierto de merzouga",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 3,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },

      {
        id: "2",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "marrakech-fez-desierto-3-dias",
      
        title:
          "Tour de 3 días de Marrakech a Fez por el desierto",
      
        shortDescription:
          "Viaja de Marrakech a Fez en un tour privado de 3 días por el desierto, cruzando el Alto Atlas, Ait Ben Haddou, el Valle del Dades, Merzouga y las dunas de Erg Chebbi.",
      
        image:
          "/images/tours/3-day-marrakech-fes-desert-tour.webp",
      
        badge:
          "Marrakech a Fez",
      
        featured: true,
      
        category:
          "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "3 días / 2 noches",
      
        nights: 2,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Marrakech",
      
        arrival:
          "Fez",
      
        locations: [
          "Marrakech",
          "Alto Atlas",
          "Ait Ben Haddou",
          "Ouarzazate",
          "Valle del Dades",
          "Gargantas del Todra",
          "Merzouga",
          "Erg Chebbi",
          "Valle del Ziz",
          "Midelt",
          "Medio Atlas",
          "Ifrane",
          "Fez",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Midelt",
              position: [32.6806, -4.7369],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Cruza el Alto Atlas desde Marrakech y disfruta de sus paisajes de montaña",
          "Visita el histórico pueblo fortificado de Ait Ben Haddou",
          "Recorre Ouarzazate y los paisajes del sur de Marruecos",
          "Descubre el Valle del Dades",
          "Camina entre las paredes de las Gargantas del Todra",
          "Llega a Merzouga y las dunas doradas de Erg Chebbi",
          "Disfruta de un paseo en camello por el Sahara",
          "Contempla la puesta de sol sobre las dunas",
          "Pasa una noche en un campamento del desierto",
          "Viaja por el Valle del Ziz camino de Fez",
          "Cruza el Medio Atlas pasando por Midelt e Ifrane",
          "Combina Marrakech, el Sahara y Fez en un solo viaje privado",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre Marruecos en un tour de 3 días de Marrakech a Fez por el desierto,
          una ruta privada que combina montañas, valles, kasbahs y las dunas del Sahara.
      
          El viaje comienza en Marrakech y cruza el Alto Atlas antes de continuar hacia
          Ait Ben Haddou. Después de conocer este histórico pueblo fortificado, la ruta
          sigue por Ouarzazate y los paisajes del sur de Marruecos hasta llegar al
          Valle del Dades.
      
          El segundo día viajarás hacia las Gargantas del Todra y continuarás hasta
          Merzouga, situada junto a las dunas de Erg Chebbi. Allí disfrutarás de un
          paseo en camello por el desierto, podrás contemplar la puesta de sol y pasarás
          la noche en un campamento del Sahara.
      
          En el último día dejamos Merzouga para viajar hacia Fez. El paisaje cambia
          mientras atravesamos el Valle del Ziz, Midelt y el Medio Atlas antes de pasar
          por la zona de Ifrane.
      
          Este tour privado de Marrakech a Fez por el desierto es una buena opción para
          quienes quieren viajar entre las dos ciudades sin hacer un traslado directo.
          En tres días podrás conocer Merzouga, Erg Chebbi y algunos de los paisajes
          más representativos del interior de Marruecos.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description: `
              Tu tour de 3 días de Marrakech a Fez comienza por la mañana con la salida
              desde Marrakech.
      
              Cruzaremos el Alto Atlas por una carretera panorámica rodeada de montañas,
              pequeños pueblos y paisajes que cambian a medida que avanzamos hacia el
              sur de Marruecos.
      
              Continuaremos hasta Ait Ben Haddou, conocido por su arquitectura tradicional
              de tierra. Tendrás tiempo para descubrir el lugar antes de seguir hacia
              Ouarzazate.
      
              Por la tarde, la ruta continúa por los paisajes del sur de Marruecos hasta
              llegar al Valle del Dades.
      
              Cena y alojamiento en la zona del Dades.
            `,
      
            highlights: [
              "Salida desde Marrakech",
              "Cruce del Alto Atlas",
              "Paradas panorámicas durante el recorrido",
              "Visita a Ait Ben Haddou",
              "Paso por Ouarzazate",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Valle del Dades – Gargantas del Todra – Merzouga – Sahara",
      
            description: `
              Después del desayuno dejaremos el Valle del Dades y continuaremos hacia
              el sureste de Marruecos.
      
              Visitaremos las Gargantas del Todra, donde tendrás tiempo para caminar
              entre las altas paredes del cañón y disfrutar del paisaje.
      
              Después continuaremos hacia Merzouga. A medida que nos acercamos al Sahara,
              el paisaje se vuelve más abierto y comienzan a aparecer las dunas de
              Erg Chebbi.
      
              Por la tarde comenzarás el paseo en camello por las dunas. Disfrutarás del
              ambiente del desierto y, según las condiciones del día, de la puesta de sol
              sobre el Sahara.
      
              Después continuarás hasta el campamento, donde disfrutarás de la cena y
              pasarás la noche rodeado por las dunas.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Visita a las Gargantas del Todra",
              "Ruta hacia Merzouga",
              "Llegada a Erg Chebbi",
              "Paseo en camello por el Sahara",
              "Puesta de sol sobre las dunas",
              "Cena en el campamento",
              "Noche en el desierto",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Valle del Ziz – Midelt – Medio Atlas – Ifrane – Fez",
      
            description: `
              Si lo deseas, puedes comenzar el día temprano para contemplar el amanecer
              sobre las dunas de Erg Chebbi antes del desayuno.
      
              Después dejaremos Merzouga y comenzaremos el viaje hacia Fez.
      
              La ruta atraviesa el Valle del Ziz, conocido por sus palmerales y paisajes
              montañosos, antes de continuar hacia Midelt.
      
              Más adelante cruzaremos el Medio Atlas, donde el entorno cambia de nuevo
              y aparecen zonas más verdes y montañosas.
      
              Pasaremos por la zona de Ifrane antes de continuar hasta Fez.
      
              La llegada a Fez marca el final de este tour privado de 3 días desde
              Marrakech por el desierto de Merzouga.
            `,
      
            highlights: [
              "Amanecer opcional sobre Erg Chebbi",
              "Desayuno en el campamento",
              "Salida desde Merzouga",
              "Ruta por el Valle del Ziz",
              "Paso por Midelt",
              "Cruce del Medio Atlas",
              "Paso por la zona de Ifrane",
              "Llegada a Fez",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado desde Marrakech hasta Fez",
          "Conductor de habla inglesa o francesa",
          "Dos noches de alojamiento",
          "Una noche en la zona del Valle del Dades",
          "Una noche en un campamento del Sahara",
          "Desayunos y cenas durante el tour",
          "Paseo en camello en Merzouga",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Traslado final a Fez",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Actividades o servicios no indicados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Campamento en el desierto del Sahara",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/3-day-marrakech-fes-desert-tour.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El tour de 3 días de Marrakech a Fez por el desierto es privado?",
      
            answer:
              "Sí. El recorrido es privado para ti y tu grupo, con transporte privado y mayor flexibilidad para las paradas durante el viaje.",
          },
      
          {
            question:
              "¿Dónde comienza y termina el tour?",
      
            answer:
              "El tour comienza en Marrakech y termina en Fez, por lo que es una opción práctica para quienes quieren conocer el Sahara mientras viajan entre ambas ciudades.",
          },
      
          {
            question:
              "¿El tour de Marrakech a Fez pasa por Merzouga?",
      
            answer:
              "Sí. Merzouga es una de las principales paradas. El itinerario incluye las dunas de Erg Chebbi, un paseo en camello y una noche en un campamento del Sahara.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello en Merzouga?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido dentro de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou durante el recorrido?",
      
            answer:
              "Sí. Ait Ben Haddou se visita durante el primer día, antes de continuar hacia Ouarzazate y el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra forman parte del itinerario del segundo día antes de continuar hacia Merzouga.",
          },
      
          {
            question:
              "¿Por qué elegir una ruta de Marrakech a Fez por el desierto?",
      
            answer:
              "Esta ruta permite combinar el traslado entre Marrakech y Fez con una experiencia en el Sahara, evitando regresar a la ciudad de salida después de visitar Merzouga.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera durante los tres días?",
      
            answer:
              "Sí. La ruta cubre una distancia considerable, pero el recorrido se divide en tres días con visitas, paradas panorámicas y dos noches de alojamiento.",
          },
      
          {
            question:
              "¿Se puede personalizar el tour?",
      
            answer:
              "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que las temperaturas pueden bajar después de la puesta de sol.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Tour de 3 días de Marrakech a Fez por el desierto | Moroccan Trip",
      
          description:
            "Tour privado de 3 días de Marrakech a Fez por el desierto con Ait Ben Haddou, Dades, Todra, Merzouga, paseo en camello y noche en el Sahara.",
      
          keywords: [
            "tour de 3 días de Marrakech a Fez por el desierto",
            "marrakech a fez por el desierto",
            "tour marrakech a fez",
            "tour de marrakech a fez",
            "ruta de 3 días de Marrakech a Fez",
            "tour marrakech merzouga fez",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 3,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },

      {
        id: "3",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "marrakech-fez-desierto-4-dias",
      
        title:
          "Tour de 4 días de Marrakech a Fez por el desierto",
      
        shortDescription:
          "Viaja de Marrakech a Fez por el desierto en 4 días con más tiempo en Merzouga, visitando Ait Ben Haddou, el Valle del Dades, las Gargantas del Todra, Khamlia y las dunas de Erg Chebbi.",
      
        image:
          "/images/tours/4-day-marrakech-fes-desert-tour.webp",
      
        badge:
          "Más tiempo en el Sahara",
      
        featured: true,
      
        category:
          "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "4 días / 3 noches",
      
        nights: 3,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Marrakech",
      
        arrival:
          "Fez",
      
        locations: [
          "Marrakech",
          "Alto Atlas",
          "Ait Ben Haddou",
          "Ouarzazate",
          "Valle del Dades",
          "Gargantas del Todra",
          "Merzouga",
          "Erg Chebbi",
          "Khamlia",
          "Desierto del Sahara",
          "Valle del Ziz",
          "Midelt",
          "Medio Atlas",
          "Ifrane",
          "Fez",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Khamlia",
              position: [31.0186, -4.0058],
            },
            {
              name: "Midelt",
              position: [32.6806, -4.7369],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Cruza el Alto Atlas desde Marrakech por una ruta panorámica",
          "Visita Ait Ben Haddou y descubre su arquitectura tradicional de tierra",
          "Recorre Ouarzazate y los paisajes del sur de Marruecos",
          "Pasa la primera noche en el Valle del Dades",
          "Camina entre las paredes de las Gargantas del Todra",
          "Llega a Merzouga y contempla las dunas de Erg Chebbi",
          "Disfruta de más tiempo en el desierto que en la ruta de 3 días",
          "Visita Khamlia y descubre parte de la cultura local del Sahara",
          "Recorre las dunas de Erg Chebbi en camello",
          "Contempla la puesta de sol sobre el desierto",
          "Pasa una noche en un campamento del Sahara",
          "Viaja por el Valle del Ziz en dirección a Fez",
          "Cruza el Medio Atlas pasando por Midelt e Ifrane",
          "Disfruta de una ruta de 4 días de Marrakech a Fez con un ritmo más tranquilo",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre el sur de Marruecos con más calma en este tour de 4 días de
          Marrakech a Fez por el desierto.
      
          La ruta comienza en Marrakech y cruza el Alto Atlas antes de llegar a
          Ait Ben Haddou. Después continuaremos por Ouarzazate y los paisajes del
          sur de Marruecos hasta el Valle del Dades, donde pasarás la primera noche.
      
          El segundo día viajarás hacia las Gargantas del Todra y continuarás hasta
          Merzouga. A diferencia del itinerario de tres días, esta ruta no obliga a
          hacer el paseo en camello nada más llegar. Tendrás tiempo para descansar,
          disfrutar de tus primeras vistas de Erg Chebbi y pasar la noche en la zona
          de Merzouga.
      
          El tercer día está dedicado al desierto. Podrás conocer mejor los alrededores
          de Erg Chebbi, visitar Khamlia y descubrir otra parte de la vida local antes
          de comenzar el paseo en camello por la tarde. Después de contemplar la puesta
          de sol, continuarás hasta el campamento para cenar y pasar la noche en el Sahara.
      
          En el último día saldremos de Merzouga hacia Fez atravesando el Valle del Ziz,
          Midelt y el Medio Atlas. El paisaje cambia de nuevo, pasando del desierto a
          zonas de montaña y bosques antes de llegar a la región de Ifrane y continuar
          hacia Fez.
      
          Este viaje de Marrakech a Fez por Merzouga es una buena alternativa para
          quienes quieren una experiencia más completa en el Sahara. El día adicional
          permite conocer Merzouga con más tranquilidad y convierte la ruta en un viaje
          menos apresurado que la opción de tres días.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description: `
              Tu ruta de 4 días de Marrakech a Fez comienza por la mañana con la salida
              desde Marrakech.
      
              Cruzaremos el Alto Atlas por carreteras de montaña rodeadas de pueblos
              tradicionales y amplias vistas panorámicas. Se pueden realizar paradas
              durante el trayecto para descansar y hacer fotografías.
      
              Continuaremos hasta Ait Ben Haddou, uno de los ksars más conocidos del
              sur de Marruecos. Tendrás tiempo para conocer el lugar antes de seguir
              hacia Ouarzazate.
      
              Desde Ouarzazate, el viaje continúa por valles y paisajes áridos en
              dirección al Valle del Dades.
      
              Llegaremos a la zona del Dades por la tarde. Allí disfrutarás de la cena
              y pasarás la primera noche del tour.
            `,
      
            highlights: [
              "Salida desde Marrakech",
              "Cruce del Alto Atlas",
              "Paradas panorámicas en la montaña",
              "Visita a Ait Ben Haddou",
              "Paso por Ouarzazate",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Valle del Dades – Gargantas del Todra – Merzouga",
      
            description: `
              Después del desayuno dejaremos el Valle del Dades y continuaremos hacia
              el sureste de Marruecos.
      
              La principal parada del día será en las Gargantas del Todra. Tendrás
              tiempo para caminar entre las altas paredes del cañón y disfrutar del
              entorno natural.
      
              Después continuaremos por pequeñas poblaciones y paisajes cada vez más
              abiertos mientras nos acercamos al Sahara.
      
              Por la tarde llegaremos a Merzouga, situada junto a las dunas de
              Erg Chebbi.
      
              Como este tour de Marrakech a Fez dura cuatro días, no es necesario
              empezar inmediatamente la experiencia en camello. Tendrás tiempo para
              relajarte y disfrutar de las primeras vistas del desierto.
      
              Pasarás la segunda noche en un hotel o riad en la zona de Merzouga.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Ruta por el sureste de Marruecos",
              "Visita a las Gargantas del Todra",
              "Continuación hacia el Sahara",
              "Llegada a Merzouga",
              "Primeras vistas de Erg Chebbi",
              "Tiempo libre en la zona del desierto",
              "Noche en Merzouga",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Khamlia – Erg Chebbi – Paseo en camello – Campamento",
      
            description: `
              El tercer día está dedicado a conocer Merzouga y el desierto con un ritmo
              más tranquilo.
      
              Después del desayuno exploraremos los alrededores de las dunas de
              Erg Chebbi y diferentes paisajes del Sahara.
      
              También visitaremos Khamlia, un pequeño pueblo cerca de Merzouga conocido
              por su cultura local y sus tradiciones musicales.
      
              Dependiendo del ritmo del día, habrá tiempo para realizar otras paradas
              en los alrededores y disfrutar del paisaje antes de regresar a Merzouga.
      
              Por la tarde comenzará el paseo en camello. Cruzarás las dunas doradas
              mientras el sol desciende sobre el Sahara.
      
              Después de la puesta de sol continuarás hacia el campamento del desierto,
              donde disfrutarás de la cena y pasarás la tercera noche rodeado por las dunas.
      
              Este día completo en Merzouga es la principal diferencia entre este tour
              de 4 días y la ruta más rápida de tres días.
            `,
      
            highlights: [
              "Día completo en la zona de Merzouga",
              "Exploración de los alrededores de Erg Chebbi",
              "Visita a Khamlia",
              "Contacto con la cultura local del desierto",
              "Tiempo libre en Merzouga",
              "Paseo en camello por el Sahara",
              "Puesta de sol sobre Erg Chebbi",
              "Cena en el campamento",
              "Noche en el desierto",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Merzouga – Valle del Ziz – Midelt – Medio Atlas – Ifrane – Fez",
      
            description: `
              Si lo deseas, puedes levantarte temprano para ver el amanecer sobre las
              dunas antes del desayuno.
      
              Después dejaremos Merzouga y comenzaremos el viaje hacia Fez.
      
              La ruta atraviesa el Valle del Ziz, donde los palmerales contrastan con
              las montañas y los paisajes secos del sureste de Marruecos.
      
              Continuaremos hacia Midelt y después cruzaremos el Medio Atlas. A medida
              que avanzamos hacia el norte, el paisaje cambia y aparecen bosques,
              carreteras de montaña y temperaturas más frescas.
      
              Según el horario y las condiciones de la carretera, podremos realizar
              algunas paradas antes de pasar por la zona de Ifrane.
      
              Llegaremos a Fez más tarde durante el día, donde termina tu tour privado
              de 4 días de Marrakech a Fez por el desierto.
            `,
      
            highlights: [
              "Amanecer opcional sobre las dunas",
              "Desayuno antes de salir de Merzouga",
              "Ruta por el Valle del Ziz",
              "Paso por Midelt",
              "Cruce del Medio Atlas",
              "Paso por la zona de Ifrane",
              "Llegada a Fez",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado desde Marrakech hasta Fez",
          "Conductor de habla inglesa o francesa",
          "Tres noches de alojamiento",
          "Una noche en la zona del Valle del Dades",
          "Una noche en un hotel o riad en Merzouga",
          "Una noche en un campamento del Sahara",
          "Desayunos y cenas durante el tour",
          "Paseo en camello en Merzouga",
          "Tiempo para explorar la zona de Merzouga y Erg Chebbi",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Traslado final a Fez",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales no indicadas en el itinerario",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no indicados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Hotel o riad",
          },
          {
            night: 3,
            location: "Merzouga",
            type: "Campamento en el desierto del Sahara",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/4-day-marrakech-fes-desert-tour.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El tour de 4 días de Marrakech a Fez por el desierto es privado?",
      
            answer:
              "Sí. El viaje es privado para ti y tu grupo, con transporte privado y mayor flexibilidad para las paradas y el ritmo del recorrido.",
          },
      
          {
            question:
              "¿Cuál es la diferencia entre el tour de 3 días y el de 4 días de Marrakech a Fez?",
      
            answer:
              "La ruta de 4 días incluye más tiempo en Merzouga. Pasas una noche en la zona del desierto antes del día completo dedicado a Erg Chebbi, Khamlia, el paseo en camello y el campamento del Sahara.",
          },
      
          {
            question:
              "¿Cuántas noches incluye el tour de 4 días?",
      
            answer:
              "Incluye tres noches: una en el Valle del Dades, una en un hotel o riad de Merzouga y una en un campamento del desierto.",
          },
      
          {
            question:
              "¿Tenemos un día completo en Merzouga?",
      
            answer:
              "Sí. El tercer día está dedicado a conocer mejor la zona de Merzouga, visitar Khamlia y disfrutar del desierto antes del paseo en camello.",
          },
      
          {
            question:
              "¿Visitamos Khamlia durante el tour?",
      
            answer:
              "Sí. Khamlia forma parte del día dedicado a explorar los alrededores de Merzouga y conocer mejor la cultura local del desierto.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello en Erg Chebbi?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido dentro de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Dormimos en el desierto del Sahara?",
      
            answer:
              "Sí. La tercera noche se pasa en un campamento del desierto cerca de las dunas de Erg Chebbi.",
          },
      
          {
            question:
              "¿El itinerario visita Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou es una de las principales visitas del primer día antes de continuar hacia Ouarzazate y el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan el segundo día antes de continuar hacia Merzouga.",
          },
      
          {
            question:
              "¿Dónde empieza y dónde termina el tour?",
      
            answer:
              "El recorrido comienza en Marrakech y termina en Fez, por lo que puedes continuar tu viaje por Marruecos sin regresar a Marrakech.",
          },
      
          {
            question:
              "¿Se puede personalizar este tour de Marrakech a Fez?",
      
            answer:
              "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Es menos apresurado que el tour de 3 días?",
      
            answer:
              "Sí. El día adicional permite pasar más tiempo en Merzouga y disfrutar del Sahara con mayor tranquilidad antes de continuar hacia Fez.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera durante el recorrido?",
      
            answer:
              "Sí. Marrakech, Merzouga y Fez están separadas por largas distancias, pero el itinerario de cuatro días divide mejor el viaje y combina los desplazamientos con visitas y noches intermedias.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede bajar después de la puesta de sol.",
          },
      
          {
            question:
              "¿Este tour es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar este tour privado. Si viajas con niños pequeños, indícanos sus edades para organizar mejor los desplazamientos y el alojamiento.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Tour de 4 días de Marrakech a Fez por el desierto | Moroccan Trip",
      
          description:
            "Tour privado de 4 días de Marrakech a Fez por el desierto con Dades, Todra, Merzouga, Khamlia, paseo en camello y noche en el Sahara.",
      
          keywords: [
            "tour de 4 días de Marrakech a Fez por el desierto",
            "marrakech a fez por el desierto 4 dias",
            "tour marrakech fez 4 dias",
            "ruta de 4 dias de marrakech a fez",
            "marrakech merzouga fez 4 dias",
            "viaje de marrakech a fez por merzouga",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 4,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },

      {
        id: "4",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "excursion-desierto-desde-marrakech-4-dias",
      
        title:
          "Excursión al desierto desde Marrakech de 4 días a Merzouga",
      
        shortDescription:
          "Disfruta de una excursión privada de 4 días desde Marrakech al desierto de Merzouga, con Ait Ben Haddou, el Valle del Dades, las Gargantas del Todra, Erg Chebbi y regreso por el Valle del Draa.",
      
        image:
          "/images/tours/4-day-sahara-desert-tour-from-marrakech.webp",
      
        badge:
          "Aventura en el Sahara",
      
        featured: true,
      
        category:
          "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "4 días / 3 noches",
      
        nights: 3,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Marrakech",
      
        arrival:
          "Marrakech",
      
        locations: [
          "Marrakech",
          "Alto Atlas",
          "Ait Ben Haddou",
          "Ouarzazate",
          "Valle del Dades",
          "Gargantas del Todra",
          "Merzouga",
          "Erg Chebbi",
          "Desierto del Sahara",
          "Rissani",
          "Nkob",
          "Valle del Draa",
          "Ouarzazate",
          "Marrakech",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Rissani",
              position: [31.2823, -4.2651],
            },
            {
              name: "Nkob",
              position: [30.8704, -5.8643],
            },
            {
              name: "Valle del Draa",
              position: [30.6936, -6.4463],
            },
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Cruza el Alto Atlas y disfruta de sus paisajes de montaña",
          "Visita el histórico ksar de Ait Ben Haddou",
          "Recorre Ouarzazate y los paisajes del sur de Marruecos",
          "Pasa una noche en el Valle del Dades",
          "Camina entre las paredes de las Gargantas del Todra",
          "Llega a Merzouga y descubre las dunas de Erg Chebbi",
          "Disfruta de un paseo en camello por el Sahara",
          "Contempla la puesta de sol sobre las dunas",
          "Pasa una noche en un campamento del desierto",
          "Viaja por Rissani y Nkob durante el regreso",
          "Descubre los palmerales y pueblos del Valle del Draa",
          "Pasa la última noche en Ouarzazate",
          "Regresa a Marrakech cruzando de nuevo el Alto Atlas",
          "Disfruta de un tour privado con paradas flexibles",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Vive una excursión al desierto desde Marrakech de 4 días diseñada para
          conocer Merzouga, el Sahara y diferentes paisajes del sur de Marruecos sin
          hacer el largo regreso desde el desierto en una sola jornada.
      
          El viaje comienza en Marrakech y cruza el Alto Atlas. Durante el primer día
          visitarás Ait Ben Haddou, pasarás por Ouarzazate y continuarás hasta el
          Valle del Dades, donde pasarás la primera noche.
      
          Al día siguiente, la ruta continúa hacia las Gargantas del Todra y después
          hacia Merzouga. A medida que nos acercamos al Sahara aparecen las dunas de
          Erg Chebbi, uno de los paisajes más conocidos del desierto marroquí.
      
          Por la tarde comenzarás el paseo en camello por las dunas. Podrás disfrutar
          de la puesta de sol antes de llegar al campamento, donde cenarás y pasarás
          la noche en el desierto.
      
          Una de las principales ventajas de esta ruta Marrakech-Merzouga de 4 días
          es el regreso. En lugar de conducir directamente desde Merzouga hasta
          Marrakech, el tercer día sigue una ruta diferente por Rissani, Nkob y el
          Valle del Draa antes de llegar a Ouarzazate.
      
          El Valle del Draa permite descubrir otra parte del sur de Marruecos, con
          largos palmerales, pequeños pueblos y paisajes que contrastan con las dunas
          de Merzouga.
      
          Después de pasar la tercera noche en Ouarzazate, el último día regresaremos
          a Marrakech cruzando nuevamente el Alto Atlas.
      
          Este viaje al desierto desde Marrakech es una buena opción para quienes
          quieren conocer Merzouga y Erg Chebbi, pero prefieren una vuelta más
          equilibrada y la oportunidad de descubrir el Valle del Draa.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description: `
              Tu excursión privada al desierto comienza por la mañana con la salida
              desde Marrakech.
      
              Cruzaremos el Alto Atlas por una carretera de montaña con vistas
              panorámicas, pequeños pueblos y paisajes que cambian a medida que
              avanzamos hacia el sur.
      
              Continuaremos hasta Ait Ben Haddou, uno de los ksars más conocidos de
              Marruecos. Tendrás tiempo para descubrir su arquitectura tradicional
              antes de seguir hacia Ouarzazate.
      
              Desde Ouarzazate, la ruta continúa por los paisajes del sur de Marruecos
              hasta el Valle del Dades.
      
              Llegaremos a la zona del Dades por la tarde. Allí disfrutarás de la cena
              y pasarás la primera noche del recorrido.
            `,
      
            highlights: [
              "Salida desde Marrakech",
              "Cruce del Alto Atlas",
              "Paradas panorámicas durante el camino",
              "Visita a Ait Ben Haddou",
              "Paso por Ouarzazate",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Valle del Dades – Gargantas del Todra – Merzouga – Sahara",
      
            description: `
              Después del desayuno dejaremos el Valle del Dades y continuaremos hacia
              el sureste de Marruecos.
      
              Visitaremos las Gargantas del Todra, donde podrás caminar entre las altas
              paredes del cañón y disfrutar del paisaje natural.
      
              Después seguiremos hacia Merzouga. El entorno se vuelve cada vez más
              desértico hasta que aparecen las dunas doradas de Erg Chebbi.
      
              Por la tarde comenzarás el paseo en camello por el Sahara. Cruzarás las
              dunas mientras cae el sol y disfrutarás de uno de los momentos más
              especiales del viaje.
      
              Después continuarás hasta el campamento del desierto para cenar y pasar
              la segunda noche rodeado por las dunas.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Visita a las Gargantas del Todra",
              "Ruta hacia Merzouga",
              "Llegada a las dunas de Erg Chebbi",
              "Paseo en camello por el Sahara",
              "Puesta de sol en el desierto",
              "Cena en el campamento",
              "Noche en el Sahara",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Rissani – Nkob – Valle del Draa – Ouarzazate",
      
            description: `
              Si lo deseas, puedes levantarte temprano para contemplar el amanecer
              sobre las dunas de Erg Chebbi antes del desayuno.
      
              Después dejaremos Merzouga y comenzaremos una ruta diferente de regreso
              hacia el oeste.
      
              Pasaremos por la zona de Rissani y continuaremos hacia Nkob, atravesando
              llanuras desérticas, montañas rocosas y pequeñas poblaciones del sur de
              Marruecos.
      
              Más adelante llegaremos al Valle del Draa, conocido por sus extensos
              palmerales y pueblos tradicionales.
      
              Esta etapa es una de las principales diferencias entre la excursión de
              4 días y el tour de 3 días desde Marrakech. En lugar de regresar
              directamente desde Merzouga, podrás conocer una nueva ruta y dividir el
              viaje en etapas más cómodas.
      
              Por la tarde continuaremos hasta Ouarzazate, donde disfrutarás de la cena
              y pasarás la tercera noche.
            `,
      
            highlights: [
              "Amanecer opcional sobre Erg Chebbi",
              "Desayuno antes de salir de Merzouga",
              "Paso por Rissani",
              "Ruta por la zona de Nkob",
              "Descubrimiento del Valle del Draa",
              "Palmerales y pueblos del sur de Marruecos",
              "Llegada a Ouarzazate",
              "Cena y alojamiento en Ouarzazate",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Ouarzazate – Alto Atlas – Marrakech",
      
            description: `
              Después del desayuno en Ouarzazate comenzaremos la última etapa de esta
              excursión al desierto desde Marrakech.
      
              Dejaremos atrás los paisajes del sur y volveremos a cruzar el Alto Atlas
              en dirección a Marrakech.
      
              Durante el camino habrá tiempo para realizar paradas, descansar, comer y
              hacer fotografías según el horario del día.
      
              La carretera de montaña ofrece nuevas vistas de los valles y pueblos que
              separan Ouarzazate de Marrakech.
      
              Llegaremos a Marrakech más tarde durante el día, donde termina este tour
              privado de 4 días por el desierto de Marruecos.
            `,
      
            highlights: [
              "Desayuno en Ouarzazate",
              "Salida hacia Marrakech",
              "Cruce del Alto Atlas",
              "Vistas panorámicas durante el recorrido",
              "Paradas flexibles para descansar y hacer fotografías",
              "Llegada a Marrakech",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado durante los cuatro días",
          "Conductor de habla inglesa o francesa",
          "Tres noches de alojamiento",
          "Una noche en la zona del Valle del Dades",
          "Una noche en un campamento del Sahara cerca de Merzouga",
          "Una noche en Ouarzazate",
          "Desayunos y cenas durante el tour",
          "Paseo en camello por las dunas de Erg Chebbi",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Recogida y traslado final en Marrakech",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales no indicadas en el itinerario",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no mencionados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Campamento del desierto del Sahara",
          },
          {
            night: 3,
            location: "Ouarzazate",
            type: "Hotel o riad",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/4-day-sahara-desert-tour-from-marrakech.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿Qué incluye la excursión al desierto desde Marrakech de 4 días?",
      
            answer:
              "Incluye transporte privado, tres noches de alojamiento, desayunos y cenas, paseo en camello en Merzouga, una noche en un campamento del Sahara y las principales paradas indicadas en el itinerario.",
          },
      
          {
            question:
              "¿Esta excursión al desierto desde Marrakech es privada?",
      
            answer:
              "Sí. El viaje es privado para ti y tu grupo, lo que permite mayor flexibilidad para las paradas, los descansos y el ritmo del recorrido.",
          },
      
          {
            question:
              "¿El tour visita Merzouga y las dunas de Erg Chebbi?",
      
            answer:
              "Sí. Merzouga y Erg Chebbi son una parte central del viaje. El segundo día llegas al Sahara, realizas un paseo en camello y pasas la noche en un campamento del desierto.",
          },
      
          {
            question:
              "¿Dormimos una noche en el desierto del Sahara?",
      
            answer:
              "Sí. La segunda noche se pasa en un campamento del Sahara cerca de las dunas de Erg Chebbi.",
          },
      
          {
            question:
              "¿Cuál es la diferencia entre el tour de 3 días y el de 4 días desde Marrakech?",
      
            answer:
              "El tour de 4 días ofrece un regreso más equilibrado desde Merzouga. El tercer día pasa por Rissani, Nkob y el Valle del Draa, con una noche en Ouarzazate antes de regresar a Marrakech. En la ruta de 3 días se vuelve directamente desde Merzouga el último día.",
          },
      
          {
            question:
              "¿La excursión incluye el Valle del Draa?",
      
            answer:
              "Sí. El Valle del Draa se visita durante el tercer día mientras viajas desde Merzouga hacia Ouarzazate por una ruta diferente a la de ida.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou es una de las principales paradas del primer día antes de continuar hacia Ouarzazate y el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan el segundo día antes de continuar hacia Merzouga y el desierto del Sahara.",
          },
      
          {
            question:
              "¿Se puede hacer esta ruta Marrakech-Merzouga con niños?",
      
            answer:
              "Sí. Las familias pueden solicitar este tour privado. Si viajas con niños pequeños, indícanos sus edades para organizar mejor los tiempos de conducción y las paradas.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera durante el tour?",
      
            answer:
              "La ruta cubre una parte amplia del sur de Marruecos, por lo que algunos días incluyen varias horas de conducción. El itinerario de cuatro días divide mejor el regreso desde el Sahara con una noche adicional en Ouarzazate.",
          },
      
          {
            question:
              "¿Se puede personalizar este viaje al desierto desde Marrakech?",
      
            answer:
              "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede bajar después de la puesta de sol.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Excursión al desierto desde Marrakech 4 días | Moroccan Trip",
      
          description:
            "Excursión privada de 4 días desde Marrakech al desierto de Merzouga con Ait Ben Haddou, Dades, Todra, paseo en camello, Valle del Draa y Sahara.",
      
          // Mapa interno de keywords.
          // No convertir en meta keywords.
          keywords: [
            "excursión al desierto desde marrakech",
            "excursiones al desierto desde marrakech",
            "excursion desierto merzouga",
            "merzouga desde marrakech",
            "marrakech merzouga",
            "excursiones al desierto de marruecos",
            "tour desierto marrakech 4 días",
            "viaje al desierto desde marrakech",
            "tour sahara desde marrakech",
            "desierto de marruecos desde marrakech",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 4,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },
      {
        id: "5",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "marrakech-fez-desierto-5-dias",
      
        title:
          "Tour de 5 días de Marrakech a Fez por el desierto",
      
        shortDescription:
          "Viaja de Marrakech a Fez en un tour privado de 5 días por el desierto, con más tiempo en Merzouga, Khamlia, Erg Chebbi, una noche en el Sahara y una parada en Midelt.",
      
        image:
          "/images/tours/5-day-marrakech-fes-desert-tour.webp",
      
        badge:
          "Viaje tranquilo",
      
        featured: true,
      
        category:
          "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "5 días / 4 noches",
      
        nights: 4,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Marrakech",
      
        arrival:
          "Fez",
      
        locations: [
          "Marrakech",
          "Alto Atlas",
          "Ait Ben Haddou",
          "Ouarzazate",
          "Valle del Dades",
          "Gargantas del Todra",
          "Merzouga",
          "Erg Chebbi",
          "Khamlia",
          "Desierto del Sahara",
          "Valle del Ziz",
          "Midelt",
          "Medio Atlas",
          "Ifrane",
          "Fez",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Khamlia",
              position: [31.0186, -4.0058],
            },
            {
              name: "Midelt",
              position: [32.6806, -4.7369],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Cruza el Alto Atlas desde Marrakech y disfruta de paisajes de montaña",
          "Visita Ait Ben Haddou y conoce su arquitectura tradicional",
          "Viaja por Ouarzazate y el sur de Marruecos",
          "Pasa la primera noche en el Valle del Dades",
          "Camina por las Gargantas del Todra",
          "Llega a Merzouga y descubre las dunas de Erg Chebbi",
          "Disfruta de un día completo en la zona del Sahara",
          "Visita Khamlia y descubre parte de la cultura local",
          "Recorre las dunas de Erg Chebbi en camello",
          "Contempla la puesta de sol sobre el Sahara",
          "Pasa una noche en un campamento del desierto",
          "Viaja por el Valle del Ziz antes de llegar a Midelt",
          "Pasa una noche en Midelt para dividir mejor el trayecto hacia Fez",
          "Cruza el Medio Atlas y pasa por la zona de Ifrane",
          "Disfruta de una ruta más tranquila de Marrakech a Fez",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre Marruecos con calma en este tour de 5 días de Marrakech a Fez por
          el desierto, una ruta privada que combina montañas, valles, pueblos
          tradicionales y una experiencia completa en el Sahara.
      
          El viaje comienza en Marrakech y cruza el Alto Atlas antes de llegar a
          Ait Ben Haddou. Después continuaremos por Ouarzazate hasta el Valle del
          Dades, donde pasarás la primera noche.
      
          El segundo día viajarás hacia las Gargantas del Todra y continuarás hasta
          Merzouga. Al llegar a las dunas de Erg Chebbi tendrás tiempo para relajarte
          y disfrutar de tus primeras vistas del desierto sin necesidad de comenzar
          inmediatamente el paseo en camello.
      
          El tercer día está dedicado a Merzouga y sus alrededores. Visitaremos
          Khamlia, conocerás diferentes paisajes del Sahara y tendrás tiempo para
          disfrutar de la zona antes de comenzar el paseo en camello por la tarde.
          Después de la puesta de sol, pasarás la noche en un campamento del desierto.
      
          El cuarto día saldremos de Merzouga y viajaremos hacia el norte por el
          Valle del Ziz. En lugar de continuar directamente hasta Fez, pasaremos la
          noche en Midelt. Esta parada divide el trayecto y hace que la última parte
          del viaje sea más cómoda.
      
          En el quinto día cruzaremos el Medio Atlas, pasaremos por la zona de Ifrane
          y continuaremos hasta Fez.
      
          Esta ruta de 5 días de Marrakech a Fez es adecuada para viajeros que buscan
          más tiempo en Merzouga y prefieren dividir el largo trayecto entre el Sahara
          y Fez en etapas más relajadas.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description: `
              Tu viaje comienza por la mañana con la salida desde Marrakech.
      
              Cruzaremos el Alto Atlas por una carretera de montaña rodeada de pequeños
              pueblos y amplias vistas panorámicas. Se pueden realizar paradas durante
              el recorrido para descansar y hacer fotografías.
      
              Continuaremos hasta Ait Ben Haddou, uno de los ksars más conocidos del
              sur de Marruecos. Tendrás tiempo para recorrer la zona y conocer su
              arquitectura tradicional de tierra.
      
              Después seguiremos hacia Ouarzazate y continuaremos por los paisajes del
              sur de Marruecos hasta el Valle del Dades.
      
              Llegaremos por la tarde, donde disfrutarás de la cena y pasarás la primera
              noche del tour.
            `,
      
            highlights: [
              "Salida desde Marrakech",
              "Cruce del Alto Atlas",
              "Paradas panorámicas durante la ruta",
              "Visita a Ait Ben Haddou",
              "Paso por Ouarzazate",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Valle del Dades – Gargantas del Todra – Merzouga",
      
            description: `
              Después del desayuno dejaremos el Valle del Dades y continuaremos hacia
              el sureste de Marruecos.
      
              Haremos una parada en las Gargantas del Todra, donde podrás caminar entre
              las altas paredes del cañón y disfrutar del paisaje.
      
              Después seguiremos hacia Merzouga. El entorno cambia poco a poco desde
              valles rocosos hasta paisajes más abiertos y desérticos.
      
              Por la tarde llegaremos a Merzouga, situada junto a las dunas de
              Erg Chebbi.
      
              Como este viaje de Marrakech a Fez dura cinco días, no hay necesidad de
              comenzar el paseo en camello nada más llegar. Tendrás tiempo para
              descansar, disfrutar del paisaje y conocer el ambiente del desierto.
      
              Pasarás la segunda noche en un hotel o riad en la zona de Merzouga.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Ruta por el sureste de Marruecos",
              "Visita a las Gargantas del Todra",
              "Continuación hacia Merzouga",
              "Primeras vistas de Erg Chebbi",
              "Tiempo libre cerca de las dunas",
              "Alojamiento en Merzouga",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Khamlia – Erg Chebbi – Paseo en camello – Campamento",
      
            description: `
              El tercer día está dedicado a disfrutar del desierto sin prisas.
      
              Después del desayuno exploraremos diferentes paisajes alrededor de
              Merzouga y las dunas de Erg Chebbi.
      
              Visitaremos Khamlia, un pueblo cercano conocido por su cultura local y
              sus tradiciones musicales.
      
              También habrá tiempo para realizar paradas alrededor del desierto y
              conocer mejor esta parte del sureste de Marruecos.
      
              Por la tarde comenzarás el paseo en camello por las dunas. A medida que
              baja el sol, el paisaje cambia de color y el Sahara se vuelve más tranquilo.
      
              Después de la puesta de sol continuarás hasta el campamento, donde
              disfrutarás de la cena y pasarás la tercera noche bajo el cielo del desierto.
            `,
      
            highlights: [
              "Día completo en la zona de Merzouga",
              "Exploración de Erg Chebbi",
              "Visita a Khamlia",
              "Descubrimiento de la cultura local del desierto",
              "Tiempo libre en el Sahara",
              "Paseo en camello",
              "Puesta de sol sobre las dunas",
              "Cena en el campamento",
              "Noche en el Sahara",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Merzouga – Valle del Ziz – Midelt",
      
            description: `
              Si lo deseas, puedes levantarte temprano para contemplar el amanecer
              sobre las dunas de Erg Chebbi antes del desayuno.
      
              Después dejaremos Merzouga y comenzaremos el viaje hacia el norte.
      
              La ruta atraviesa el Valle del Ziz, donde los palmerales y las montañas
              crean un paisaje muy diferente al de las dunas del Sahara.
      
              Continuaremos por carreteras rodeadas de paisajes cambiantes hasta llegar
              a Midelt.
      
              Pasar la noche en Midelt es una de las principales diferencias de este
              tour de 5 días. En lugar de realizar todo el trayecto desde Merzouga hasta
              Fez en una sola jornada, el viaje se divide en dos etapas más cómodas.
      
              Llegaremos a Midelt más tarde durante el día y pasarás allí la cuarta noche.
            `,
      
            highlights: [
              "Amanecer opcional sobre Erg Chebbi",
              "Desayuno antes de salir del Sahara",
              "Salida desde Merzouga",
              "Ruta por el Valle del Ziz",
              "Palmerales y paisajes de montaña",
              "Continuación hacia Midelt",
              "Trayecto más relajado",
              "Noche en Midelt",
            ],
          },
      
          {
            day: 5,
      
            title:
              "Midelt – Medio Atlas – Ifrane – Fez",
      
            description: `
              Después del desayuno en Midelt comenzaremos la última etapa del viaje.
      
              Cruzaremos el Medio Atlas, donde el paisaje cambia de nuevo y aparecen
              zonas montañosas, bosques y un entorno más verde.
      
              Continuaremos por la zona de Ifrane en dirección a Fez.
      
              Según el horario y las condiciones de la carretera, podremos realizar
              algunas paradas durante el recorrido.
      
              Gracias a la noche anterior en Midelt, esta última jornada es más corta
              que en los itinerarios de tres o cuatro días.
      
              Llegaremos a Fez más tarde durante el día, donde termina este tour privado
              de 5 días de Marrakech a Fez por el desierto.
            `,
      
            highlights: [
              "Desayuno en Midelt",
              "Cruce del Medio Atlas",
              "Paisajes de montaña y bosques",
              "Paso por la zona de Ifrane",
              "Paradas flexibles durante el recorrido",
              "Llegada a Fez",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado desde Marrakech hasta Fez",
          "Conductor de habla inglesa o francesa",
          "Cuatro noches de alojamiento",
          "Una noche en la zona del Valle del Dades",
          "Una noche en un hotel o riad en Merzouga",
          "Una noche en un campamento del Sahara",
          "Una noche en Midelt",
          "Desayunos y cenas durante el tour",
          "Paseo en camello por las dunas de Erg Chebbi",
          "Tiempo para explorar Merzouga y la zona del Sahara",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Traslado final a Fez",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales no indicadas en el itinerario",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no indicados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Hotel o riad",
          },
          {
            night: 3,
            location: "Merzouga",
            type: "Campamento del desierto del Sahara",
          },
          {
            night: 4,
            location: "Midelt",
            type: "Hotel o riad",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/5-day-marrakech-fes-desert-tour.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El tour de 5 días de Marrakech a Fez por el desierto es privado?",
      
            answer:
              "Sí. El recorrido es privado para ti y tu grupo, con transporte privado y flexibilidad para realizar paradas durante el viaje.",
          },
      
          {
            question:
              "¿Cuál es la diferencia entre los tours de 3, 4 y 5 días de Marrakech a Fez?",
      
            answer:
              "La ruta de 5 días ofrece el ritmo más tranquilo. Incluye un día completo en Merzouga y una noche adicional en Midelt, lo que divide el largo trayecto entre el Sahara y Fez en dos etapas.",
          },
      
          {
            question:
              "¿Cuántas noches incluye el tour de 5 días?",
      
            answer:
              "Incluye cuatro noches: una en el Valle del Dades, una en Merzouga, una en un campamento del Sahara y una en Midelt.",
          },
      
          {
            question:
              "¿Tenemos un día completo en Merzouga?",
      
            answer:
              "Sí. El tercer día está dedicado a explorar Merzouga, visitar Khamlia y disfrutar de Erg Chebbi antes del paseo en camello y la noche en el campamento.",
          },
      
          {
            question:
              "¿Visitamos Khamlia?",
      
            answer:
              "Sí. Khamlia forma parte del día dedicado al desierto y permite conocer otra parte de la cultura local de la zona de Merzouga.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido como parte de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Pasamos una noche en el Sahara?",
      
            answer:
              "Sí. La tercera noche se pasa en un campamento del desierto cerca de Merzouga y las dunas de Erg Chebbi.",
          },
      
          {
            question:
              "¿Por qué el tour incluye una noche en Midelt?",
      
            answer:
              "La noche en Midelt divide el trayecto desde Merzouga hasta Fez. Esto reduce las horas de conducción del último día y permite disfrutar del recorrido con un ritmo más tranquilo.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou se visita durante el primer día antes de continuar hacia Ouarzazate y el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan el segundo día antes de continuar hacia Merzouga.",
          },
      
          {
            question:
              "¿Dónde empieza y termina el viaje?",
      
            answer:
              "El tour comienza en Marrakech y termina en Fez, por lo que puedes continuar tu viaje por Marruecos sin regresar a Marrakech.",
          },
      
          {
            question:
              "¿Es adecuado para viajeros que prefieren un ritmo más tranquilo?",
      
            answer:
              "Sí. La ruta está pensada para pasar más tiempo en Merzouga y dividir los trayectos largos en jornadas más cómodas.",
          },
      
          {
            question:
              "¿Se puede personalizar el tour?",
      
            answer:
              "Sí. Al ser un viaje privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede bajar después de la puesta de sol.",
          },
      
          {
            question:
              "¿Este tour es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar esta ruta. Si viajas con niños pequeños, indícanos sus edades para organizar mejor los tiempos de conducción, las paradas y el alojamiento.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Tour de 5 días de Marrakech a Fez por el desierto | Moroccan Trip",
      
          description:
            "Tour privado de 5 días de Marrakech a Fez por el desierto con Dades, Todra, Merzouga, Khamlia, noche en el Sahara, Valle del Ziz y Midelt.",
      
          // Mapa interno de keywords.
          // No convertir en meta keywords.
          keywords: [
            "tour de 5 días de Marrakech a Fez por el desierto",
            "marrakech a fez por el desierto 5 dias",
            "tour marrakech fez 5 dias",
            "ruta de 5 dias de marrakech a fez",
            "marrakech merzouga fez 5 dias",
            "viaje de marrakech a fez por merzouga",
            "tour privado marrakech fez 5 dias",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 5,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },
      {
        id: "6",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "ciudades-imperiales-marruecos-7-dias",
      
        title:
          "Circuito de 7 días por las ciudades imperiales de Marruecos",
      
        shortDescription:
          "Descubre Marrakech, Rabat, Meknes y Fez en un circuito privado de 7 días por las ciudades imperiales de Marruecos, con Casablanca, Volubilis, Ifrane y el Medio Atlas.",
      
        image:
          "/images/tours/7-day-morocco-imperial-cities-tour.webp",
      
        badge:
          "Ruta cultural",
      
        featured: true,
      
        category:
          "Circuitos por ciudades imperiales",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "7 días / 6 noches",
      
        nights: 6,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Marrakech",
      
        arrival:
          "Marrakech",
      
        locations: [
          "Marrakech",
          "Casablanca",
          "Rabat",
          "Meknes",
          "Volubilis",
          "Fez",
          "Ifrane",
          "Medio Atlas",
          "Beni Mellal",
          "Marrakech",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
            {
              name: "Casablanca",
              position: [33.5731, -7.5898],
            },
            {
              name: "Rabat",
              position: [34.0209, -6.8416],
            },
            {
              name: "Meknes",
              position: [33.8935, -5.5473],
            },
            {
              name: "Volubilis",
              position: [34.0734, -5.555],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Beni Mellal",
              position: [32.3373, -6.3498],
            },
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Descubre Marrakech, una de las cuatro ciudades imperiales de Marruecos",
          "Conoce Casablanca y el ambiente moderno de la costa atlántica",
          "Visita Rabat, capital de Marruecos y ciudad imperial",
          "Explora el patrimonio histórico de Meknes",
          "Visita el yacimiento arqueológico de Volubilis",
          "Pasa dos noches en Fez y dedica un día completo a su medina",
          "Descubre mercados, artesanía y arquitectura tradicional marroquí",
          "Viaja por Ifrane y los paisajes del Medio Atlas",
          "Conoce Beni Mellal y los paisajes del centro de Marruecos",
          "Recorre diferentes regiones del país en siete días",
          "Viaja en privado con paradas flexibles durante el recorrido",
          "Regresa a Marrakech por una ruta panorámica desde el centro de Marruecos",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre la historia y la cultura del país en este circuito de 7 días por
          las ciudades imperiales de Marruecos, una ruta privada que comienza y termina
          en Marrakech.
      
          El itinerario conecta Marrakech, Rabat, Meknes y Fez, las cuatro ciudades
          imperiales de Marruecos. Además, incluye paradas en Casablanca y Volubilis,
          así como un recorrido por Ifrane, el Medio Atlas y Beni Mellal durante el
          regreso hacia Marrakech.
      
          El viaje comienza con tiempo para descubrir Marrakech y su medina antes de
          viajar hacia la costa atlántica. Pasaremos por Casablanca y continuaremos
          hasta Rabat, donde podrás conocer una ciudad más tranquila que combina
          monumentos históricos, barrios tradicionales y amplias avenidas.
      
          La ruta sigue después hacia Meknes y Volubilis antes de llegar a Fez. Pasarás
          dos noches en Fez, lo que permite dedicar un día completo a explorar su
          antigua medina, sus mercados, talleres artesanales y arquitectura histórica
          sin tener que continuar inmediatamente hacia otro destino.
      
          Después de Fez, el paisaje cambia. Dejaremos las grandes ciudades y viajaremos
          hacia Ifrane y el Medio Atlas, atravesando zonas de montaña, bosques y
          paisajes rurales antes de llegar a Beni Mellal.
      
          El último tramo nos lleva de nuevo a Marrakech a través del centro de Marruecos.
      
          Si buscas un viaje por Marruecos de 7 días centrado en historia, cultura y
          ciudades, esta ruta ofrece una alternativa clara a los circuitos por el
          desierto. No visita el Sahara: su enfoque son las ciudades imperiales,
          las medinas históricas y los paisajes del centro del país.
      
          Este circuito por las ciudades imperiales está pensado para viajeros que
          quieren conocer diferentes regiones de Marruecos con transporte privado,
          tiempo para explorar y un ritmo cómodo durante siete días.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Marrakech – Descubre la ciudad imperial",
      
            description: `
              Tu circuito por las ciudades imperiales de Marruecos comienza en Marrakech.
      
              El primer día está pensado para descubrir la ciudad con calma y adaptarse
              al viaje antes de comenzar la ruta por carretera.
      
              Podrás recorrer parte de la medina, caminar por los zocos y descubrir
              calles, plazas y barrios tradicionales de una de las ciudades más conocidas
              de Marruecos.
      
              Dependiendo de tu horario de llegada y tus intereses, también puedes
              dedicar tiempo a jardines, monumentos o simplemente disfrutar del ambiente
              de la ciudad.
      
              La jornada es flexible para evitar comenzar el circuito con un largo
              desplazamiento.
      
              Pasarás la primera noche en Marrakech.
            `,
      
            highlights: [
              "Inicio del circuito en Marrakech",
              "Primer contacto con una ciudad imperial",
              "Tiempo para descubrir la medina",
              "Paseo por zocos y calles tradicionales",
              "Visitas adaptadas a tu horario",
              "Noche en Marrakech",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Marrakech – Casablanca – Rabat",
      
            description: `
              Después del desayuno saldremos de Marrakech y comenzaremos el viaje hacia
              el norte.
      
              La primera parada será Casablanca, la ciudad más grande de Marruecos y uno
              de los principales centros económicos del país.
      
              Tendrás tiempo para conocer parte de la ciudad y descubrir su ambiente
              urbano y atlántico antes de continuar hacia Rabat.
      
              Rabat es la capital actual de Marruecos y también una de sus cuatro
              ciudades imperiales.
      
              Su ambiente es más tranquilo que el de Marrakech o Fez y combina espacios
              históricos con avenidas modernas y zonas cercanas al Atlántico.
      
              Después de conocer algunos de sus lugares más interesantes, llegaremos al
              alojamiento.
      
              Pasarás la segunda noche en Rabat.
            `,
      
            highlights: [
              "Desayuno en Marrakech",
              "Salida hacia Casablanca",
              "Tiempo para conocer parte de Casablanca",
              "Continuación por la costa atlántica",
              "Llegada a Rabat",
              "Descubrimiento de la capital de Marruecos",
              "Noche en Rabat",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Rabat – Meknes – Volubilis – Fez",
      
            description: `
              Después del desayuno dejaremos Rabat y continuaremos hacia Meknes.
      
              Meknes forma parte de las ciudades imperiales de Marruecos y ofrece un
              ambiente más tranquilo que Marrakech o Fez.
      
              Tendrás tiempo para descubrir parte de su centro histórico y observar su
              arquitectura tradicional antes de continuar hacia Volubilis.
      
              Volubilis conserva restos arqueológicos de una antigua ciudad situada en
              un paisaje rural abierto.
      
              Después de la visita seguiremos hacia Fez.
      
              Llegaremos más tarde durante el día y te instalarás en el alojamiento.
      
              Pasarás dos noches en Fez, lo que permite conocer la ciudad sin convertirla
              en una simple parada dentro de la ruta.
      
              Esta será la tercera noche del circuito.
            `,
      
            highlights: [
              "Salida desde Rabat",
              "Visita de Meknes",
              "Descubrimiento de otra ciudad imperial",
              "Visita al yacimiento de Volubilis",
              "Ruta hacia Fez",
              "Primera tarde o noche en Fez",
              "Alojamiento en Fez",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Día completo para descubrir Fez",
      
            description: `
              El cuarto día está dedicado completamente a Fez, una de las ciudades
              históricas más importantes de Marruecos.
      
              Podrás descubrir su antigua medina, donde estrechas calles conectan
              mercados, talleres, barrios tradicionales y edificios históricos.
      
              Fez es especialmente conocida por su artesanía, su arquitectura y la
              fuerte presencia de tradiciones que todavía forman parte de la vida diaria.
      
              Dependiendo de tus intereses, puedes conocer zonas artesanales, miradores,
              monumentos y diferentes partes de la ciudad antigua.
      
              Tener un día completo en Fez permite recorrerla con más calma y hacer
              pausas cuando lo necesites.
      
              Si deseas realizar una visita con guía local, puede solicitarse al
              organizar el tour.
      
              Por la tarde regresarás al alojamiento para pasar una segunda noche en Fez.
            `,
      
            highlights: [
              "Día completo en Fez",
              "Exploración de la antigua medina",
              "Mercados y calles tradicionales",
              "Artesanía local",
              "Arquitectura histórica",
              "Visitas adaptadas a tus intereses",
              "Segunda noche en Fez",
            ],
          },
      
          {
            day: 5,
      
            title:
              "Fez – Ifrane – Medio Atlas – Beni Mellal",
      
            description: `
              Después del desayuno dejaremos Fez y comenzaremos a viajar hacia el sur.
      
              Pasaremos por la zona de Ifrane antes de continuar por el Medio Atlas.
      
              Esta etapa muestra una parte diferente de Marruecos. Las medinas y las
              grandes ciudades dejan paso a carreteras de montaña, bosques y paisajes
              rurales.
      
              Durante el recorrido habrá oportunidades para hacer paradas y disfrutar
              de las vistas.
      
              Continuaremos hacia Beni Mellal, situada entre las montañas y las zonas
              agrícolas del centro del país.
      
              Llegaremos más tarde durante el día y pasarás allí la quinta noche del tour.
            `,
      
            highlights: [
              "Salida desde Fez",
              "Paso por Ifrane",
              "Ruta por el Medio Atlas",
              "Paisajes de montaña y bosques",
              "Cambio de las ciudades al Marruecos rural",
              "Llegada a Beni Mellal",
              "Noche en Beni Mellal",
            ],
          },
      
          {
            day: 6,
      
            title:
              "Beni Mellal – Centro de Marruecos – Marrakech",
      
            description: `
              Después del desayuno continuaremos desde Beni Mellal hacia Marrakech.
      
              La ruta atraviesa los paisajes del centro de Marruecos, donde se combinan
              zonas agrícolas, montañas lejanas y grandes espacios abiertos.
      
              Se pueden realizar paradas durante el recorrido para descansar, comer o
              hacer fotografías.
      
              Llegaremos a Marrakech más tarde durante el día.
      
              Después de recorrer varias ciudades imperiales y diferentes regiones del
              país, tendrás una tarde o noche libre para descansar o volver a descubrir
              parte de Marrakech.
      
              Pasarás la sexta y última noche del circuito en Marrakech.
            `,
      
            highlights: [
              "Desayuno en Beni Mellal",
              "Ruta por el centro de Marruecos",
              "Paisajes rurales durante el trayecto",
              "Paradas flexibles",
              "Regreso a Marrakech",
              "Tiempo libre en la ciudad",
              "Noche en Marrakech",
            ],
          },
      
          {
            day: 7,
      
            title:
              "Marrakech – Último día del circuito",
      
            description: `
              Disfruta del último día de esta ruta por Marruecos de 7 días en Marrakech.
      
              Dependiendo de tu horario, podrás disponer de tiempo libre para regresar a
              lugares que quieras conocer mejor, realizar alguna visita adicional o
              simplemente descansar antes de continuar tu viaje.
      
              Terminar en Marrakech después de haber regresado el día anterior evita que
              el circuito finalice inmediatamente después de varias horas de carretera.
      
              Después de siete días habrás conocido las principales ciudades imperiales
              de Marruecos, además de Casablanca, Volubilis, el Medio Atlas y diferentes
              paisajes del centro del país.
      
              El circuito termina en Marrakech según tus planes de viaje.
            `,
      
            highlights: [
              "Última mañana en Marrakech",
              "Tiempo libre según tu horario",
              "Posibilidad de realizar visitas adicionales",
              "Tiempo para descansar",
              "Fin del circuito de 7 días por Marruecos",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado durante todo el circuito",
          "Conductor de habla inglesa o francesa",
          "Seis noches de alojamiento",
          "Dos noches en Marrakech",
          "Una noche en Rabat",
          "Dos noches en Fez",
          "Una noche en Beni Mellal",
          "Desayuno diario",
          "Tiempo libre para conocer los principales destinos",
          "Paradas flexibles para descansar y hacer fotografías",
          "Recogida y traslado final en Marrakech",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Cenas salvo que se acuerden previamente",
          "Bebidas",
          "Entradas a monumentos y atracciones",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no mencionados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Marrakech",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Rabat",
            type: "Hotel o riad",
          },
          {
            night: 3,
            location: "Fez",
            type: "Hotel o riad",
          },
          {
            night: 4,
            location: "Fez",
            type: "Hotel o riad",
          },
          {
            night: 5,
            location: "Beni Mellal",
            type: "Hotel",
          },
          {
            night: 6,
            location: "Marrakech",
            type: "Hotel o riad",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/7-day-morocco-imperial-cities-tour.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El circuito de 7 días por las ciudades imperiales de Marruecos es privado?",
      
            answer:
              "Sí. El recorrido es privado para ti y tu grupo, con transporte privado y mayor flexibilidad para las paradas y el ritmo del viaje.",
          },
      
          {
            question:
              "¿Cuáles son las cuatro ciudades imperiales de Marruecos?",
      
            answer:
              "Las cuatro ciudades imperiales de Marruecos son Marrakech, Rabat, Meknes y Fez. Este circuito incluye las cuatro.",
          },
      
          {
            question:
              "¿Qué ciudades visita este circuito por Marruecos?",
      
            answer:
              "La ruta incluye Marrakech, Casablanca, Rabat, Meknes, Volubilis, Fez, Ifrane y Beni Mellal, además del recorrido por el Medio Atlas.",
          },
      
          {
            question:
              "¿El circuito incluye Casablanca?",
      
            answer:
              "Sí. Casablanca se visita durante el segundo día en el trayecto entre Marrakech y Rabat. No es una ciudad imperial, pero forma parte de la ruta.",
          },
      
          {
            question:
              "¿Visitamos Volubilis?",
      
            answer:
              "Sí. Volubilis se visita el tercer día después de Meknes y antes de continuar hacia Fez.",
          },
      
          {
            question:
              "¿Cuánto tiempo pasamos en Fez?",
      
            answer:
              "El itinerario incluye dos noches en Fez y un día completo para descubrir la medina, los mercados, la artesanía y diferentes zonas históricas.",
          },
      
          {
            question:
              "¿Este circuito de ciudades imperiales incluye el desierto del Sahara?",
      
            answer:
              "No. Este itinerario está centrado en las ciudades imperiales, la cultura, las medinas históricas y los paisajes del Medio Atlas. Para visitar el Sahara es mejor elegir uno de nuestros tours por el desierto.",
          },
      
          {
            question:
              "¿Dónde comienza y termina el circuito?",
      
            answer:
              "El viaje comienza y termina en Marrakech, por lo que es una opción cómoda si Marrakech es tu punto principal de llegada o salida.",
          },
      
          {
            question:
              "¿Se incluye un guía local en Marrakech o Fez?",
      
            answer:
              "Los guías locales no están incluidos por defecto. Si deseas una visita guiada en Marrakech, Fez u otra ciudad, puedes solicitarla al organizar el tour.",
          },
      
          {
            question:
              "¿Las entradas a monumentos están incluidas?",
      
            answer:
              "No. Las entradas no están incluidas por defecto, lo que te permite decidir qué monumentos y atracciones quieres visitar durante el circuito.",
          },
      
          {
            question:
              "¿Es una buena ruta por Marruecos para 7 días?",
      
            answer:
              "Es una buena opción para viajeros interesados principalmente en historia, cultura y ciudades. La ruta dedica tiempo a las cuatro ciudades imperiales y combina las visitas urbanas con Volubilis y los paisajes del Medio Atlas.",
          },
      
          {
            question:
              "¿Se puede personalizar el circuito?",
      
            answer:
              "Sí. Al tratarse de un viaje privado, algunos detalles pueden adaptarse a tus fechas, intereses, preferencias de alojamiento y horarios.",
          },
      
          {
            question:
              "¿Por qué pasamos dos noches en Fez?",
      
            answer:
              "Fez tiene una medina extensa y numerosos lugares culturales. Dos noches permiten dedicar un día completo a la ciudad sin tener que continuar conduciendo esa misma tarde.",
          },
      
          {
            question:
              "¿Por qué la ruta pasa por el Medio Atlas?",
      
            answer:
              "El recorrido por Ifrane y el Medio Atlas permite regresar hacia Marrakech por una zona diferente y conocer paisajes de montaña, bosques y áreas rurales del centro de Marruecos.",
          },
      
          {
            question:
              "¿Este circuito es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar el circuito. Si viajas con niños, indícanos sus edades para organizar el ritmo del viaje y los alojamientos de forma adecuada.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Circuito Ciudades Imperiales Marruecos 7 días | Moroccan Trip",
      
          description:
            "Circuito privado de 7 días por las ciudades imperiales de Marruecos desde Marrakech, con Rabat, Meknes, Volubilis, Fez, Ifrane y el Medio Atlas.",
      
          // Mapa interno de keywords.
          // No convertir en meta keywords.
          keywords: [
            "circuito ciudades imperiales marruecos",
            "circuito marruecos 7 días",
            "tour marruecos 7 dias",
            "viaje marruecos 7 dias",
            "ruta por marruecos 7 dias",
            "circuito por ciudades imperiales",
            "viaje ciudades imperiales",
            "ciudades imperiales desde marrakech",
            "tour ciudades imperiales marruecos",
            "ruta ciudades imperiales marruecos",
            "viaje ciudades imperiales marruecos",
            "marruecos ciudades imperiales 7 dias",
            "4 ciudades imperiales de marruecos",
            "capitales imperiales de marruecos",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 7,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },
      {
        id: "7",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "circuito-marruecos-desde-casablanca-4-dias",
      
        title:
          "Circuito de 4 días por Marruecos desde Casablanca a Marrakech por el desierto",
      
        shortDescription:
          "Viaja desde Casablanca hasta Marrakech en un circuito privado de 4 días por Marruecos, pasando por Rabat, Fez, Merzouga, el Sahara, las Gargantas del Todra y Ait Ben Haddou.",
      
        image:
          "/images/tours/4-day-casablanca-marrakech-desert-tour.webp",
      
        badge:
          "Casablanca a Marrakech",
      
        featured: true,
      
        category:
          "Tours por el desierto",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "4 días / 3 noches",
      
        nights: 3,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Casablanca",
      
        arrival:
          "Marrakech",
      
        locations: [
          "Casablanca",
          "Rabat",
          "Meknes",
          "Fez",
          "Ifrane",
          "Medio Atlas",
          "Midelt",
          "Valle del Ziz",
          "Merzouga",
          "Erg Chebbi",
          "Desierto del Sahara",
          "Rissani",
          "Gargantas del Todra",
          "Valle del Dades",
          "Ouarzazate",
          "Ait Ben Haddou",
          "Alto Atlas",
          "Marrakech",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Casablanca",
              position: [33.5731, -7.5898],
            },
            {
              name: "Rabat",
              position: [34.0209, -6.8416],
            },
            {
              name: "Meknes",
              position: [33.8935, -5.5473],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Midelt",
              position: [32.6806, -4.7369],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Rissani",
              position: [31.2823, -4.2651],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Comienza tu viaje privado en Casablanca y termina en Marrakech",
          "Descubre Rabat, la capital de Marruecos",
          "Viaja por Meknes antes de continuar hacia Fez",
          "Cruza el Medio Atlas por Ifrane y Midelt",
          "Disfruta de los paisajes del Valle del Ziz",
          "Llega a Merzouga y las dunas de Erg Chebbi",
          "Recorre el Sahara en camello al atardecer",
          "Pasa una noche en un campamento del desierto",
          "Viaja por Rissani y el sureste de Marruecos",
          "Camina entre las paredes de las Gargantas del Todra",
          "Descubre los paisajes del Valle del Dades",
          "Visita Ait Ben Haddou antes de llegar a Marrakech",
          "Cruza el Alto Atlas en la última etapa del viaje",
          "Conoce diferentes regiones de Marruecos en solo cuatro días",
          "Disfruta de transporte privado y paradas flexibles",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre ciudades, montañas, valles y el Sahara en este circuito de 4 días
          por Marruecos desde Casablanca hasta Marrakech.
      
          El viaje comienza en Casablanca y continúa hacia Rabat, la capital del país,
          antes de seguir por Meknes hasta Fez. Esta primera etapa permite conocer
          varias ciudades importantes del norte de Marruecos antes de comenzar la ruta
          hacia el desierto.
      
          Desde Fez viajaremos hacia el sur pasando por Ifrane y el Medio Atlas. El
          paisaje cambia durante el camino: los bosques y carreteras de montaña dejan
          paso poco a poco a zonas más secas, el Valle del Ziz y los paisajes del
          sureste de Marruecos.
      
          La ruta continúa hasta Merzouga, junto a las dunas de Erg Chebbi. Allí
          comenzarás una de las experiencias principales del viaje: un paseo en camello
          por el Sahara al final de la tarde y una noche en un campamento del desierto.
      
          Después de dejar Merzouga, el circuito sigue hacia Rissani, las Gargantas del
          Todra y el Valle del Dades. El paisaje cambia otra vez, pasando de dunas
          abiertas a cañones, palmerales y montañas.
      
          El último día viajaremos por Ouarzazate y visitaremos Ait Ben Haddou antes de
          cruzar el Alto Atlas y llegar a Marrakech.
      
          Este circuito por Marruecos desde Casablanca es una buena opción para viajeros
          que quieren empezar en la costa atlántica, conocer el Sahara y terminar su
          viaje en Marrakech sin regresar al punto de salida.
      
          En lugar de hacer un traslado directo de Casablanca a Marrakech, esta ruta
          conecta ciudades históricas, Merzouga y algunos de los paisajes más conocidos
          del sur de Marruecos en un viaje privado.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Casablanca – Rabat – Meknes – Fez",
      
            description: `
              Tu circuito por Marruecos desde Casablanca comienza con la recogida en la
              ciudad.
      
              Dejaremos Casablanca y viajaremos hacia Rabat, capital de Marruecos.
              Tendrás tiempo para conocer algunas zonas importantes de la ciudad y
              disfrutar de su ambiente más tranquilo.
      
              Después continuaremos hacia Meknes, una de las ciudades imperiales del
              país. La parada permite descubrir otra parte de la historia y la
              arquitectura tradicional de Marruecos.
      
              Desde Meknes seguiremos hasta Fez.
      
              Llegaremos más tarde durante el día y te instalarás en el alojamiento.
              Fez será la última gran ciudad antes de comenzar el viaje hacia el Sahara.
      
              Pasarás la primera noche en Fez.
            `,
      
            highlights: [
              "Recogida en Casablanca",
              "Ruta hacia Rabat",
              "Tiempo para descubrir la capital",
              "Continuación hacia Meknes",
              "Visita de una ciudad imperial",
              "Viaje hasta Fez",
              "Noche en Fez",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Fez – Ifrane – Medio Atlas – Valle del Ziz – Merzouga",
      
            description: `
              Después del desayuno dejaremos Fez y comenzaremos una de las etapas más
              variadas del viaje.
      
              Pasaremos por Ifrane antes de continuar por el Medio Atlas. Esta parte de
              Marruecos tiene un paisaje diferente al del Sahara, con montañas, bosques
              y temperaturas más frescas.
      
              Continuaremos hacia la zona de Midelt, donde podremos hacer una parada
              antes de seguir hacia el sur.
      
              Más adelante llegaremos al Valle del Ziz, conocido por sus palmerales
              rodeados de montañas y paisajes secos.
      
              A medida que avanzamos hacia Merzouga, el entorno se vuelve cada vez más
              desértico hasta que aparecen las dunas de Erg Chebbi.
      
              Por la tarde comenzarás el paseo en camello por el Sahara. Cruzarás las
              dunas mientras baja el sol antes de continuar hacia el campamento.
      
              Disfrutarás de la cena y pasarás la segunda noche en el desierto.
            `,
      
            highlights: [
              "Desayuno en Fez",
              "Paso por Ifrane",
              "Cruce del Medio Atlas",
              "Ruta por la zona de Midelt",
              "Paisajes del Valle del Ziz",
              "Llegada a Merzouga",
              "Dunas de Erg Chebbi",
              "Paseo en camello por el Sahara",
              "Puesta de sol sobre las dunas",
              "Cena y noche en el campamento",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",
      
            description: `
              Si lo deseas, puedes levantarte temprano para contemplar el amanecer sobre
              las dunas de Erg Chebbi antes del desayuno.
      
              Después dejaremos Merzouga y comenzaremos el viaje hacia el oeste por el
              sureste de Marruecos.
      
              Pasaremos por la zona de Rissani antes de continuar hacia Tinghir y las
              Gargantas del Todra.
      
              En las gargantas tendrás tiempo para caminar entre las altas paredes del
              cañón y disfrutar de un paisaje muy diferente al del Sahara.
      
              Después continuaremos hacia el Valle del Dades.
      
              La carretera atraviesa pequeñas poblaciones, zonas con palmeras y paisajes
              de montaña antes de llegar a la región del Dades.
      
              Disfrutarás de la cena y pasarás la tercera noche en el Valle del Dades.
            `,
      
            highlights: [
              "Amanecer opcional sobre Erg Chebbi",
              "Desayuno en el campamento",
              "Salida desde Merzouga",
              "Paso por Rissani",
              "Ruta hacia Tinghir",
              "Visita a las Gargantas del Todra",
              "Paisajes del sureste de Marruecos",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Valle del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      
            description: `
              Después del desayuno dejaremos el Valle del Dades y comenzaremos la última
              etapa del circuito hacia Marrakech.
      
              Viajaremos por los paisajes del sur de Marruecos en dirección a Ouarzazate.
      
              La ruta continúa hasta Ait Ben Haddou, uno de los ksars más conocidos del
              país. Tendrás tiempo para descubrir su arquitectura tradicional de tierra
              antes de comenzar el viaje hacia el Alto Atlas.
      
              Cruzaremos las montañas por una carretera panorámica con vistas amplias,
              valles y pequeños pueblos.
      
              Se pueden realizar paradas durante el recorrido para descansar, comer y
              hacer fotografías.
      
              Llegaremos a Marrakech más tarde durante el día.
      
              El circuito termina después de cuatro días viajando desde Casablanca por
              Fez, Merzouga, el Sahara y el sur de Marruecos.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Ruta hacia Ouarzazate",
              "Paisajes del sur de Marruecos",
              "Visita a Ait Ben Haddou",
              "Cruce del Alto Atlas",
              "Vistas panorámicas durante el recorrido",
              "Paradas flexibles",
              "Llegada a Marrakech",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado desde Casablanca hasta Marrakech",
          "Conductor de habla inglesa o francesa",
          "Tres noches de alojamiento",
          "Una noche en Fez",
          "Una noche en un campamento del Sahara cerca de Merzouga",
          "Una noche en el Valle del Dades",
          "Desayunos y cenas durante el tour",
          "Paseo en camello por las dunas de Erg Chebbi",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Recogida en Casablanca",
          "Traslado final en Marrakech",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales no indicadas en el itinerario",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no mencionados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Fez",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Campamento del desierto del Sahara",
          },
          {
            night: 3,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/4-day-casablanca-marrakech-desert-tour.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El circuito de 4 días por Marruecos desde Casablanca es privado?",
      
            answer:
              "Sí. El viaje es privado para ti y tu grupo, con transporte privado y flexibilidad para las paradas durante el recorrido.",
          },
      
          {
            question:
              "¿Dónde comienza y termina el circuito?",
      
            answer:
              "El viaje comienza en Casablanca y termina en Marrakech. Es una opción práctica para conocer varias regiones de Marruecos sin regresar a la ciudad de salida.",
          },
      
          {
            question:
              "¿El circuito desde Casablanca incluye el desierto del Sahara?",
      
            answer:
              "Sí. Merzouga y las dunas de Erg Chebbi forman parte central del itinerario. Pasarás una noche en un campamento del Sahara.",
          },
      
          {
            question:
              "¿El tour desde Casablanca pasa por Fez?",
      
            answer:
              "Sí. La primera noche se pasa en Fez antes de comenzar el viaje hacia el Medio Atlas y Merzouga.",
          },
      
          {
            question:
              "¿Visitamos Rabat y Meknes?",
      
            answer:
              "Sí. Rabat y Meknes están incluidas durante el primer día mientras viajas desde Casablanca hacia Fez.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello en Merzouga?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido como parte de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Dormimos en el desierto?",
      
            answer:
              "Sí. La segunda noche se pasa en un campamento del desierto cerca de Merzouga.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan el tercer día después de dejar Merzouga y antes de continuar hacia el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou se visita el último día antes de cruzar el Alto Atlas y continuar hacia Marrakech.",
          },
      
          {
            question:
              "¿Es una ruta directa de Casablanca a Marrakech?",
      
            answer:
              "No. Es un circuito de cuatro días que conecta Casablanca con Marrakech pasando por Rabat, Fez, Merzouga, el Sahara, Todra y el sur de Marruecos.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera durante el circuito?",
      
            answer:
              "Sí. El recorrido cubre una gran parte de Marruecos y algunos días incluyen varias horas de conducción. El viaje se divide con visitas, paradas y tres noches de alojamiento.",
          },
      
          {
            question:
              "¿Se puede personalizar el circuito desde Casablanca?",
      
            answer:
              "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que las temperaturas pueden bajar después de la puesta de sol.",
          },
      
          {
            question:
              "¿Este viaje es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar este circuito privado. Si viajas con niños pequeños, indícanos sus edades para organizar mejor los tiempos de carretera y las actividades.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Circuito Marruecos desde Casablanca 4 días | Sahara y Marrakech",
      
          description:
            "Circuito privado de 4 días por Marruecos desde Casablanca hasta Marrakech con Fez, Merzouga, Sahara, Todra, Ait Ben Haddou y Alto Atlas.",
      
          // Mapa interno de keywords.
          // No convertir en meta keywords.
          keywords: [
            "circuito marruecos desde casablanca",
            "circuito marruecos",
            "circuitos por marruecos",
            "tour marruecos desde casablanca",
            "viaje por marruecos",
            "casablanca a marrakech por el desierto",
            "casablanca merzouga",
            "tour casablanca marrakech 4 dias",
            "tour casablanca merzouga marrakech",
            "sahara desde casablanca",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 4,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },
      
      {
        id: "8",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug: "viaje-marruecos-5-dias-desde-casablanca",
      
        title:
          "Viaje de 5 días por Marruecos desde Casablanca hasta Marrakech",
      
        shortDescription:
          "Descubre Marruecos en un viaje privado de 5 días desde Casablanca hasta Marrakech, con Fez, Merzouga, el Sahara, las Gargantas del Todra, el Valle del Dades y Ait Ben Haddou.",
      
        image:
          "/images/tours/5-day-morocco-tour-from-casablanca.webp",
      
        badge:
          "Lo mejor de Marruecos",
      
        featured: true,
      
        category:
          "Circuitos por Marruecos",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "5 días / 4 noches",
      
        nights: 4,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          ["Inglés", "Francés"],
      
        departure:
          "Casablanca",
      
        arrival:
          "Marrakech",
      
        locations: [
          "Casablanca",
          "Rabat",
          "Fez",
          "Ifrane",
          "Medio Atlas",
          "Midelt",
          "Valle del Ziz",
          "Merzouga",
          "Erg Chebbi",
          "Khamlia",
          "Desierto del Sahara",
          "Rissani",
          "Gargantas del Todra",
          "Valle del Dades",
          "Ouarzazate",
          "Ait Ben Haddou",
          "Alto Atlas",
          "Marrakech",
        ],
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map: {
          stops: [
            {
              name: "Casablanca",
              position: [33.5731, -7.5898],
            },
            {
              name: "Rabat",
              position: [34.0209, -6.8416],
            },
            {
              name: "Fez",
              position: [34.0181, -5.0078],
            },
            {
              name: "Ifrane",
              position: [33.5228, -5.1109],
            },
            {
              name: "Midelt",
              position: [32.6806, -4.7369],
            },
            {
              name: "Merzouga",
              position: [31.0802, -4.0133],
            },
            {
              name: "Khamlia",
              position: [31.0186, -4.0058],
            },
            {
              name: "Rissani",
              position: [31.2823, -4.2651],
            },
            {
              name: "Gargantas del Todra",
              position: [31.5889, -5.5928],
            },
            {
              name: "Valle del Dades",
              position: [31.3709, -5.9887],
            },
            {
              name: "Ouarzazate",
              position: [30.9335, -6.937],
            },
            {
              name: "Ait Ben Haddou",
              position: [31.0472, -7.1298],
            },
            {
              name: "Marrakech",
              position: [31.6295, -7.9811],
            },
          ],
        },
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights: [
          "Comienza tu viaje privado por Marruecos en Casablanca",
          "Visita Rabat antes de continuar hacia la histórica ciudad de Fez",
          "Cruza Ifrane y los paisajes del Medio Atlas",
          "Disfruta de las vistas del Valle del Ziz camino del Sahara",
          "Llega a Merzouga y contempla las dunas de Erg Chebbi",
          "Dedica un día completo a descubrir el desierto de Merzouga",
          "Visita Khamlia y conoce parte de la cultura local del Sahara",
          "Recorre las dunas de Erg Chebbi en camello al atardecer",
          "Pasa una noche en un campamento del desierto",
          "Camina entre las paredes de las Gargantas del Todra",
          "Descubre los paisajes del Valle del Dades",
          "Visita Ait Ben Haddou antes de llegar a Marrakech",
          "Cruza el Alto Atlas en la etapa final del recorrido",
          "Conoce diferentes paisajes de Marruecos en cinco días",
          "Viaja en privado con paradas flexibles durante la ruta",
        ],
      
        // ─────────────────────────────
        // DESCRIPCIÓN GENERAL
        // ─────────────────────────────
      
        overview: `
          Descubre ciudades históricas, montañas y el Sahara en este viaje de 5 días
          por Marruecos desde Casablanca hasta Marrakech.
      
          La ruta comienza en Casablanca y continúa hacia Rabat antes de llegar a Fez,
          una de las ciudades culturales más importantes del país. Esta primera etapa
          permite conocer una parte del norte de Marruecos antes de comenzar el viaje
          hacia el desierto.
      
          Desde Fez cruzaremos Ifrane y el Medio Atlas. Durante el recorrido, los
          paisajes verdes y las carreteras de montaña cambian poco a poco hasta llegar
          al Valle del Ziz y las zonas más áridas del sureste de Marruecos.
      
          Merzouga es uno de los puntos principales de este itinerario por Marruecos
          de 5 días. Pasarás dos noches en la zona: la primera en un hotel o riad y
          la segunda en un campamento del Sahara. Esto permite disfrutar del desierto
          sin tener que llegar y marcharse al día siguiente.
      
          El tercer día podrás explorar los alrededores de Erg Chebbi, visitar Khamlia
          y conocer mejor la vida cerca del Sahara. Por la tarde comenzarás el paseo
          en camello por las dunas antes de contemplar la puesta de sol y pasar la
          noche en el campamento.
      
          Después del desierto, el viaje continúa por Rissani, las Gargantas del Todra
          y el Valle del Dades, donde pasarás la cuarta noche.
      
          El último día atravesaremos los paisajes del sur de Marruecos hacia
          Ouarzazate y Ait Ben Haddou antes de cruzar el Alto Atlas y terminar el
          recorrido en Marrakech.
      
          Si estás pensando qué ver en Marruecos en 5 días y quieres combinar ciudades,
          montaña y Sahara, esta ruta ofrece una experiencia variada sin regresar a
          Casablanca. El itinerario está pensado como un viaje privado, por lo que
          permite realizar paradas y adaptar algunos detalles a tus planes.
        `,
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary: [
          {
            day: 1,
      
            title:
              "Casablanca – Rabat – Fez",
      
            description: `
              Tu viaje por Marruecos de 5 días comienza con la recogida en Casablanca.
      
              Dejaremos la ciudad y viajaremos hacia Rabat, capital de Marruecos.
              Tendrás tiempo para descubrir algunos de sus lugares históricos y
              disfrutar de su ambiente antes de continuar el recorrido.
      
              Después de la visita seguiremos hacia el interior del país en dirección
              a Fez.
      
              Durante el trayecto podrás observar cómo el paisaje atlántico deja paso
              a zonas rurales y ciudades del interior.
      
              Llegaremos a Fez más tarde durante el día. Dependiendo del horario,
              tendrás tiempo para relajarte o dar un primer paseo por la ciudad.
      
              Pasarás la primera noche en Fez.
            `,
      
            highlights: [
              "Recogida en Casablanca",
              "Viaje hacia Rabat",
              "Tiempo para conocer la capital de Marruecos",
              "Continuación hacia Fez",
              "Paisajes cambiantes durante el recorrido",
              "Llegada a Fez",
              "Tiempo libre según el horario",
              "Noche en Fez",
            ],
          },
      
          {
            day: 2,
      
            title:
              "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",
      
            description: `
              Después del desayuno dejaremos Fez y comenzaremos una de las jornadas
              más panorámicas de la ruta.
      
              Pasaremos por Ifrane antes de continuar hacia el Medio Atlas. Esta zona
              ofrece paisajes de montaña, bosques y temperaturas más frescas que las
              regiones desérticas que visitaremos más tarde.
      
              La ruta sigue hacia Midelt, donde podremos hacer una pausa antes de
              continuar hacia el sur.
      
              Poco a poco el paisaje se vuelve más seco. Llegaremos al Valle del Ziz,
              conocido por sus palmerales rodeados de montañas y terrenos rocosos.
      
              Después continuaremos hasta Merzouga, situada junto a las dunas de
              Erg Chebbi.
      
              A diferencia de un recorrido más corto desde Casablanca, este viaje de
              cinco días permite llegar a Merzouga y descansar sin comenzar
              inmediatamente el paseo en camello.
      
              Pasarás la segunda noche en un hotel o riad de la zona.
            `,
      
            highlights: [
              "Desayuno en Fez",
              "Paso por Ifrane",
              "Cruce del Medio Atlas",
              "Parada en la zona de Midelt",
              "Vistas del Valle del Ziz",
              "Ruta hacia el sureste de Marruecos",
              "Llegada a Merzouga",
              "Primeras vistas de Erg Chebbi",
              "Tiempo para descansar",
              "Noche en Merzouga",
            ],
          },
      
          {
            day: 3,
      
            title:
              "Merzouga – Khamlia – Erg Chebbi – Paseo en camello – Campamento del Sahara",
      
            description: `
              El tercer día está dedicado completamente a Merzouga y al desierto.
      
              Después del desayuno exploraremos diferentes paisajes alrededor de las
              dunas de Erg Chebbi.
      
              Visitaremos Khamlia, un pequeño pueblo próximo a Merzouga conocido por
              su cultura local y sus tradiciones musicales.
      
              Dependiendo del ritmo del día, podremos realizar otras paradas alrededor
              del desierto y conocer diferentes zonas antes de regresar a Merzouga.
      
              Por la tarde comenzará el paseo en camello por las dunas. Cruzarás
              Erg Chebbi mientras el sol desciende sobre el Sahara.
      
              Tendrás tiempo para disfrutar del paisaje y de la puesta de sol antes de
              continuar hacia el campamento.
      
              Allí disfrutarás de la cena y pasarás la tercera noche rodeado por las
              dunas y el silencio del desierto.
            `,
      
            highlights: [
              "Día completo en la zona de Merzouga",
              "Exploración de Erg Chebbi",
              "Visita a Khamlia",
              "Descubrimiento de la cultura local",
              "Tiempo para disfrutar del Sahara",
              "Paseo en camello por las dunas",
              "Puesta de sol sobre Erg Chebbi",
              "Cena en el campamento",
              "Noche en el desierto",
            ],
          },
      
          {
            day: 4,
      
            title:
              "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",
      
            description: `
              Si lo deseas, puedes levantarte temprano para contemplar el amanecer
              sobre las dunas antes del desayuno.
      
              Dejaremos Merzouga y comenzaremos el viaje hacia el oeste por el sureste
              de Marruecos.
      
              Pasaremos por la zona de Rissani antes de continuar hacia Tinghir y las
              Gargantas del Todra.
      
              En las gargantas tendrás tiempo para caminar entre las altas paredes del
              cañón y disfrutar de un paisaje muy diferente al del Sahara.
      
              Después seguiremos hacia el Valle del Dades atravesando pequeños pueblos,
              zonas con palmeras y paisajes de montaña.
      
              Llegaremos más tarde durante el día. Allí disfrutarás de la cena y
              pasarás la cuarta noche del viaje.
            `,
      
            highlights: [
              "Amanecer opcional en el Sahara",
              "Desayuno en el campamento",
              "Salida desde Merzouga",
              "Paso por Rissani",
              "Ruta hacia Tinghir",
              "Visita a las Gargantas del Todra",
              "Paisajes de cañones y montañas",
              "Llegada al Valle del Dades",
              "Cena y alojamiento en el Dades",
            ],
          },
      
          {
            day: 5,
      
            title:
              "Valle del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      
            description: `
              Después del desayuno comenzaremos la última etapa de este viaje por
              Marruecos.
      
              Dejaremos el Valle del Dades y viajaremos hacia Ouarzazate atravesando
              paisajes del sur del país, pueblos tradicionales y zonas montañosas.
      
              Continuaremos hasta Ait Ben Haddou, uno de los ksars más conocidos de
              Marruecos. Tendrás tiempo para descubrir su arquitectura tradicional de
              tierra antes de seguir hacia el Alto Atlas.
      
              Cruzaremos las montañas por una carretera panorámica con amplias vistas
              y diferentes oportunidades para realizar paradas.
      
              A medida que nos acercamos a Marrakech, los paisajes de montaña dejan
              paso a las llanuras que rodean la ciudad.
      
              Llegaremos a Marrakech más tarde durante el día.
      
              Aquí termina tu viaje privado de 5 días por Marruecos desde Casablanca,
              después de conocer ciudades históricas, el Medio Atlas, Merzouga, el
              Sahara y algunos de los lugares más representativos del sur del país.
            `,
      
            highlights: [
              "Desayuno en el Valle del Dades",
              "Ruta por el sur de Marruecos",
              "Paso por Ouarzazate",
              "Visita a Ait Ben Haddou",
              "Arquitectura tradicional de tierra",
              "Cruce del Alto Atlas",
              "Vistas panorámicas de montaña",
              "Paradas flexibles durante el recorrido",
              "Llegada a Marrakech",
              "Fin del viaje privado",
            ],
          },
        ],
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included: [
          "Transporte privado desde Casablanca hasta Marrakech",
          "Conductor de habla inglesa o francesa",
          "Cuatro noches de alojamiento",
          "Una noche en Fez",
          "Una noche en un hotel o riad en Merzouga",
          "Una noche en un campamento del Sahara",
          "Una noche en el Valle del Dades",
          "Desayunos y cenas durante el recorrido",
          "Paseo en camello por las dunas de Erg Chebbi",
          "Tiempo para explorar Merzouga y sus alrededores",
          "Tiempo libre en las principales paradas",
          "Paradas flexibles para descansar y hacer fotografías",
          "Recogida en Casablanca",
          "Traslado final en Marrakech",
        ],
      
        // ─────────────────────────────
        // NO INCLUIDO
        // ─────────────────────────────
      
        excluded: [
          "Almuerzos",
          "Bebidas",
          "Entradas a monumentos o atracciones cuando sean necesarias",
          "Guías locales salvo que se soliciten",
          "Actividades opcionales no indicadas en el itinerario",
          "Gastos personales",
          "Seguro de viaje",
          "Propinas",
          "Servicios no mencionados en la sección de incluidos",
        ],
      
        // ─────────────────────────────
        // ALOJAMIENTO
        // ─────────────────────────────
      
        accommodation: [
          {
            night: 1,
            location: "Fez",
            type: "Hotel o riad",
          },
          {
            night: 2,
            location: "Merzouga",
            type: "Hotel o riad",
          },
          {
            night: 3,
            location: "Merzouga",
            type: "Campamento del desierto del Sahara",
          },
          {
            night: 4,
            location: "Valle del Dades",
            type: "Hotel o riad",
          },
        ],
      
        // ─────────────────────────────
        // GALERÍA
        // ─────────────────────────────
      
        gallery: [
          "/images/tours/5-day-morocco-tour-from-casablanca.webp",
        ],
      
        // ─────────────────────────────
        // FAQ
        // ─────────────────────────────
      
        faqs: [
          {
            question:
              "¿El viaje de 5 días por Marruecos desde Casablanca es privado?",
      
            answer:
              "Sí. El recorrido es privado para ti y tu grupo, con transporte privado y flexibilidad para realizar paradas durante el viaje.",
          },
      
          {
            question:
              "¿Dónde comienza y termina este viaje por Marruecos?",
      
            answer:
              "El viaje comienza en Casablanca y termina en Marrakech, por lo que puedes recorrer diferentes regiones del país sin regresar a la ciudad de salida.",
          },
      
          {
            question:
              "¿Qué se puede ver en Marruecos en 5 días con este itinerario?",
      
            answer:
              "La ruta incluye Rabat, Fez, Ifrane, el Medio Atlas, el Valle del Ziz, Merzouga, el Sahara, las Gargantas del Todra, el Valle del Dades, Ait Ben Haddou y Marrakech.",
          },
      
          {
            question:
              "¿Cuál es la diferencia entre el tour de 4 días y el viaje de 5 días desde Casablanca?",
      
            answer:
              "El itinerario de cinco días añade más tiempo en Merzouga. Incluye una noche en un hotel o riad, un día completo para explorar el desierto y una segunda noche en un campamento del Sahara antes de continuar hacia el Valle del Dades.",
          },
      
          {
            question:
              "¿El viaje incluye el desierto del Sahara?",
      
            answer:
              "Sí. El Sahara es una de las partes principales de la ruta. Pasarás dos noches en la zona de Merzouga, incluida una noche en un campamento cerca de Erg Chebbi.",
          },
      
          {
            question:
              "¿Tenemos un día completo en Merzouga?",
      
            answer:
              "Sí. El tercer día está dedicado a explorar la zona de Merzouga, visitar Khamlia y disfrutar de Erg Chebbi antes del paseo en camello.",
          },
      
          {
            question:
              "¿Visitamos Khamlia?",
      
            answer:
              "Sí. Khamlia forma parte del día dedicado al desierto y permite conocer otra parte de la cultura local de la región de Merzouga.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido como parte de la experiencia en el Sahara.",
          },
      
          {
            question:
              "¿Dormimos en un campamento del Sahara?",
      
            answer:
              "Sí. La tercera noche se pasa en un campamento del desierto cerca de Merzouga después del paseo en camello y la puesta de sol.",
          },
      
          {
            question:
              "¿Visitamos las Gargantas del Todra?",
      
            answer:
              "Sí. Las Gargantas del Todra se visitan el cuarto día mientras viajas desde Merzouga hacia el Valle del Dades.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou?",
      
            answer:
              "Sí. Ait Ben Haddou se visita durante el último día antes de cruzar el Alto Atlas y continuar hasta Marrakech.",
          },
      
          {
            question:
              "¿Hay muchas horas de carretera durante estos 5 días en Marruecos?",
      
            answer:
              "La ruta cubre una distancia amplia, por lo que algunos días incluyen varias horas de conducción. El itinerario de cinco días añade tiempo en Merzouga y divide el recorrido con cuatro noches de alojamiento.",
          },
      
          {
            question:
              "¿Se puede personalizar el itinerario de 5 días por Marruecos?",
      
            answer:
              "Sí. Al ser un viaje privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
          },
      
          {
            question:
              "¿Qué debo llevar para la noche en el Sahara?",
      
            answer:
              "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede bajar después de la puesta de sol.",
          },
      
          {
            question:
              "¿Este viaje por Marruecos es adecuado para familias?",
      
            answer:
              "Sí. Las familias pueden solicitar esta ruta privada. Si viajas con niños pequeños, indícanos sus edades para organizar mejor los tiempos de carretera, las paradas y el alojamiento.",
          },
        ],
      
        // ─────────────────────────────
        // SEO
        // ─────────────────────────────
      
        seo: {
          title:
            "Viaje Marruecos 5 días desde Casablanca | Sahara y Marrakech",
      
          description:
            "Viaje privado de 5 días por Marruecos desde Casablanca con Fez, Merzouga, Sahara, Todra, Valle del Dades, Ait Ben Haddou y Marrakech.",
      
          // Mapa interno de keywords.
          // No convertir en meta keywords.
          keywords: [
            "viaje marruecos 5 dias",
            "marruecos en 5 dias",
            "marruecos 5 dias",
            "5 dias en marruecos",
            "ruta por marruecos 5 días",
            "viajes marruecos 5 dias",
            "circuitos por marruecos 5 dias",
            "marruecos viaje 5 dias",
            "marruecos tour 5 dias",
            "itinerario marruecos 5 dias",
            "que ver en marruecos en 5 dias",
            "tour marruecos desde casablanca",
          ],
        },
      
        // ─────────────────────────────
        // RESERVA
        // ─────────────────────────────
      
        booking: {
          available: true,
          minimumDays: 5,
          customizable: true,
          contactLabel: "Solicitar presupuesto",
        },
      },
      {
        id: "9",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug:
          "circuito-marruecos-7-dias-desierto",
      
        title:
          "Circuito de 7 días por Marruecos con desierto del Sahara",
      
        shortDescription:
          "Descubre Marruecos en un circuito privado de 7 días desde Casablanca con Marrakech, Fez, Merzouga, el desierto del Sahara, Ait Ben Haddou y los paisajes del Atlas.",
      
        image:
          "/images/tours/7-day-sahara-tour-from-casablanca.webp",
      
        badge:
          "Marruecos completo",
      
        featured:
          true,
      
        category:
          "Circuitos por Marruecos",
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "7 días / 6 noches",
      
        nights:
          6,
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
        languages:
          [
            "Inglés",
            "Francés",
          ],
      
        departure:
          "Casablanca",
      
        arrival:
          "Casablanca",
      
        locations:
          [
            "Casablanca",
            "Marrakech",
            "Alto Atlas",
            "Ait Ben Haddou",
            "Ouarzazate",
            "Valle del Dades",
            "Gargantas del Todra",
            "Merzouga",
            "Erg Chebbi",
            "Desierto del Sahara",
            "Valle del Ziz",
            "Midelt",
            "Ifrane",
            "Fez",
            "Casablanca",
          ],
      
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map:
        {
          stops:
          [
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
      
            {
              name:
                "Marrakech",
      
              position:
                [31.6295, -7.9811],
            },
      
            {
              name:
                "Ait Ben Haddou",
      
              position:
                [31.0472, -7.1298],
            },
      
            {
              name:
                "Valle del Dades",
      
              position:
                [31.3709, -5.9887],
            },
      
            {
              name:
                "Merzouga",
      
              position:
                [31.0802, -4.0133],
            },
      
            {
              name:
                "Erg Chebbi",
      
              position:
                [31.1415, -3.9891],
            },
      
            {
              name:
                "Valle del Ziz",
      
              position:
                [32.0, -4.5],
            },
      
            {
              name:
                "Ifrane",
      
              position:
                [33.5228, -5.1109],
            },
      
            {
              name:
                "Fez",
      
              position:
                [34.0181, -5.0078],
            },
      
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
          ],
        },
      
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights:
        [
          "Descubre Marrakech y sus lugares históricos",
      
          "Cruza el Alto Atlas con paisajes de montaña únicos",
      
          "Visita Ait Ben Haddou y Ouarzazate",
      
          "Explora el Valle del Dades y las Gargantas del Todra",
      
          "Llega a Merzouga y las dunas de Erg Chebbi",
      
          "Vive la experiencia del desierto del Sahara",
      
          "Disfruta de un paseo en camello al atardecer",
      
          "Pasa una noche en un campamento del desierto",
      
          "Recorre el Valle del Ziz y el Medio Atlas",
      
          "Descubre Fez y su antigua medina",
      
          "Combina cultura, ciudades y naturaleza en un solo viaje",
      
          "Disfruta de un circuito privado por Marruecos durante una semana",
        ],
      
      
        // ─────────────────────────────
        // OVERVIEW
        // ─────────────────────────────
      
        overview:
        `
        Descubre Marruecos en este circuito de 7 días con desierto del Sahara,
        una ruta privada que combina ciudades históricas, montañas, valles y una
        experiencia completa en Merzouga.
      
        Este viaje comienza en Casablanca y está diseñado para viajeros que quieren
        conocer diferentes regiones del país en una semana. Durante el recorrido
        visitarás Marrakech, el desierto del Sahara, Fez y algunos de los paisajes
        más conocidos del sur de Marruecos.
      
        La primera etapa del circuito te llevará a Marrakech, una de las ciudades
        más famosas del país. Después cruzaremos el Alto Atlas hacia Ait Ben Haddou,
        Ouarzazate y el Valle del Dades.
      
        La ruta continúa hacia Merzouga, donde encontrarás las dunas de Erg Chebbi.
        Aquí vivirás la experiencia del Sahara con un paseo en camello, una puesta de
        sol sobre las dunas y una noche en un campamento del desierto.
      
        Después del Sahara viajaremos hacia Fez atravesando el Valle del Ziz, Midelt
        y la zona del Medio Atlas. Tendrás tiempo para descubrir Fez, una de las
        ciudades culturales más importantes de Marruecos.
      
        Finalmente regresaremos hacia Casablanca después de recorrer diferentes
        regiones del país.
      
        Este circuito Marruecos 7 días es una opción equilibrada para quienes buscan
        un viaje completo por Marruecos combinando ciudades, cultura, montañas y el
        desierto del Sahara.
        `,
      
      
        // ─────────────────────────────
        // ITINERARIO
        // ─────────────────────────────
      
        itinerary:
        [
      
          {
            day:
              1,
      
            title:
              "Llegada a Casablanca – Marrakech",
      
            description:
            `
            El circuito comienza en Casablanca.
      
            Dependiendo de tu horario de llegada, viajaremos hacia Marrakech, una de
            las ciudades más conocidas de Marruecos.
      
            Tendrás tiempo para descubrir la ciudad, pasear por la medina y conocer
            algunos de sus lugares más importantes.
      
            Marrakech será el punto de inicio de la ruta hacia el desierto y el sur
            de Marruecos.
      
            Pasarás la primera noche en Marrakech.
            `,
      
            highlights:
            [
              "Inicio del circuito en Casablanca",
      
              "Traslado hacia Marrakech",
      
              "Primera visita de la ciudad",
      
              "Noche en Marrakech",
            ],
          },
      
      
          {
            day:
              2,
      
            title:
              "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      
            description:
            `
            Después del desayuno dejaremos Marrakech y comenzaremos el viaje hacia el
            sur.
      
            Cruzaremos el Alto Atlas por una carretera panorámica con vistas a las
            montañas y pueblos tradicionales.
      
            Visitaremos Ait Ben Haddou, uno de los lugares más conocidos del sur de
            Marruecos.
      
            Continuaremos por Ouarzazate hasta llegar al Valle del Dades.
      
            Pasaremos la noche en la zona del Dades.
            `,
      
            highlights:
            [
              "Salida desde Marrakech",
      
              "Cruce del Alto Atlas",
      
              "Visita a Ait Ben Haddou",
      
              "Paso por Ouarzazate",
      
              "Noche en el Valle del Dades",
            ],
          },
      
      
          {
            day:
              3,
      
            title:
              "Valle del Dades – Todra – Merzouga – Sahara",
      
            description:
            `
            Después del desayuno continuaremos hacia el sureste de Marruecos.
      
            Visitaremos las Gargantas del Todra antes de seguir hacia Merzouga.
      
            Al llegar a las dunas de Erg Chebbi comenzará la experiencia del Sahara.
      
            Disfrutarás de un paseo en camello por las dunas y de la puesta de sol.
      
            La noche será en un campamento del desierto.
            `,
      
            highlights:
            [
              "Gargantas del Todra",
      
              "Llegada a Merzouga",
      
              "Dunas de Erg Chebbi",
      
              "Paseo en camello",
      
              "Noche en el Sahara",
            ],
          },
      
      
          {
            day:
              4,
      
            title:
              "Merzouga – Valle del Ziz – Midelt – Fez",
      
            description:
            `
            Después del desayuno dejaremos el Sahara.
      
            La ruta continúa por el Valle del Ziz, conocido por sus palmerales y
            paisajes de montaña.
      
            Pasaremos por Midelt y continuaremos hacia Fez atravesando el Medio Atlas.
      
            Llegaremos a Fez más tarde durante el día.
      
            Pasaremos la noche en Fez.
            `,
      
            highlights:
            [
              "Salida desde Merzouga",
      
              "Valle del Ziz",
      
              "Midelt",
      
              "Medio Atlas",
      
              "Llegada a Fez",
            ],
          },
      
      
          {
            day:
              5,
      
            title:
              "Descubre Fez",
      
            description:
            `
            El día está dedicado a descubrir Fez.
      
            Podrás explorar la antigua medina, sus mercados, talleres artesanales y
            algunos de sus lugares históricos más importantes.
      
            Fez es una de las ciudades culturales principales de Marruecos y ofrece
            una experiencia diferente a Marrakech.
      
            Segunda noche en Fez.
            `,
      
            highlights:
            [
              "Día completo en Fez",
      
              "Medina histórica",
      
              "Artesanía local",
      
              "Mercados tradicionales",
            ],
          },
      
      
          {
            day:
              6,
      
            title:
              "Fez – Casablanca",
      
            description:
            `
            Después del desayuno comenzaremos el regreso hacia Casablanca.
      
            Durante el trayecto podremos realizar paradas según el horario y las
            condiciones del viaje.
      
            Llegaremos a Casablanca donde pasarás la última noche del circuito.
            `,
      
            highlights:
            [
              "Salida desde Fez",
      
              "Ruta hacia Casablanca",
      
              "Paradas flexibles",
      
              "Última noche en Casablanca",
            ],
          },
      
      
          {
            day:
              7,
      
            title:
              "Fin del circuito en Casablanca",
      
            description:
            `
            Después de siete días descubriendo Marruecos, el circuito termina en
            Casablanca según tu horario de salida.
            `,
      
            highlights:
            [
              "Fin del viaje",
      
              "Traslado según horario",
      
              "Último día en Casablanca",
            ],
          },
      
        ],
      
      
        // ─────────────────────────────
        // INCLUIDO
        // ─────────────────────────────
      
        included:
        [
          "Transporte privado durante todo el circuito",
      
          "Conductor profesional de habla inglesa o francesa",
      
          "Seis noches de alojamiento",
      
          "Dos noches en Marrakech",
      
          "Una noche en el Valle del Dades",
      
          "Una noche en un campamento del Sahara",
      
          "Dos noches en Fez",
      
          "Una noche en Casablanca",
      
          "Desayunos y cenas durante las noches indicadas",
      
          "Paseo en camello en Merzouga",
      
          "Tiempo libre en las principales ciudades",
      
          "Paradas flexibles durante el recorrido",
        ],
      
      
        excluded:
        [
          "Almuerzos",
      
          "Bebidas",
      
          "Entradas a monumentos",
      
          "Guías locales salvo solicitud",
      
          "Actividades opcionales",
      
          "Gastos personales",
      
          "Seguro de viaje",
      
          "Propinas",
        ],
      
      
        accommodation:
        [
          {
            night:
              1,
      
            location:
              "Marrakech",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              2,
      
            location:
              "Valle del Dades",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              3,
      
            location:
              "Merzouga",
      
            type:
              "Campamento del Sahara",
          },
      
          {
            night:
              4,
      
            location:
              "Fez",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              5,
      
            location:
              "Fez",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              6,
      
            location:
              "Casablanca",
      
            type:
              "Hotel",
          },
        ],
      
      
        gallery:
        [
          "/images/tours/7-day-sahara-tour-from-casablanca.webp",
        ],
      
      
        faqs:
        [
          {
            question:
              "¿Qué incluye este circuito Marruecos 7 días?",
      
            answer:
              "Incluye transporte privado, alojamiento, visitas principales del itinerario, paseo en camello en Merzouga y una noche en un campamento del Sahara.",
          },
      
          {
            question:
              "¿Este circuito por Marruecos es privado?",
      
            answer:
              "Sí. El viaje es privado para ti y tu grupo con mayor flexibilidad durante el recorrido.",
          },
      
          {
            question:
              "¿El circuito incluye el desierto del Sahara?",
      
            answer:
              "Sí. Merzouga, Erg Chebbi y la experiencia del Sahara son una parte principal del viaje.",
          },
      
          {
            question:
              "¿Cuántos días necesito para conocer Marruecos?",
      
            answer:
              "Una semana en Marruecos permite combinar ciudades importantes, paisajes de montaña y el desierto del Sahara en una sola ruta.",
          },
      
          {
            question:
              "¿Visitamos Marrakech y Fez?",
      
            answer:
              "Sí. El circuito incluye tiempo en Marrakech y Fez, dos de las ciudades más importantes de Marruecos.",
          },
      
          {
            question:
              "¿Dormimos en un campamento del desierto?",
      
            answer:
              "Sí. Pasarás una noche en un campamento del Sahara cerca de las dunas de Erg Chebbi.",
          },
      
          {
            question:
              "¿Está incluido el paseo en camello?",
      
            answer:
              "Sí. El paseo en camello por las dunas de Merzouga está incluido.",
          },
      
          {
            question:
              "¿Visitamos Ait Ben Haddou y las Gargantas del Todra?",
      
            answer:
              "Sí. Ambos lugares forman parte del recorrido hacia y desde el Sahara.",
          },
      
          {
            question:
              "¿Se puede personalizar este viaje de 7 días?",
      
            answer:
              "Sí. Al ser un tour privado podemos adaptar algunos detalles según tus intereses.",
          },
        ],
      
      
        seo:
        {
          title:
            "Circuito Marruecos 7 días | Sahara, Marrakech y Fez",
      
          description:
            "Circuito privado de 7 días por Marruecos con Marrakech, Fez, Merzouga, desierto del Sahara, Ait Ben Haddou y las Gargantas del Todra.",
      
          keywords:
          [
            "circuito marruecos 7 días",
      
            "circuito marruecos 7 dias",
      
            "marruecos en 7 dias",
      
            "viaje marruecos 7 dias",
      
            "tour marruecos 7 dias",
      
            "ruta por marruecos en 7 días",
      
            "marruecos una semana",
      
            "viaje a marruecos 7 dias",
      
            "circuito marruecos desierto",
          ],
        },
      
      
        booking:
        {
          available:
            true,
      
          minimumDays:
            7,
      
          customizable:
            true,
      
          contactLabel:
            "Solicitar presupuesto",
        },
      },
      {
        id: "10",
      
        slug:
          "circuito-marruecos-8-dias-desde-casablanca",
      
        title:
          "Circuito de 8 días por Marruecos desde Casablanca",
      
        shortDescription:
          "Descubre Marruecos en un circuito privado de 8 días desde Casablanca con Rabat, Fez, Merzouga, el desierto del Sahara, Marrakech, Ait Ben Haddou y las ciudades imperiales.",
      
        image:
          "/images/tours/8-day-imperial-cities-tour-from-casablanca.webp",
      
        badge:
          "Ruta completa",
      
        featured:
          true,
      
        category:
          "Circuitos por Marruecos",
      
      
        duration:
          "8 días / 7 noches",
      
        nights:
          7,
      
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
      
        languages:
          [
            "Inglés",
            "Francés",
          ],
      
      
        departure:
          "Casablanca",
      
        arrival:
          "Casablanca",
      
      
        locations:
          [
            "Casablanca",
            "Rabat",
            "Meknes",
            "Volubilis",
            "Fez",
            "Ifrane",
            "Medio Atlas",
            "Midelt",
            "Valle del Ziz",
            "Merzouga",
            "Erg Chebbi",
            "Desierto del Sahara",
            "Gargantas del Todra",
            "Valle del Dades",
            "Ouarzazate",
            "Ait Ben Haddou",
            "Marrakech",
            "Casablanca",
          ],
      
      
        map:
        {
          stops:
          [
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
      
            {
              name:
                "Rabat",
      
              position:
                [34.0209, -6.8416],
            },
      
            {
              name:
                "Meknes",
      
              position:
                [33.8935, -5.5473],
            },
      
            {
              name:
                "Volubilis",
      
              position:
                [34.0734, -5.555],
            },
      
            {
              name:
                "Fez",
      
              position:
                [34.0181, -5.0078],
            },
      
            {
              name:
                "Merzouga",
      
              position:
                [31.0802, -4.0133],
            },
      
            {
              name:
                "Erg Chebbi",
      
              position:
                [31.1415, -3.9891],
            },
      
            {
              name:
                "Marrakech",
      
              position:
                [31.6295, -7.9811],
            },
      
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
          ],
        },
      
      
        highlights:
        [
          "Descubre Casablanca y Rabat al inicio del circuito",
      
          "Visita Meknes y Volubilis, lugares históricos de Marruecos",
      
          "Explora Fez y su antigua medina",
      
          "Cruza el Medio Atlas y los paisajes del interior",
      
          "Descubre Merzouga y las dunas de Erg Chebbi",
      
          "Vive una experiencia completa en el desierto del Sahara",
      
          "Disfruta de un paseo en camello y una noche en el campamento",
      
          "Visita las Gargantas del Todra y el Valle del Dades",
      
          "Conoce Ouarzazate y Ait Ben Haddou",
      
          "Descubre Marrakech antes de regresar a Casablanca",
      
          "Combina cultura, historia y naturaleza en un circuito privado",
        ],
      
      
        overview:
        `
        Descubre Marruecos en este circuito de 8 días desde Casablanca, una ruta
        privada que combina ciudades históricas, paisajes de montaña y la experiencia
        del desierto del Sahara.
      
        Este circuito por Marruecos comienza en Casablanca y recorre algunas de las
        regiones más importantes del país. Durante el viaje conocerás Rabat, Meknes,
        Volubilis y Fez antes de continuar hacia el sur en dirección al Sahara.
      
        Después de descubrir la parte cultural de Marruecos, cruzaremos el Medio Atlas,
        Ifrane, Midelt y el Valle del Ziz hasta llegar a Merzouga.
      
        En el desierto del Sahara vivirás una de las experiencias principales del
        viaje: las dunas de Erg Chebbi, un paseo en camello al atardecer y una noche
        en un campamento tradicional del desierto.
      
        La ruta continúa después hacia las Gargantas del Todra, el Valle del Dades,
        Ouarzazate y Ait Ben Haddou antes de llegar a Marrakech.
      
        Tendrás tiempo para descubrir Marrakech antes de regresar a Casablanca.
      
        Este circuito Marruecos 8 días es ideal para viajeros que buscan un viaje
        equilibrado con ciudades imperiales, cultura, montañas y desierto en una sola
        ruta privada.
        `,
      
      
        itinerary:
        [
      
          {
            day:
              1,
      
            title:
              "Llegada a Casablanca – Rabat",
      
            description:
            `
            El circuito comienza en Casablanca.
      
            Después de la recogida viajaremos hacia Rabat, la capital de Marruecos.
      
            Tendrás tiempo para conocer algunos de sus lugares históricos y disfrutar
            del ambiente tranquilo de la ciudad.
      
            Primera noche en Rabat.
            `,
      
            highlights:
            [
              "Llegada a Casablanca",
      
              "Traslado hacia Rabat",
      
              "Visita de la capital",
      
              "Noche en Rabat",
            ],
          },
      
      
          {
            day:
              2,
      
            title:
              "Rabat – Meknes – Volubilis – Fez",
      
            description:
            `
            Después del desayuno continuaremos hacia Meknes.
      
            Visitaremos una de las ciudades históricas de Marruecos y continuaremos
            hacia Volubilis para conocer sus restos arqueológicos.
      
            Después seguiremos hasta Fez.
      
            Noche en Fez.
            `,
      
            highlights:
            [
              "Meknes",
      
              "Volubilis",
      
              "Ruta hacia Fez",
      
              "Ciudad histórica",
            ],
          },
      
      
          {
            day:
              3,
      
            title:
              "Fez – Ifrane – Medio Atlas – Midelt",
      
            description:
            `
            Dejaremos Fez y comenzaremos el viaje hacia el sur.
      
            Pasaremos por Ifrane y atravesaremos el Medio Atlas.
      
            El paisaje cambia entre montañas, bosques y zonas rurales hasta llegar a
            Midelt.
      
            Noche en Midelt.
            `,
      
            highlights:
            [
              "Salida desde Fez",
      
              "Ifrane",
      
              "Medio Atlas",
      
              "Paisajes de montaña",
      
              "Midelt",
            ],
          },
      
      
          {
            day:
              4,
      
            title:
              "Midelt – Valle del Ziz – Merzouga – Sahara",
      
            description:
            `
            Continuaremos hacia el sur pasando por el Valle del Ziz.
      
            Llegaremos a Merzouga y las dunas de Erg Chebbi.
      
            Por la tarde disfrutarás del paseo en camello y la puesta de sol antes de
            pasar la noche en el campamento del Sahara.
            `,
      
            highlights:
            [
              "Valle del Ziz",
      
              "Llegada a Merzouga",
      
              "Erg Chebbi",
      
              "Paseo en camello",
      
              "Noche en el Sahara",
            ],
          },
      
      
          {
            day:
              5,
      
            title:
              "Merzouga – Gargantas del Todra – Valle del Dades",
      
            description:
            `
            Después del desayuno dejaremos el Sahara.
      
            Visitaremos las Gargantas del Todra y continuaremos hacia el Valle del
            Dades.
      
            Noche en la zona del Dades.
            `,
      
            highlights:
            [
              "Salida desde Merzouga",
      
              "Gargantas del Todra",
      
              "Valle del Dades",
            ],
          },
      
      
          {
            day:
              6,
      
            title:
              "Dades – Ouarzazate – Ait Ben Haddou – Marrakech",
      
            description:
            `
            Continuaremos hacia Ouarzazate y Ait Ben Haddou.
      
            Después cruzaremos el Alto Atlas hasta Marrakech.
      
            Noche en Marrakech.
            `,
      
            highlights:
            [
              "Ouarzazate",
      
              "Ait Ben Haddou",
      
              "Alto Atlas",
      
              "Llegada a Marrakech",
            ],
          },
      
      
          {
            day:
              7,
      
            title:
              "Descubre Marrakech",
      
            description:
            `
            Día dedicado a Marrakech.
      
            Podrás explorar la medina, los zocos, jardines y lugares históricos de
            la ciudad.
      
            Noche en Marrakech.
            `,
      
            highlights:
            [
              "Medina de Marrakech",
      
              "Zocos",
      
              "Cultura local",
      
              "Tiempo libre",
            ],
          },
      
      
          {
            day:
              8,
      
            title:
              "Marrakech – Casablanca",
      
            description:
            `
            Después del desayuno regresaremos hacia Casablanca.
      
            El circuito termina según tu horario de salida.
            `,
      
            highlights:
            [
              "Salida desde Marrakech",
      
              "Regreso a Casablanca",
      
              "Fin del circuito",
            ],
          },
      
        ],
      
      
        included:
        [
          "Transporte privado durante todo el circuito",
      
          "Conductor profesional de habla inglesa o francesa",
      
          "Siete noches de alojamiento",
      
          "Hoteles, riads y campamento del Sahara",
      
          "Desayunos diarios",
      
          "Cenas durante las noches indicadas",
      
          "Paseo en camello en Merzouga",
      
          "Noche en campamento del desierto",
      
          "Tiempo libre en Fez y Marrakech",
      
          "Paradas flexibles durante el recorrido",
        ],
      
      
        excluded:
        [
          "Almuerzos",
      
          "Bebidas",
      
          "Entradas a monumentos",
      
          "Guías locales",
      
          "Actividades opcionales",
      
          "Gastos personales",
      
          "Seguro de viaje",
      
          "Propinas",
        ],
      
      
        accommodation:
        [
          {
            night:
              1,
      
            location:
              "Rabat",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              2,
      
            location:
              "Fez",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              3,
      
            location:
              "Midelt",
      
            type:
              "Hotel",
          },
      
          {
            night:
              4,
      
            location:
              "Merzouga",
      
            type:
              "Campamento del Sahara",
          },
      
          {
            night:
              5,
      
            location:
              "Valle del Dades",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              6,
      
            location:
              "Marrakech",
      
            type:
              "Hotel o riad",
          },
      
          {
            night:
              7,
      
            location:
              "Marrakech",
      
            type:
              "Hotel o riad",
          },
        ],
      
      
        gallery:
        [
          "/images/tours/8-day-imperial-cities-tour-from-casablanca.webp",
        ],
      
      
        faqs:
        [
          {
            question:
              "¿Qué incluye este circuito Marruecos 8 días?",
      
            answer:
              "Incluye transporte privado, alojamiento, paseo en camello en Merzouga, noche en el Sahara y las principales visitas del itinerario.",
          },
      
          {
            question:
              "¿El circuito empieza y termina en Casablanca?",
      
            answer:
              "Sí. El viaje comienza y termina en Casablanca.",
          },
      
          {
            question:
              "¿Este circuito visita las ciudades imperiales?",
      
            answer:
              "Sí. La ruta incluye Rabat, Meknes y Fez, además de otros lugares históricos.",
          },
      
          {
            question:
              "¿Incluye el desierto del Sahara?",
      
            answer:
              "Sí. Merzouga, Erg Chebbi y la experiencia del Sahara forman parte del circuito.",
          },
      
          {
            question:
              "¿Dormimos en un campamento del Sahara?",
      
            answer:
              "Sí. Pasarás una noche en un campamento del desierto después del paseo en camello.",
          },
      
          {
            question:
              "¿Visitamos Marrakech?",
      
            answer:
              "Sí. El circuito incluye tiempo para descubrir Marrakech antes del regreso a Casablanca.",
          },
      
          {
            question:
              "¿Se puede personalizar el circuito?",
      
            answer:
              "Sí. Al ser un tour privado podemos adaptar algunos detalles según tus intereses.",
          },
        ],
      
      
        seo:
        {
          title:
            "Circuito Marruecos 8 días desde Casablanca | Moroccan Trip",
      
          description:
            "Circuito privado de 8 días por Marruecos desde Casablanca con Fez, Merzouga, Sahara, Marrakech, Ait Ben Haddou y ciudades históricas.",
      
          keywords:
          [
            "circuito marruecos 8 dias",
      
            "circuito por marruecos 8 días",
      
            "tour marruecos 8 dias",
      
            "viaje por marruecos 8 dias",
      
            "circuito marruecos desde casablanca",
      
            "ciudades imperiales desde casablanca",
      
            "tour ciudades imperiales marruecos",
          ],
        },
      
      
        booking:
        {
          available:
            true,
      
          minimumDays:
            8,
      
          customizable:
            true,
      
          contactLabel:
            "Solicitar presupuesto",
        },
      },

      {
        id: "11",
      
        // ─────────────────────────────
        // INFORMACIÓN BÁSICA
        // ─────────────────────────────
      
        slug:
          "viaje-marruecos-10-dias-desde-casablanca",
      
        title:
          "Viaje de 10 días por Marruecos desde Casablanca",
      
        shortDescription:
          "Descubre Marruecos en un viaje privado de 10 días desde Casablanca con Fez, Merzouga, el desierto del Sahara, Marrakech, Essaouira, Ait Ben Haddou y los paisajes del Atlas.",
      
        image:
          "/images/tours/10-day-morocco-tour-from-casablanca.webp",
      
        badge:
          "Marruecos completo",
      
        featured:
          true,
      
        category:
          "Morocco Tours",
      
      
        // ─────────────────────────────
        // DETALLES DEL TOUR
        // ─────────────────────────────
      
        duration:
          "10 días / 9 noches",
      
        nights:
          9,
      
      
        tourType:
          "Tour privado",
      
        groupSize:
          "Hasta 4 personas",
      
      
        languages:
          [
            "Inglés",
            "Francés",
          ],
      
      
        departure:
          "Casablanca",
      
        arrival:
          "Casablanca",
      
      
        locations:
          [
            "Casablanca",
            "Rabat",
            "Meknes",
            "Fez",
            "Ifrane",
            "Medio Atlas",
            "Midelt",
            "Valle del Ziz",
            "Merzouga",
            "Erg Chebbi",
            "Desierto del Sahara",
            "Rissani",
            "Gargantas del Todra",
            "Valle del Dades",
            "Ouarzazate",
            "Ait Ben Haddou",
            "Alto Atlas",
            "Marrakech",
            "Essaouira",
          ],
      
      
        // ─────────────────────────────
        // MAPA
        // ─────────────────────────────
      
        map:
        {
          stops:
          [
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
      
            {
              name:
                "Rabat",
      
              position:
                [34.0209, -6.8416],
            },
      
            {
              name:
                "Meknes",
      
              position:
                [33.8935, -5.5473],
            },
      
            {
              name:
                "Fez",
      
              position:
                [34.0181, -5.0078],
            },
      
            {
              name:
                "Ifrane",
      
              position:
                [33.5228, -5.1109],
            },
      
            {
              name:
                "Midelt",
      
              position:
                [32.6806, -4.7369],
            },
      
            {
              name:
                "Merzouga",
      
              position:
                [31.0802, -4.0133],
            },
      
            {
              name:
                "Rissani",
      
              position:
                [31.2823, -4.2651],
            },
      
            {
              name:
                "Gargantas del Todra",
      
              position:
                [31.5889, -5.5928],
            },
      
            {
              name:
                "Valle del Dades",
      
              position:
                [31.3709, -5.9887],
            },
      
            {
              name:
                "Ouarzazate",
      
              position:
                [30.9335, -6.937],
            },
      
            {
              name:
                "Ait Ben Haddou",
      
              position:
                [31.0472, -7.1298],
            },
      
            {
              name:
                "Marrakech",
      
              position:
                [31.6295, -7.9811],
            },
      
            {
              name:
                "Essaouira",
      
              position:
                [31.5085, -9.7595],
            },
      
            {
              name:
                "Casablanca",
      
              position:
                [33.5731, -7.5898],
            },
          ],
        },
      
      
        // ─────────────────────────────
        // DESTACADOS
        // ─────────────────────────────
      
        highlights:
        [
          "Comienza y termina tu viaje privado en Casablanca",
      
          "Descubre Rabat y Meknes durante la ruta",
      
          "Explora Fez y su antigua medina",
      
          "Cruza el Medio Atlas con paisajes de montaña",
      
          "Viaja por el Valle del Ziz hacia el Sahara",
      
          "Descubre Merzouga y las dunas de Erg Chebbi",
      
          "Disfruta de una experiencia completa en el desierto del Sahara",
      
          "Pasea en camello al atardecer y duerme en un campamento del desierto",
      
          "Visita las Gargantas del Todra y el Valle del Dades",
      
          "Conoce Ouarzazate y Ait Ben Haddou",
      
          "Descubre Marrakech y la costa atlántica de Essaouira",
      
          "Combina ciudades, montaña, Sahara y océano en un solo viaje",
        ],
      
      
        // ─────────────────────────────
        // OVERVIEW
        // ─────────────────────────────
      
        overview:
        `
        Descubre Marruecos en 10 días con un viaje privado desde Casablanca que
        combina ciudades históricas, montañas, desierto del Sahara y la costa
        atlántica.
      
        Este itinerario está diseñado para viajeros que quieren conocer diferentes
        regiones de Marruecos en una sola ruta, sin centrarse únicamente en el desierto
        o en las ciudades.
      
        El viaje comienza en Casablanca y continúa hacia Rabat, Meknes y Fez. Durante
        esta primera etapa descubrirás parte de la historia y cultura del norte de
        Marruecos, incluyendo antiguas medinas, arquitectura tradicional y ciudades
        con gran importancia histórica.
      
        Después de Fez, la ruta cambia completamente de paisaje. Cruzaremos Ifrane,
        el Medio Atlas, Midelt y el Valle del Ziz antes de llegar a Merzouga, la puerta
        de entrada al desierto del Sahara.
      
        En Merzouga tendrás tiempo para disfrutar de las dunas de Erg Chebbi, realizar
        un paseo en camello, contemplar la puesta de sol y pasar una noche en un
        campamento tradicional del desierto.
      
        El recorrido continúa por Rissani, las Gargantas del Todra, el Valle del Dades,
        Ouarzazate y Ait Ben Haddou antes de llegar a Marrakech.
      
        Después de descubrir Marrakech, el viaje sigue hacia Essaouira, una ciudad
        costera conocida por su puerto, su medina y su ambiente tranquilo junto al
        océano Atlántico.
      
        Este viaje Marruecos 10 días es una opción completa para quienes buscan una
        experiencia equilibrada con cultura, naturaleza, Sahara, ciudades históricas
        y costa.
        `,
          // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [

    {
      day:
        1,

      title:
        "Llegada a Casablanca – Rabat",

      description:
      `
      El viaje comienza en Casablanca.

      Después de la recogida viajaremos hacia Rabat, la capital de Marruecos.

      Tendrás tiempo para descubrir algunos de sus lugares históricos y disfrutar
      del ambiente tranquilo de la ciudad junto al océano Atlántico.

      Rabat combina historia, arquitectura y una atmósfera más relajada que otras
      grandes ciudades del país.

      Primera noche del viaje en Rabat.
      `,

      highlights:
      [
        "Llegada a Casablanca",

        "Traslado hacia Rabat",

        "Descubrimiento de la capital marroquí",

        "Primera noche en Rabat",
      ],
    },


    {
      day:
        2,

      title:
        "Rabat – Meknes – Fez",

      description:
      `
      Después del desayuno continuaremos hacia Meknes, una de las ciudades
      históricas más importantes de Marruecos.

      Tendrás tiempo para conocer parte de su patrimonio antes de continuar hacia
      Fez.

      Llegaremos a Fez, una de las ciudades culturales más famosas del país y
      conocida por su antigua medina.

      Primera noche en Fez.
      `,

      highlights:
      [
        "Visita de Meknes",

        "Ruta hacia Fez",

        "Llegada a la ciudad histórica",

        "Noche en Fez",
      ],
    },


    {
      day:
        3,

      title:
        "Día completo para descubrir Fez",

      description:
      `
      Este día está dedicado a explorar Fez.

      Podrás descubrir la antigua medina, sus mercados tradicionales, talleres
      artesanales y lugares históricos.

      Fez conserva una de las zonas antiguas mejor conocidas de Marruecos y ofrece
      una experiencia cultural diferente a Marrakech.

      Segunda noche en Fez.
      `,

      highlights:
      [
        "Medina antigua de Fez",

        "Mercados tradicionales",

        "Artesanía marroquí",

        "Arquitectura histórica",

        "Tiempo libre para explorar",
      ],
    },


    {
      day:
        4,

      title:
        "Fez – Ifrane – Midelt – Valle del Ziz – Merzouga",

      description:
      `
      Después del desayuno dejaremos Fez y comenzaremos la ruta hacia el sur.

      Cruzaremos la zona de Ifrane y el Medio Atlas, con paisajes de montaña,
      bosques y pueblos tradicionales.

      Continuaremos hacia Midelt y después por el Valle del Ziz, famoso por sus
      palmerales rodeados de montañas.

      Poco a poco el paisaje cambiará hasta llegar a Merzouga, junto a las dunas
      de Erg Chebbi.

      Segunda parte del viaje: comienza la experiencia del Sahara.
      `,

      highlights:
      [
        "Salida desde Fez",

        "Paso por Ifrane",

        "Cruce del Medio Atlas",

        "Midelt",

        "Valle del Ziz",

        "Llegada a Merzouga",
      ],
    },


    {
      day:
        5,

      title:
        "Merzouga – Erg Chebbi – Sahara Desert Experience",

      description:
      `
      El quinto día está dedicado al desierto del Sahara.

      Tendrás tiempo para descubrir la zona de Merzouga y los alrededores de las
      dunas de Erg Chebbi.

      Podrás conocer parte de la vida local del desierto y disfrutar del paisaje
      antes de comenzar la experiencia en las dunas.

      Por la tarde realizarás el paseo en camello por el Sahara.

      Después de contemplar la puesta de sol llegarás al campamento del desierto,
      donde disfrutarás de la cena y pasarás una noche especial bajo las estrellas.
      `,

      highlights:
      [
        "Día en Merzouga",

        "Dunas de Erg Chebbi",

        "Paseo en camello",

        "Puesta de sol en el Sahara",

        "Campamento del desierto",
      ],
    },


    {
      day:
        6,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
      Después del desayuno dejaremos Merzouga y continuaremos hacia el oeste.

      Pasaremos por Rissani antes de llegar a las Gargantas del Todra.

      Tendrás tiempo para caminar entre las enormes paredes del cañón y disfrutar
      de uno de los paisajes naturales más impresionantes del sur de Marruecos.

      Después continuaremos hacia el Valle del Dades.

      Noche en la zona del Dades.
      `,

      highlights:
      [
        "Salida desde Merzouga",

        "Rissani",

        "Gargantas del Todra",

        "Valle del Dades",

        "Paisajes del sur de Marruecos",
      ],
    },


    {
      day:
        7,

      title:
        "Dades – Ouarzazate – Ait Ben Haddou – Marrakech",

      description:
      `
      Después del desayuno continuaremos por los paisajes del sur de Marruecos.

      Visitaremos Ouarzazate, conocida como una de las puertas del desierto, y
      continuaremos hacia Ait Ben Haddou.

      Este antiguo ksar es uno de los lugares más conocidos del país por su
      arquitectura tradicional de tierra.

      Después cruzaremos el Alto Atlas hacia Marrakech.

      Noche en Marrakech.
      `,

      highlights:
      [
        "Ouarzazate",

        "Ait Ben Haddou",

        "Cruce del Alto Atlas",

        "Llegada a Marrakech",
      ],
    },


    {
      day:
        8,

      title:
        "Descubre Marrakech",

      description:
      `
      Día completo para conocer Marrakech.

      Podrás explorar la famosa medina, los zocos tradicionales, plazas históricas
      y otros lugares importantes de la ciudad.

      Tener un día completo permite disfrutar Marrakech sin prisas antes de
      continuar hacia la costa atlántica.

      Segunda noche en Marrakech.
      `,

      highlights:
      [
        "Medina de Marrakech",

        "Zocos tradicionales",

        "Cultura local",

        "Tiempo libre",
      ],
    },


    {
      day:
        9,

      title:
        "Marrakech – Essaouira",

      description:
      `
      Dejaremos Marrakech y viajaremos hacia Essaouira, una ciudad costera del
      Atlántico conocida por su puerto, sus murallas históricas y su ambiente
      relajado.

      Tendrás tiempo para caminar por la medina, disfrutar del océano y descubrir
      una parte diferente de Marruecos.

      Noche en Essaouira.
      `,

      highlights:
      [
        "Ruta hacia la costa atlántica",

        "Visita de Essaouira",

        "Puerto histórico",

        "Medina costera",
      ],
    },


    {
      day:
        10,

      title:
        "Essaouira – Casablanca",

      description:
      `
      Después del desayuno comenzaremos el regreso hacia Casablanca.

      Según tu horario de salida, realizaremos el traslado final.

      Aquí termina tu viaje privado de 10 días por Marruecos después de conocer
      ciudades históricas, el Sahara, Marrakech y la costa atlántica.
      `,

      highlights:
      [
        "Salida desde Essaouira",

        "Regreso a Casablanca",

        "Fin del circuito",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante todo el viaje",

    "Conductor profesional de habla inglesa o francesa",

    "Nueve noches de alojamiento",

    "Alojamiento en hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cenas durante las noches indicadas",

    "Paseo en camello en Merzouga",

    "Noche en campamento del desierto",

    "Tiempo libre en Fez y Marrakech",

    "Paradas flexibles durante el recorrido",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Rabat",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        3,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        4,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        5,

      location:
        "Merzouga",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        6,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },

    {
      night:
        7,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        8,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        9,

      location:
        "Essaouira",

      type:
        "Hotel o riad",
    },
  ],
    // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/10-day-morocco-tour-from-casablanca.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué incluye este viaje de 10 días por Marruecos desde Casablanca?",

      answer:
        "Incluye transporte privado, alojamiento durante nueve noches, paseo en camello en Merzouga, una noche en un campamento del Sahara y las principales paradas del itinerario.",
    },


    {
      question:
        "¿Este viaje por Marruecos de 10 días es privado?",

      answer:
        "Sí. Es un viaje privado para ti y tu grupo, con transporte privado y flexibilidad para realizar paradas durante el recorrido.",
    },


    {
      question:
        "¿Dónde comienza y termina el tour?",

      answer:
        "El viaje comienza y termina en Casablanca, creando una ruta circular que permite conocer diferentes regiones de Marruecos sin regresar al punto de salida durante el recorrido.",
    },


    {
      question:
        "¿Qué lugares visitamos durante los 10 días?",

      answer:
        "La ruta incluye Casablanca, Rabat, Meknes, Fez, Ifrane, Midelt, el Valle del Ziz, Merzouga, el Sahara, las Gargantas del Todra, el Valle del Dades, Ouarzazate, Ait Ben Haddou, Marrakech y Essaouira.",
    },


    {
      question:
        "¿Este itinerario incluye el desierto del Sahara?",

      answer:
        "Sí. Merzouga y las dunas de Erg Chebbi son una de las experiencias principales del viaje. Incluye paseo en camello y una noche en un campamento del Sahara.",
    },


    {
      question:
        "¿Cuánto tiempo pasamos en Merzouga?",

      answer:
        "El itinerario permite disfrutar de la zona de Merzouga con tiempo suficiente para conocer el desierto, realizar el paseo en camello y vivir la experiencia del campamento.",
    },


    {
      question:
        "¿Visitamos Fez y Marrakech?",

      answer:
        "Sí. El viaje incluye tiempo para descubrir Fez, una de las ciudades culturales más importantes de Marruecos, y Marrakech, una de las ciudades más conocidas del país.",
    },


    {
      question:
        "¿Visitamos Essaouira durante el viaje?",

      answer:
        "Sí. Essaouira forma parte de la última etapa del itinerario. Es una ciudad costera con puerto histórico, medina y un ambiente diferente al interior de Marruecos.",
    },


    {
      question:
        "¿Está incluido el paseo en camello en Merzouga?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido dentro de la experiencia del Sahara.",
    },


    {
      question:
        "¿Dormimos una noche en el desierto?",

      answer:
        "Sí. Pasarás una noche en un campamento del Sahara después del paseo en camello y la puesta de sol.",
    },


    {
      question:
        "¿Visitamos Ait Ben Haddou y Ouarzazate?",

      answer:
        "Sí. Ambos lugares forman parte de la ruta después del desierto, antes de continuar hacia Marrakech.",
    },


    {
      question:
        "¿Es un buen itinerario para conocer Marruecos en 10 días?",

      answer:
        "Sí. Diez días permiten combinar ciudades históricas, montañas, Sahara, Marrakech y la costa atlántica con un ritmo más cómodo que los viajes más cortos.",
    },


    {
      question:
        "¿Hay muchas horas de carretera durante el viaje?",

      answer:
        "Marruecos es un país amplio y algunas etapas incluyen varias horas de conducción. El itinerario está dividido con diferentes paradas y noches intermedias para que el viaje sea más cómodo.",
    },


    {
      question:
        "¿Se puede personalizar este viaje de 10 días?",

      answer:
        "Sí. Al ser un viaje privado, podemos adaptar algunos detalles según tus fechas, intereses y preferencias de alojamiento.",
    },


    {
      question:
        "¿Este tour es adecuado para familias?",

      answer:
        "Sí. Las familias pueden solicitar este viaje privado. Si viajas con niños, indícanos sus edades para organizar mejor los tiempos de carretera y las actividades.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Marruecos 10 días desde Casablanca | Sahara y Marrakech",


    description:
      "Viaje privado de 10 días por Marruecos desde Casablanca con Fez, Merzouga, Sahara, Marrakech, Essaouira, Ait Ben Haddou y paisajes del Atlas.",


    // Mapa interno de keywords.
    // No usar como meta keywords.
    keywords:
    [
      "10 dias marruecos",

      "viaje marruecos 10 dias",

      "circuito marruecos 10 dias",

      "tour marruecos 10 dias",

      "itinerario marruecos 10 dias",

      "marruecos en 10 dias",

      "viaje por marruecos",

      "circuito marruecos desierto",

      "desierto del Sahara",

      "ciudades imperiales de marruecos",

      "Merzouga",

      "Marrakech",

      "Essaouira",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      10,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "12",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "circuito-marruecos-al-completo-14-dias",

  title: "Circuito por Marruecos al completo en 14 días desde Casablanca",

  shortDescription:
    "Descubre Marruecos al completo en un circuito privado de 14 días desde Casablanca con Rabat, Tánger, Chefchaouen, Fez, Merzouga, el Sahara, Marrakech y Essaouira.",

  image:
    "/images/tours/14-day-morocco-tour-from-casablanca.webp",

  badge: "Marruecos al completo",

  featured: true,

  category: "Circuitos por Marruecos",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "14 días / 13 noches",

  nights: 13,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Casablanca",

  arrival: "Casablanca",

  locations: [
    "Casablanca",
    "Rabat",
    "Tánger",
    "Chefchaouen",
    "Fez",
    "Ifrane",
    "Medio Atlas",
    "Midelt",
    "Valle del Ziz",
    "Merzouga",
    "Erg Chebbi",
    "Desierto del Sahara",
    "Rissani",
    "Gargantas del Todra",
    "Valle del Dades",
    "Ouarzazate",
    "Ait Ben Haddou",
    "Alto Atlas",
    "Marrakech",
    "Essaouira",
    "Casablanca",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Casablanca",
        position: [33.5731, -7.5898],
      },
      {
        name: "Rabat",
        position: [34.0209, -6.8416],
      },
      {
        name: "Tánger",
        position: [35.7595, -5.834],
      },
      {
        name: "Chefchaouen",
        position: [35.1688, -5.2636],
      },
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Ifrane",
        position: [33.5228, -5.1109],
      },
      {
        name: "Midelt",
        position: [32.6806, -4.7369],
      },
      {
        name: "Merzouga",
        position: [31.0802, -4.0133],
      },
      {
        name: "Rissani",
        position: [31.2823, -4.2651],
      },
      {
        name: "Gargantas del Todra",
        position: [31.5889, -5.5928],
      },
      {
        name: "Valle del Dades",
        position: [31.3709, -5.9887],
      },
      {
        name: "Ouarzazate",
        position: [30.9335, -6.937],
      },
      {
        name: "Ait Ben Haddou",
        position: [31.0472, -7.1298],
      },
      {
        name: "Marrakech",
        position: [31.6295, -7.9811],
      },
      {
        name: "Essaouira",
        position: [31.5085, -9.7595],
      },
      {
        name: "Casablanca",
        position: [33.5731, -7.5898],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Recorre Marruecos al completo durante 14 días en un tour privado",
    "Comienza y termina el viaje en Casablanca",
    "Descubre Rabat y la costa atlántica",
    "Visita Tánger y conoce el norte de Marruecos",
    "Pasea por las calles azules de Chefchaouen",
    "Disfruta de un día completo para descubrir Fez",
    "Cruza el Medio Atlas camino del Sahara",
    "Viaja por el Valle del Ziz hasta Merzouga",
    "Disfruta de dos noches en la zona de Merzouga",
    "Explora las dunas de Erg Chebbi",
    "Realiza un paseo en camello por el Sahara",
    "Pasa una noche en un campamento del desierto",
    "Visita las Gargantas del Todra y el Valle del Dades",
    "Descubre Ouarzazate y Ait Ben Haddou",
    "Cruza el Alto Atlas hasta Marrakech",
    "Disfruta de un día completo en Marrakech",
    "Pasa dos noches en Essaouira junto al Atlántico",
    "Combina norte, ciudades históricas, montaña, Sahara y costa en un solo viaje",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Descubre Marruecos al completo en este circuito privado de 14 días desde
    Casablanca. La ruta combina el norte del país, ciudades históricas, las
    montañas del Atlas, el desierto del Sahara, Marrakech y la costa atlántica.

    El viaje comienza en Casablanca y continúa hacia Rabat antes de subir al
    norte hasta Tánger. Desde allí conocerás Chefchaouen, famosa por su medina
    de calles azules y su ubicación entre las montañas del Rif.

    La siguiente etapa lleva hasta Fez, donde dispondrás de un día completo para
    descubrir su antigua medina, los mercados tradicionales y los barrios
    históricos sin necesidad de continuar inmediatamente hacia otro destino.

    Después de Fez comienza una parte completamente diferente del recorrido.
    Cruzaremos Ifrane y el Medio Atlas, pasaremos por Midelt y seguiremos el
    Valle del Ziz hasta llegar a Merzouga.

    Tendrás dos noches en la zona del desierto. Esto permite conocer Erg Chebbi
    con más tranquilidad, disfrutar del paisaje del Sahara y realizar el paseo
    en camello antes de pasar una noche en un campamento entre las dunas.

    Desde Merzouga, el circuito continúa por Rissani, las Gargantas del Todra y
    el Valle del Dades. Después visitaremos Ouarzazate y Ait Ben Haddou antes de
    cruzar el Alto Atlas hacia Marrakech.

    En Marrakech tendrás un día completo para explorar la medina, los zocos y el
    ambiente de la ciudad. La última parte de la ruta se dirige hacia Essaouira,
    donde pasarás dos noches junto al océano Atlántico antes de regresar a
    Casablanca.

    Este circuito Marruecos al completo está pensado para viajeros que quieren
    realizar un viaje organizado por Marruecos con variedad y tiempo suficiente
    para conocer cada región. En dos semanas podrás combinar cultura, montaña,
    desierto y costa dentro de una sola ruta privada.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title: "Llegada a Casablanca",

      description: `
        Tu circuito por Marruecos comienza en Casablanca.

        La recogida puede realizarse en el aeropuerto, en tu alojamiento o en
        otro punto acordado de la ciudad según tus planes de viaje.

        Este primer día tiene un ritmo tranquilo para que puedas descansar
        después de la llegada y tener un primer contacto con Casablanca.

        Dependiendo del horario, podrás disponer de tiempo libre para conocer
        parte de la ciudad antes de comenzar la ruta por Marruecos al día
        siguiente.

        Primera noche en Casablanca.
      `,

      highlights: [
        "Llegada a Casablanca",
        "Recogida privada",
        "Primer contacto con Marruecos",
        "Tiempo libre según el horario",
        "Noche en Casablanca",
      ],
    },

    {
      day: 2,

      title: "Casablanca – Rabat",

      description: `
        Después del desayuno saldremos de Casablanca hacia Rabat.

        La capital de Marruecos combina monumentos históricos, barrios tranquilos
        y vistas hacia el océano Atlántico.

        Tendrás tiempo para conocer la ciudad a un ritmo cómodo y descubrir una
        de las antiguas ciudades imperiales de Marruecos.

        Pasarás la segunda noche en Rabat.
      `,

      highlights: [
        "Salida desde Casablanca",
        "Viaje hacia Rabat",
        "Descubrimiento de la capital",
        "Ambiente atlántico",
        "Noche en Rabat",
      ],
    },

    {
      day: 3,

      title: "Rabat – Tánger",

      description: `
        Dejaremos Rabat y continuaremos hacia el norte de Marruecos.

        La ruta nos lleva hasta Tánger, una ciudad situada frente al estrecho de
        Gibraltar y marcada durante siglos por el contacto entre diferentes
        culturas.

        Tendrás tiempo para conocer el ambiente de la ciudad, disfrutar de sus
        vistas y explorar algunos de sus lugares más conocidos.

        Noche en Tánger.
      `,

      highlights: [
        "Salida desde Rabat",
        "Ruta hacia el norte",
        "Llegada a Tánger",
        "Tiempo para descubrir la ciudad",
        "Noche en Tánger",
      ],
    },

    {
      day: 4,

      title: "Tánger – Chefchaouen",

      description: `
        Después del desayuno viajaremos hacia Chefchaouen.

        Situada entre las montañas del Rif, Chefchaouen es conocida por sus
        calles estrechas, pequeñas plazas y edificios pintados en diferentes
        tonos de azul.

        Tendrás tiempo para caminar por la medina, descubrir sus rincones y
        disfrutar de un ritmo más tranquilo que en las grandes ciudades.

        Noche en Chefchaouen.
      `,

      highlights: [
        "Salida desde Tánger",
        "Paisajes del Rif",
        "Llegada a Chefchaouen",
        "Medina azul",
        "Noche en Chefchaouen",
      ],
    },

    {
      day: 5,

      title: "Chefchaouen – Fez",

      description: `
        Disfruta de la mañana en Chefchaouen antes de continuar hacia Fez.

        Durante el recorrido atravesaremos paisajes del norte y zonas rurales
        del interior de Marruecos.

        Llegaremos a Fez más tarde durante el día. Tendrás tiempo para instalarte
        en el alojamiento y comenzar a descubrir el ambiente de una de las
        ciudades más importantes del país.

        Primera noche en Fez.
      `,

      highlights: [
        "Mañana en Chefchaouen",
        "Ruta hacia Fez",
        "Paisajes del norte de Marruecos",
        "Llegada a Fez",
        "Primera noche en Fez",
      ],
    },

    {
      day: 6,

      title: "Día completo para descubrir Fez",

      description: `
        Este día está dedicado a Fez.

        Podrás explorar la antigua medina, caminar por sus calles tradicionales
        y conocer zonas dedicadas a la artesanía, los mercados y la arquitectura
        histórica.

        Tener un día completo permite descubrir la ciudad con más tranquilidad
        y sin tener que continuar por carretera la misma tarde.

        Segunda noche en Fez.
      `,

      highlights: [
        "Día completo en Fez",
        "Medina histórica",
        "Mercados tradicionales",
        "Artesanía local",
        "Segunda noche en Fez",
      ],
    },

    {
      day: 7,

      title: "Fez – Ifrane – Medio Atlas – Valle del Ziz – Merzouga",

      description: `
        Dejaremos Fez y comenzaremos el viaje hacia el sureste de Marruecos.

        Pasaremos por Ifrane y cruzaremos el Medio Atlas, donde el paisaje cambia
        entre bosques, carreteras de montaña y zonas rurales.

        Continuaremos por Midelt antes de llegar al Valle del Ziz, conocido por
        sus palmerales y sus amplias vistas.

        Durante la tarde aparecerán los paisajes más áridos del sureste hasta
        llegar a Merzouga, junto a las dunas de Erg Chebbi.

        Primera noche en Merzouga, en hotel o riad.
      `,

      highlights: [
        "Salida desde Fez",
        "Paso por Ifrane",
        "Cruce del Medio Atlas",
        "Midelt",
        "Valle del Ziz",
        "Llegada a Merzouga",
        "Primera noche junto al Sahara",
      ],
    },

    {
      day: 8,

      title: "Merzouga – Erg Chebbi – Paseo en camello – Campamento del Sahara",

      description: `
        El día está dedicado a disfrutar de Merzouga y del desierto del Sahara.

        Tendrás tiempo para conocer los alrededores de Erg Chebbi y contemplar
        el paisaje antes de entrar en las dunas.

        Por la tarde comenzará el paseo en camello. Cruzarás las dunas de Erg
        Chebbi mientras cambia la luz del desierto y podrás contemplar la puesta
        de sol.

        Después llegarás al campamento del Sahara, donde pasarás la segunda noche
        en la zona de Merzouga.
      `,

      highlights: [
        "Día en la zona de Merzouga",
        "Dunas de Erg Chebbi",
        "Paisajes del Sahara",
        "Paseo en camello",
        "Puesta de sol",
        "Noche en campamento del desierto",
      ],
    },

    {
      day: 9,

      title: "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description: `
        Si lo deseas, podrás levantarte temprano para contemplar el amanecer
        sobre las dunas antes del desayuno.

        Dejaremos Merzouga y pasaremos por la zona de Rissani antes de continuar
        hacia las Gargantas del Todra.

        Allí tendrás tiempo para caminar entre las altas paredes del cañón y
        disfrutar de un paisaje completamente diferente al Sahara.

        Después continuaremos hacia el Valle del Dades.

        Noche en la zona del Dades.
      `,

      highlights: [
        "Amanecer opcional en el Sahara",
        "Salida desde Merzouga",
        "Paso por Rissani",
        "Gargantas del Todra",
        "Valle del Dades",
        "Noche en el Dades",
      ],
    },

    {
      day: 10,

      title: "Valle del Dades – Ouarzazate – Ait Ben Haddou – Marrakech",

      description: `
        Continuaremos el circuito por los paisajes del sur de Marruecos.

        La ruta pasa por Ouarzazate antes de llegar a Ait Ben Haddou, uno de los
        ksars más conocidos del país por su arquitectura tradicional de tierra.

        Después de la visita cruzaremos las montañas del Alto Atlas.

        La carretera ofrece paisajes panorámicos y pequeños pueblos antes de
        llegar a Marrakech.

        Primera noche en Marrakech.
      `,

      highlights: [
        "Salida desde el Valle del Dades",
        "Ouarzazate",
        "Visita de Ait Ben Haddou",
        "Cruce del Alto Atlas",
        "Llegada a Marrakech",
      ],
    },

    {
      day: 11,

      title: "Día completo para descubrir Marrakech",

      description: `
        Tendrás un día completo para conocer Marrakech.

        Podrás explorar la medina, caminar por los zocos, descubrir plazas y
        lugares históricos o disfrutar del ambiente de la ciudad a tu propio
        ritmo.

        Esta jornada permite hacer una pausa después del recorrido por el Sahara
        y las montañas.

        Segunda noche en Marrakech.
      `,

      highlights: [
        "Día completo en Marrakech",
        "Medina",
        "Zocos tradicionales",
        "Tiempo libre",
        "Segunda noche en Marrakech",
      ],
    },

    {
      day: 12,

      title: "Marrakech – Essaouira",

      description: `
        Dejaremos Marrakech y viajaremos hacia la costa atlántica.

        Llegaremos a Essaouira, una ciudad conocida por su medina, sus murallas,
        el puerto y el ambiente relajado junto al océano.

        Tendrás tiempo para empezar a descubrir la ciudad y caminar por sus calles.

        Primera noche en Essaouira.
      `,

      highlights: [
        "Salida desde Marrakech",
        "Ruta hacia la costa atlántica",
        "Llegada a Essaouira",
        "Medina y puerto",
        "Primera noche en Essaouira",
      ],
    },

    {
      day: 13,

      title: "Día completo en Essaouira",

      description: `
        Disfruta de un día completo en Essaouira.

        Puedes recorrer la medina, visitar el puerto, pasear junto al océano o
        simplemente disfrutar del ritmo tranquilo de la ciudad.

        Después de varios días recorriendo diferentes regiones de Marruecos,
        esta jornada ofrece tiempo para descansar y conocer mejor la costa
        atlántica.

        Segunda noche en Essaouira.
      `,

      highlights: [
        "Día completo en Essaouira",
        "Medina histórica",
        "Puerto",
        "Costa atlántica",
        "Tiempo libre",
        "Segunda noche en Essaouira",
      ],
    },

    {
      day: 14,

      title: "Essaouira – Casablanca",

      description: `
        Después del desayuno comenzaremos el regreso hacia Casablanca.

        Esta es la última etapa del circuito de 14 días por Marruecos.

        El viaje termina después de haber recorrido el norte del país, Fez, las
        montañas del Atlas, Merzouga y el Sahara, Marrakech y la costa atlántica.

        La llegada y el traslado final en Casablanca se organizarán según tus
        planes de viaje.
      `,

      highlights: [
        "Salida desde Essaouira",
        "Regreso hacia Casablanca",
        "Última ruta por la costa",
        "Llegada a Casablanca",
        "Fin del circuito",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado durante todo el circuito",
    "Conductor profesional de habla inglesa o francesa",
    "Trece noches de alojamiento",
    "Alojamiento en hoteles, riads y campamento del Sahara",
    "Desayunos durante el recorrido",
    "Cenas durante las noches indicadas",
    "Paseo en camello por las dunas de Erg Chebbi",
    "Una noche en campamento del Sahara",
    "Dos noches en Fez",
    "Dos noches en la zona de Merzouga",
    "Dos noches en Marrakech",
    "Dos noches en Essaouira",
    "Tiempo libre para explorar los principales destinos",
    "Paradas flexibles para fotografías y descansos",
    "Recogida y traslado final en Casablanca",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos",
    "Cenas salvo cuando estén indicadas como incluidas",
    "Bebidas",
    "Entradas a monumentos y atracciones",
    "Guías locales salvo que formen parte de los servicios acordados",
    "Actividades opcionales",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no mencionados en la sección de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Casablanca",
      type: "Hotel o riad",
    },
    {
      night: 2,
      location: "Rabat",
      type: "Hotel o riad",
    },
    {
      night: 3,
      location: "Tánger",
      type: "Hotel o riad",
    },
    {
      night: 4,
      location: "Chefchaouen",
      type: "Hotel o riad",
    },
    {
      night: 5,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 6,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 7,
      location: "Merzouga",
      type: "Hotel o riad",
    },
    {
      night: 8,
      location: "Merzouga",
      type: "Campamento del Sahara",
    },
    {
      night: 9,
      location: "Valle del Dades",
      type: "Hotel o riad",
    },
    {
      night: 10,
      location: "Marrakech",
      type: "Hotel o riad",
    },
    {
      night: 11,
      location: "Marrakech",
      type: "Hotel o riad",
    },
    {
      night: 12,
      location: "Essaouira",
      type: "Hotel o riad",
    },
    {
      night: 13,
      location: "Essaouira",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/14-day-morocco-tour-from-casablanca.webp",
  ],

  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿Este circuito por Marruecos al completo es privado?",

      answer:
        "Sí. Es un circuito privado para ti y tu grupo, con transporte privado y más flexibilidad durante la ruta.",
    },
    {
      question:
        "¿Dónde comienza y termina el circuito de 14 días?",

      answer:
        "El viaje comienza y termina en Casablanca. La ruta recorre el norte de Marruecos, Fez, el Sahara, Marrakech y Essaouira antes de regresar a Casablanca.",
    },
    {
      question:
        "¿Qué lugares visitamos durante el circuito?",

      answer:
        "El itinerario incluye Casablanca, Rabat, Tánger, Chefchaouen, Fez, el Medio Atlas, el Valle del Ziz, Merzouga, el Sahara, las Gargantas del Todra, el Valle del Dades, Ait Ben Haddou, Marrakech y Essaouira.",
    },
    {
      question:
        "¿Dos semanas son suficientes para recorrer Marruecos?",

      answer:
        "Dos semanas permiten conocer varias regiones con un ritmo más cómodo que los itinerarios más cortos. Esta ruta combina ciudades, montañas, Sahara y costa atlántica.",
    },
    {
      question:
        "¿El circuito incluye Chefchaouen?",

      answer:
        "Sí. Pasarás una noche en Chefchaouen y tendrás tiempo para descubrir su medina y sus conocidas calles azules.",
    },
    {
      question:
        "¿Cuánto tiempo pasamos en Fez?",

      answer:
        "El circuito incluye dos noches en Fez y un día completo para explorar la medina, mercados, artesanía y zonas históricas.",
    },
    {
      question:
        "¿Cuánto tiempo pasamos en Merzouga?",

      answer:
        "Pasarás dos noches en la zona de Merzouga: una en hotel o riad y otra en un campamento del Sahara.",
    },
    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi forma parte de la experiencia del Sahara.",
    },
    {
      question:
        "¿Dormimos en el desierto del Sahara?",

      answer:
        "Sí. Una de las noches en Merzouga se pasa en un campamento del Sahara junto a las dunas de Erg Chebbi.",
    },
    {
      question:
        "¿Tenemos un día completo en Marrakech?",

      answer:
        "Sí. El itinerario incluye dos noches en Marrakech y un día completo para conocer la ciudad.",
    },
    {
      question:
        "¿El circuito incluye Essaouira?",

      answer:
        "Sí. Pasarás dos noches en Essaouira, lo que permite disponer de un día completo para explorar la medina, el puerto y la costa atlántica.",
    },
    {
      question:
        "¿Hay muchas horas de carretera durante los 14 días?",

      answer:
        "La ruta cubre una gran parte de Marruecos, por lo que algunos días incluyen varias horas de conducción. El itinerario compensa estos trayectos con días completos en Fez, Merzouga, Marrakech y Essaouira.",
    },
    {
      question:
        "¿Se puede personalizar el circuito?",

      answer:
        "Sí. Al ser un viaje privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
    },
    {
      question:
        "¿Este circuito es adecuado para familias?",

      answer:
        "Las familias pueden solicitar el circuito. Si viajas con niños, indícanos sus edades para organizar mejor los tiempos de carretera, las paradas y el alojamiento.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "Circuito Marruecos al Completo 14 días | Sahara y Ciudades",

    description:
      "Circuito privado por Marruecos al completo durante 14 días con Chefchaouen, Fez, Merzouga, Sahara, Marrakech, Essaouira y salida desde Casablanca.",

    // Cluster propio de ID 12.
    // No convertir este array en <meta name="keywords">.
    keywords: [
      "circuito marruecos al completo",
      "circuito completo por marruecos",
      "viaje organizado marruecos",
      "marruecos viaje organizado",
      "viaje marruecos organizado",
      "circuito marruecos 14 dias",
      "viaje marruecos 14 dias",
      "marruecos en dos semanas",
      "viaje de dos semanas por marruecos",
      "circuito marruecos norte desierto y costa",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 14,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},
{
  id: "13",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "circuito-marruecos-12-dias",

  title: "Circuito por Marruecos de 12 días desde Casablanca",

  shortDescription:
    "Recorre Marruecos en un circuito privado de 12 días desde Casablanca con Tánger, Chefchaouen, Fez, Merzouga, el Sahara, Marrakech, Essaouira y los paisajes del Atlas.",

  image: "/images/tours/12-day-morocco-tour.webp",

  badge: "Gran aventura por Marruecos",

  featured: true,

  category: "Circuitos por Marruecos",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "12 días / 11 noches",

  nights: 11,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Casablanca",

  arrival: "Casablanca",

  locations: [
    "Casablanca",
    "Rabat",
    "Tánger",
    "Chefchaouen",
    "Fez",
    "Ifrane",
    "Medio Atlas",
    "Midelt",
    "Valle del Ziz",
    "Merzouga",
    "Erg Chebbi",
    "Desierto del Sahara",
    "Rissani",
    "Gargantas del Todra",
    "Valle del Dades",
    "Ouarzazate",
    "Ait Ben Haddou",
    "Alto Atlas",
    "Marrakech",
    "Essaouira",
    "Casablanca",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Casablanca",
        position: [33.5731, -7.5898],
      },
      {
        name: "Rabat",
        position: [34.0209, -6.8416],
      },
      {
        name: "Tánger",
        position: [35.7595, -5.834],
      },
      {
        name: "Chefchaouen",
        position: [35.1688, -5.2636],
      },
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Ifrane",
        position: [33.5228, -5.1109],
      },
      {
        name: "Midelt",
        position: [32.6806, -4.7369],
      },
      {
        name: "Merzouga",
        position: [31.0802, -4.0133],
      },
      {
        name: "Rissani",
        position: [31.2823, -4.2651],
      },
      {
        name: "Gargantas del Todra",
        position: [31.5889, -5.5928],
      },
      {
        name: "Valle del Dades",
        position: [31.3709, -5.9887],
      },
      {
        name: "Ouarzazate",
        position: [30.9335, -6.937],
      },
      {
        name: "Ait Ben Haddou",
        position: [31.0472, -7.1298],
      },
      {
        name: "Marrakech",
        position: [31.6295, -7.9811],
      },
      {
        name: "Essaouira",
        position: [31.5085, -9.7595],
      },
      {
        name: "Casablanca",
        position: [33.5731, -7.5898],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Comienza y termina tu circuito privado en Casablanca",
    "Descubre Rabat durante la ruta hacia el norte",
    "Conoce Tánger y su ambiente entre Atlántico y Mediterráneo",
    "Pasa una noche en Chefchaouen y recorre sus calles azules",
    "Disfruta de dos noches en Fez y un día completo en la ciudad",
    "Cruza Ifrane y los paisajes del Medio Atlas",
    "Viaja por el Valle del Ziz hacia el sureste de Marruecos",
    "Llega a Merzouga y contempla las dunas de Erg Chebbi",
    "Disfruta de tiempo adicional para conocer el Sahara",
    "Realiza un paseo en camello por las dunas al atardecer",
    "Pasa una noche en un campamento del desierto",
    "Visita las Gargantas del Todra y el Valle del Dades",
    "Descubre Ouarzazate y Ait Ben Haddou",
    "Cruza el Alto Atlas hasta Marrakech",
    "Disfruta de un día completo para explorar Marrakech",
    "Termina la ruta junto al Atlántico en Essaouira",
    "Combina ciudades, montaña, desierto y costa en un solo circuito",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Este circuito por Marruecos de 12 días desde Casablanca combina algunas de
    las regiones más interesantes del país en una sola ruta privada.

    El viaje comienza en Casablanca y se dirige hacia el norte pasando por Rabat
    hasta llegar a Tánger. Desde allí continuarás hacia Chefchaouen, donde las
    calles azules, las pequeñas plazas y el entorno de las montañas del Rif
    ofrecen un ambiente muy diferente al de las grandes ciudades marroquíes.

    La siguiente etapa del circuito lleva hasta Fez. Pasarás dos noches en la
    ciudad y tendrás un día completo para descubrir su antigua medina, mercados,
    zonas de artesanía y barrios históricos.

    Desde Fez, el paisaje cambia por completo. Cruzaremos Ifrane y el Medio Atlas,
    pasaremos por Midelt y continuaremos hacia el Valle del Ziz antes de llegar
    a Merzouga y las dunas de Erg Chebbi.

    En el Sahara tendrás tiempo para conocer mejor la zona de Merzouga antes de
    realizar el paseo en camello, contemplar la puesta de sol y pasar una noche
    en un campamento del desierto.

    Después del Sahara, la ruta continúa por Rissani, las Gargantas del Todra y
    el Valle del Dades. Más adelante descubrirás Ouarzazate y Ait Ben Haddou antes
    de cruzar el Alto Atlas hacia Marrakech.

    Tendrás un día completo para explorar Marrakech sin necesidad de continuar
    por carretera esa misma tarde.

    La última etapa del circuito por Marruecos lleva hasta Essaouira, donde podrás
    disfrutar de la medina, el puerto y la costa atlántica antes de regresar a
    Casablanca.

    Este viaje organizado por Marruecos está pensado para viajeros que quieren
    combinar ciudades históricas, Sahara, montañas y costa en una ruta privada de
    12 días con un ritmo equilibrado.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title: "Llegada a Casablanca",

      description: `
        Tu circuito por Marruecos comienza en Casablanca.

        Según tus planes de viaje, la recogida puede realizarse en el aeropuerto,
        en tu alojamiento o en otro punto acordado de la ciudad.

        El primer día tiene un ritmo tranquilo para que puedas instalarte después
        del viaje y comenzar a descubrir Casablanca si tu horario de llegada lo
        permite.

        Primera noche en Casablanca.
      `,

      highlights: [
        "Llegada a Casablanca",
        "Recogida privada",
        "Traslado al alojamiento",
        "Tiempo libre según el horario",
        "Noche en Casablanca",
      ],
    },

    {
      day: 2,

      title: "Casablanca – Rabat – Tánger",

      description: `
        Después del desayuno saldremos de Casablanca y comenzaremos la ruta hacia
        el norte.

        Haremos una parada en Rabat, capital de Marruecos y una de sus antiguas
        ciudades imperiales.

        Tendrás tiempo para conocer parte de la ciudad antes de continuar hacia
        Tánger.

        Llegaremos más tarde a Tánger, donde podrás disfrutar de un primer paseo
        y del ambiente de esta ciudad del norte.

        Noche en Tánger.
      `,

      highlights: [
        "Salida desde Casablanca",
        "Visita de Rabat",
        "Ruta hacia el norte",
        "Llegada a Tánger",
        "Noche en Tánger",
      ],
    },

    {
      day: 3,

      title: "Tánger – Chefchaouen",

      description: `
        Disfruta de algo de tiempo en Tánger antes de continuar hacia el interior.

        La carretera nos llevará hacia las montañas del Rif y Chefchaouen.

        Al llegar tendrás tiempo para caminar por la medina, recorrer sus calles
        pintadas de azul y descubrir pequeñas plazas y barrios tradicionales.

        Pasar la noche permite disfrutar de Chefchaouen con más calma que una
        visita rápida durante el día.

        Noche en Chefchaouen.
      `,

      highlights: [
        "Mañana en Tánger",
        "Ruta por las montañas del Rif",
        "Llegada a Chefchaouen",
        "Medina azul",
        "Noche en Chefchaouen",
      ],
    },

    {
      day: 4,

      title: "Chefchaouen – Fez",

      description: `
        Tendrás algo de tiempo para disfrutar de Chefchaouen por la mañana antes
        de comenzar el viaje hacia Fez.

        Durante la ruta atravesaremos paisajes rurales del norte y del interior
        de Marruecos.

        Llegaremos a Fez más tarde durante el día.

        Después de instalarte podrás descansar o comenzar a conocer el ambiente
        de la ciudad.

        Primera noche en Fez.
      `,

      highlights: [
        "Mañana en Chefchaouen",
        "Ruta hacia Fez",
        "Paisajes del norte",
        "Llegada a Fez",
        "Primera noche en Fez",
      ],
    },

    {
      day: 5,

      title: "Día completo para descubrir Fez",

      description: `
        Este día está dedicado a Fez.

        Podrás explorar la antigua medina, caminar por calles tradicionales y
        descubrir mercados, talleres artesanales y edificios históricos.

        Fez es una de las ciudades culturales más importantes de Marruecos y
        merece tiempo suficiente para conocerla sin prisas.

        Segunda noche en Fez.
      `,

      highlights: [
        "Día completo en Fez",
        "Medina histórica",
        "Mercados tradicionales",
        "Artesanía local",
        "Segunda noche en Fez",
      ],
    },

    {
      day: 6,

      title: "Fez – Ifrane – Medio Atlas – Valle del Ziz – Merzouga",

      description: `
        Dejaremos Fez y comenzaremos el viaje hacia el sureste.

        Pasaremos por Ifrane y cruzaremos el Medio Atlas, donde el paisaje combina
        bosques, carreteras de montaña y pequeñas poblaciones.

        Después de pasar por Midelt continuaremos hacia el Valle del Ziz.

        Poco a poco el paisaje se vuelve más árido hasta llegar a Merzouga, situada
        junto a las dunas de Erg Chebbi.

        Primera noche en la zona de Merzouga.
      `,

      highlights: [
        "Salida desde Fez",
        "Paso por Ifrane",
        "Cruce del Medio Atlas",
        "Midelt",
        "Valle del Ziz",
        "Llegada a Merzouga",
      ],
    },

    {
      day: 7,

      title: "Merzouga – Erg Chebbi – Paseo en camello – Campamento del Sahara",

      description: `
        El día está dedicado a disfrutar de Merzouga y del desierto del Sahara.

        Tendrás tiempo para conocer los alrededores de Erg Chebbi y disfrutar del
        paisaje antes de entrar en las dunas.

        Por la tarde comenzarás el paseo en camello por el Sahara.

        Cruzarás las dunas mientras cambia la luz del desierto y podrás contemplar
        la puesta de sol.

        Después llegarás al campamento, donde pasarás una noche rodeado por el
        paisaje del Sahara.
      `,

      highlights: [
        "Tiempo en Merzouga",
        "Dunas de Erg Chebbi",
        "Paseo en camello",
        "Puesta de sol en el Sahara",
        "Noche en campamento del desierto",
      ],
    },

    {
      day: 8,

      title: "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description: `
        Si lo deseas, podrás levantarte temprano para contemplar el amanecer sobre
        las dunas antes del desayuno.

        Dejaremos Merzouga y pasaremos por Rissani antes de continuar hacia las
        Gargantas del Todra.

        Tendrás tiempo para caminar entre las altas paredes del cañón y disfrutar
        del entorno natural.

        Después seguiremos hacia el Valle del Dades.

        Noche en la zona del Dades.
      `,

      highlights: [
        "Amanecer opcional en el Sahara",
        "Salida desde Merzouga",
        "Paso por Rissani",
        "Gargantas del Todra",
        "Valle del Dades",
        "Noche en el Dades",
      ],
    },

    {
      day: 9,

      title: "Dades – Ouarzazate – Ait Ben Haddou – Marrakech",

      description: `
        Después del desayuno continuaremos por los paisajes del sur de Marruecos.

        Pasaremos por Ouarzazate antes de llegar a Ait Ben Haddou, uno de los ksars
        más conocidos del país.

        Tendrás tiempo para descubrir el lugar antes de comenzar el cruce del Alto
        Atlas.

        La carretera ofrece vistas panorámicas y pequeños pueblos antes de llegar
        a Marrakech.

        Primera noche en Marrakech.
      `,

      highlights: [
        "Salida desde el Valle del Dades",
        "Ouarzazate",
        "Ait Ben Haddou",
        "Cruce del Alto Atlas",
        "Llegada a Marrakech",
      ],
    },

    {
      day: 10,

      title: "Día completo para descubrir Marrakech",

      description: `
        Tendrás un día completo para conocer Marrakech.

        Podrás explorar la medina, caminar por los zocos, descubrir plazas,
        jardines y lugares históricos o simplemente disfrutar del ambiente de
        la ciudad.

        Tener un día completo permite descubrir Marrakech sin combinar la visita
        con otro largo trayecto por carretera.

        Segunda noche en Marrakech.
      `,

      highlights: [
        "Día completo en Marrakech",
        "Medina",
        "Zocos tradicionales",
        "Tiempo libre",
        "Segunda noche en Marrakech",
      ],
    },

    {
      day: 11,

      title: "Marrakech – Essaouira",

      description: `
        Dejaremos Marrakech y viajaremos hacia la costa atlántica.

        Llegaremos a Essaouira, conocida por su medina, su puerto, sus murallas y
        el ambiente relajado junto al océano.

        Tendrás tiempo para caminar por la ciudad, visitar el puerto y disfrutar
        de la costa.

        Noche en Essaouira.
      `,

      highlights: [
        "Salida desde Marrakech",
        "Ruta hacia el Atlántico",
        "Llegada a Essaouira",
        "Medina y puerto",
        "Noche en Essaouira",
      ],
    },

    {
      day: 12,

      title: "Essaouira – Casablanca",

      description: `
        Después del desayuno comenzaremos el regreso hacia Casablanca.

        Esta es la última etapa del circuito de 12 días por Marruecos.

        La ruta termina después de haber combinado el norte del país,
        Chefchaouen, Fez, el Sahara, Marrakech y la costa atlántica.

        La llegada y el traslado final en Casablanca se organizarán según tus
        planes de viaje.
      `,

      highlights: [
        "Salida desde Essaouira",
        "Regreso hacia Casablanca",
        "Último recorrido por la costa",
        "Llegada a Casablanca",
        "Fin del circuito",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado durante todo el circuito",
    "Conductor profesional de habla inglesa o francesa",
    "Once noches de alojamiento",
    "Alojamiento en hoteles, riads y campamento del Sahara",
    "Desayunos durante el recorrido",
    "Cenas durante las noches indicadas",
    "Paseo en camello por las dunas de Erg Chebbi",
    "Una noche en campamento del Sahara",
    "Dos noches en Fez",
    "Dos noches en la zona de Merzouga",
    "Dos noches en Marrakech",
    "Una noche en Essaouira",
    "Tiempo libre para explorar los principales destinos",
    "Paradas flexibles para fotografías y descansos",
    "Recogida y traslado final en Casablanca",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos",
    "Cenas salvo cuando estén indicadas como incluidas",
    "Bebidas",
    "Entradas a monumentos y atracciones",
    "Guías locales salvo que formen parte de los servicios acordados",
    "Actividades opcionales",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no mencionados en la sección de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Casablanca",
      type: "Hotel o riad",
    },
    {
      night: 2,
      location: "Tánger",
      type: "Hotel o riad",
    },
    {
      night: 3,
      location: "Chefchaouen",
      type: "Hotel o riad",
    },
    {
      night: 4,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 5,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 6,
      location: "Merzouga",
      type: "Hotel o riad",
    },
    {
      night: 7,
      location: "Merzouga",
      type: "Campamento del Sahara",
    },
    {
      night: 8,
      location: "Valle del Dades",
      type: "Hotel o riad",
    },
    {
      night: 9,
      location: "Marrakech",
      type: "Hotel o riad",
    },
    {
      night: 10,
      location: "Marrakech",
      type: "Hotel o riad",
    },
    {
      night: 11,
      location: "Essaouira",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/12-day-morocco-tour.webp",
  ],

  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿Este circuito por Marruecos de 12 días es privado?",

      answer:
        "Sí. Es un circuito privado para ti y tu grupo, con transporte privado y más flexibilidad para realizar paradas durante la ruta.",
    },
    {
      question:
        "¿Dónde comienza y termina el circuito?",

      answer:
        "El viaje comienza y termina en Casablanca. Durante 12 días recorre el norte de Marruecos, el Sahara, Marrakech y la costa atlántica.",
    },
    {
      question:
        "¿El circuito incluye Chefchaouen?",

      answer:
        "Sí. Pasarás una noche en Chefchaouen y tendrás tiempo para descubrir su medina y sus conocidas calles azules.",
    },
    {
      question:
        "¿Cuánto tiempo pasamos en Fez?",

      answer:
        "El itinerario incluye dos noches en Fez y un día completo para explorar la medina, mercados tradicionales, artesanía y zonas históricas.",
    },
    {
      question:
        "¿Tenemos tiempo suficiente en Merzouga?",

      answer:
        "Sí. Llegas a Merzouga el sexto día y pasas la jornada siguiente con más tiempo en la zona antes del paseo en camello y la noche en el campamento del Sahara.",
    },
    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido como parte de la experiencia del Sahara.",
    },
    {
      question:
        "¿Dormimos en un campamento del Sahara?",

      answer:
        "Sí. La séptima noche se pasa en un campamento del desierto cerca de Merzouga y las dunas de Erg Chebbi.",
    },
    {
      question:
        "¿Visitamos las Gargantas del Todra?",

      answer:
        "Sí. Las Gargantas del Todra se visitan durante el recorrido desde Merzouga hacia el Valle del Dades.",
    },
    {
      question:
        "¿Visitamos Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou forma parte de la ruta antes de cruzar el Alto Atlas hacia Marrakech.",
    },
    {
      question:
        "¿Cuánto tiempo pasamos en Marrakech?",

      answer:
        "El circuito incluye dos noches en Marrakech y un día completo para descubrir la medina, los zocos y otros lugares de la ciudad.",
    },
    {
      question:
        "¿El circuito incluye Essaouira?",

      answer:
        "Sí. Pasarás la última noche en Essaouira y tendrás tiempo para conocer la medina, el puerto y la costa atlántica antes del regreso a Casablanca.",
    },
    {
      question:
        "¿Hay muchas horas de carretera durante el circuito?",

      answer:
        "La ruta recorre varias regiones de Marruecos, por lo que algunos días incluyen varias horas de conducción. El itinerario compensa los trayectos largos con días completos en Fez y Marrakech, tiempo adicional en Merzouga y paradas durante el recorrido.",
    },
    {
      question:
        "¿Los guías locales están incluidos?",

      answer:
        "Los guías locales de ciudad no están incluidos por defecto salvo que formen parte de los servicios acordados. Se pueden solicitar durante la planificación del tour.",
    },
    {
      question:
        "¿Se puede personalizar este circuito por Marruecos?",

      answer:
        "Sí. Al ser un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses, preferencias de alojamiento y planes posteriores.",
    },
    {
      question:
        "¿Qué debo llevar para el Sahara?",

      answer:
        "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede cambiar después de la puesta de sol.",
    },
    {
      question:
        "¿Este circuito es adecuado para familias?",

      answer:
        "Las familias pueden solicitar este tour privado. Si viajas con niños, indícanos sus edades para organizar mejor los tiempos de conducción, las paradas y el alojamiento.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "Circuito Marruecos 12 días | Sahara, Ciudades y Costa",

    description:
      "Circuito privado por Marruecos de 12 días desde Casablanca con Chefchaouen, Fez, Merzouga, Sahara, Marrakech, Essaouira y Ait Ben Haddou.",

    // Cluster propio de ID 13.
    // No convertir en meta keywords.
    keywords: [
      "circuito marruecos",
      "circuito por marruecos",
      "circuitos por marruecos",
      "viaje organizado marruecos",
      "marruecos viaje organizado",
      "circuito marruecos 12 dias",
      "ciudades imperiales y desierto",
      "marruecos ciudades imperiales y desierto",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 12,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},
{
  id: "14",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "tanger-a-chefchaouen-tour-4-dias",

  title: "Tour de 4 días de Tánger a Chefchaouen",

  shortDescription:
    "Viaja de Tánger a Chefchaouen en un tour privado de 4 días por el norte de Marruecos, con las montañas del Rif, Fez, Meknes y Rabat antes de regresar a Tánger.",

  image: "/images/tours/4-day-tangier-chefchaouen-tour.webp",

  badge: "Norte de Marruecos",

  featured: true,

  category: "Tours por Marruecos",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "4 días / 3 noches",

  nights: 3,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Tánger",

  arrival: "Tánger",

  locations: [
    "Tánger",
    "Montañas del Rif",
    "Chefchaouen",
    "Fez",
    "Meknes",
    "Rabat",
    "Tánger",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Tánger",
        position: [35.7595, -5.834],
      },
      {
        name: "Chefchaouen",
        position: [35.1688, -5.2636],
      },
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Meknes",
        position: [33.8935, -5.5473],
      },
      {
        name: "Rabat",
        position: [34.0209, -6.8416],
      },
      {
        name: "Tánger",
        position: [35.7595, -5.834],
      },
    ],
  },

  // ─────────────────────────────
  // PRECIO
  // ─────────────────────────────

  // No hay un precio fijo.
  // El presupuesto final depende del número de viajeros,
  // el nivel de alojamiento y los servicios solicitados.

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Comienza y termina tu viaje privado en Tánger",
    "Recorre los paisajes de las montañas del Rif",
    "Viaja de Tánger a Chefchaouen con tiempo para descubrir la ciudad azul",
    "Pasa una noche en Chefchaouen en lugar de regresar el mismo día",
    "Explora las calles azules y pequeñas plazas de la medina de Chefchaouen",
    "Continúa la ruta por el norte de Marruecos hasta Fez",
    "Descubre la antigua medina y la artesanía tradicional de Fez",
    "Visita Meknes, una de las ciudades imperiales de Marruecos",
    "Conoce Rabat y pasa la última noche en la capital",
    "Regresa a Tánger después de una ruta cultural de cuatro días",
    "Disfruta de transporte privado y paradas flexibles durante el recorrido",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Descubre el norte de Marruecos en un viaje privado de cuatro días que conecta
    Tánger, Chefchaouen, Fez, Meknes y Rabat.

    La ruta comienza en Tánger y se dirige hacia las montañas del Rif. El primer
    destino principal es Chefchaouen, conocida por su medina de tonos azules,
    sus calles estrechas y su ambiente tranquilo entre montañas.

    Viajar de Tánger a Chefchaouen en varios días permite disfrutar de mucho más
    que una excursión rápida. Pasarás la primera noche en la ciudad azul, por lo
    que tendrás tiempo para caminar por la medina, descubrir sus pequeñas plazas
    y disfrutar del ambiente cuando disminuye el número de visitantes.

    Después de Chefchaouen, el viaje continúa hacia Fez. La ciudad ofrece un
    fuerte contraste con la tranquilidad del Rif: su antigua medina está llena
    de mercados, talleres artesanales, calles históricas y barrios tradicionales.

    El tercer día conecta Fez con Meknes y Rabat. Meknes aporta otra perspectiva
    de la historia imperial de Marruecos, mientras que Rabat combina patrimonio,
    barrios históricos y el ambiente de la capital junto al Atlántico.

    La última jornada regresa desde Rabat hasta Tánger, completando una ruta
    Tánger Chefchaouen que continúa mucho más allá de la ciudad azul.

    Este tour a Chefchaouen desde Tánger está pensado para viajeros que quieren
    conocer varias caras del norte de Marruecos en un recorrido privado, sin
    limitar la experiencia a un desplazamiento de ida y vuelta en el mismo día.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title: "Tánger – Montañas del Rif – Chefchaouen",

      description: `
        Tu tour de 4 días comienza con la recogida en Tánger.

        Dejaremos la costa y viajaremos hacia el interior del norte de Marruecos.
        Poco a poco, el paisaje cambia mientras la carretera se acerca a las
        montañas del Rif.

        La ruta de Tánger a Chefchaouen permite disfrutar de vistas de montaña,
        pueblos y paisajes rurales antes de llegar a una de las ciudades más
        reconocibles del norte del país.

        Al llegar a Chefchaouen tendrás tiempo para descubrir la medina a tu
        propio ritmo. Podrás caminar por sus calles azules, pequeñas plazas,
        tiendas locales y barrios tradicionales.

        A diferencia de una excursión rápida a Chefchaouen desde Tánger, este
        itinerario incluye una noche en la ciudad. Esto permite disfrutar de la
        medina durante la tarde y también de un ambiente más tranquilo al final
        del día.

        Pasarás la primera noche en Chefchaouen.
      `,

      highlights: [
        "Recogida en Tánger",
        "Salida hacia las montañas del Rif",
        "Paisajes del norte de Marruecos",
        "Llegada a Chefchaouen",
        "Paseo por la medina azul",
        "Calles tradicionales y pequeñas plazas",
        "Tiempo libre en Chefchaouen",
        "Noche en Chefchaouen",
      ],
    },

    {
      day: 2,

      title: "Chefchaouen – Fez",

      description: `
        Después del desayuno podrás disfrutar de un poco más de tiempo en
        Chefchaouen antes de continuar el viaje.

        La mañana ofrece otra oportunidad para caminar por la medina, descubrir
        rincones que no viste el día anterior o simplemente disfrutar del paisaje
        de las montañas del Rif.

        Más tarde dejaremos Chefchaouen y continuaremos hacia Fez atravesando
        diferentes paisajes del norte de Marruecos.

        Fez ofrece una experiencia completamente distinta. Su antigua medina es
        más extensa y está llena de calles estrechas, mercados tradicionales,
        talleres artesanales y edificios históricos.

        Dependiendo de la hora de llegada, tendrás tiempo para comenzar a
        descubrir la ciudad y conocer parte de su ambiente cultural.

        La segunda noche será en Fez.
      `,

      highlights: [
        "Desayuno en Chefchaouen",
        "Último tiempo libre en la ciudad azul",
        "Salida hacia Fez",
        "Paisajes rurales durante el trayecto",
        "Llegada a Fez",
        "Descubrimiento de la medina histórica",
        "Mercados y artesanía tradicional",
        "Noche en Fez",
      ],
    },

    {
      day: 3,

      title: "Fez – Meknes – Rabat",

      description: `
        Después del desayuno dejaremos Fez y continuaremos hacia Meknes.

        Meknes es una de las ciudades imperiales de Marruecos y presenta un
        ambiente diferente al de Fez. Tendrás tiempo para conocer parte de sus
        zonas históricas y observar su arquitectura tradicional antes de continuar
        el recorrido.

        Desde Meknes seguiremos hacia Rabat, capital de Marruecos.

        Rabat combina lugares históricos con avenidas más abiertas y un ambiente
        atlántico. Dependiendo de la hora de llegada, podrás descubrir parte de
        la ciudad y conocer algunas de las zonas que reflejan su historia.

        Esta etapa convierte la ruta Tánger Chefchaouen en un recorrido cultural
        más completo, combinando la ciudad azul con dos importantes ciudades
        históricas.

        Pasarás la tercera y última noche del tour en Rabat.
      `,

      highlights: [
        "Desayuno en Fez",
        "Salida hacia Meknes",
        "Visita de una ciudad imperial",
        "Arquitectura e historia de Meknes",
        "Continuación hacia Rabat",
        "Descubrimiento de la capital de Marruecos",
        "Tiempo libre según el horario",
        "Noche en Rabat",
      ],
    },

    {
      day: 4,

      title: "Rabat – Tánger",

      description: `
        Después del desayuno tendrás algo de tiempo adicional en Rabat antes de
        comenzar el viaje de regreso hacia Tánger.

        Dejaremos la capital y viajaremos hacia el norte. Durante el recorrido
        podrán realizarse paradas para descansar, tomar fotografías o comer según
        el horario y las condiciones del viaje.

        La llegada a Tánger completa cuatro días recorriendo una parte variada del
        norte de Marruecos, desde las montañas del Rif y Chefchaouen hasta Fez,
        Meknes y Rabat.

        El tour termina en Tánger con el traslado al punto acordado según tus
        planes de viaje.
      `,

      highlights: [
        "Desayuno en Rabat",
        "Último tiempo en la capital",
        "Salida hacia el norte de Marruecos",
        "Paradas flexibles durante el trayecto",
        "Regreso a Tánger",
        "Traslado final al punto acordado",
        "Fin del tour de cuatro días",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado durante todo el recorrido",
    "Conductor profesional de habla inglesa o francesa",
    "Tres noches de alojamiento",
    "Una noche en Chefchaouen",
    "Una noche en Fez",
    "Una noche en Rabat",
    "Desayuno diario durante el viaje",
    "Tiempo libre para descubrir los principales destinos",
    "Paradas flexibles para fotografías y descansos",
    "Recogida en Tánger",
    "Regreso y traslado final en Tánger",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos y cenas salvo que se acuerden previamente",
    "Bebidas",
    "Entradas a monumentos y atracciones",
    "Guías locales salvo solicitud previa",
    "Actividades opcionales",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no indicados en la sección de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Chefchaouen",
      type: "Hotel o riad",
    },
    {
      night: 2,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 3,
      location: "Rabat",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/4-day-tangier-chefchaouen-tour.webp",
  ],

  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿El tour de 4 días de Tánger a Chefchaouen es privado?",

      answer:
        "Sí. El viaje es privado para ti y tu grupo. El transporte privado permite mayor flexibilidad para realizar paradas, descansar y adaptar el ritmo del recorrido.",
    },

    {
      question:
        "¿Dónde comienza y termina la ruta de Tánger a Chefchaouen?",

      answer:
        "El recorrido comienza y termina en Tánger. Después de visitar Chefchaouen, la ruta continúa por Fez, Meknes y Rabat antes de regresar a Tánger durante el cuarto día.",
    },

    {
      question:
        "¿Cuántos días dura el tour Tánger Chefchaouen?",

      answer:
        "El viaje dura 4 días y 3 noches. Pasarás una noche en Chefchaouen, una noche en Fez y una noche en Rabat antes del regreso a Tánger.",
    },

    {
      question:
        "¿Pasamos una noche en Chefchaouen?",

      answer:
        "Sí. La primera noche se pasa en Chefchaouen. Esto permite disfrutar de la ciudad azul con más tranquilidad y evita tener que regresar a Tánger el mismo día.",
    },

    {
      question:
        "¿Cómo es el trayecto de Tánger a Chefchaouen?",

      answer:
        "El viaje se realiza por carretera atravesando el norte de Marruecos y la región de las montañas del Rif. El tiempo de conducción puede variar según el tráfico, las condiciones de la carretera y las paradas realizadas durante el recorrido.",
    },

    {
      question:
        "¿Qué podemos ver en Chefchaouen durante el tour?",

      answer:
        "Tendrás tiempo para recorrer la medina, caminar por sus conocidas calles azules, descubrir pequeñas plazas y tiendas locales y disfrutar del ambiente de montaña de Chefchaouen.",
    },

    {
      question:
        "¿Este tour a Chefchaouen desde Tánger incluye Fez?",

      answer:
        "Sí. Después de Chefchaouen, el viaje continúa hasta Fez. Allí pasarás la segunda noche y tendrás tiempo para conocer la antigua medina, sus mercados y zonas tradicionales.",
    },

    {
      question:
        "¿Visitamos Meknes durante la ruta?",

      answer:
        "Sí. Meknes se visita durante el tercer día, cuando viajamos desde Fez hacia Rabat.",
    },

    {
      question:
        "¿El recorrido por el norte de Marruecos incluye Rabat?",

      answer:
        "Sí. Rabat forma parte del tercer día del itinerario y allí pasarás la última noche antes de regresar a Tánger.",
    },

    {
      question:
        "¿Cuál es la diferencia entre este viaje y una excursión de Tánger a Chefchaouen en un día?",

      answer:
        "Esta es una ruta de cuatro días, no una excursión de ida y vuelta el mismo día. Incluye una noche en Chefchaouen y continúa hacia Fez, Meknes y Rabat, por lo que permite conocer una parte mucho más amplia del norte de Marruecos.",
    },

    {
      question:
        "¿Es una buena opción si quiero conocer más lugares además de Chefchaouen?",

      answer:
        "Sí. El itinerario está pensado para viajeros que quieren combinar Chefchaouen con Fez, Meknes y Rabat en lugar de limitar el viaje únicamente al trayecto entre Tánger y la ciudad azul.",
    },

    {
      question:
        "¿Los guías locales están incluidos en Chefchaouen o Fez?",

      answer:
        "Los guías locales no están incluidos por defecto. Si deseas una visita guiada en Chefchaouen, Fez u otra ciudad, puedes solicitarla al organizar el tour.",
    },

    {
      question:
        "¿Los desayunos están incluidos durante el viaje?",

      answer:
        "Sí. El desayuno diario está incluido con el alojamiento durante las tres noches del recorrido.",
    },

    {
      question:
        "¿Se puede personalizar la ruta Tánger Chefchaouen de 4 días?",

      answer:
        "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses, preferencias de alojamiento y planes posteriores de viaje.",
    },

    {
      question:
        "¿Este tour privado desde Tánger es adecuado para familias?",

      answer:
        "Las familias pueden solicitar este recorrido. Si viajas con niños, indícanos sus edades para organizar de forma adecuada los tiempos de carretera, las paradas y el alojamiento.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "Tánger a Chefchaouen 4 días | Tour por el norte de Marruecos",

    description:
      "Tour privado de 4 días de Tánger a Chefchaouen con Fez, Meknes y Rabat. Descubre el norte de Marruecos con 3 noches y regreso a Tánger.",

    // Mapa interno de palabras clave.
    // No convertir este array en una etiqueta meta keywords.
    keywords: [
      "tanger a chefchaouen",
      "de tanger a chefchaouen",
      "tanger chefchaouen",
      "chefchaouen tanger",
      "chefchaouen desde tanger",
      "tour chefchaouen desde tanger",
      "ruta tanger chefchaouen",
      "norte de marruecos",
      "norte marruecos",
      "marruecos norte",
      "tour de tanger a chefchaouen",
      "tour privado tanger chefchaouen",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 4,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},

{
  id: "15",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "tanger-a-marrakech",

  title: "Tour de Tánger a Marrakech por el Desierto en 6 Días",

  shortDescription:
    "Viaja de Tánger a Marrakech en un tour privado de 6 días por Chefchaouen, Fez, Merzouga y el desierto del Sahara, con paseo en camello, campamento entre las dunas y llegada final a Marrakech.",

  image: "/images/tours/6-day-tangier-marrakech-tour.webp",

  badge: "Tánger a Marrakech",

  featured: true,

  category: "Tours por el Desierto",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "6 días / 5 noches",

  nights: 5,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Tánger",

  arrival: "Marrakech",

  locations: [
    "Tánger",
    "Chefchaouen",
    "Fez",
    "Ifrane",
    "Medio Atlas",
    "Midelt",
    "Valle del Ziz",
    "Merzouga",
    "Erg Chebbi",
    "Desierto del Sahara",
    "Rissani",
    "Gargantas del Todra",
    "Valle del Dades",
    "Ouarzazate",
    "Ait Ben Haddou",
    "Alto Atlas",
    "Marrakech",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Tánger",
        position: [35.7595, -5.834],
      },
      {
        name: "Chefchaouen",
        position: [35.1688, -5.2636],
      },
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Ifrane",
        position: [33.5228, -5.1109],
      },
      {
        name: "Midelt",
        position: [32.6806, -4.7369],
      },
      {
        name: "Merzouga",
        position: [31.0802, -4.0133],
      },
      {
        name: "Rissani",
        position: [31.2823, -4.2651],
      },
      {
        name: "Gargantas del Todra",
        position: [31.5889, -5.5928],
      },
      {
        name: "Valle del Dades",
        position: [31.3709, -5.9887],
      },
      {
        name: "Ouarzazate",
        position: [30.9335, -6.937],
      },
      {
        name: "Ait Ben Haddou",
        position: [31.0472, -7.1298],
      },
      {
        name: "Marrakech",
        position: [31.6295, -7.9811],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Comienza tu viaje privado en Tánger y termina directamente en Marrakech",
    "Cruza el norte de Marruecos hasta la ciudad azul de Chefchaouen",
    "Pasa una noche en Chefchaouen y disfruta de tiempo para recorrer su medina",
    "Continúa hacia Fez, una de las ciudades culturales más importantes de Marruecos",
    "Cruza Ifrane y los paisajes del Medio Atlas camino del Sahara",
    "Recorre el Valle del Ziz antes de llegar a Merzouga",
    "Disfruta de dos noches en la zona de Merzouga",
    "Contempla las dunas doradas de Erg Chebbi",
    "Explora el entorno del desierto antes del paseo en camello",
    "Cruza las dunas del Sahara en camello al atardecer",
    "Pasa una noche en un campamento del desierto",
    "Visita Rissani y las Gargantas del Todra",
    "Viaja por el Valle del Dades y los paisajes del sur de Marruecos",
    "Pasa una noche en Ouarzazate",
    "Visita Ait Ben Haddou antes de cruzar el Alto Atlas",
    "Termina la ruta Tánger Marrakech en la ciudad de Marrakech",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Este tour de Tánger a Marrakech en 6 días es una ruta privada para viajeros
    que quieren cruzar Marruecos de norte a sur sin limitarse a un traslado
    directo entre las dos ciudades.

    El viaje comienza en Tánger y se dirige primero hacia Chefchaouen, situada
    entre las montañas del Rif. Pasarás la primera noche en la ciudad azul, lo
    que permite caminar por su medina, descubrir sus pequeñas plazas y disfrutar
    de un ambiente más tranquilo al final del día.

    Desde Chefchaouen continuaremos hacia Fez. La segunda noche se pasa en esta
    ciudad histórica, conocida por su antigua medina, sus mercados tradicionales
    y su artesanía.

    Después de Fez comienza la parte más paisajística de la ruta de Tánger a
    Marrakech. Cruzaremos Ifrane y el Medio Atlas, pasaremos por Midelt y
    seguiremos el Valle del Ziz hacia el sureste de Marruecos.

    Llegaremos a Merzouga, junto a las dunas de Erg Chebbi. Este itinerario
    incluye dos noches en la zona del Sahara, lo que permite disfrutar del
    desierto sin llegar y marcharse inmediatamente al día siguiente.

    Tendrás tiempo para conocer los alrededores de Merzouga antes de comenzar
    el paseo en camello por las dunas. La jornada termina con la puesta de sol
    y una noche en un campamento del Sahara.

    Después del desierto, el viaje continúa por Rissani, las Gargantas del Todra
    y el Valle del Dades antes de llegar a Ouarzazate, donde pasarás la quinta
    noche.

    El último día visitaremos Ait Ben Haddou y cruzaremos el Alto Atlas antes de
    terminar el recorrido en Marrakech.

    Esta ruta Tánger Marrakech por el desierto es una buena opción si quieres
    combinar Chefchaouen, Fez, Merzouga y el Sahara en un solo viaje privado,
    mientras avanzas hacia Marrakech sin tener que regresar a Tánger.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title: "Tánger – Chefchaouen",

      description: `
        Tu viaje de Tánger a Marrakech comienza con la recogida en Tánger.

        Dejaremos la ciudad y nos dirigiremos hacia las montañas del Rif. Durante
        el trayecto, el paisaje cambia poco a poco entre zonas rurales, colinas y
        pueblos del norte de Marruecos.

        Llegaremos a Chefchaouen, conocida por sus calles y edificios pintados
        en diferentes tonos de azul.

        Tendrás tiempo para caminar por la medina, descubrir pequeñas plazas,
        tiendas locales y algunos de los rincones más conocidos de la ciudad.

        Pasar una noche en Chefchaouen permite disfrutar de la ciudad con más
        calma que una visita rápida desde Tánger.

        Primera noche en Chefchaouen.
      `,

      highlights: [
        "Recogida en Tánger",
        "Salida hacia las montañas del Rif",
        "Ruta por el norte de Marruecos",
        "Llegada a Chefchaouen",
        "Tiempo para recorrer la medina azul",
        "Noche en Chefchaouen",
      ],
    },

    {
      day: 2,

      title: "Chefchaouen – Fez",

      description: `
        Después del desayuno tendrás algo más de tiempo para disfrutar de
        Chefchaouen antes de continuar hacia Fez.

        El recorrido atraviesa diferentes zonas rurales del norte de Marruecos
        antes de llegar a una de las ciudades históricas más importantes del
        país.

        Fez ofrece un ambiente completamente distinto al de Chefchaouen. Su
        antigua medina está formada por calles estrechas, mercados, talleres
        artesanales y barrios tradicionales.

        Dependiendo de la hora de llegada, podrás comenzar a descubrir la ciudad
        o simplemente instalarte y descansar antes de continuar hacia el Sahara
        al día siguiente.

        Segunda noche en Fez.
      `,

      highlights: [
        "Desayuno en Chefchaouen",
        "Tiempo adicional en la ciudad azul",
        "Salida hacia Fez",
        "Ruta por el norte de Marruecos",
        "Llegada a Fez",
        "Primer contacto con la medina",
        "Noche en Fez",
      ],
    },

    {
      day: 3,

      title: "Fez – Ifrane – Medio Atlas – Valle del Ziz – Merzouga",

      description: `
        Después del desayuno dejaremos Fez y comenzaremos el largo pero variado
        viaje hacia el Sahara.

        Pasaremos por Ifrane y continuaremos por el Medio Atlas, una región de
        bosques, montañas y paisajes muy diferentes a los que veremos más tarde
        en el desierto.

        La ruta sigue hacia Midelt antes de continuar por el Valle del Ziz,
        conocido por sus palmerales y amplias vistas.

        A medida que avanzamos hacia el sureste, el paisaje se vuelve más seco
        y abierto hasta llegar a Merzouga.

        Allí aparecerán las dunas de Erg Chebbi, uno de los puntos principales
        de esta ruta de Tánger a Marrakech por el desierto.

        Esta primera tarde en Merzouga está pensada para descansar y disfrutar
        del entorno sin tener que comenzar inmediatamente la experiencia del
        campamento.

        Tercera noche en hotel o riad en Merzouga.
      `,

      highlights: [
        "Salida desde Fez",
        "Paso por Ifrane",
        "Cruce del Medio Atlas",
        "Parada en la zona de Midelt",
        "Viaje por el Valle del Ziz",
        "Llegada a Merzouga",
        "Primeras vistas de Erg Chebbi",
        "Noche en Merzouga",
      ],
    },

    {
      day: 4,

      title:
        "Merzouga – Erg Chebbi – Paseo en camello – Campamento del Sahara",

      description: `
        Este día está dedicado a disfrutar del desierto de Merzouga con más
        tiempo.

        Después del desayuno podrás conocer mejor los alrededores de Erg Chebbi,
        contemplar las dunas y descubrir el paisaje del Sahara antes de comenzar
        la experiencia en camello.

        Por la tarde iniciaremos el paseo en camello por las dunas.

        Mientras avanzas por Erg Chebbi, la luz cambia sobre la arena y el
        paisaje se vuelve especialmente tranquilo al acercarse la puesta de sol.

        Después llegarás al campamento del Sahara.

        Allí podrás disfrutar de la cena y pasar la cuarta noche del tour entre
        las dunas del desierto.
      `,

      highlights: [
        "Tiempo para explorar la zona de Merzouga",
        "Paisajes de Erg Chebbi",
        "Experiencia en el desierto del Sahara",
        "Paseo en camello",
        "Puesta de sol entre las dunas",
        "Cena en el campamento",
        "Noche en el Sahara",
      ],
    },

    {
      day: 5,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades – Ouarzazate",

      description: `
        Si lo deseas, podrás levantarte temprano para contemplar el amanecer
        sobre las dunas antes del desayuno.

        Después dejaremos Merzouga y continuaremos hacia Rissani.

        La ruta sigue hacia las Gargantas del Todra, donde tendrás tiempo para
        caminar entre las altas paredes del cañón y disfrutar de un paisaje muy
        diferente al del Sahara.

        Continuaremos después por el Valle del Dades y otros paisajes del sur de
        Marruecos.

        Durante esta etapa podrás ver montañas, pueblos, palmerales y zonas
        áridas antes de llegar a Ouarzazate.

        Pasarás la quinta noche en Ouarzazate.
      `,

      highlights: [
        "Amanecer opcional en el Sahara",
        "Salida desde Merzouga",
        "Paso por Rissani",
        "Visita de las Gargantas del Todra",
        "Ruta por el Valle del Dades",
        "Paisajes del sur de Marruecos",
        "Llegada a Ouarzazate",
        "Noche en Ouarzazate",
      ],
    },

    {
      day: 6,

      title: "Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",

      description: `
        Después del desayuno comenzaremos la última etapa del viaje de Tánger
        a Marrakech.

        Desde Ouarzazate nos dirigiremos hacia Ait Ben Haddou, uno de los ksars
        más conocidos de Marruecos por su arquitectura tradicional de tierra.

        Tendrás tiempo para conocer el lugar antes de continuar hacia las
        montañas del Alto Atlas.

        La carretera cruza paisajes de montaña, pequeños pueblos y pasos
        panorámicos antes de descender hacia Marrakech.

        Llegaremos a Marrakech más tarde durante el día.

        Aquí termina tu tour privado de Tánger a Marrakech después de seis días
        recorriendo Chefchaouen, Fez, el Medio Atlas, Merzouga, el Sahara y el
        sur de Marruecos.
      `,

      highlights: [
        "Desayuno en Ouarzazate",
        "Salida hacia Ait Ben Haddou",
        "Visita del ksar",
        "Cruce del Alto Atlas",
        "Vistas panorámicas de montaña",
        "Llegada a Marrakech",
        "Fin del tour",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado desde Tánger hasta Marrakech",
    "Conductor profesional de habla inglesa o francesa",
    "Cinco noches de alojamiento",
    "Una noche en Chefchaouen",
    "Una noche en Fez",
    "Una noche en hotel o riad en Merzouga",
    "Una noche en campamento del Sahara",
    "Una noche en Ouarzazate",
    "Desayuno diario durante el viaje",
    "Cena en el campamento del Sahara",
    "Paseo en camello por las dunas de Erg Chebbi",
    "Tiempo para explorar la zona de Merzouga",
    "Tiempo libre en las principales paradas",
    "Paradas flexibles para fotografías y descansos",
    "Recogida en Tánger",
    "Traslado final en Marrakech",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos",
    "Cenas salvo cuando estén indicadas como incluidas",
    "Bebidas",
    "Entradas a monumentos y atracciones",
    "Guías locales salvo solicitud previa",
    "Actividades opcionales no indicadas en el itinerario",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no mencionados en la sección de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Chefchaouen",
      type: "Hotel o riad",
    },
    {
      night: 2,
      location: "Fez",
      type: "Hotel o riad",
    },
    {
      night: 3,
      location: "Merzouga",
      type: "Hotel o riad",
    },
    {
      night: 4,
      location: "Merzouga",
      type: "Campamento del Sahara",
    },
    {
      night: 5,
      location: "Ouarzazate",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/6-day-tangier-marrakech-tour.webp",
  ],

  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿El tour de Tánger a Marrakech en 6 días es privado?",

      answer:
        "Sí. El recorrido es privado para ti y tu grupo. Viajarás en un vehículo privado con mayor flexibilidad para realizar paradas, descansar y adaptar el ritmo del viaje.",
    },

    {
      question:
        "¿Dónde comienza y termina el tour?",

      answer:
        "El tour comienza en Tánger y termina en Marrakech. Es una opción práctica si quieres recorrer Marruecos de norte a sur sin regresar a Tánger.",
    },

    {
      question:
        "¿Qué incluye el tour de Tánger a Marrakech?",

      answer:
        "Incluye transporte privado, cinco noches de alojamiento, desayunos diarios, paseo en camello en Merzouga, una noche en campamento del Sahara, cena en el campamento y paradas flexibles durante el recorrido.",
    },

    {
      question:
        "¿El viaje de Tánger a Marrakech incluye Chefchaouen?",

      answer:
        "Sí. Chefchaouen es la primera parada principal del itinerario y pasarás allí la primera noche.",
    },

    {
      question:
        "¿El tour incluye Fez?",

      answer:
        "Sí. Viajarás desde Chefchaouen hasta Fez durante el segundo día y pasarás una noche en la ciudad antes de continuar hacia el Sahara.",
    },

    {
      question:
        "¿El tour de Tánger a Marrakech pasa por el desierto del Sahara?",

      answer:
        "Sí. El Sahara es una parte central de esta ruta. Pasarás dos noches en la zona de Merzouga, incluida una noche en un campamento cerca de las dunas de Erg Chebbi.",
    },

    {
      question:
        "¿Tenemos tiempo para explorar Merzouga?",

      answer:
        "Sí. Llegarás a Merzouga el tercer día y el cuarto día está dedicado a disfrutar de la zona del desierto antes del paseo en camello y la noche en el campamento.",
    },

    {
      question:
        "¿Está incluido el paseo en camello en Merzouga?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido dentro de la experiencia del Sahara.",
    },

    {
      question:
        "¿Dormimos una noche en el desierto?",

      answer:
        "Sí. La cuarta noche del viaje se pasa en un campamento del Sahara cerca de Merzouga.",
    },

    {
      question:
        "¿Visitamos las Gargantas del Todra?",

      answer:
        "Sí. Las Gargantas del Todra forman parte del quinto día, durante la ruta desde Merzouga hacia Ouarzazate.",
    },

    {
      question:
        "¿Visitamos Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou se visita el último día antes de cruzar el Alto Atlas y continuar hasta Marrakech.",
    },

    {
      question:
        "¿Esta ruta de Tánger a Marrakech es un traslado directo?",

      answer:
        "No. Es un viaje completo de seis días. La ruta incluye Chefchaouen, Fez, el Medio Atlas, Merzouga, el Sahara, las Gargantas del Todra, Ouarzazate y Ait Ben Haddou antes de llegar a Marrakech.",
    },

    {
      question:
        "¿Hay muchas horas de carretera durante el viaje?",

      answer:
        "La distancia entre el norte de Marruecos y Marrakech es considerable, por lo que algunos días incluyen varias horas de conducción. El recorrido se divide con noches intermedias, visitas, descansos y paradas durante el trayecto.",
    },

    {
      question:
        "¿Se puede personalizar el tour Tánger Marrakech?",

      answer:
        "Sí. Al ser un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses, preferencias de alojamiento y planes posteriores.",
    },

    {
      question:
        "¿Los guías locales están incluidos en Chefchaouen o Fez?",

      answer:
        "Los guías locales no están incluidos por defecto. Si quieres una visita guiada en Chefchaouen, Fez u otra ciudad, puedes solicitarla al organizar el viaje.",
    },

    {
      question:
        "¿Qué debo llevar para el Sahara?",

      answer:
        "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una capa adicional para la noche, ya que la temperatura puede cambiar después de la puesta de sol.",
    },

    {
      question:
        "¿Las familias pueden hacer este tour desde Tánger?",

      answer:
        "Sí. Las familias pueden solicitar el tour. Si viajas con niños, indica sus edades al contactar para organizar mejor los tiempos de carretera, el alojamiento y la experiencia en el desierto.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "Tánger a Marrakech: Tour por el Desierto en 6 Días",

    description:
      "Viaja de Tánger a Marrakech en 6 días por Chefchaouen, Fez, Merzouga y el Sahara, con paseo en camello, campamento y Ait Ben Haddou.",

    // Cluster SEO propio de ID 15.
    // No convertir este array en meta keywords.
    keywords: [
      "tanger a marrakech",
      "tanger marrakech",
      "de tanger a marrakech",
      "tánger a marrakech",
      "tour desde tanger a marrakech",
      "ruta tanger marrakech",
      "viaje de tanger a marrakech",
      "tanger a marrakech por el desierto",
      "tour tanger marrakech",
      "tanger marrakech desierto",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 6,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},

{
  id: "16",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "tanger-al-desierto-7-dias",

  title:
    "Tour de Tánger al Desierto del Sahara en 7 Días",

  shortDescription:
    "Viaja de Tánger al desierto del Sahara en un tour privado de 7 días por Chefchaouen, Fez, Merzouga y Erg Chebbi, con paseo en camello y una noche en un campamento del desierto.",

  image:
    "/images/tours/7-day-tangier-fes-sahara-tour.webp",

  badge:
    "Tánger al Desierto",

  featured:
    true,

  category:
    "Tours por el Desierto",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "7 días / 6 noches",

  nights:
    6,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Tánger",

  arrival:
    "Marrakech",


  locations:
    [
      "Tánger",
      "Chefchaouen",
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Marrakech",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Tánger",

        position:
          [35.7595, -5.834],
      },

      {
        name:
          "Chefchaouen",

        position:
          [35.1688, -5.2636],
      },

      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Comienza tu viaje privado desde Tánger hacia el desierto del Sahara",

    "Descubre Chefchaouen y sus famosas calles azules",

    "Explora Fez y su antigua medina histórica",

    "Cruza Ifrane y los paisajes del Medio Atlas",

    "Viaja por el Valle del Ziz hasta llegar a Merzouga",

    "Descubre las dunas doradas de Erg Chebbi",

    "Disfruta de un paseo en camello por el Sahara",

    "Contempla la puesta de sol sobre las dunas",

    "Pasa una noche en un campamento tradicional del desierto",

    "Visita las Gargantas del Todra y el Valle del Dades",

    "Descubre Ouarzazate y Ait Ben Haddou",

    "Termina la ruta en Marrakech después de cruzar el sur de Marruecos",
  ],


  // ─────────────────────────────
  // OVERVIEW
  // ─────────────────────────────

  overview:
  `
    Este tour de Tánger al desierto del Sahara en 7 días es una ruta privada
    diseñada para viajeros que quieren descubrir el norte de Marruecos y llegar
    hasta las dunas de Merzouga.

    El viaje comienza en Tánger y continúa hacia Chefchaouen, conocida como la
    ciudad azul de Marruecos. Tendrás tiempo para recorrer su medina, descubrir
    sus calles tradicionales y disfrutar del ambiente tranquilo de las montañas
    del Rif.

    Después continuaremos hacia Fez, una de las ciudades culturales más importantes
    del país, famosa por su antigua medina, sus mercados y su artesanía.

    La ruta desde Tánger al desierto continúa cruzando Ifrane, el Medio Atlas,
    Midelt y el Valle del Ziz antes de llegar a Merzouga.

    En el desierto del Sahara disfrutarás de Erg Chebbi, una de las zonas más
    impresionantes de Marruecos. Tendrás la oportunidad de realizar un paseo en
    camello, contemplar la puesta de sol y pasar una noche en un campamento entre
    las dunas.

    Después del Sahara, el recorrido continúa por Rissani, las Gargantas del
    Todra, el Valle del Dades, Ouarzazate y Ait Ben Haddou.

    Este viaje de Tánger al desierto combina cultura, montañas, pueblos
    tradicionales y Sahara en una sola experiencia privada por Marruecos.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day: 1,

      title:
        "Tánger – Chefchaouen",

      description:
      `
      El viaje comienza en Tánger.

      Dejaremos la ciudad y viajaremos hacia las montañas del Rif hasta llegar a
      Chefchaouen, una de las ciudades más conocidas del norte de Marruecos.

      Tendrás tiempo para caminar por la medina azul, descubrir sus calles
      tradicionales y disfrutar del ambiente local.

      Primera noche en Chefchaouen.
      `,

      highlights:
      [
        "Salida desde Tánger",
        "Montañas del Rif",
        "Llegada a Chefchaouen",
        "Medina azul",
        "Noche en Chefchaouen",
      ],
    },


    {
      day: 2,

      title:
        "Chefchaouen – Fez",

      description:
      `
      Después del desayuno continuaremos hacia Fez.

      La ruta atraviesa paisajes rurales del norte de Marruecos hasta llegar a
      una de las ciudades culturales más importantes del país.

      Tendrás tiempo para comenzar a descubrir la antigua medina de Fez.

      Noche en Fez.
      `,

      highlights:
      [
        "Salida desde Chefchaouen",
        "Ruta hacia Fez",
        "Medina histórica",
        "Cultura marroquí",
        "Noche en Fez",
      ],
    },


    {
      day: 3,

      title:
        "Fez – Ifrane – Medio Atlas – Valle del Ziz – Merzouga",

      description:
      `
      Dejaremos Fez y comenzaremos el viaje hacia el sur.

      Cruzaremos Ifrane y el Medio Atlas antes de continuar por el Valle del Ziz.

      El paisaje cambia progresivamente hasta llegar a Merzouga, puerta de entrada
      al desierto del Sahara.

      Primera noche en Merzouga.
      `,

      highlights:
      [
        "Ifrane",
        "Medio Atlas",
        "Valle del Ziz",
        "Llegada a Merzouga",
        "Primer contacto con el Sahara",
      ],
    },


    {
      day: 4,

      title:
        "Merzouga – Erg Chebbi – Paseo en camello – Campamento del Sahara",

      description:
      `
      Día dedicado al desierto.

      Tendrás tiempo para descubrir Merzouga y los alrededores de Erg Chebbi.

      Por la tarde comenzarás el paseo en camello por las dunas del Sahara.

      Después de la puesta de sol llegarás al campamento donde disfrutarás de
      una noche especial en el desierto.
      `,

      highlights:
      [
        "Dunas de Erg Chebbi",
        "Paseo en camello",
        "Atardecer en el Sahara",
        "Campamento del desierto",
      ],
    },


    {
      day: 5,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
      Dejaremos Merzouga y continuaremos por el sur de Marruecos.

      Visitaremos Rissani y seguiremos hacia las Gargantas del Todra.

      Después continuaremos hacia el Valle del Dades.

      Noche en el Dades.
      `,

      highlights:
      [
        "Rissani",
        "Gargantas del Todra",
        "Valle del Dades",
        "Paisajes del sur",
      ],
    },


    {
      day: 6,

      title:
        "Dades – Ouarzazate – Ait Ben Haddou",

      description:
      `
      Continuaremos la ruta hacia Ouarzazate.

      Visitaremos Ait Ben Haddou, uno de los lugares históricos más conocidos
      de Marruecos.

      Noche en la zona de Ouarzazate.
      `,

      highlights:
      [
        "Ouarzazate",
        "Ait Ben Haddou",
        "Paisajes del sur de Marruecos",
      ],
    },


    {
      day: 7,

      title:
        "Ouarzazate – Alto Atlas – Marrakech",

      description:
      `
      Después del desayuno terminaremos la ruta hacia Marrakech.

      Cruzaremos el Alto Atlas disfrutando de paisajes de montaña antes de llegar
      a Marrakech.

      Final del tour.
      `,

      highlights:
      [
        "Alto Atlas",
        "Paisajes de montaña",
        "Llegada a Marrakech",
        "Fin del viaje",
      ],
    },
  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante todo el recorrido",

    "Conductor profesional de habla inglesa o francesa",

    "Seis noches de alojamiento",

    "Alojamiento en hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cenas durante las noches indicadas",

    "Paseo en camello por las dunas de Erg Chebbi",

    "Una noche en campamento del Sahara",

    "Tiempo libre en las principales paradas",

    "Paradas flexibles durante la ruta",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night: 1,
      location: "Chefchaouen",
      type: "Hotel o riad",
    },

    {
      night: 2,
      location: "Fez",
      type: "Hotel o riad",
    },

    {
      night: 3,
      location: "Merzouga",
      type: "Hotel o riad",
    },

    {
      night: 4,
      location: "Merzouga",
      type: "Campamento del Sahara",
    },

    {
      night: 5,
      location: "Valle del Dades",
      type: "Hotel o riad",
    },

    {
      night: 6,
      location: "Ouarzazate",
      type: "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/7-day-tangier-fes-sahara-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿El tour de Tánger al desierto del Sahara es privado?",

      answer:
        "Sí. El recorrido es privado para ti y tu grupo con transporte privado y flexibilidad durante el viaje.",
    },

    {
      question:
        "¿Dónde comienza y termina el tour?",

      answer:
        "El viaje comienza en Tánger y termina en Marrakech.",
    },

    {
      question:
        "¿Incluye Chefchaouen y Fez?",

      answer:
        "Sí. La ruta incluye Chefchaouen y Fez antes de continuar hacia el Sahara.",
    },

    {
      question:
        "¿El tour llega al desierto del Sahara?",

      answer:
        "Sí. Visita Merzouga y las dunas de Erg Chebbi, con paseo en camello y noche en campamento.",
    },

    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por Erg Chebbi está incluido.",
    },

    {
      question:
        "¿Visitamos Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou forma parte de la ruta antes de llegar a Marrakech.",
    },

    {
      question:
        "¿Se puede personalizar este viaje?",

      answer:
        "Sí. Al ser un tour privado puede adaptarse según tus fechas e intereses.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Tánger al Desierto 7 días | Sahara, Merzouga y Erg Chebbi",

    description:
      "Tour privado de Tánger al desierto del Sahara en 7 días con Chefchaouen, Fez, Merzouga, Erg Chebbi, paseo en camello y campamento del Sahara.",

    keywords:
    [
      "tanger desierto",
      "de tanger al desierto",
      "tour de tanger al desierto",
      "viaje de tanger al desierto",
      "sahara tanger",
      "tanger sahara",
      "ruta desde tanger al desierto",
      "desierto de merzouga",
      "tour desierto marruecos",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      7,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},

{
  id: "17",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "tour-marruecos-desde-tanger",

  title:
    "Tour por Marruecos desde Tánger en 10 días con Sahara",

  shortDescription:
    "Descubre Marruecos en un tour privado de 10 días desde Tánger con Chefchaouen, Fez, Merzouga, el desierto del Sahara, Marrakech y Casablanca.",

  image:
    "/images/tours/10-day-tangier-casablanca-tour.webp",

  badge:
    "Ruta completa desde Tánger",

  featured:
    true,

  category:
    "Circuitos por Marruecos",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "10 días / 9 noches",

  nights:
    9,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Tánger",

  arrival:
    "Casablanca",


  locations:
    [
      "Tánger",
      "Chefchaouen",
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Alto Atlas",
      "Marrakech",
      "Casablanca",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Tánger",

        position:
          [35.7595, -5.834],
      },

      {
        name:
          "Chefchaouen",

        position:
          [35.1688, -5.2636],
      },

      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },

      {
        name:
          "Casablanca",

        position:
          [33.5731, -7.5898],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Comienza tu tour por Marruecos desde Tánger y termina en Casablanca",

    "Descubre Chefchaouen y sus famosas calles azules",

    "Explora Fez y su antigua medina histórica",

    "Cruza el Medio Atlas hacia el sureste de Marruecos",

    "Viaja por el Valle del Ziz hasta llegar a Merzouga",

    "Descubre las dunas de Erg Chebbi y el desierto del Sahara",

    "Disfruta de un paseo en camello y una noche en el campamento del desierto",

    "Visita las Gargantas del Todra y el Valle del Dades",

    "Conoce Ouarzazate y Ait Ben Haddou",

    "Cruza el Alto Atlas hasta Marrakech",

    "Termina tu viaje en Casablanca después de recorrer Marruecos",

  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Este tour por Marruecos desde Tánger en 10 días es una ruta privada diseñada
    para viajeros que quieren descubrir diferentes regiones del país comenzando
    desde el norte.

    El viaje comienza en Tánger, una ciudad situada entre el océano Atlántico y
    el mar Mediterráneo. Desde allí viajaremos hacia Chefchaouen, conocida como
    la ciudad azul de Marruecos por sus calles tradicionales y su ambiente entre
    las montañas del Rif.

    Después continuaremos hacia Fez, una de las ciudades culturales más importantes
    del país. Tendrás tiempo para conocer su antigua medina, sus mercados y sus
    talleres artesanales.

    La ruta por Marruecos desde Tánger continúa hacia el sur atravesando Ifrane,
    el Medio Atlas, Midelt y el Valle del Ziz hasta llegar a Merzouga.

    En el Sahara vivirás una experiencia completa en las dunas de Erg Chebbi.
    Tendrás tiempo para descubrir el desierto, realizar un paseo en camello,
    contemplar la puesta de sol y pasar una noche en un campamento tradicional.

    Después del Sahara, el viaje continúa por Rissani, las Gargantas del Todra,
    el Valle del Dades, Ouarzazate y Ait Ben Haddou antes de llegar a Marrakech.

    La última etapa conecta Marrakech con Casablanca, donde termina este viaje
    privado por Marruecos.

    Este tour privado desde Tánger combina cultura, ciudades históricas, montañas,
    Sahara y paisajes del sur de Marruecos en una sola ruta equilibrada de diez días.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Llegada a Tánger – Chefchaouen",

      description:
      `
      El tour por Marruecos desde Tánger comienza con la recogida en la ciudad.

      Dejaremos Tánger y viajaremos hacia las montañas del Rif hasta llegar a
      Chefchaouen, una de las ciudades más famosas del norte de Marruecos.

      Tendrás tiempo para descubrir la medina azul, caminar por sus calles
      tradicionales y disfrutar del ambiente tranquilo de la ciudad.

      Primera noche en Chefchaouen.
      `,

      highlights:
      [
        "Salida desde Tánger",

        "Montañas del Rif",

        "Llegada a Chefchaouen",

        "Medina azul",

        "Noche en Chefchaouen",
      ],
    },


    {
      day:
        2,

      title:
        "Chefchaouen – Fez",

      description:
      `
      Después del desayuno continuaremos hacia Fez.

      La ruta atraviesa paisajes rurales del norte de Marruecos antes de llegar
      a una de las ciudades culturales más importantes del país.

      Fez destaca por su antigua medina, sus mercados tradicionales y su
      artesanía.

      Tendrás tiempo para comenzar a descubrir la ciudad.

      Noche en Fez.
      `,

      highlights:
      [
        "Salida desde Chefchaouen",

        "Ruta hacia Fez",

        "Llegada a la ciudad histórica",

        "Medina de Fez",

        "Noche en Fez",
      ],
    },


    {
      day:
        3,

      title:
        "Día completo para descubrir Fez",

      description:
      `
      Este día está dedicado a Fez.

      Podrás explorar la antigua medina, sus calles tradicionales, mercados,
      talleres artesanales y lugares históricos.

      Tener un día completo permite conocer la ciudad sin prisas antes de
      continuar hacia el Sahara.

      Segunda noche en Fez.
      `,

      highlights:
      [
        "Día completo en Fez",

        "Medina histórica",

        "Mercados tradicionales",

        "Artesanía local",

        "Segunda noche en Fez",
      ],
    },


    {
      day:
        4,

      title:
        "Fez – Ifrane – Medio Atlas – Merzouga",

      description:
      `
      Dejaremos Fez y comenzaremos el viaje hacia el sur de Marruecos.

      Pasaremos por Ifrane y cruzaremos el Medio Atlas, una zona conocida por
      sus paisajes de montaña y bosques.

      Continuaremos por Midelt y el Valle del Ziz hasta llegar a Merzouga.

      Las dunas de Erg Chebbi marcarán el inicio de la experiencia del Sahara.

      Noche en Merzouga.
      `,

      highlights:
      [
        "Salida desde Fez",

        "Ifrane",

        "Medio Atlas",

        "Midelt",

        "Valle del Ziz",

        "Llegada a Merzouga",
      ],
    },


    {
      day:
        5,

      title:
        "Merzouga – Erg Chebbi – Experiencia Sahara",

      description:
      `
      El día está dedicado al desierto del Sahara.

      Tendrás tiempo para conocer Merzouga y los alrededores de las dunas de
      Erg Chebbi.

      Por la tarde comenzarás el paseo en camello por el desierto.

      Después de contemplar la puesta de sol llegarás al campamento, donde
      disfrutarás de la cena y pasarás una noche especial entre las dunas.

      Noche en el campamento del Sahara.
      `,

      highlights:
      [
        "Merzouga",

        "Dunas de Erg Chebbi",

        "Paseo en camello",

        "Puesta de sol",

        "Campamento del Sahara",
      ],
    },
    {
      day:
        6,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
      Después del desayuno dejaremos Merzouga y continuaremos hacia el oeste.

      Pasaremos por Rissani, una ciudad conocida por su historia y sus mercados
      tradicionales.

      La ruta continúa hacia las Gargantas del Todra, donde tendrás tiempo para
      caminar entre las enormes paredes del cañón y disfrutar de uno de los
      paisajes naturales más impresionantes del sur de Marruecos.

      Después seguiremos hacia el Valle del Dades, una zona conocida por sus
      montañas, formaciones rocosas y paisajes únicos.

      Noche en la zona del Dades.
      `,

      highlights:
      [
        "Salida desde Merzouga",

        "Visita de Rissani",

        "Gargantas del Todra",

        "Valle del Dades",

        "Paisajes del sur de Marruecos",
      ],
    },


    {
      day:
        7,

      title:
        "Valle del Dades – Ouarzazate – Ait Ben Haddou – Marrakech",

      description:
      `
      Después del desayuno continuaremos por los paisajes del sur de Marruecos.

      Visitaremos Ouarzazate, conocida como la puerta del desierto, antes de
      llegar a Ait Ben Haddou.

      Este antiguo ksar es uno de los lugares históricos más conocidos del país
      por su arquitectura tradicional de tierra.

      Después cruzaremos el Alto Atlas por una carretera panorámica hasta llegar
      a Marrakech.

      Noche en Marrakech.
      `,

      highlights:
      [
        "Salida desde el Valle del Dades",

        "Ouarzazate",

        "Ait Ben Haddou",

        "Cruce del Alto Atlas",

        "Llegada a Marrakech",
      ],
    },


    {
      day:
        8,

      title:
        "Día completo para descubrir Marrakech",

      description:
      `
      Tendrás un día completo para conocer Marrakech.

      Podrás explorar la medina, los zocos tradicionales, plazas históricas y
      disfrutar del ambiente de una de las ciudades más famosas de Marruecos.

      Esta jornada permite descubrir Marrakech sin prisas después del recorrido
      por el Sahara y las montañas.

      Segunda noche en Marrakech.
      `,

      highlights:
      [
        "Día completo en Marrakech",

        "Medina histórica",

        "Zocos tradicionales",

        "Cultura local",

        "Tiempo libre",
      ],
    },


    {
      day:
        9,

      title:
        "Marrakech – Casablanca",

      description:
      `
      Después del desayuno comenzaremos el viaje hacia Casablanca.

      Durante el trayecto podrás disfrutar de los paisajes entre Marrakech y la
      costa atlántica.

      Llegaremos a Casablanca, donde termina esta ruta privada por Marruecos
      desde Tánger.

      Noche en Casablanca.
      `,

      highlights:
      [
        "Salida desde Marrakech",

        "Ruta hacia Casablanca",

        "Paisajes del camino",

        "Llegada a Casablanca",
      ],
    },


    {
      day:
        10,

      title:
        "Fin del tour en Casablanca",

      description:
      `
      Después de diez días recorriendo Marruecos, el viaje termina en Casablanca.

      El traslado final se organiza según tu horario de salida.

      Este tour privado desde Tánger te habrá permitido descubrir el norte de
      Marruecos, Fez, el Sahara, Marrakech y diferentes paisajes del país.
      `,

      highlights:
      [
        "Último día en Casablanca",

        "Traslado según horario",

        "Fin del viaje privado",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante todo el recorrido",

    "Conductor profesional de habla inglesa o francesa",

    "Nueve noches de alojamiento",

    "Alojamiento en hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cenas durante las noches indicadas",

    "Paseo en camello por las dunas de Erg Chebbi",

    "Una noche en campamento del Sahara",

    "Tiempo libre en Fez y Marrakech",

    "Paradas flexibles durante el recorrido",

    "Recogida en Tánger",

    "Traslado final en Casablanca",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en la sección de incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Chefchaouen",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        3,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        4,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        5,

      location:
        "Merzouga",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        6,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },

    {
      night:
        7,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        8,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        9,

      location:
        "Casablanca",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/10-day-tangier-casablanca-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Este tour por Marruecos desde Tánger es privado?",

      answer:
        "Sí. Es un tour privado para ti y tu grupo con transporte privado y flexibilidad durante todo el recorrido.",
    },


    {
      question:
        "¿Dónde comienza y termina el viaje?",

      answer:
        "El viaje comienza en Tánger y termina en Casablanca.",
    },


    {
      question:
        "¿Qué lugares incluye este tour de Marruecos desde Tánger?",

      answer:
        "Incluye Tánger, Chefchaouen, Fez, Merzouga, el Sahara, las Gargantas del Todra, Ait Ben Haddou, Marrakech y Casablanca.",
    },


    {
      question:
        "¿El tour incluye el desierto del Sahara?",

      answer:
        "Sí. Merzouga y Erg Chebbi forman una parte principal del itinerario con paseo en camello y noche en un campamento del Sahara.",
    },


    {
      question:
        "¿Visitamos Chefchaouen durante el viaje?",

      answer:
        "Sí. Chefchaouen es la primera gran parada del recorrido después de salir de Tánger.",
    },


    {
      question:
        "¿Cuánto tiempo pasamos en Fez?",

      answer:
        "El itinerario incluye dos noches en Fez y un día completo para conocer su medina y sus lugares históricos.",
    },


    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido.",
    },


    {
      question:
        "¿Dormimos en el desierto?",

      answer:
        "Sí. Una noche se pasa en un campamento tradicional del Sahara cerca de Merzouga.",
    },


    {
      question:
        "¿Visitamos Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou forma parte de la ruta hacia Marrakech.",
    },


    {
      question:
        "¿Este viaje incluye Marrakech?",

      answer:
        "Sí. El tour incluye tiempo para descubrir Marrakech antes de continuar hacia Casablanca.",
    },


    {
      question:
        "¿Este tour es una excursión corta desde Tánger?",

      answer:
        "No. Es un viaje completo de 10 días por Marruecos que conecta el norte del país con el Sahara, Marrakech y Casablanca.",
    },


    {
      question:
        "¿Se puede personalizar el tour?",

      answer:
        "Sí. Al ser un tour privado podemos adaptar algunos detalles según tus fechas e intereses.",
    },


    {
      question:
        "¿Qué debo llevar para el Sahara?",

      answer:
        "Se recomienda llevar ropa cómoda, protección solar, calzado adecuado y una prenda adicional para la noche.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Tour Marruecos desde Tánger 10 días | Sahara y Marrakech",

    description:
      "Tour privado por Marruecos desde Tánger en 10 días con Chefchaouen, Fez, Merzouga, Sahara, Marrakech y final en Casablanca.",

    keywords:
    [
      "tour marruecos desde tanger",

      "tours en tanger marruecos",

      "excursiones desde tanger",

      "viaje por marruecos desde tanger",

      "tour privado marruecos desde tanger",

      "ruta por marruecos desde tanger",

      "tanger chefchaouen fez sahara",

      "tour marruecos tanger",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      10,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "18",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "viajes-por-marruecos-12-dias",

  title:
    "Viajes por Marruecos en 12 días desde Tánger",

  shortDescription:
    "Descubre Marruecos en un viaje privado de 12 días desde Tánger con Chefchaouen, Fez, el desierto del Sahara, Merzouga, Marrakech y Casablanca.",

  image:
    "/images/tours/12-day-best-of-morocco-tour.webp",

  badge:
    "Lo mejor de Marruecos",

  featured:
    true,

  category:
    "Viajes por Marruecos",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "12 días / 11 noches",

  nights:
    11,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Tánger",

  arrival:
    "Casablanca",


  locations:
    [
      "Tánger",
      "Chefchaouen",
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Alto Atlas",
      "Marrakech",
      "Casablanca",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Tánger",

        position:
          [35.7595, -5.834],
      },

      {
        name:
          "Chefchaouen",

        position:
          [35.1688, -5.2636],
      },

      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },

      {
        name:
          "Casablanca",

        position:
          [33.5731, -7.5898],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Descubre Marruecos en un viaje privado de 12 días desde Tánger hasta Casablanca",

    "Visita Chefchaouen y sus famosas calles azules",

    "Explora Fez, una de las ciudades históricas más importantes de Marruecos",

    "Cruza el Medio Atlas y disfruta de paisajes de montaña",

    "Viaja por el Valle del Ziz hasta llegar al desierto del Sahara",

    "Descubre Merzouga y las dunas de Erg Chebbi",

    "Disfruta de un paseo en camello y una noche en un campamento del Sahara",

    "Visita las Gargantas del Todra y el Valle del Dades",

    "Conoce Ouarzazate y Ait Ben Haddou",

    "Explora Marrakech con tiempo suficiente para descubrir la ciudad",

    "Termina el recorrido en Casablanca después de una ruta completa por Marruecos",
  ],


  // ─────────────────────────────
  // OVERVIEW
  // ─────────────────────────────

  overview:
  `
    Este viaje por Marruecos de 12 días es una ruta privada diseñada para
    viajeros que quieren conocer lo mejor del país en una experiencia completa.

    El recorrido comienza en Tánger, en el norte de Marruecos, y continúa hacia
    Chefchaouen, la famosa ciudad azul situada entre las montañas del Rif.

    Después visitaremos Fez, una de las ciudades imperiales más importantes del
    país, donde podrás descubrir su antigua medina, sus mercados tradicionales y
    su rica historia.

    La ruta completa por Marruecos continúa hacia el sur atravesando Ifrane,
    el Medio Atlas, Midelt y el Valle del Ziz hasta llegar a Merzouga.

    En el desierto del Sahara vivirás una experiencia única en Erg Chebbi con
    paseo en camello, puesta de sol sobre las dunas y una noche en un campamento
    tradicional.

    Después del desierto continuaremos por las Gargantas del Todra, el Valle del
    Dades, Ouarzazate y Ait Ben Haddou antes de llegar a Marrakech.

    Tendrás tiempo para descubrir Marrakech, una de las ciudades más conocidas de
    Marruecos, antes de finalizar el viaje en Casablanca.

    Este es uno de los mejores viajes por Marruecos para quienes buscan combinar
    cultura, ciudades imperiales, paisajes naturales, Sahara y la auténtica
    esencia del país en un solo recorrido.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Llegada a Tánger – Chefchaouen",

      description:
      `
      El viaje comienza en Tánger.

      Después de la recogida viajaremos hacia las montañas del Rif hasta llegar
      a Chefchaouen, conocida como la ciudad azul de Marruecos.

      Tendrás tiempo para caminar por la medina, descubrir sus calles pintadas
      de azul y disfrutar del ambiente tranquilo de la ciudad.

      Noche en Chefchaouen.
      `,

      highlights:
      [
        "Salida desde Tánger",

        "Montañas del Rif",

        "Chefchaouen",

        "Medina azul",

        "Primera noche del viaje",
      ],
    },


    {
      day:
        2,

      title:
        "Chefchaouen – Fez",

      description:
      `
      Después del desayuno continuaremos hacia Fez.

      La ruta atraviesa paisajes rurales del norte de Marruecos hasta llegar a
      una de las ciudades culturales más importantes del país.

      Tendrás tiempo para comenzar a conocer la antigua medina de Fez.

      Noche en Fez.
      `,

      highlights:
      [
        "Salida desde Chefchaouen",

        "Ruta hacia Fez",

        "Primera visita de Fez",

        "Medina histórica",
      ],
    },


    {
      day:
        3,

      title:
        "Exploración de Fez",

      description:
      `
      Día dedicado a descubrir Fez.

      Explorarás su antigua medina, los zocos tradicionales, la arquitectura
      histórica y la cultura local.

      Este día permite conocer una de las ciudades imperiales de Marruecos sin
      prisas.

      Segunda noche en Fez.
      `,

      highlights:
      [
        "Medina de Fez",

        "Ciudad imperial",

        "Mercados tradicionales",

        "Cultura marroquí",
      ],
    },


    {
      day:
        4,

      title:
        "Fez – Ifrane – Medio Atlas – Merzouga",

      description:
      `
      Dejaremos Fez y comenzaremos el viaje hacia el sur.

      Cruzaremos Ifrane y el Medio Atlas antes de continuar por Midelt y el
      Valle del Ziz.

      Al final del día llegaremos a Merzouga, puerta de entrada al desierto del
      Sahara.

      Noche en Merzouga.
      `,

      highlights:
      [
        "Ifrane",

        "Medio Atlas",

        "Midelt",

        "Valle del Ziz",

        "Llegada a Merzouga",
      ],
    },


    {
      day:
        5,

      title:
        "Merzouga – Erg Chebbi – Campamento del Sahara",

      description:
      `
      Día dedicado completamente al desierto.

      Descubrirás la zona de Merzouga y las impresionantes dunas de Erg Chebbi.

      Por la tarde realizarás un paseo en camello para disfrutar del atardecer
      y llegar al campamento del Sahara.

      Noche entre las dunas.
      `,

      highlights:
      [
        "Merzouga",

        "Erg Chebbi",

        "Paseo en camello",

        "Atardecer en el Sahara",

        "Campamento del desierto",
      ],
    },


    {
      day:
        6,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
      Dejaremos el Sahara para continuar hacia los paisajes del sur de Marruecos.

      Visitaremos Rissani y las Gargantas del Todra, uno de los lugares naturales
      más impresionantes de la región.

      Después continuaremos hacia el Valle del Dades.

      Noche en el Dades.
      `,

      highlights:
      [
        "Rissani",

        "Gargantas del Todra",

        "Valle del Dades",

        "Paisajes del sur",
      ],
    },
    {
      day:
        7,

      title:
        "Valle del Dades – Ouarzazate – Ait Ben Haddou – Marrakech",

      description:
      `
      Después del desayuno continuaremos nuestra ruta completa por Marruecos
      hacia Ouarzazate, conocida como la puerta del desierto.

      Visitaremos Ait Ben Haddou, un antiguo ksar famoso por su arquitectura
      tradicional y su importancia histórica.

      Después cruzaremos el Alto Atlas por una carretera panorámica hasta llegar
      a Marrakech.

      Noche en Marrakech.
      `,

      highlights:
      [
        "Ouarzazate",

        "Ait Ben Haddou",

        "Alto Atlas",

        "Llegada a Marrakech",

        "Paisajes del sur de Marruecos",
      ],
    },


    {
      day:
        8,

      title:
        "Día completo para descubrir Marrakech",

      description:
      `
      Tendrás un día completo para explorar Marrakech.

      Podrás descubrir la famosa plaza Jemaa el-Fna, los zocos tradicionales,
      la medina histórica y la arquitectura característica de la ciudad roja.

      Este día permite disfrutar de Marrakech con calma después del recorrido por
      el Sahara.

      Noche en Marrakech.
      `,

      highlights:
      [
        "Marrakech",

        "Medina histórica",

        "Jemaa el-Fna",

        "Zocos tradicionales",

        "Cultura local",
      ],
    },


    {
      day:
        9,

      title:
        "Marrakech – Casablanca",

      description:
      `
      Después del desayuno continuaremos hacia Casablanca.

      La ruta conecta Marrakech con la costa atlántica hasta llegar a una de las
      ciudades más importantes de Marruecos.

      Tendrás tiempo para conocer algunos lugares destacados de Casablanca.

      Noche en Casablanca.
      `,

      highlights:
      [
        "Salida desde Marrakech",

        "Ruta hacia Casablanca",

        "Costa atlántica",

        "Llegada a Casablanca",
      ],
    },


    {
      day:
        10,

      title:
        "Casablanca – Fin del viaje",

      description:
      `
      Después de completar esta experiencia de viajes por Marruecos, finaliza el
      recorrido en Casablanca.

      El traslado al aeropuerto o al punto indicado se organiza según tu horario
      de salida.

      Fin del tour privado.
      `,

      highlights:
      [
        "Casablanca",

        "Traslado final",

        "Fin del viaje",
      ],
    },


    {
      day:
        11,

      title:
        "Día extra opcional en Casablanca",

      description:
      `
      Este día puede utilizarse como jornada adicional según tus necesidades.

      Puedes disfrutar de Casablanca, descansar antes del vuelo o personalizar la
      ruta con actividades adicionales.

      Disponible según solicitud.
      `,

      highlights:
      [
        "Tiempo libre",

        "Casablanca",

        "Día personalizable",
      ],
    },


    {
      day:
        12,

      title:
        "Salida de Marruecos",

      description:
      `
      Último día del viaje.

      Organizaremos el traslado según tu horario de salida.

      Después de 12 días descubriendo Marruecos, termina una ruta completa con
      ciudades históricas, montañas, Sahara y cultura local.
      `,

      highlights:
      [
        "Traslado final",

        "Fin del tour",

        "Salida de Marruecos",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante todo el recorrido",

    "Conductor profesional de habla inglesa o francesa",

    "Once noches de alojamiento",

    "Hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cenas durante las noches indicadas",

    "Paseo en camello en Erg Chebbi",

    "Noche en campamento del desierto",

    "Recogida en Tánger",

    "Traslado final en Casablanca",

    "Paradas flexibles durante la ruta",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos",

    "Guías locales salvo solicitud",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Chefchaouen",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        3,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        4,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        5,

      location:
        "Merzouga",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        6,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },

    {
      night:
        7,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        8,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        9,

      location:
        "Casablanca",

      type:
        "Hotel o riad",
    },

    {
      night:
        10,

      location:
        "Casablanca",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/12-day-best-of-morocco-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué incluye este viaje por Marruecos de 12 días?",

      answer:
        "Incluye transporte privado, alojamiento, desayuno, experiencia en el Sahara, paseo en camello y las principales visitas del recorrido.",
    },


    {
      question:
        "¿Desde dónde comienza el tour?",

      answer:
        "El viaje comienza en Tánger y termina en Casablanca.",
    },


    {
      question:
        "¿Este es un tour privado?",

      answer:
        "Sí. El recorrido es privado y puede adaptarse según las necesidades de cada viajero.",
    },


    {
      question:
        "¿Incluye el desierto del Sahara?",

      answer:
        "Sí. El itinerario incluye Merzouga, Erg Chebbi, paseo en camello y una noche en el campamento del Sahara.",
    },


    {
      question:
        "¿Visitamos Fez y Marrakech?",

      answer:
        "Sí. El viaje incluye tiempo para descubrir Fez y Marrakech.",
    },


    {
      question:
        "¿Este viaje pasa por Chefchaouen?",

      answer:
        "Sí. Chefchaouen es una de las primeras paradas del recorrido.",
    },


    {
      question:
        "¿Es posible personalizar la ruta?",

      answer:
        "Sí. Al ser un viaje privado podemos adaptar algunos detalles del itinerario.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Viajes por Marruecos en 12 días | Sahara, Fez y Marrakech",

    description:
      "Descubre Marruecos en un viaje privado de 12 días desde Tánger con Chefchaouen, Fez, Merzouga, Sahara, Marrakech y Casablanca.",

    keywords:
    [
      "viajes por marruecos",

      "viaje a marruecos",

      "viaje marruecos",

      "circuito marruecos",

      "ruta completa por marruecos",

      "viaje marruecos 12 dias",

      "desierto del sahara marruecos",

      "tour privado marruecos",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      12,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "19",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "fez-a-marrakech-desierto-3-dias",

  title: "De Fez a Marrakech en 3 días por el desierto de Merzouga",

  shortDescription:
    "Viaja de Fez a Marrakech en 3 días en un tour privado por el Medio Atlas, el valle del Ziz, Merzouga, las dunas de Erg Chebbi, las gargantas del Todra y Ait Ben Haddou.",

  image: "/images/tours/3-day-fes-marrakech-desert-tour.webp",

  badge: "Fez a Marrakech",

  featured: true,

  category: "Tours por el Desierto",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "3 días / 2 noches",

  nights: 2,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Fez",

  arrival: "Marrakech",

  locations: [
    "Fez",
    "Ifrane",
    "Medio Atlas",
    "Midelt",
    "Valle del Ziz",
    "Errachidia",
    "Merzouga",
    "Erg Chebbi",
    "Desierto del Sahara",
    "Rissani",
    "Gargantas del Todra",
    "Valle del Dades",
    "Ouarzazate",
    "Ait Ben Haddou",
    "Alto Atlas",
    "Marrakech",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Ifrane",
        position: [33.5228, -5.1109],
      },
      {
        name: "Midelt",
        position: [32.6806, -4.7369],
      },
      {
        name: "Merzouga",
        position: [31.0802, -4.0133],
      },
      {
        name: "Rissani",
        position: [31.2823, -4.2651],
      },
      {
        name: "Gargantas del Todra",
        position: [31.5889, -5.5928],
      },
      {
        name: "Valle del Dades",
        position: [31.3709, -5.9887],
      },
      {
        name: "Ouarzazate",
        position: [30.9335, -6.937],
      },
      {
        name: "Ait Ben Haddou",
        position: [31.0472, -7.1298],
      },
      {
        name: "Marrakech",
        position: [31.6295, -7.9811],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Viajar de Fez a Marrakech atravesando algunos de los paisajes más variados de Marruecos",
    "Recorrer Ifrane y las montañas del Medio Atlas",
    "Disfrutar de las vistas panorámicas del valle del Ziz",
    "Llegar a Merzouga y descubrir las dunas doradas de Erg Chebbi",
    "Recorrer el desierto en camello al atardecer",
    "Pasar una noche en un campamento del Sahara",
    "Contemplar el amanecer entre las dunas de Merzouga",
    "Visitar Rissani durante la ruta hacia el oeste",
    "Caminar entre las paredes rocosas de las gargantas del Todra",
    "Descubrir los paisajes del valle del Dades",
    "Visitar Ait Ben Haddou antes de llegar a Marrakech",
    "Cruzar el Alto Atlas en la última etapa del viaje",
    "Disfrutar de un tour privado con paradas flexibles durante la ruta",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Esta ruta de Fez a Marrakech en 3 días combina el traslado entre dos de las
    ciudades más visitadas de Marruecos con una experiencia completa en el
    desierto de Merzouga.

    En lugar de viajar directamente de Fez a Marrakech, el recorrido se dirige
    hacia el sur atravesando Ifrane, el Medio Atlas, Midelt y el valle del Ziz.
    A medida que avanzas hacia el sureste, los bosques y paisajes de montaña van
    dando paso a zonas más áridas hasta llegar a Merzouga, junto a las grandes
    dunas de Erg Chebbi.

    La primera noche se vive en el Sahara. Allí disfrutarás de un paseo en camello
    por las dunas, del atardecer en el desierto y de una noche en un campamento
    cerca de Merzouga.

    Al día siguiente, la ruta Fez–Merzouga–Marrakech continúa hacia Rissani,
    las gargantas del Todra y el valle del Dades. Es una jornada marcada por
    fuertes contrastes entre dunas, palmerales, cañones y montañas.

    El tercer día atraviesa el sur de Marruecos en dirección a Ouarzazate y
    Ait Ben Haddou antes de cruzar el Alto Atlas y terminar el viaje en Marrakech.

    Este tour privado de Fez a Marrakech es una opción especialmente interesante
    para quienes quieren conocer el Sahara sin regresar a Fez. En solo tres días,
    la ruta conecta el norte con Marrakech pasando por Merzouga y algunos de los
    paisajes más representativos del sur de Marruecos.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title:
        "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",

      description: `
        Tu viaje de Fez a Marrakech por el desierto comienza por la mañana con
        la salida desde Fez.

        La primera parte de la jornada atraviesa Ifrane y los paisajes del Medio
        Atlas. A lo largo del recorrido verás cómo cambia el entorno mientras
        avanzas desde las zonas montañosas y boscosas del norte hacia regiones
        progresivamente más secas.

        La ruta continúa hacia Midelt, donde se puede realizar una parada antes
        de seguir en dirección al sureste de Marruecos.

        Más adelante llegarás al valle del Ziz, conocido por sus extensos
        palmerales rodeados de montañas y terreno árido. Es uno de los cambios
        de paisaje más llamativos del trayecto desde Fez hasta Merzouga.

        Después de pasar por la zona de Errachidia, continuarás hacia Merzouga,
        situada junto a las dunas de Erg Chebbi.

        Al llegar al desierto, comenzarás una de las experiencias principales
        del tour: un paseo en camello por las dunas del Sahara. El recorrido
        permite disfrutar del paisaje mientras cae la tarde y contemplar el
        atardecer sobre Erg Chebbi.

        La jornada termina en un campamento del desierto, donde cenarás y pasarás
        la primera noche rodeado por las dunas de Merzouga.
      `,

      highlights: [
        "Salida desde Fez",
        "Paso por Ifrane",
        "Recorrido por el Medio Atlas",
        "Parada en la zona de Midelt",
        "Vistas del valle del Ziz",
        "Llegada a Merzouga",
        "Primeras vistas de las dunas de Erg Chebbi",
        "Paseo en camello por el Sahara",
        "Atardecer entre las dunas",
        "Cena y noche en un campamento del desierto",
      ],
    },

    {
      day: 2,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description: `
        El segundo día comienza en el silencio del Sahara. Si lo deseas, puedes
        levantarte temprano para ver el amanecer sobre las dunas de Erg Chebbi
        antes del desayuno.

        Después de dejar Merzouga, la ruta continúa hacia el oeste pasando por
        la zona de Rissani y atravesando los paisajes del sureste de Marruecos.

        La siguiente gran parada son las gargantas del Todra. Aquí tendrás tiempo
        para caminar entre las altas paredes rocosas del cañón y disfrutar de un
        entorno completamente diferente al de las dunas del día anterior.

        Después de la visita, el viaje continúa hacia el valle del Dades. Durante
        esta parte del recorrido aparecen pequeños pueblos, palmerales, zonas
        rocosas y paisajes de montaña.

        Al final de la jornada llegarás a la zona del Dades, donde cenarás y
        pasarás la segunda noche de esta ruta de Fez a Marrakech.
      `,

      highlights: [
        "Amanecer opcional sobre Erg Chebbi",
        "Desayuno antes de salir del Sahara",
        "Salida de Merzouga",
        "Paso por Rissani",
        "Recorrido por el sureste de Marruecos",
        "Visita a las gargantas del Todra",
        "Tiempo para caminar por el cañón",
        "Continuación hacia el valle del Dades",
        "Cena y alojamiento en la zona del Dades",
      ],
    },

    {
      day: 3,

      title:
        "Valle del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",

      description: `
        Después del desayuno, comienza la última etapa de este circuito de Fez
        a Marrakech por el desierto.

        El recorrido sigue hacia Ouarzazate atravesando los paisajes del sur de
        Marruecos, donde se alternan valles abiertos, montañas secas y pequeñas
        comunidades tradicionales.

        Más adelante llegarás a Ait Ben Haddou. Tendrás tiempo para conocer este
        histórico pueblo fortificado y observar de cerca su característica
        arquitectura de tierra.

        Desde Ait Ben Haddou, la ruta continúa hacia el Alto Atlas. El camino de
        montaña ofrece amplias vistas y un último gran cambio de paisaje antes
        de descender en dirección a Marrakech.

        Durante el trayecto se pueden realizar paradas para descansar, comer o
        hacer fotografías según el horario y las condiciones del viaje.

        La llegada a Marrakech está prevista para más tarde durante el día,
        poniendo fin a una ruta de tres días que conecta Fez, Merzouga y
        Marrakech a través del Sahara y el sur de Marruecos.
      `,

      highlights: [
        "Desayuno en el valle del Dades",
        "Recorrido por el sur de Marruecos",
        "Paso por Ouarzazate",
        "Visita a Ait Ben Haddou",
        "Arquitectura tradicional de tierra",
        "Cruce del Alto Atlas",
        "Paradas panorámicas durante el trayecto",
        "Llegada a Marrakech",
        "Fin del tour privado de Fez a Marrakech",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado de Fez a Marrakech durante todo el recorrido",
    "Conductor de habla inglesa o francesa",
    "Dos noches de alojamiento",
    "Una noche en un campamento del desierto cerca de Merzouga",
    "Una noche en la zona del valle del Dades",
    "Desayunos diarios",
    "Cena en el campamento del Sahara",
    "Cena durante la estancia en el valle del Dades",
    "Paseo en camello por las dunas de Erg Chebbi",
    "Tiempo libre en las principales paradas del itinerario",
    "Paradas flexibles para descansar y hacer fotografías",
    "Recogida en Fez",
    "Traslado final en Marrakech",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos",
    "Bebidas",
    "Entradas a monumentos y atracciones cuando sean necesarias",
    "Guías locales salvo que se soliciten",
    "Actividades opcionales no indicadas en el itinerario",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no mencionados en el apartado de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Merzouga",
      type: "Campamento en el desierto del Sahara",
    },
    {
      night: 2,
      location: "Valle del Dades",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/3-day-fes-marrakech-desert-tour.webp",
  ],

  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿El tour de Fez a Marrakech en 3 días es privado?",

      answer:
        "Sí. Es un tour privado para ti y tu grupo, con transporte privado durante toda la ruta. Esto permite realizar las paradas previstas con mayor flexibilidad y adaptar mejor el ritmo del viaje.",
    },

    {
      question:
        "¿Dónde empieza y termina la ruta de Fez a Marrakech?",

      answer:
        "El viaje comienza en Fez y termina en Marrakech. La ruta pasa por el Medio Atlas, Merzouga, el desierto del Sahara, las gargantas del Todra, el valle del Dades, Ouarzazate y Ait Ben Haddou.",
    },

    {
      question:
        "¿Cuánto dura el viaje de Fez a Marrakech por Merzouga?",

      answer:
        "El circuito dura 3 días y 2 noches. La primera noche se pasa en un campamento del Sahara cerca de Merzouga y la segunda en la zona del valle del Dades.",
    },

    {
      question:
        "¿La ruta Fez–Merzouga–Marrakech incluye una noche en el desierto?",

      answer:
        "Sí. La primera noche se pasa en un campamento del desierto cerca de las dunas de Erg Chebbi, en Merzouga.",
    },

    {
      question:
        "¿Está incluido el paseo en camello en Merzouga?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi forma parte de la experiencia en el Sahara y está incluido en el tour.",
    },

    {
      question:
        "¿Qué lugares se visitan de Fez a Marrakech en estos 3 días?",

      answer:
        "La ruta incluye Ifrane, el Medio Atlas, Midelt, el valle del Ziz, Merzouga, Erg Chebbi, Rissani, las gargantas del Todra, el valle del Dades, Ouarzazate, Ait Ben Haddou y el Alto Atlas antes de llegar a Marrakech.",
    },

    {
      question:
        "¿Qué diferencia hay entre ir directamente de Fez a Marrakech y hacer esta ruta por el desierto?",

      answer:
        "El trayecto directo es más rápido. Este circuito de tres días está pensado para quienes quieren aprovechar el desplazamiento entre Fez y Marrakech para conocer Merzouga y el Sahara. Además del desierto, incluye las gargantas del Todra, el valle del Dades y Ait Ben Haddou.",
    },

    {
      question:
        "¿Están incluidos los desayunos y las cenas?",

      answer:
        "Sí. Se incluyen los desayunos diarios, además de la cena en el campamento del Sahara y la cena durante la noche en el valle del Dades.",
    },

    {
      question:
        "¿Los almuerzos están incluidos?",

      answer:
        "No. Los almuerzos no están incluidos. Durante la ruta se realizan paradas donde puedes elegir dónde comer según tus preferencias.",
    },

    {
      question:
        "¿Qué debo llevar para la noche en el desierto de Merzouga?",

      answer:
        "Es recomendable llevar ropa cómoda, calzado adecuado para caminar, protección solar y una capa adicional para la noche. La temperatura en el desierto puede variar bastante entre el día y la noche.",
    },

    {
      question:
        "¿Se puede personalizar este tour de Fez a Marrakech?",

      answer:
        "Sí. Al tratarse de un viaje privado, algunos detalles pueden adaptarse a tus fechas, preferencias de alojamiento y planes posteriores en Marrakech.",
    },

    {
      question:
        "¿Pueden hacer este tour las familias con niños?",

      answer:
        "Sí. Las familias pueden solicitar esta ruta. Si viajas con niños, es recomendable indicar sus edades al contactar para organizar de forma adecuada los trayectos, el alojamiento y la experiencia en camello.",
    },

    {
      question:
        "¿A qué hora se llega a Marrakech el tercer día?",

      answer:
        "La hora exacta depende del tráfico, las condiciones de la carretera, las paradas, las comidas y el tiempo dedicado a las visitas. Normalmente la llegada a Marrakech es más tarde durante el día.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "Fez a Marrakech en 3 días por el desierto de Merzouga",

    description:
      "Viaja de Fez a Marrakech en 3 días por Merzouga: tour privado con camello, noche en el Sahara, gargantas del Todra, Ait Ben Haddou y Alto Atlas.",

    // Mapa interno de palabras clave.
    // No mostrar como meta keywords.
    keywords: [
      "fez a marrakech",
      "de fez a marrakech",
      "fez marrakech",
      "ruta fez marrakech",
      "circuito fez marrakech",
      "fez marrakech tour",
      "fez merzouga marrakech",
      "ruta fez merzouga marrakech",
      "tour desierto desde fez",
      "desierto de merzouga desde fez",
      "excursiones al desierto desde fez",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 3,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},

{
  id: "20",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "de-fez-a-merzouga-desierto-3-dias",

  title: "De Fez a Merzouga en 3 días: tour por el desierto del Sahara",

  shortDescription:
    "Viaja de Fez a Merzouga en 3 días en un tour privado por Ifrane, el Medio Atlas y el valle del Ziz, con camellos en Erg Chebbi, noche en el Sahara y tiempo para descubrir el desierto.",

  image: "/images/tours/3-day-fes-merzouga-desert-tour.webp",

  badge: "Fez a Merzouga",

  featured: true,

  category: "Tours por el Desierto",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration: "3 días / 2 noches",

  nights: 2,

  tourType: "Tour privado",

  groupSize: "Hasta 4 personas",

  languages: ["Inglés", "Francés"],

  departure: "Fez",

  arrival: "Fez",

  locations: [
    "Fez",
    "Ifrane",
    "Medio Atlas",
    "Midelt",
    "Valle del Ziz",
    "Errachidia",
    "Erfoud",
    "Merzouga",
    "Erg Chebbi",
    "Desierto del Sahara",
    "Fez",
  ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
      {
        name: "Ifrane",
        position: [33.5228, -5.1109],
      },
      {
        name: "Midelt",
        position: [32.6806, -4.7369],
      },
      {
        name: "Merzouga",
        position: [31.0802, -4.0133],
      },
      {
        name: "Fez",
        position: [34.0181, -5.0078],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Viajar de Fez a Merzouga en una ruta privada de tres días",
    "Atravesar Ifrane y los paisajes del Medio Atlas",
    "Observar cómo cambia el paisaje al avanzar hacia el sureste de Marruecos",
    "Disfrutar de vistas panorámicas sobre el valle del Ziz",
    "Pasar por Errachidia y Erfoud antes de llegar al Sahara",
    "Llegar a Merzouga, a los pies de las dunas de Erg Chebbi",
    "Recorrer las dunas del Sahara en camello",
    "Contemplar el atardecer sobre Erg Chebbi",
    "Dormir una noche en un campamento del desierto",
    "Dedicar un día completo a descubrir Merzouga y sus alrededores",
    "Pasar una segunda noche en la zona de Merzouga",
    "Regresar a Fez atravesando de nuevo el Medio Atlas",
    "Disfrutar de paradas flexibles para descansar y hacer fotografías",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Esta ruta de Fez a Merzouga en 3 días está pensada para viajeros que quieren
    conocer el desierto del Sahara sin continuar hacia Marrakech y sin tener que
    hacer una visita demasiado rápida a Merzouga.

    El viaje comienza en Fez y atraviesa Ifrane, las montañas del Medio Atlas y
    la zona de Midelt antes de descender hacia el valle del Ziz. Durante el
    recorrido, el paisaje cambia progresivamente desde bosques y montañas hasta
    palmerales, mesetas áridas y zonas desérticas.

    Después de pasar por Errachidia y Erfoud, llegarás a Merzouga, situada junto
    a las grandes dunas de Erg Chebbi.

    La primera tarde está dedicada a una de las experiencias principales de este
    tour por el desierto desde Fez: un paseo en camello entre las dunas mientras
    cae el sol. La jornada termina con cena y alojamiento en un campamento del
    Sahara.

    A diferencia de una excursión rápida de Fez a Merzouga, el segundo día se
    dedica a disfrutar con más calma del entorno de Erg Chebbi. Tendrás tiempo
    para descubrir los paisajes que rodean Merzouga antes de pasar una segunda
    noche en un hotel o riad de la zona.

    El tercer día comienza el regreso a Fez siguiendo de nuevo la ruta por Erfoud,
    Errachidia, el valle del Ziz, Midelt y el Medio Atlas.

    Este tour de Fez a Merzouga es una buena opción para quienes quieren combinar
    carretera panorámica, Sahara, camellos, dunas y dos noches en la zona del
    desierto sin cambiar de ciudad al final del viaje.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [
    {
      day: 1,

      title:
        "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",

      description: `
        Tu viaje de Fez a Merzouga comienza por la mañana con la recogida en Fez.

        La primera parte del recorrido atraviesa Ifrane y los paisajes del Medio
        Atlas. Durante esta etapa aparecen bosques, carreteras de montaña y
        pequeños pueblos que contrastan con el paisaje que encontrarás más tarde
        en el Sahara.

        Continuaremos hacia Midelt, donde se puede realizar una parada para
        descansar o almorzar antes de seguir hacia el sureste.

        Después, la ruta desciende hacia el valle del Ziz. Desde algunos puntos
        panorámicos podrás contemplar sus extensos palmerales rodeados de montañas
        y zonas áridas.

        Seguiremos por Errachidia y Erfoud hasta llegar a Merzouga, donde aparecen
        las grandes dunas de Erg Chebbi.

        Por la tarde comenzará la experiencia en el desierto de Merzouga. Subirás
        a un camello para recorrer las dunas y disfrutar del cambio de luz sobre
        el Sahara al acercarse el atardecer.

        Después continuarás hasta el campamento, donde cenarás y pasarás la primera
        noche en el desierto.
      `,

      highlights: [
        "Recogida en Fez",
        "Paso por Ifrane",
        "Cruce del Medio Atlas",
        "Parada en la zona de Midelt",
        "Vistas del valle del Ziz",
        "Paso por Errachidia y Erfoud",
        "Llegada a Merzouga",
        "Dunas de Erg Chebbi",
        "Paseo en camello",
        "Atardecer en el Sahara",
        "Cena y noche en el campamento",
      ],
    },

    {
      day: 2,

      title:
        "Merzouga – Erg Chebbi – Día completo en el desierto",

      description: `
        El segundo día permite disfrutar de Merzouga con más tiempo, una de las
        principales diferencias de esta excursión al desierto desde Fez frente a
        itinerarios más rápidos.

        Si lo deseas, puedes levantarte temprano para contemplar el amanecer sobre
        las dunas de Erg Chebbi antes del desayuno.

        Después tendrás tiempo para descubrir los paisajes que rodean Merzouga y
        conocer mejor el entorno del Sahara.

        La jornada está pensada para disfrutar del desierto sin tener que comenzar
        inmediatamente el largo regreso a Fez. Puedes recorrer diferentes zonas
        próximas a las dunas, detenerte en miradores naturales y disfrutar con
        calma del ambiente de esta región del sureste de Marruecos.

        Al final del día regresarás a Merzouga.

        La segunda noche se pasa en un hotel o riad de la zona, ofreciendo una
        experiencia diferente a la noche anterior en el campamento del Sahara.
      `,

      highlights: [
        "Amanecer opcional sobre Erg Chebbi",
        "Desayuno en Merzouga",
        "Día completo alrededor del desierto",
        "Tiempo para descubrir los paisajes de Erg Chebbi",
        "Más tiempo en Merzouga sin largos desplazamientos",
        "Segunda noche en la zona de Merzouga",
        "Alojamiento en hotel o riad",
      ],
    },

    {
      day: 3,

      title:
        "Merzouga – Erfoud – Valle del Ziz – Midelt – Medio Atlas – Fez",

      description: `
        Después del desayuno comenzaremos el regreso desde Merzouga hacia Fez.

        Viajaremos hacia el norte pasando de nuevo por las zonas de Erfoud y
        Errachidia antes de alcanzar el valle del Ziz.

        Esta parte de la ruta permite volver a disfrutar del contraste entre los
        paisajes secos del sureste de Marruecos y los palmerales del valle.

        Continuaremos hacia la región de Midelt mientras el terreno vuelve a
        cambiar y aparecen paisajes de mayor altitud.

        Más adelante cruzaremos las montañas del Medio Atlas y pasaremos por la
        zona de Ifrane antes de acercarnos a Fez.

        Durante el trayecto se pueden realizar paradas para descansar, comer y
        hacer fotografías según el horario.

        La llegada a Fez está prevista para más tarde durante el día.

        Aquí termina esta ruta de tres días de Fez a Merzouga y regreso, después
        de recorrer montañas, valles y los paisajes del Sahara.
      `,

      highlights: [
        "Desayuno en Merzouga",
        "Salida del Sahara",
        "Paso por Erfoud y Errachidia",
        "Regreso por el valle del Ziz",
        "Continuación hacia Midelt",
        "Cruce del Medio Atlas",
        "Paso por Ifrane",
        "Regreso a Fez",
        "Traslado final en Fez",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Transporte privado de Fez a Merzouga y regreso a Fez",
    "Conductor de habla inglesa o francesa",
    "Dos noches de alojamiento",
    "Una noche en un campamento del Sahara cerca de Merzouga",
    "Una noche en un hotel o riad en la zona de Merzouga",
    "Desayunos diarios",
    "Cena en el campamento del Sahara",
    "Paseo en camello por las dunas de Erg Chebbi",
    "Tiempo para descubrir la zona del desierto de Merzouga",
    "Tiempo libre en las principales paradas del itinerario",
    "Paradas flexibles para descansar y hacer fotografías",
    "Recogida en Fez",
    "Traslado final en Fez",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Almuerzos",
    "Cenas salvo las indicadas en la sección de incluidos",
    "Bebidas",
    "Entradas a atracciones cuando sean necesarias",
    "Guías locales salvo solicitud previa",
    "Actividades opcionales en el desierto no mencionadas en el itinerario",
    "Gastos personales",
    "Seguro de viaje",
    "Propinas",
    "Servicios no mencionados en la sección de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Merzouga",
      type: "Campamento en el desierto del Sahara",
    },
    {
      night: 2,
      location: "Merzouga",
      type: "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/3-day-fes-merzouga-desert-tour.webp",
  ],

  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs: [
    {
      question:
        "¿El tour de Fez a Merzouga en 3 días es privado?",

      answer:
        "Sí. Es un viaje privado para ti y tu grupo, con transporte privado y mayor flexibilidad para organizar las paradas, los descansos y el ritmo del recorrido.",
    },

    {
      question:
        "¿Dónde empieza y termina la ruta de Fez a Merzouga?",

      answer:
        "El tour comienza en Fez, viaja hacia Merzouga y las dunas de Erg Chebbi y regresa a Fez durante el tercer día.",
    },

    {
      question:
        "¿Cuántas noches incluye el tour?",

      answer:
        "Incluye dos noches en la zona de Merzouga: una noche en un campamento del Sahara y otra en un hotel o riad.",
    },

    {
      question:
        "¿Esta excursión desde Fez incluye el desierto del Sahara?",

      answer:
        "Sí. Merzouga y las dunas de Erg Chebbi son el centro del viaje. La experiencia incluye un paseo en camello y una noche en un campamento del Sahara.",
    },

    {
      question:
        "¿Está incluido el paseo en camello en Merzouga?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido como parte de la experiencia en el desierto.",
    },

    {
      question:
        "¿Dormimos realmente en el desierto?",

      answer:
        "Sí. La primera noche se pasa en un campamento del Sahara cerca de Merzouga y las dunas de Erg Chebbi.",
    },

    {
      question:
        "¿Qué hacemos el segundo día en Merzouga?",

      answer:
        "El segundo día está dedicado a descubrir la zona de Merzouga y disfrutar de más tiempo alrededor de Erg Chebbi, en lugar de comenzar inmediatamente el regreso a Fez.",
    },

    {
      question:
        "¿Las dos noches se pasan en Merzouga?",

      answer:
        "Sí. Ambas noches se pasan en la zona de Merzouga: la primera en el campamento del Sahara y la segunda en un hotel o riad.",
    },

    {
      question:
        "¿La ruta de Fez a Merzouga pasa por Ifrane?",

      answer:
        "Sí. El recorrido entre Fez y Merzouga pasa por la zona de Ifrane y atraviesa las montañas del Medio Atlas.",
    },

    {
      question:
        "¿Visitamos el valle del Ziz?",

      answer:
        "Sí. La ruta atraviesa el valle del Ziz durante el trayecto hacia Merzouga y vuelve a pasar por esta zona durante el regreso a Fez.",
    },

    {
      question:
        "¿El tour pasa por Erfoud?",

      answer:
        "Sí. El recorrido pasa por la región de Erfoud durante el trayecto entre el valle del Ziz y Merzouga.",
    },

    {
      question:
        "¿Hay muchas horas de carretera entre Fez y Merzouga?",

      answer:
        "Sí. Fez y Merzouga están separados por una distancia considerable, por lo que el primer y el tercer día incluyen varias horas de conducción. La ruta se divide con paradas para paisajes, descanso, comida y fotografías.",
    },

    {
      question:
        "¿Qué diferencia hay entre este tour y el tour de Fez a Marrakech por el desierto?",

      answer:
        "Este itinerario regresa a Fez y dedica más tiempo a Merzouga. El tour de Fez a Marrakech continúa hacia el oeste después del Sahara, pasando por las gargantas del Todra, el valle del Dades y Ait Ben Haddou antes de terminar en Marrakech.",
    },

    {
      question:
        "¿Qué comidas están incluidas?",

      answer:
        "Se incluyen los desayunos diarios y la cena en el campamento del Sahara. Los almuerzos y otras cenas no están incluidos salvo que se acuerde lo contrario.",
    },

    {
      question:
        "¿Qué debo llevar para la noche en el Sahara?",

      answer:
        "Se recomienda llevar ropa cómoda, calzado adecuado, protección solar y una capa adicional para la noche. Las temperaturas en el desierto pueden cambiar bastante entre el día y la noche.",
    },

    {
      question:
        "¿Se puede personalizar el tour de Fez a Merzouga?",

      answer:
        "Sí. Al tratarse de un viaje privado, algunos detalles pueden adaptarse a tus fechas, preferencias de alojamiento e intereses.",
    },

    {
      question:
        "¿Es adecuado para familias con niños?",

      answer:
        "Las familias pueden solicitar este tour privado. Si viajas con niños, indica sus edades al contactar para organizar mejor los trayectos, el alojamiento y la experiencia en camello.",
    },

    {
      question:
        "¿A qué hora regresamos a Fez el tercer día?",

      answer:
        "La hora exacta depende del tráfico, las condiciones de la carretera, las comidas y las paradas realizadas durante el regreso. Normalmente la llegada es más tarde durante el día.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {
    title:
      "De Fez a Merzouga en 3 días | Tour por el desierto",

    description:
      "Viaja de Fez a Merzouga en 3 días con tour privado por el Medio Atlas, valle del Ziz, Erg Chebbi, camellos, noche en el Sahara y regreso a Fez.",

    // Mapa interno de palabras clave.
    // No mostrar como meta keywords.
    keywords: [
      "de fez a merzouga",
      "fez a merzouga",
      "fes a merzouga",
      "tour fez merzouga",
      "tour desierto desde fez",
      "excursion desierto desde fez",
      "excursiones al desierto desde fez",
      "desierto de merzouga desde fez",
      "ruta fez merzouga",
      "fez merzouga",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 3,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },
},
{
  id: "21",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug: "excursion-desde-fez-desierto-4-dias",

  title:
    "Excursión desde Fez al desierto en 4 días hasta Marrakech",

  shortDescription:
    "Descubre el Sahara en una excursión privada de 4 días desde Fez hasta Marrakech, con Merzouga, Erg Chebbi, paseo en camello, noche en el desierto, gargantas del Todra y Ait Ben Haddou.",

  image:
    "/images/tours/4-day-fes-marrakech-desert-tour.webp",

  badge:
    "Más tiempo en el Sahara",

  featured:
    true,

  category:
    "Tours por el Desierto",

  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "4 días / 3 noches",

  nights:
    3,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Fez",

  arrival:
    "Marrakech",

  locations:
    [
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Alto Atlas",
      "Marrakech",
    ],

  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Midelt",

        position:
          [32.6806, -4.7369],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Rissani",

        position:
          [31.2823, -4.2651],
      },

      {
        name:
          "Gargantas del Todra",

        position:
          [31.5889, -5.5928],
      },

      {
        name:
          "Valle del Dades",

        position:
          [31.3709, -5.9887],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Ait Ben Haddou",

        position:
          [31.0472, -7.1298],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },
    ],
  },

  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Comienza una de nuestras excursiones desde Fez con destino al Sahara y Marrakech",

    "Cruza Ifrane y las montañas del Medio Atlas",

    "Disfruta de las vistas panorámicas del valle del Ziz",

    "Viaja por Errachidia y Erfoud antes de llegar a Merzouga",

    "Pasa más tiempo en Merzouga que en la ruta clásica de tres días",

    "Descubre las dunas doradas de Erg Chebbi",

    "Disfruta de un paseo en camello por el desierto del Sahara",

    "Contempla la puesta de sol sobre las dunas",

    "Pasa una noche en un campamento del Sahara",

    "Visita Rissani al dejar la región de Merzouga",

    "Camina entre las paredes de las gargantas del Todra",

    "Descubre los paisajes del valle del Dades",

    "Visita Ouarzazate y Ait Ben Haddou",

    "Cruza el Alto Atlas antes de llegar a Marrakech",

    "Viaja en privado con paradas flexibles durante todo el recorrido",
  ],

  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Esta excursión desde Fez al desierto en 4 días está pensada para viajeros
    que quieren conocer Merzouga y el Sahara con más calma antes de continuar
    hasta Marrakech.

    El recorrido comienza en Fez y se dirige hacia el sur atravesando Ifrane,
    el Medio Atlas y Midelt. Después, el paisaje cambia al acercarse al valle
    del Ziz, donde los palmerales contrastan con montañas y zonas cada vez más
    áridas.

    Tras pasar por Errachidia y Erfoud, llegarás a Merzouga, situada junto a las
    grandes dunas de Erg Chebbi.

    A diferencia de una excursión desde Fez de tres días, este itinerario dedica
    más tiempo a la región del Sahara. La primera noche se pasa en un hotel o
    riad de Merzouga, lo que permite descansar después del trayecto y disfrutar
    del entorno sin tener que realizar inmediatamente el paseo en camello.

    El segundo día está dedicado a descubrir mejor la zona del desierto. Más
    tarde comenzarás el paseo en camello entre las dunas de Erg Chebbi para
    disfrutar del atardecer antes de pasar la noche en un campamento del Sahara.

    El tercer día, la ruta continúa hacia el oeste pasando por Rissani y las
    gargantas del Todra antes de llegar al valle del Dades.

    En la última jornada viajarás hacia Ouarzazate y Ait Ben Haddou. Después
    cruzarás el Alto Atlas hasta llegar a Marrakech.

    Este tour desde Fez combina carretera panorámica, desierto de Merzouga,
    naturaleza y algunos de los lugares más conocidos del sur de Marruecos en
    una ruta privada de cuatro días.
  `,

  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",

      description:
      `
        La excursión desde Fez comienza por la mañana con la recogida en la
        ciudad.

        Dejaremos Fez y viajaremos hacia Ifrane antes de adentrarnos en las
        montañas del Medio Atlas.

        Durante esta primera parte del recorrido verás paisajes de montaña,
        bosques y pequeñas localidades que contrastan con las regiones áridas
        que aparecerán más adelante.

        Continuaremos hacia Midelt, donde habrá tiempo para hacer una pausa antes
        de seguir hacia el sureste.

        Después comenzará uno de los cambios de paisaje más interesantes de la
        ruta. Descenderemos hacia el valle del Ziz, conocido por sus palmerales y
        sus amplias vistas entre montañas.

        La ruta continúa por Errachidia y Erfoud antes de llegar a Merzouga.

        Al acercarnos a la localidad aparecerán las grandes dunas de Erg Chebbi,
        marcando la llegada al Sahara.

        A diferencia de los itinerarios más cortos, esta primera jornada termina
        tranquilamente en Merzouga. Tendrás tiempo para descansar y disfrutar de
        tus primeras vistas del desierto.

        Noche en hotel o riad en Merzouga.
      `,

      highlights:
      [
        "Recogida en Fez",

        "Paso por Ifrane",

        "Cruce del Medio Atlas",

        "Parada en Midelt",

        "Vistas del valle del Ziz",

        "Paso por Errachidia y Erfoud",

        "Llegada a Merzouga",

        "Primeras vistas de Erg Chebbi",

        "Noche en Merzouga",
      ],
    },

    {
      day:
        2,

      title:
        "Merzouga – Erg Chebbi – Experiencia en el Sahara – Campamento",

      description:
      `
        El segundo día está dedicado a disfrutar con más calma de la región de
        Merzouga.

        Tener una jornada adicional en el Sahara es una de las principales
        ventajas de este tour desde Fez. En lugar de llegar y salir del desierto
        rápidamente, tendrás tiempo para observar los paisajes alrededor de Erg
        Chebbi y conocer mejor el entorno.

        Durante el día podrás disfrutar de diferentes perspectivas de las dunas
        y del paisaje desértico que rodea Merzouga.

        Por la tarde comenzará la experiencia en camello.

        Recorrerás las dunas de Erg Chebbi mientras el sol desciende sobre el
        Sahara. La luz cambia progresivamente sobre la arena y convierte este
        momento en una de las partes más especiales del viaje.

        Después del atardecer continuarás hacia el campamento.

        Allí disfrutarás de la cena y pasarás la segunda noche del recorrido
        rodeado por el paisaje del desierto.
      `,

      highlights:
      [
        "Día completo en la zona de Merzouga",

        "Tiempo para descubrir Erg Chebbi",

        "Paisajes del Sahara",

        "Paseo en camello",

        "Atardecer sobre las dunas",

        "Llegada al campamento",

        "Cena en el Sahara",

        "Noche en el desierto",
      ],
    },

    {
      day:
        3,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
        Si lo deseas, puedes levantarte temprano para contemplar el amanecer sobre
        las dunas antes del desayuno.

        Después dejaremos Merzouga y continuaremos hacia el oeste.

        La primera parte del trayecto pasa por la zona de Rissani antes de
        continuar a través de los paisajes del sureste de Marruecos.

        Más adelante llegaremos a las gargantas del Todra.

        Tendrás tiempo para caminar entre las altas paredes rocosas del cañón y
        disfrutar de un entorno completamente diferente al de Erg Chebbi.

        Tras la visita continuaremos hacia el valle del Dades.

        El recorrido atraviesa pequeños pueblos, zonas rocosas y paisajes de
        montaña hasta llegar al alojamiento.

        Cena y noche en el valle del Dades.
      `,

      highlights:
      [
        "Amanecer opcional en el Sahara",

        "Salida de Merzouga",

        "Paso por Rissani",

        "Gargantas del Todra",

        "Paseo por el cañón",

        "Ruta hacia el valle del Dades",

        "Cena y alojamiento en el Dades",
      ],
    },

    {
      day:
        4,

      title:
        "Valle del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",

      description:
      `
        Después del desayuno comenzará la última etapa de esta ruta desde Fez
        hasta Marrakech.

        Dejaremos el valle del Dades y viajaremos por los paisajes del sur de
        Marruecos en dirección a Ouarzazate.

        Después continuaremos hacia Ait Ben Haddou, uno de los pueblos
        fortificados más conocidos del país.

        Tendrás tiempo para descubrir su arquitectura tradicional de tierra y
        recorrer parte del antiguo ksar antes de seguir hacia las montañas.

        Desde Ait Ben Haddou comenzaremos el cruce del Alto Atlas.

        La carretera ofrece amplias vistas de montañas, valles y pequeñas
        comunidades antes de descender hacia Marrakech.

        Durante el trayecto pueden realizarse paradas para descansar, comer o
        hacer fotografías según el horario.

        Llegaremos a Marrakech más tarde durante el día.

        Aquí termina esta excursión de cuatro días desde Fez después de recorrer
        el Medio Atlas, Merzouga, el Sahara, las gargantas del Todra, el Dades
        y Ait Ben Haddou.
      `,

      highlights:
      [
        "Desayuno en el valle del Dades",

        "Ruta por el sur de Marruecos",

        "Paso por Ouarzazate",

        "Visita de Ait Ben Haddou",

        "Arquitectura tradicional de tierra",

        "Cruce del Alto Atlas",

        "Paradas panorámicas",

        "Llegada a Marrakech",

        "Traslado final en Marrakech",
      ],
    },
  ],

  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado desde Fez hasta Marrakech",

    "Conductor de habla inglesa o francesa",

    "Tres noches de alojamiento",

    "Una noche en hotel o riad en Merzouga",

    "Una noche en campamento del Sahara cerca de Erg Chebbi",

    "Una noche en el valle del Dades",

    "Desayunos diarios",

    "Cena en el campamento del Sahara",

    "Cena durante la estancia en el valle del Dades",

    "Paseo en camello por las dunas de Erg Chebbi",

    "Día completo para disfrutar de la zona de Merzouga",

    "Tiempo libre en las principales paradas",

    "Paradas flexibles para descansar y hacer fotografías",

    "Recogida en Fez",

    "Traslado final en Marrakech",
  ],

  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Cenas salvo las indicadas en la sección de incluidos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales en el desierto no indicadas en el itinerario",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en el apartado de incluidos",
  ],

  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Merzouga",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        3,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },
  ],

  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/4-day-fes-marrakech-desert-tour.webp",
  ],

  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Esta excursión desde Fez al desierto es privada?",

      answer:
        "Sí. Es un viaje privado para ti y tu grupo, con transporte privado durante los cuatro días y mayor flexibilidad para organizar paradas y descansos.",
    },

    {
      question:
        "¿Dónde comienza y termina el tour?",

      answer:
        "El recorrido comienza en Fez y termina en Marrakech después de visitar Merzouga, el Sahara, las gargantas del Todra, el valle del Dades y Ait Ben Haddou.",
    },

    {
      question:
        "¿Qué diferencia hay entre la excursión de 3 días y la de 4 días desde Fez?",

      answer:
        "La ruta de cuatro días incluye más tiempo en Merzouga. La primera noche se pasa en un hotel o riad y el día siguiente está dedicado a disfrutar del entorno del Sahara antes del paseo en camello y la noche en el campamento.",
    },

    {
      question:
        "¿Esta excursión desde Fez incluye Merzouga?",

      answer:
        "Sí. Merzouga y las dunas de Erg Chebbi son una parte central del recorrido y se pasan dos noches en esta zona.",
    },

    {
      question:
        "¿Dormimos en el desierto del Sahara?",

      answer:
        "Sí. La segunda noche se pasa en un campamento del Sahara cerca de las dunas de Erg Chebbi.",
    },

    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por Erg Chebbi está incluido y se realiza antes de llegar al campamento del desierto.",
    },

    {
      question:
        "¿Cuántas noches se pasan en Merzouga?",

      answer:
        "Se pasan dos noches en la zona de Merzouga: la primera en un hotel o riad y la segunda en un campamento del Sahara.",
    },

    {
      question:
        "¿Visitamos las gargantas del Todra?",

      answer:
        "Sí. Las gargantas del Todra se visitan durante el tercer día después de salir de Merzouga y antes de continuar hacia el valle del Dades.",
    },

    {
      question:
        "¿La ruta desde Fez al desierto incluye Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou se visita durante el último día antes de cruzar el Alto Atlas y llegar a Marrakech.",
    },

    {
      question:
        "¿Es un tour de Fez a Marrakech o una excursión que regresa a Fez?",

      answer:
        "Este recorrido comienza en Fez y termina en Marrakech. No regresa a Fez, por lo que resulta práctico para quienes quieren continuar su viaje por Marruecos desde Marrakech.",
    },

    {
      question:
        "¿Hay muchas horas de carretera?",

      answer:
        "La ruta cubre una distancia considerable entre Fez, Merzouga y Marrakech. Sin embargo, los cuatro días permiten dividir mejor el recorrido y hacer paradas en paisajes y lugares importantes.",
    },

    {
      question:
        "¿Qué comidas están incluidas?",

      answer:
        "Se incluyen los desayunos diarios, la cena en el campamento del Sahara y la cena durante la estancia en el valle del Dades.",
    },

    {
      question:
        "¿Los almuerzos están incluidos?",

      answer:
        "No. Los almuerzos no están incluidos. Durante el recorrido se realizan paradas donde puedes elegir dónde comer según tus preferencias.",
    },

    {
      question:
        "¿Los guías locales están incluidos?",

      answer:
        "No están incluidos por defecto. Se pueden solicitar guías locales para determinadas visitas al organizar el tour.",
    },

    {
      question:
        "¿Se puede personalizar el tour desde Fez?",

      answer:
        "Sí. Al tratarse de un tour privado, algunos detalles pueden adaptarse a tus fechas, intereses y preferencias de alojamiento.",
    },

    {
      question:
        "¿Qué debo llevar para la noche en el Sahara?",

      answer:
        "Se recomienda ropa cómoda, calzado adecuado, protección solar y una prenda adicional para la noche, ya que la temperatura puede cambiar considerablemente entre el día y la noche.",
    },

    {
      question:
        "¿Es adecuado para familias?",

      answer:
        "Las familias pueden solicitar este viaje privado. Si viajas con niños, indica sus edades al contactar para organizar de forma adecuada los trayectos, el alojamiento y la experiencia en camello.",
    },
  ],

  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Excursión desde Fez al desierto en 4 días | Marrakech",

    description:
      "Excursión privada desde Fez de 4 días por Merzouga y el Sahara hasta Marrakech, con Erg Chebbi, camellos, Todra, Dades y Ait Ben Haddou.",

    // Mapa interno de palabras clave.
    // No mostrar como meta keywords.
    keywords:
    [
      "excursiones desde fez",

      "excursiones fez",

      "tour desde fez",

      "tour fez",

      "tour desierto desde fez",

      "excursion desde fez al desierto",

      "ruta desde fez al desierto",

      "fez merzouga marrakech",

      "tour de fez a marrakech",

      "fez marrakech 4 dias",

      "desierto desde fez",
    ],
  },

  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      4,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "22",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "excursion-desierto-marruecos-5-dias-desde-fez",

  title:
    "Excursión al desierto de Marruecos en 5 días desde Fez",

  shortDescription:
    "Descubre el desierto de Marruecos en una ruta privada de 5 días desde Fez hasta Marrakech con Merzouga, Erg Chebbi, paseo en camello, campamento del Sahara, gargantas del Todra y Ait Ben Haddou.",

  image:
    "/images/tours/5-day-fes-marrakech-desert-tour.webp",

  badge:
    "Experiencia completa en el Sahara",

  featured:
    true,

  category:
    "Tours por el Desierto",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "5 días / 4 noches",

  nights:
    4,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Fez",

  arrival:
    "Marrakech",


  locations:
    [
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Alto Atlas",
      "Marrakech",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Midelt",

        position:
          [32.6806, -4.7369],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Rissani",

        position:
          [31.2823, -4.2651],
      },

      {
        name:
          "Gargantas del Todra",

        position:
          [31.5889, -5.5928],
      },

      {
        name:
          "Valle del Dades",

        position:
          [31.3709, -5.9887],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Ait Ben Haddou",

        position:
          [31.0472, -7.1298],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Disfruta de una de las mejores excursiones al desierto de Marruecos desde Fez",

    "Cruza las montañas del Medio Atlas y descubre paisajes cambiantes",

    "Viaja por el valle del Ziz y sus impresionantes palmerales",

    "Descubre Merzouga y las grandes dunas de Erg Chebbi",

    "Vive una auténtica experiencia en el desierto del Sahara",

    "Realiza un paseo en camello entre las dunas",

    "Contempla la puesta de sol sobre Erg Chebbi",

    "Duerme en un campamento tradicional del Sahara",

    "Visita Rissani, Todra y el valle del Dades",

    "Descubre Ouarzazate y Ait Ben Haddou",

    "Cruza el Alto Atlas hasta llegar a Marrakech",

    "Disfruta de un tour privado con paradas flexibles",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Esta excursión al desierto de Marruecos en 5 días desde Fez está diseñada
    para viajeros que quieren descubrir el Sahara con más tiempo y disfrutar de
    una ruta completa hasta Marrakech.

    El recorrido comienza en Fez y atraviesa algunos de los paisajes más
    impresionantes del país. La primera etapa pasa por Ifrane, las montañas del
    Medio Atlas y Midelt antes de continuar hacia el valle del Ziz.

    Desde allí, la ruta avanza hacia Erfoud y Merzouga, la puerta de entrada a
    las famosas dunas de Erg Chebbi.

    Esta experiencia ofrece más tiempo que un viaje corto al desierto. Tendrás
    la oportunidad de conocer la zona de Merzouga, disfrutar del paisaje del
    Sahara, montar en camello al atardecer y pasar una noche inolvidable en un
    campamento entre las dunas.

    Después de la experiencia en el desierto, el viaje continúa hacia Rissani,
    las gargantas del Todra, el valle del Dades, Ouarzazate y Ait Ben Haddou.

    Finalmente cruzaremos el Alto Atlas hasta llegar a Marrakech.

    Este tour por el desierto de Marruecos combina cultura, naturaleza,
    montañas, oasis, pueblos tradicionales y la magia del Sahara en una ruta
    privada de cinco días.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",

      description:
      `
        La excursión al desierto desde Fez comienza por la mañana con la salida
        desde la ciudad.

        Dejaremos Fez y viajaremos hacia Ifrane, conocida por sus paisajes de
        montaña y su entorno natural.

        Continuaremos atravesando el Medio Atlas hasta llegar a Midelt, donde
        realizaremos una parada antes de seguir hacia el sur.

        La ruta continúa hacia el valle del Ziz, una zona famosa por sus
        palmerales y sus paisajes entre montañas.

        Después pasaremos por Errachidia y Erfoud antes de llegar a Merzouga.

        Al acercarnos al Sahara aparecerán las dunas doradas de Erg Chebbi.

        La noche se pasa en la zona de Merzouga, preparando la experiencia del
        desierto que comenzará al día siguiente.
      `,

      highlights:
      [
        "Salida desde Fez",

        "Visita panorámica de Ifrane",

        "Cruce del Medio Atlas",

        "Midelt",

        "Valle del Ziz",

        "Errachidia y Erfoud",

        "Llegada a Merzouga",
      ],
    },


    {
      day:
        2,

      title:
        "Merzouga – Erg Chebbi – Experiencia en el Sahara",

      description:
      `
        El segundo día está dedicado completamente a descubrir Merzouga y el
        desierto del Sahara.

        Después del desayuno tendrás tiempo para conocer los alrededores de las
        dunas de Erg Chebbi y disfrutar del paisaje único de esta región.

        Durante el día podrás descubrir la cultura local, los paisajes desérticos
        y el ambiente especial de la zona de Merzouga.

        Por la tarde comienza una de las experiencias principales del viaje:
        el paseo en camello por las dunas.

        Mientras avanzas por el Sahara podrás disfrutar de la puesta de sol sobre
        la arena antes de llegar al campamento.

        La noche incluye cena, música tradicional y alojamiento en el campamento
        del desierto.
      `,

      highlights:
      [
        "Día completo en Merzouga",

        "Dunas de Erg Chebbi",

        "Paisajes del Sahara",

        "Paseo en camello",

        "Atardecer en el desierto",

        "Campamento del Sahara",

        "Cena tradicional",
      ],
    },


    {
      day:
        3,

      title:
        "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",

      description:
      `
        Después del desayuno dejaremos Merzouga y continuaremos nuestra ruta por
        el sur de Marruecos.

        Visitaremos Rissani, una localidad conocida por su historia y sus
        mercados tradicionales.

        Después seguiremos hacia las gargantas del Todra, uno de los paisajes
        naturales más impresionantes de la región.

        Tendrás tiempo para caminar entre las enormes paredes del cañón y
        disfrutar del entorno.

        La ruta continúa hacia el valle del Dades, conocido por sus montañas,
        formaciones rocosas y paisajes espectaculares.

        Noche en la zona del Dades.
      `,

      highlights:
      [
        "Salida desde Merzouga",

        "Visita de Rissani",

        "Gargantas del Todra",

        "Valle del Dades",

        "Paisajes del sur de Marruecos",

        "Noche en el Dades",
      ],
    },
    {
      day:
        4,

      title:
        "Valle del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",

      description:
      `
        Después del desayuno comenzaremos la siguiente etapa de este tour por el
        desierto de Marruecos.

        Dejaremos el valle del Dades y continuaremos hacia Ouarzazate, conocida
        como la puerta del desierto.

        Durante el camino disfrutaremos de paisajes del sur de Marruecos y
        realizaremos una parada en Ait Ben Haddou, uno de los lugares históricos
        más famosos del país.

        Tendrás tiempo para explorar este antiguo ksar construido con tierra y
        conocer su arquitectura tradicional.

        Después continuaremos cruzando el Alto Atlas por una carretera panorámica
        hasta llegar a Marrakech.

        Noche en Marrakech.
      `,

      highlights:
      [
        "Salida desde el valle del Dades",

        "Ouarzazate",

        "Visita de Ait Ben Haddou",

        "Arquitectura tradicional marroquí",

        "Cruce del Alto Atlas",

        "Llegada a Marrakech",
      ],
    },


    {
      day:
        5,

      title:
        "Fin del tour en Marrakech",

      description:
      `
        Después del desayuno termina esta experiencia de cinco días desde Fez
        hasta Marrakech.

        El traslado final se organiza según tu horario y tus planes de viaje.

        Después de recorrer el Medio Atlas, el valle del Ziz, Merzouga, el
        desierto del Sahara, las gargantas del Todra y Ait Ben Haddou, finaliza
        una ruta completa por algunos de los paisajes más impresionantes de
        Marruecos.
      `,

      highlights:
      [
        "Último día en Marrakech",

        "Traslado según horario",

        "Fin del viaje privado",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado desde Fez hasta Marrakech",

    "Conductor profesional de habla inglesa o francesa",

    "Cuatro noches de alojamiento",

    "Alojamiento en hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cena en el campamento del desierto",

    "Cena durante la noche en el valle del Dades",

    "Paseo en camello por las dunas de Erg Chebbi",

    "Una noche en campamento tradicional del Sahara",

    "Tiempo suficiente para descubrir Merzouga",

    "Visita de las gargantas del Todra",

    "Visita de Ait Ben Haddou",

    "Recogida en Fez",

    "Traslado final en Marrakech",

    "Paradas flexibles durante el recorrido",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en los incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Merzouga",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        3,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },

    {
      night:
        4,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/5-day-fes-marrakech-desert-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué incluye esta excursión al desierto de Marruecos desde Fez?",

      answer:
        "Incluye transporte privado, alojamiento, experiencia en el Sahara, paseo en camello, noche en campamento del desierto y visitas durante la ruta hasta Marrakech.",
    },


    {
      question:
        "¿Desde dónde comienza y dónde termina el tour?",

      answer:
        "El recorrido comienza en Fez y termina en Marrakech después de atravesar el Medio Atlas, Merzouga, el Sahara y el sur de Marruecos.",
    },


    {
      question:
        "¿Cuántos días dura este tour por el desierto de Marruecos?",

      answer:
        "La ruta dura 5 días y 4 noches, permitiendo disfrutar del Sahara con más calma que los recorridos más cortos.",
    },


    {
      question:
        "¿Incluye Merzouga y las dunas de Erg Chebbi?",

      answer:
        "Sí. Merzouga y Erg Chebbi son una de las principales paradas del viaje, con tiempo para disfrutar del desierto y realizar un paseo en camello.",
    },


    {
      question:
        "¿Dormimos en un campamento del Sahara?",

      answer:
        "Sí. El itinerario incluye una noche en un campamento tradicional del desierto cerca de las dunas de Erg Chebbi.",
    },


    {
      question:
        "¿Cuál es la diferencia entre este tour y una excursión corta desde Fez?",

      answer:
        "Este viaje de 5 días ofrece más tiempo para disfrutar del Sahara, Merzouga y las principales visitas entre Fez y Marrakech.",
    },


    {
      question:
        "¿Visitamos Ait Ben Haddou durante la ruta?",

      answer:
        "Sí. Ait Ben Haddou forma parte del recorrido antes de cruzar el Alto Atlas hacia Marrakech.",
    },


    {
      question:
        "¿Este tour incluye las gargantas del Todra?",

      answer:
        "Sí. Las gargantas del Todra se visitan después de salir de Merzouga antes de continuar hacia el valle del Dades.",
    },


    {
      question:
        "¿El tour es privado?",

      answer:
        "Sí. Es un tour privado con transporte propio y posibilidad de adaptar algunas paradas según tus intereses.",
    },


    {
      question:
        "¿Los almuerzos están incluidos?",

      answer:
        "No. Los almuerzos no están incluidos. Durante la ruta se realizan paradas donde puedes elegir restaurantes según tus preferencias.",
    },


    {
      question:
        "¿Qué debo llevar para el desierto?",

      answer:
        "Se recomienda llevar ropa cómoda, protección solar, calzado adecuado y una prenda extra para las temperaturas nocturnas del Sahara.",
    },


    {
      question:
        "¿Pueden viajar familias en este tour?",

      answer:
        "Sí. Las familias pueden realizar este viaje privado. Se recomienda indicar las edades de los niños al solicitar presupuesto.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Excursión al desierto de Marruecos 5 días desde Fez",

    description:
      "Excursión privada al desierto de Marruecos desde Fez hasta Marrakech en 5 días con Merzouga, Erg Chebbi, camellos, Sahara, Todra y Ait Ben Haddou.",

    keywords:
    [
      "excursiones desierto marruecos",

      "tours desierto marruecos",

      "viajes al desierto de marruecos",

      "viajes desierto marruecos",

      "excursion desierto marruecos",

      "tour por el desierto de marruecos",

      "tour desde fez al desierto",

      "fez merzouga marrakech",

      "desierto merzouga desde fez",

      "ruta desde fez al desierto",

      "tour privado marruecos",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      5,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "23",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "circuito-marruecos-7-dias-desde-fez",

  title:
    "Circuito por Marruecos en 7 días desde Fez hasta Rabat",

  shortDescription:
    "Descubre Marruecos en un circuito privado de 7 días desde Fez hasta Rabat con el Sahara de Merzouga, Marrakech, Casablanca, ciudades imperiales y paisajes del sur.",

  image:
    "/images/tours/7-day-fes-rabat-morocco-tour.webp",

  badge:
    "Sahara y Ciudades Imperiales",

  featured:
    true,

  category:
    "Circuitos por Marruecos",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "7 días / 6 noches",

  nights:
    6,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Fez",

  arrival:
    "Rabat",


  locations:
    [
      "Fez",
      "Ifrane",
      "Medio Atlas",
      "Midelt",
      "Valle del Ziz",
      "Errachidia",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Rissani",
      "Gargantas del Todra",
      "Valle del Dades",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Alto Atlas",
      "Marrakech",
      "Casablanca",
      "Rabat",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Ifrane",

        position:
          [33.5228, -5.1109],
      },

      {
        name:
          "Midelt",

        position:
          [32.6806, -4.7369],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Gargantas del Todra",

        position:
          [31.5889, -5.5928],
      },

      {
        name:
          "Valle del Dades",

        position:
          [31.3709, -5.9887],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Ait Ben Haddou",

        position:
          [31.0472, -7.1298],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },

      {
        name:
          "Casablanca",

        position:
          [33.5731, -7.5898],
      },

      {
        name:
          "Rabat",

        position:
          [34.0209, -6.8416],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Comienza tu circuito por Marruecos de 7 días desde Fez",

    "Explora Fez, una de las ciudades imperiales más importantes del país",

    "Cruza el Medio Atlas y los paisajes del valle del Ziz",

    "Descubre Merzouga y las dunas de Erg Chebbi",

    "Vive una experiencia única en el desierto del Sahara",

    "Disfruta de un paseo en camello y una noche en un campamento tradicional",

    "Visita las gargantas del Todra y el valle del Dades",

    "Conoce Ait Ben Haddou y Ouarzazate",

    "Descubre Marrakech y Casablanca",

    "Termina el viaje en Rabat, la capital de Marruecos",

    "Disfruta de un viaje privado con paradas flexibles",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Este circuito por Marruecos en 7 días desde Fez hasta Rabat combina ciudades
    históricas, montañas, desierto del Sahara y la costa atlántica en una ruta
    completa por algunos de los lugares más importantes del país.

    El viaje comienza en Fez, una de las antiguas ciudades imperiales de
    Marruecos. Desde allí, la ruta continúa hacia el sur atravesando Ifrane,
    el Medio Atlas y Midelt hasta llegar a la región de Merzouga.

    Después de cruzar el valle del Ziz y las zonas desérticas del sureste,
    llegarás a las dunas de Erg Chebbi. Aquí tendrás la oportunidad de vivir una
    auténtica experiencia del Sahara con paseo en camello, atardecer entre las
    dunas y noche en un campamento tradicional.

    El circuito Marruecos 7 días continúa hacia Rissani, las gargantas del
    Todra, el valle del Dades y Ait Ben Haddou antes de llegar a Marrakech.

    Después de descubrir Marrakech, una de las ciudades más famosas del país,
    la ruta continúa hacia Casablanca y termina en Rabat.

    Este viaje a Marruecos de 7 días está diseñado para viajeros que quieren
    conocer diferentes regiones del país en una sola ruta: cultura, ciudades
    imperiales, paisajes naturales, Sahara y la esencia de Marruecos.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Llegada a Fez – Exploración de la ciudad imperial",

      description:
      `
        El circuito Marruecos 7 días comienza en Fez.

        Dependiendo de la hora de llegada, tendrás tiempo para comenzar a
        descubrir esta ciudad histórica conocida por su antigua medina, sus
        mercados tradicionales y su importante patrimonio cultural.

        Fez es una de las ciudades imperiales de Marruecos y una introducción
        perfecta antes de comenzar la ruta hacia el Sahara.

        Noche en Fez.
      `,

      highlights:
      [
        "Llegada a Fez",

        "Ciudad imperial",

        "Medina histórica",

        "Cultura tradicional marroquí",

        "Noche en Fez",
      ],
    },


    {
      day:
        2,

      title:
        "Fez – Ifrane – Medio Atlas – Midelt – Valle del Ziz – Merzouga",

      description:
      `
        Después del desayuno comienza la ruta desde Fez hacia el sureste de
        Marruecos.

        Pasaremos por Ifrane, conocida por sus paisajes de montaña, antes de
        cruzar las montañas del Medio Atlas.

        Continuaremos hacia Midelt y después hacia el valle del Ziz, una zona
        famosa por sus palmerales y sus paisajes entre montañas.

        La ruta sigue por Errachidia y Erfoud hasta llegar a Merzouga, situada
        junto a las dunas de Erg Chebbi.

        Al llegar al Sahara podrás disfrutar de las primeras vistas del desierto.

        Noche en Merzouga.
      `,

      highlights:
      [
        "Salida desde Fez",

        "Ifrane",

        "Medio Atlas",

        "Midelt",

        "Valle del Ziz",

        "Errachidia y Erfoud",

        "Llegada a Merzouga",
      ],
    },


    {
      day:
        3,

      title:
        "Merzouga – Erg Chebbi – Experiencia en el Sahara",

      description:
      `
        El tercer día está dedicado al desierto del Sahara.

        Tendrás tiempo para descubrir la zona de Merzouga y los paisajes que
        rodean las dunas de Erg Chebbi.

        Por la tarde comenzará una de las experiencias principales del circuito:
        el paseo en camello por el desierto.

        Mientras recorres las dunas podrás disfrutar de la puesta de sol antes
        de llegar al campamento del Sahara.

        Después de la cena pasarás una noche especial entre las dunas bajo el
        cielo del desierto.
      `,

      highlights:
      [
        "Merzouga",

        "Dunas de Erg Chebbi",

        "Desierto del Sahara",

        "Paseo en camello",

        "Puesta de sol",

        "Campamento del desierto",
      ],
    },


    {
      day:
        4,

      title:
        "Merzouga – Rissani – Todra – Dades – Ouarzazate",

      description:
      `
        Dejaremos la zona de Merzouga para continuar la ruta hacia el oeste.

        Pasaremos por Rissani antes de llegar a las impresionantes gargantas del
        Todra, donde podrás caminar entre enormes paredes rocosas.

        Continuaremos hacia el valle del Dades y después hacia Ouarzazate,
        atravesando algunos de los paisajes más característicos del sur de
        Marruecos.

        Noche en Ouarzazate o alrededores.
      `,

      highlights:
      [
        "Salida desde Merzouga",

        "Rissani",

        "Gargantas del Todra",

        "Valle del Dades",

        "Ouarzazate",
      ],
    },
    {
      day:
        5,

      title:
        "Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",

      description:
      `
        Después del desayuno continuaremos este viaje a Marruecos de 7 días
        hacia Marrakech.

        La primera parada será Ait Ben Haddou, uno de los lugares históricos
        más conocidos del país. Este antiguo ksar destaca por sus construcciones
        tradicionales de tierra y su importancia cultural.

        Después continuaremos atravesando el Alto Atlas por una carretera
        panorámica con vistas a montañas y valles.

        Llegaremos a Marrakech, conocida como la ciudad roja, donde tendrás
        tiempo para descubrir su ambiente único.

        Noche en Marrakech.
      `,

      highlights:
      [
        "Ait Ben Haddou",

        "Paisajes del Alto Atlas",

        "Cruce de montaña",

        "Llegada a Marrakech",

        "Ciudad roja de Marruecos",
      ],
    },


    {
      day:
        6,

      title:
        "Marrakech – Casablanca",

      description:
      `
        Después del desayuno tendrás tiempo para disfrutar de Marrakech.

        Podrás descubrir la medina, los zocos tradicionales y algunos de los
        lugares más famosos de la ciudad.

        Más tarde continuaremos hacia Casablanca, una de las ciudades más
        importantes de Marruecos.

        La ruta conecta dos grandes destinos del país antes de llegar a la
        capital administrativa.

        Noche en Casablanca.
      `,

      highlights:
      [
        "Marrakech",

        "Medina histórica",

        "Zocos tradicionales",

        "Ruta hacia Casablanca",

        "Costa atlántica",
      ],
    },


    {
      day:
        7,

      title:
        "Casablanca – Rabat – Fin del circuito",

      description:
      `
        El último día del circuito por Marruecos en 7 días continúa hacia Rabat.

        Visitaremos la capital de Marruecos, conocida por sus monumentos
        históricos, su ambiente tranquilo y su importancia política.

        Después del recorrido se organizará el traslado final según tu horario
        de salida.

        Aquí termina esta ruta privada desde Fez hasta Rabat después de descubrir
        el Sahara, ciudades imperiales y algunos de los paisajes más importantes
        de Marruecos.
      `,

      highlights:
      [
        "Salida hacia Rabat",

        "Capital de Marruecos",

        "Monumentos históricos",

        "Fin del circuito",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante todo el circuito",

    "Conductor profesional de habla inglesa o francesa",

    "Seis noches de alojamiento",

    "Hoteles, riads y campamento del Sahara",

    "Desayunos diarios",

    "Cena en el campamento del desierto",

    "Cena durante la estancia en el valle del Dades",

    "Paseo en camello por las dunas de Erg Chebbi",

    "Noche en campamento tradicional del Sahara",

    "Visita de las principales paradas del itinerario",

    "Tiempo libre en Fez, Marrakech y Casablanca",

    "Recogida en Fez",

    "Traslado final en Rabat",

    "Paradas flexibles durante la ruta",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Merzouga",

      type:
        "Hotel o riad",
    },

    {
      night:
        3,

      location:
        "Desierto del Sahara",

      type:
        "Campamento del Sahara",
    },

    {
      night:
        4,

      location:
        "Ouarzazate",

      type:
        "Hotel o riad",
    },

    {
      night:
        5,

      location:
        "Marrakech",

      type:
        "Hotel o riad",
    },

    {
      night:
        6,

      location:
        "Casablanca",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/7-day-fes-rabat-morocco-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué incluye este circuito Marruecos 7 días desde Fez?",

      answer:
        "Incluye transporte privado, alojamiento, experiencia en el Sahara, paseo en camello, visitas durante la ruta y traslado final en Rabat.",
    },


    {
      question:
        "¿Dónde comienza y termina el circuito?",

      answer:
        "El viaje comienza en Fez y termina en Rabat pasando por Merzouga, Marrakech y Casablanca.",
    },


    {
      question:
        "¿Este circuito por Marruecos de 7 días incluye el desierto?",

      answer:
        "Sí. El itinerario incluye Merzouga, las dunas de Erg Chebbi, paseo en camello y una noche en un campamento del Sahara.",
    },


    {
      question:
        "¿Visitamos Marrakech y Casablanca?",

      answer:
        "Sí. La ruta incluye tiempo en Marrakech y continúa hasta Casablanca antes de terminar en Rabat.",
    },


    {
      question:
        "¿Por qué empezar desde Fez?",

      answer:
        "Fez es un excelente punto de inicio para una ruta hacia el Sahara porque permite atravesar el Medio Atlas y llegar a Merzouga disfrutando de diferentes paisajes.",
    },


    {
      question:
        "¿Este tour es privado?",

      answer:
        "Sí. Es un circuito privado con transporte propio y posibilidad de adaptar algunas paradas según tus preferencias.",
    },


    {
      question:
        "¿Dormimos en el desierto del Sahara?",

      answer:
        "Sí. Una de las noches se pasa en un campamento tradicional cerca de las dunas de Erg Chebbi.",
    },


    {
      question:
        "¿Está incluido el paseo en camello?",

      answer:
        "Sí. El paseo en camello por las dunas de Erg Chebbi está incluido.",
    },


    {
      question:
        "¿Qué diferencia este circuito de otros viajes de 7 días?",

      answer:
        "Esta ruta comienza en Fez y termina en Rabat, combinando el Sahara, Marrakech, Casablanca y ciudades imperiales en un solo recorrido.",
    },


    {
      question:
        "¿Se puede personalizar el viaje?",

      answer:
        "Sí. Al ser un circuito privado podemos adaptar algunos detalles según fechas, alojamiento e intereses.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Circuito Marruecos 7 días desde Fez | Sahara y Rabat",

    description:
      "Circuito privado por Marruecos de 7 días desde Fez hasta Rabat con Merzouga, Sahara, Marrakech, Casablanca, Ait Ben Haddou y ciudades imperiales.",

    keywords:
    [
      "circuito marruecos 7 días",

      "viaje marruecos 7 dias",

      "tour marruecos 7 dias",

      "ruta por marruecos 7 dias",

      "marruecos en 7 dias",

      "ruta desde fez",

      "fez sahara marrakech rabat",

      "circuito por marruecos",

      "tour privado marruecos",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      7,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "24",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "ruta-norte-marruecos-desde-fez",

  title:
    "Ruta por el Norte de Marruecos desde Fez en 8 días",

  shortDescription:
    "Descubre el norte de Marruecos en 8 días desde Fez con Meknes, Rabat, Casablanca, Tánger, Tetuán y Chefchaouen en un tour privado por las ciudades históricas y los paisajes del Rif.",

  image:
    "/images/tours/8-day-morocco-tour-from-fes.webp",

  badge:
    "Norte de Marruecos",

  featured:
    true,

  category:
    "Tours por Marruecos",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "8 días / 7 noches",

  nights:
    7,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Fez",

  arrival:
    "Fez",


  locations:
    [
      "Fez",
      "Meknes",
      "Rabat",
      "Casablanca",
      "Tánger",
      "Tetuán",
      "Chefchaouen",
      "Montañas del Rif",
      "Fez",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },

      {
        name:
          "Meknes",

        position:
          [33.8935, -5.5473],
      },

      {
        name:
          "Rabat",

        position:
          [34.0209, -6.8416],
      },

      {
        name:
          "Casablanca",

        position:
          [33.5731, -7.5898],
      },

      {
        name:
          "Tánger",

        position:
          [35.7595, -5.834],
      },

      {
        name:
          "Tetuán",

        position:
          [35.5785, -5.3684],
      },

      {
        name:
          "Chefchaouen",

        position:
          [35.1688, -5.2636],
      },

      {
        name:
          "Fez",

        position:
          [34.0181, -5.0078],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Descubre el norte de Marruecos en una ruta privada de 8 días desde Fez",

    "Explora Fez, una de las ciudades históricas más importantes del país",

    "Visita Meknes, una de las antiguas ciudades imperiales de Marruecos",

    "Conoce Rabat, la capital del país",

    "Descubre Casablanca y la costa atlántica",

    "Explora Tánger, la ciudad entre el Mediterráneo y el Atlántico",

    "Visita Tetuán y su patrimonio cultural",

    "Descubre Chefchaouen, la famosa ciudad azul del Rif",

    "Disfruta de los paisajes del norte de Marruecos",

    "Viaja con transporte privado y paradas flexibles",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Esta ruta por el norte de Marruecos desde Fez en 8 días está diseñada para
    viajeros que quieren descubrir una parte diferente del país, combinando
    ciudades históricas, costa atlántica, montañas del Rif y pueblos tradicionales.

    El viaje comienza en Fez, una de las ciudades culturales más importantes de
    Marruecos. Desde allí recorrerás Meknes, Rabat y Casablanca antes de llegar
    al extremo norte del país.

    La ruta continúa hacia Tánger, una ciudad con una historia única situada entre
    el mar Mediterráneo y el océano Atlántico. Después visitarás Tetuán, conocida
    por su arquitectura y su influencia mediterránea.

    Uno de los momentos principales del viaje es Chefchaouen, la famosa ciudad
    azul situada entre las montañas del Rif. Sus calles tranquilas, casas pintadas
    de azul y ambiente tradicional la convierten en uno de los destinos más
    especiales del norte de Marruecos.

    Este tour por el norte de Marruecos permite conocer ciudades imperiales,
    pueblos de montaña y paisajes costeros sin centrarse en el desierto.

    Es una opción ideal para viajeros que buscan una experiencia cultural y
    tranquila, con tiempo suficiente para descubrir cada destino.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Llegada a Fez",

      description:
      `
        El viaje comienza en Fez, una de las ciudades más importantes de
        Marruecos.

        Dependiendo de la hora de llegada, tendrás tiempo para descansar o
        comenzar a descubrir la ciudad.

        Fez destaca por su antigua medina, sus mercados tradicionales y su
        importante patrimonio cultural.

        Noche en Fez.
      `,

      highlights:
      [
        "Llegada a Fez",

        "Ciudad histórica",

        "Medina tradicional",

        "Primera noche en Marruecos",
      ],
    },


    {
      day:
        2,

      title:
        "Fez – Meknes – Rabat",

      description:
      `
        Después del desayuno comenzará la ruta por el norte de Marruecos.

        La primera parada será Meknes, una antigua ciudad imperial conocida por
        sus puertas monumentales y su historia.

        Continuaremos hacia Rabat, la capital de Marruecos, donde podrás conocer
        algunos de sus lugares históricos más destacados.

        Noche en Rabat.
      `,

      highlights:
      [
        "Salida desde Fez",

        "Visita de Meknes",

        "Ciudad imperial",

        "Llegada a Rabat",

        "Capital de Marruecos",
      ],
    },


    {
      day:
        3,

      title:
        "Rabat – Casablanca",

      description:
      `
        Después del desayuno continuaremos hacia Casablanca.

        Durante el recorrido conocerás una de las ciudades más modernas e
        importantes del país.

        Casablanca combina arquitectura contemporánea, tradición marroquí y una
        ubicación privilegiada junto al océano Atlántico.

        Tendrás tiempo para descubrir sus principales lugares antes de continuar
        hacia el norte.

        Noche en Casablanca.
      `,

      highlights:
      [
        "Salida desde Rabat",

        "Ruta hacia Casablanca",

        "Costa atlántica",

        "Ciudad moderna de Marruecos",
      ],
    },


    {
      day:
        4,

      title:
        "Casablanca – Tánger",

      description:
      `
        Dejaremos Casablanca y continuaremos hacia Tánger.

        La ruta nos llevará hacia el norte del país hasta una ciudad con una
        historia marcada por diferentes culturas y civilizaciones.

        Tánger se encuentra en un punto estratégico entre el Mediterráneo y el
        Atlántico.

        Tendrás tiempo para conocer la ciudad y disfrutar de su ambiente
        internacional.

        Noche en Tánger.
      `,

      highlights:
      [
        "Viaje hacia el norte de Marruecos",

        "Llegada a Tánger",

        "Mediterráneo y Atlántico",

        "Historia internacional de la ciudad",
      ],
    },
    {
      day:
        5,

      title:
        "Tánger – Tetuán",

      description:
      `
        Después del desayuno continuaremos descubriendo las ciudades del norte de
        Marruecos.

        Dejaremos Tánger y viajaremos hacia Tetuán, una ciudad con una fuerte
        influencia andalusí y mediterránea.

        Su medina, sus calles tradicionales y su arquitectura reflejan siglos de
        historia y conexiones culturales entre Marruecos y el sur de España.

        Tendrás tiempo para conocer el ambiente de la ciudad y pasear por algunas
        de sus zonas más características.

        Noche en Tetuán.
      `,

      highlights:
      [
        "Salida desde Tánger",

        "Ruta por el norte de Marruecos",

        "Llegada a Tetuán",

        "Medina tradicional",

        "Influencia andalusí y mediterránea",

        "Noche en Tetuán",
      ],
    },


    {
      day:
        6,

      title:
        "Tetuán – Chefchaouen",

      description:
      `
        Hoy continuaremos hacia Chefchaouen atravesando los paisajes del norte de
        Marruecos.

        A medida que nos acercamos a las montañas del Rif, el entorno se vuelve
        más montañoso y verde.

        Llegaremos a Chefchaouen, una de las ciudades del norte de Marruecos más
        conocidas por sus casas y callejones pintados en diferentes tonos de azul.

        Tendrás tiempo para caminar por la medina, descubrir pequeñas plazas,
        tiendas locales y rincones tranquilos.

        Esta etapa también forma parte de la ruta de Fez a Chefchaouen, aunque en
        este circuito llegamos a la ciudad azul después de recorrer Tánger y
        Tetuán.

        Noche en Chefchaouen.
      `,

      highlights:
      [
        "Salida desde Tetuán",

        "Paisajes de las montañas del Rif",

        "Llegada a Chefchaouen",

        "Medina azul",

        "Calles tradicionales",

        "Noche en Chefchaouen",
      ],
    },


    {
      day:
        7,

      title:
        "Día completo en Chefchaouen",

      description:
      `
        Este día está dedicado a descubrir Chefchaouen con más calma.

        Podrás recorrer la medina a tu propio ritmo, pasear por sus calles azules
        y disfrutar de las vistas de las montañas del Rif.

        Chefchaouen es uno de los lugares más buscados por quienes se preguntan
        qué ver en el norte de Marruecos, no solo por su arquitectura sino también
        por su ambiente relajado y su ubicación entre montañas.

        Tendrás tiempo libre para explorar, descansar, hacer fotografías o
        descubrir pequeños cafés y tiendas locales.

        Segunda noche en Chefchaouen.
      `,

      highlights:
      [
        "Día completo en Chefchaouen",

        "Medina azul",

        "Montañas del Rif",

        "Tiempo libre",

        "Ambiente tradicional",

        "Segunda noche en Chefchaouen",
      ],
    },


    {
      day:
        8,

      title:
        "Chefchaouen – Montañas del Rif – Fez",

      description:
      `
        Después del desayuno comienza la última etapa de esta ruta por el norte
        de Marruecos.

        Dejaremos Chefchaouen y viajaremos a través de las montañas del Rif en
        dirección a Fez.

        Durante el trayecto podrás volver a disfrutar de paisajes rurales,
        carreteras de montaña y pequeños pueblos del norte del país.

        La llegada a Fez está prevista más tarde durante el día.

        Aquí termina este recorrido de ocho días después de conocer algunas de
        las principales ciudades del norte de Marruecos, desde Rabat y Casablanca
        hasta Tánger, Tetuán y Chefchaouen.

        Traslado final en Fez según tus planes de viaje.
      `,

      highlights:
      [
        "Salida desde Chefchaouen",

        "Ruta por las montañas del Rif",

        "Paisajes del norte Marruecos",

        "Regreso a Fez",

        "Fin del tour privado",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante toda la ruta por el norte de Marruecos",

    "Conductor profesional de habla inglesa o francesa",

    "Siete noches de alojamiento",

    "Alojamiento en hoteles o riads durante el recorrido",

    "Desayunos diarios",

    "Recogida inicial en Fez",

    "Traslado final en Fez",

    "Tiempo para descubrir las principales ciudades del itinerario",

    "Paradas flexibles durante los trayectos",

    "Tiempo libre en Tánger, Tetuán y Chefchaouen",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Cenas salvo acuerdo previo",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en la sección de incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Fez",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Rabat",

      type:
        "Hotel o riad",
    },

    {
      night:
        3,

      location:
        "Casablanca",

      type:
        "Hotel o riad",
    },

    {
      night:
        4,

      location:
        "Tánger",

      type:
        "Hotel o riad",
    },

    {
      night:
        5,

      location:
        "Tetuán",

      type:
        "Hotel o riad",
    },

    {
      night:
        6,

      location:
        "Chefchaouen",

      type:
        "Hotel o riad",
    },

    {
      night:
        7,

      location:
        "Chefchaouen",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/8-day-morocco-tour-from-fes.webp",
  ],


  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué lugares incluye esta ruta por el norte de Marruecos?",

      answer:
        "La ruta incluye Fez, Meknes, Rabat, Casablanca, Tánger, Tetuán, Chefchaouen y las montañas del Rif antes de regresar a Fez.",
    },


    {
      question:
        "¿Este tour por el norte de Marruecos incluye el desierto?",

      answer:
        "No. Este itinerario está centrado en ciudades históricas, la costa, las montañas del Rif y el norte del país. Es una alternativa a los circuitos que se dirigen al Sahara.",
    },


    {
      question:
        "¿Dónde comienza y termina el viaje?",

      answer:
        "El recorrido comienza en Fez y termina nuevamente en Fez después de ocho días.",
    },


    {
      question:
        "¿Visitamos Chefchaouen durante el circuito?",

      answer:
        "Sí. El itinerario incluye dos noches en Chefchaouen, lo que permite descubrir la ciudad azul con más calma.",
    },


    {
      question:
        "¿Qué ciudades del norte de Marruecos se visitan?",

      answer:
        "Entre las principales ciudades del norte de Marruecos incluidas en la ruta están Tánger, Tetuán y Chefchaouen, además de Rabat, Casablanca, Meknes y Fez.",
    },


    {
      question:
        "¿Qué ver en el norte de Marruecos durante 8 días?",

      answer:
        "En ocho días puedes combinar ciudades imperiales, costa atlántica, Tánger, Tetuán, Chefchaouen y las montañas del Rif. Este itinerario organiza esos lugares en una ruta privada desde Fez.",
    },


    {
      question:
        "¿La ruta pasa de Fez a Chefchaouen?",

      answer:
        "Sí. Chefchaouen forma parte del recorrido. En este circuito, sin embargo, se llega después de visitar Meknes, Rabat, Casablanca, Tánger y Tetuán antes de regresar finalmente a Fez.",
    },


    {
      question:
        "¿Cuánto tiempo pasamos en Chefchaouen?",

      answer:
        "Se pasan dos noches en Chefchaouen e incluye un día completo para conocer la medina y disfrutar de la ciudad sin prisas.",
    },


    {
      question:
        "¿Está incluido Tánger?",

      answer:
        "Sí. El tour incluye una noche en Tánger y tiempo para descubrir esta ciudad situada entre el Mediterráneo y el Atlántico.",
    },


    {
      question:
        "¿Visitamos Tetuán?",

      answer:
        "Sí. Tetuán forma parte de la ruta entre Tánger y Chefchaouen y se pasa una noche en la ciudad.",
    },


    {
      question:
        "¿Es un tour privado?",

      answer:
        "Sí. El recorrido es privado para ti y tu grupo, con transporte propio y mayor flexibilidad durante los trayectos.",
    },


    {
      question:
        "¿Se puede personalizar esta ruta por Marruecos norte?",

      answer:
        "Sí. Al tratarse de un viaje privado, algunos detalles pueden adaptarse según tus fechas, intereses y preferencias de alojamiento.",
    },


    {
      question:
        "¿Es una buena ruta si ya he visitado el Sahara?",

      answer:
        "Sí. Este itinerario es especialmente interesante para viajeros que quieren conocer una parte diferente de Marruecos y centrarse en ciudades históricas, costa y montañas en lugar del desierto.",
    },


    {
      question:
        "¿Es adecuada esta ruta para familias?",

      answer:
        "Sí. Las familias pueden solicitar el circuito. Si viajas con niños, conviene indicar sus edades al contactar para organizar adecuadamente los trayectos y el alojamiento.",
    },


    {
      question:
        "¿Hay muchas horas de carretera?",

      answer:
        "Al tratarse de un circuito de ocho días por varias regiones, algunos días incluyen desplazamientos por carretera. Las etapas están distribuidas con paradas y noches en diferentes ciudades para evitar concentrar todo el recorrido en pocos días.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Norte de Marruecos en 8 días | Fez, Chefchaouen y Tánger",

    description:
      "Descubre el norte de Marruecos en 8 días desde Fez con Meknes, Rabat, Casablanca, Tánger, Tetuán, Chefchaouen y las montañas del Rif.",

    // Mapa interno de términos objetivo.
    // No es necesario renderizarlo como meta keywords.
    keywords:
    [
      "norte de marruecos",

      "norte marruecos",

      "ciudades del norte de marruecos",

      "marruecos norte",

      "ruta norte marruecos",

      "que ver en el norte de marruecos",

      "fez a chefchaouen",

      "fez chefchaouen",

      "ruta por el norte de marruecos",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      8,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "25",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "desierto-merzouga-desde-errachidia",

  title:
    "Desierto de Merzouga desde Errachidia en 3 días | Erg Chebbi",

  shortDescription:
    "Descubre el desierto de Merzouga en una ruta privada de 3 días desde Errachidia, con el valle del Ziz, Erfoud, Erg Chebbi, cultura nómada, música Gnawa y Rissani.",

  image:
    "/images/tours/3-day-errachidia-merzouga-desert-tour.webp",

  badge:
    "Merzouga desde Errachidia",

  featured:
    true,

  category:
    "Tours por el Desierto",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "3 días / 2 noches",

  nights:
    2,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Errachidia",

  arrival:
    "Errachidia",

  locations:
    [
      "Errachidia",
      "Valle del Ziz",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Zonas nómadas",
      "Rissani",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Errachidia",

        position:
          [31.9314, -4.4244],
      },

      {
        name:
          "Erfoud",

        position:
          [31.4367, -4.232],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Rissani",

        position:
          [31.2823, -4.2651],
      },

      {
        name:
          "Errachidia",

        position:
          [31.9314, -4.4244],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Descubre el desierto de Merzouga desde Errachidia en una ruta privada de tres días",

    "Recorre el valle del Ziz entre palmerales y paisajes áridos",

    "Viaja por Erfoud antes de llegar al Sahara",

    "Contempla las dunas de Erg Chebbi en Merzouga",

    "Dedica un día completo a explorar los alrededores del desierto",

    "Descubre diferentes paisajes del Sahara alrededor de Erg Chebbi",

    "Conoce zonas vinculadas a comunidades nómadas",

    "Acércate a la vida tradicional del sureste de Marruecos",

    "Disfruta de una experiencia de música Gnawa",

    "Visita Rissani durante el regreso a Errachidia",

    "Pasa dos noches en la zona de Merzouga",

    "Viaja con transporte privado y paradas flexibles",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Esta ruta al desierto de Merzouga desde Errachidia en 3 días está pensada
    para viajeros que ya se encuentran en el sureste de Marruecos y quieren
    descubrir Erg Chebbi sin realizar los largos desplazamientos habituales
    desde Marrakech o Fez.

    El viaje comienza en Errachidia y avanza hacia el sur atravesando el valle
    del Ziz, una de las zonas más características de esta región por sus
    palmerales, montañas secas y contrastes de paisaje.

    Después continuaremos por Erfoud antes de llegar a Merzouga, situada junto a
    las grandes dunas de Erg Chebbi.

    Merzouga es uno de los lugares más conocidos del Sahara marroquí y el punto
    principal de este recorrido. Al disponer de dos noches en la zona, no tendrás
    que limitar la experiencia a una llegada rápida y una salida al día siguiente.

    El segundo día está dedicado a explorar con más calma el desierto de
    Merzouga. Recorrerás diferentes paisajes alrededor de Erg Chebbi, conocerás
    zonas vinculadas a comunidades nómadas y tendrás un acercamiento a la cultura
    local a través de la música Gnawa.

    En la última jornada dejamos Merzouga y viajamos hacia Rissani antes de
    regresar al valle del Ziz y continuar hasta Errachidia.

    Este recorrido es una alternativa especialmente práctica para quienes quieren
    conocer Merzouga Marruecos desde un punto de partida cercano al Sahara y
    prefieren dedicar más tiempo al entorno de Erg Chebbi que a largos trayectos
    por carretera.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Errachidia – Valle del Ziz – Erfoud – Merzouga",

      description:
      `
        El viaje comienza con la recogida en Errachidia.

        Dejaremos la ciudad y nos dirigiremos hacia el valle del Ziz, uno de los
        paisajes más reconocibles del sureste de Marruecos.

        Durante el trayecto podrás observar extensos palmerales rodeados de
        montañas secas y zonas áridas que anuncian progresivamente la cercanía
        del Sahara.

        Continuaremos hacia Erfoud, localidad situada en la ruta hacia Merzouga.

        Desde allí seguiremos en dirección a las dunas de Erg Chebbi.

        A medida que nos aproximamos a Merzouga, el paisaje se vuelve más abierto
        y empiezan a aparecer las grandes formaciones de arena del desierto.

        Llegaremos a la zona de Merzouga más tarde durante el día.

        Tendrás tiempo para instalarte en el alojamiento y disfrutar de tus
        primeras vistas del Sahara.

        Primera noche en la zona de Merzouga.
      `,

      highlights:
      [
        "Recogida en Errachidia",

        "Ruta por el valle del Ziz",

        "Palmerales y paisajes áridos",

        "Paso por Erfoud",

        "Llegada al desierto de Merzouga",

        "Primeras vistas de Erg Chebbi",

        "Noche en Merzouga",
      ],
    },


    {
      day:
        2,

      title:
        "Desierto de Merzouga – Erg Chebbi – Nómadas – Música Gnawa",

      description:
      `
        El segundo día está dedicado completamente a descubrir el desierto de
        Merzouga y sus alrededores.

        Después del desayuno comenzaremos a explorar los paisajes que rodean Erg
        Chebbi, una de las zonas de dunas más conocidas del Sahara en Marruecos.

        Durante el recorrido podrás descubrir que Merzouga es mucho más que arena.
        En torno a las dunas aparecen llanuras desérticas, zonas pedregosas y
        pequeños núcleos de vida local.

        Parte del día se dedica a conocer áreas relacionadas con comunidades
        nómadas y comprender mejor cómo se desarrolla la vida en esta región del
        Sahara.

        La experiencia continúa con un acercamiento a la música Gnawa, una
        tradición cultural profundamente vinculada al sur y sureste de Marruecos.

        Este día completo permite explorar Erg Chebbi Marruecos con más calma y
        observar diferentes caras del paisaje desértico.

        Más tarde regresaremos a la zona de Merzouga para disfrutar de una
        segunda noche cerca de las dunas.
      `,

      highlights:
      [
        "Día completo en el desierto de Merzouga",

        "Exploración de Erg Chebbi",

        "Diferentes paisajes del Sahara",

        "Zonas vinculadas a comunidades nómadas",

        "Cultura local del desierto",

        "Experiencia de música Gnawa",

        "Tiempo relajado alrededor de Merzouga",

        "Segunda noche cerca de Erg Chebbi",
      ],
    },


    {
      day:
        3,

      title:
        "Merzouga – Rissani – Valle del Ziz – Errachidia",

      description:
      `
        Después del desayuno dejaremos Merzouga y comenzaremos el regreso hacia
        Errachidia.

        La primera parada importante del día será Rissani, una localidad histórica
        del sureste de Marruecos situada entre el Sahara y la región del Ziz.

        Dependiendo del horario, tendrás tiempo para observar parte del ambiente
        local antes de continuar la ruta.

        Después volveremos hacia el valle del Ziz.

        Recorrer el valle en sentido contrario permite disfrutar nuevamente de
        sus palmerales, montañas y paisajes tradicionales desde otra perspectiva.

        Continuaremos finalmente hacia Errachidia.

        La llegada está prevista más tarde durante el día y el traslado final
        puede organizarse según tu alojamiento o tus siguientes planes de viaje.

        Aquí termina esta excursión por Merzouga después de tres días descubriendo
        Erfoud, Erg Chebbi, el Sahara, la cultura nómada, Rissani y el valle del
        Ziz.
      `,

      highlights:
      [
        "Desayuno en Merzouga",

        "Salida del Sahara",

        "Visita de Rissani",

        "Paisajes del sureste de Marruecos",

        "Regreso por el valle del Ziz",

        "Llegada a Errachidia",

        "Traslado final en Errachidia",
      ],
    },
  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado durante los tres días",

    "Conductor de habla inglesa o francesa",

    "Dos noches de alojamiento en la zona de Merzouga",

    "Desayunos diarios",

    "Exploración del desierto de Merzouga",

    "Visita a zonas vinculadas a comunidades nómadas",

    "Experiencia de música Gnawa",

    "Tiempo libre en las principales paradas",

    "Paradas flexibles para descansar y hacer fotografías",

    "Recogida en Errachidia",

    "Traslado final en Errachidia",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Cenas salvo que estén incluidas en el paquete final",

    "Bebidas",

    "Entradas cuando sean necesarias",

    "Actividades opcionales en el desierto",

    "Guías locales salvo solicitud previa",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en la sección de incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Merzouga",

      type:
        "Hotel, riad o alojamiento en el desierto",
    },

    {
      night:
        2,

      location:
        "Merzouga",

      type:
        "Hotel, riad o alojamiento en el desierto",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/3-day-errachidia-merzouga-desert-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Este tour al desierto de Merzouga desde Errachidia es privado?",

      answer:
        "Sí. Es un viaje privado para ti y tu grupo, con transporte propio y mayor flexibilidad para las paradas y el ritmo del recorrido.",
    },


    {
      question:
        "¿Dónde empieza y termina la ruta?",

      answer:
        "El recorrido comienza en Errachidia, viaja hasta Merzouga y el Sahara y regresa a Errachidia durante el tercer día.",
    },


    {
      question:
        "¿Cuántas noches se pasan en Merzouga?",

      answer:
        "El itinerario incluye dos noches en la zona de Merzouga. El tipo exacto de alojamiento depende del paquete elegido.",
    },


    {
      question:
        "¿Qué es Erg Chebbi?",

      answer:
        "Erg Chebbi es la gran zona de dunas situada junto a Merzouga y uno de los paisajes del Sahara más conocidos del sureste de Marruecos.",
    },


    {
      question:
        "¿Se visita el valle del Ziz?",

      answer:
        "Sí. El valle del Ziz forma parte de la ruta de ida hacia Merzouga y también del regreso a Errachidia.",
    },


    {
      question:
        "¿La ruta pasa por Erfoud?",

      answer:
        "Sí. Erfoud se visita durante el primer día antes de continuar hacia el desierto de Merzouga.",
    },


    {
      question:
        "¿Tenemos un día completo para descubrir Merzouga?",

      answer:
        "Sí. El segundo día está dedicado a explorar la zona de Merzouga, los paisajes alrededor de Erg Chebbi y distintos aspectos de la cultura local del Sahara.",
    },


    {
      question:
        "¿La experiencia incluye contacto con comunidades nómadas?",

      answer:
        "El segundo día incluye tiempo en zonas vinculadas a comunidades nómadas, con la oportunidad de conocer mejor la vida tradicional alrededor del Sahara.",
    },


    {
      question:
        "¿La música Gnawa forma parte del itinerario?",

      answer:
        "Sí. La experiencia de música Gnawa forma parte del recorrido cultural durante el segundo día en la zona de Merzouga.",
    },


    {
      question:
        "¿Se visita Rissani?",

      answer:
        "Sí. Rissani se visita durante el tercer día antes de continuar hacia el valle del Ziz y Errachidia.",
    },


    {
      question:
        "¿Qué ver en Merzouga además de las dunas?",

      answer:
        "Además de Erg Chebbi, la zona permite descubrir diferentes paisajes desérticos, cultura local, áreas relacionadas con comunidades nómadas y tradiciones como la música Gnawa.",
    },


    {
      question:
        "¿Es mejor empezar esta ruta desde Errachidia que desde Marrakech o Fez?",

      answer:
        "Errachidia está mucho más cerca de Merzouga, por lo que esta ruta dedica menos tiempo a largos traslados y más tiempo a explorar el desierto y sus alrededores.",
    },


    {
      question:
        "¿Hay muchas horas de carretera?",

      answer:
        "Las distancias son menores que en muchos tours al Sahara desde Marrakech o Fez, aunque hay desplazamientos entre Errachidia, el valle del Ziz, Erfoud, Merzouga y Rissani.",
    },


    {
      question:
        "¿Las comidas están incluidas?",

      answer:
        "Los desayunos diarios están incluidos. Los almuerzos y otras cenas dependen del paquete final contratado.",
    },


    {
      question:
        "¿Se puede personalizar el tour?",

      answer:
        "Sí. Al tratarse de un viaje privado, algunos detalles pueden adaptarse a tus fechas, intereses, alojamiento y planes posteriores.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Desierto de Merzouga desde Errachidia | Erg Chebbi 3 días",

    description:
      "Descubre el desierto de Merzouga desde Errachidia en 3 días con Erg Chebbi, valle del Ziz, Erfoud, cultura nómada, música Gnawa y Rissani.",

    // Mapa interno de términos objetivo.
    // No renderizar como meta keywords.
    keywords:
    [
      "desierto merzouga",

      "desierto de merzouga",

      "merzouga marruecos",

      "erg chebbi",

      "erg chebbi marruecos",

      "que ver en merzouga",

      "excursion merzouga",

      "dunas de erg chebbi",

      "sahara merzouga",

      "merzouga desde errachidia",

      "desierto desde errachidia",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      3,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},

{
  id: "26",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "agadir-marrakech-desierto-4-dias",

  title:
    "Tour de Agadir a Marrakech en 4 días por el desierto de Marruecos",

  shortDescription:
    "Descubre la ruta de Agadir a Marrakech en 4 días pasando por Merzouga, Erg Chebbi, el valle del Dades, las gargantas del Todra, Ait Ben Haddou y los paisajes del desierto de Marruecos.",

  image:
    "/images/tours/4-day-agadir-marrakech-desert-tour.webp",

  badge:
    "Agadir a Marrakech por el Sahara",

  featured:
    true,

  category:
    "Tours por el Desierto",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "4 días / 3 noches",

  nights:
    3,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    [
      "Inglés",
      "Francés",
    ],

  departure:
    "Agadir",

  arrival:
    "Marrakech",


  locations:
    [
      "Agadir",
      "Taznakht",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Valle del Dades",
      "Gargantas del Todra",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi",
      "Desierto del Sahara",
      "Khamlia",
      "Rissani",
      "Valle del Draa",
      "Alto Atlas",
      "Marrakech",
    ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map:
  {
    stops:
    [
      {
        name:
          "Agadir",

        position:
          [30.4278, -9.5981],
      },

      {
        name:
          "Taznakht",

        position:
          [30.5736, -7.2036],
      },

      {
        name:
          "Ait Ben Haddou",

        position:
          [31.0472, -7.1298],
      },

      {
        name:
          "Ouarzazate",

        position:
          [30.9335, -6.937],
      },

      {
        name:
          "Valle del Dades",

        position:
          [31.3709, -5.9887],
      },

      {
        name:
          "Gargantas del Todra",

        position:
          [31.5889, -5.5928],
      },

      {
        name:
          "Erfoud",

        position:
          [31.4367, -4.232],
      },

      {
        name:
          "Merzouga",

        position:
          [31.0802, -4.0133],
      },

      {
        name:
          "Erg Chebbi",

        position:
          [31.1415, -3.9891],
      },

      {
        name:
          "Marrakech",

        position:
          [31.6295, -7.9811],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights:
  [
    "Descubre la ruta de Agadir a Marrakech atravesando el desierto de Marruecos",

    "Explora los paisajes del sur de Marruecos entre montañas y oasis",

    "Visita Ait Ben Haddou y Ouarzazate",

    "Descubre el valle del Dades y las gargantas del Todra",

    "Llega a Merzouga y las dunas de Erg Chebbi",

    "Disfruta del paisaje único del Sahara",

    "Conoce Khamlia y la cultura Gnawa",

    "Visita Rissani durante la ruta",

    "Cruza el valle del Draa y el Alto Atlas",

    "Termina el viaje en Marrakech",

    "Viaja en un tour privado con paradas flexibles",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview:
  `
    Este tour de Agadir a Marrakech en 4 días ofrece una ruta completa por el
    sur de Marruecos combinando montañas, kasbahs, oasis y el desierto del
    Sahara.

    El viaje comienza en Agadir y atraviesa algunos de los paisajes más
    impresionantes del país antes de llegar a Merzouga y las dunas de Erg
    Chebbi.

    Durante el recorrido visitarás Taznakht, Ait Ben Haddou y Ouarzazate antes
    de continuar hacia el valle del Dades y las gargantas del Todra.

    La ruta llega después a Merzouga, una de las zonas desérticas más famosas de
    Marruecos. Aquí podrás descubrir el entorno de Erg Chebbi y la atmósfera
    especial del Sahara.

    Este viaje desde Agadir a Marrakech también incluye la visita de Khamlia,
    conocida por su tradición musical Gnawa, y Rissani, una localidad histórica
    del sureste marroquí.

    Finalmente cruzaremos el valle del Draa y el Alto Atlas hasta llegar a
    Marrakech.

    Es una opción ideal para viajeros que buscan una experiencia diferente:
    una ruta entre Agadir y Marrakech combinando cultura, naturaleza y desierto
    en pocos días.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary:
  [
    {
      day:
        1,

      title:
        "Agadir – Taznakht – Ait Ben Haddou – Ouarzazate – Valle del Dades",

      description:
      `
        El tour comienza con la recogida en Agadir.

        Saldremos hacia el interior de Marruecos atravesando paisajes
        montañosos y zonas tradicionales del sur del país.

        La primera parada será Taznakht, conocida por sus alfombras tradicionales
        y su artesanía local.

        Continuaremos hacia Ait Ben Haddou, uno de los lugares históricos más
        famosos de Marruecos. Este antiguo ksar destaca por sus construcciones
        de tierra y su arquitectura tradicional.

        Después visitaremos la zona de Ouarzazate, conocida como la puerta del
        desierto.

        La ruta continuará hacia el valle del Dades, donde disfrutaremos de los
        paisajes rocosos y montañosos de la región.

        Noche en el valle del Dades.
      `,

      highlights:
      [
        "Salida desde Agadir",

        "Taznakht",

        "Ait Ben Haddou",

        "Ouarzazate",

        "Paisajes del sur de Marruecos",

        "Valle del Dades",
      ],
    },


    {
      day:
        2,

      title:
        "Valle del Dades – Gargantas del Todra – Erfoud – Merzouga",

      description:
      `
        Después del desayuno continuaremos hacia el este en dirección al Sahara.

        La primera visita del día será las gargantas del Todra, uno de los
        paisajes naturales más impresionantes del sur de Marruecos.

        Tendrás tiempo para caminar entre las enormes paredes rocosas del cañón
        y disfrutar del entorno.

        Continuaremos hacia Erfoud, conocida por sus fósiles y su ubicación en la
        entrada de la región desértica.

        Después seguiremos hacia Merzouga, situada junto a las dunas de Erg
        Chebbi.

        La llegada al desierto marca uno de los momentos principales del viaje
        de Agadir a Marrakech.

        Noche en la zona de Merzouga.
      `,

      highlights:
      [
        "Gargantas del Todra",

        "Paisajes del desierto",

        "Erfoud",

        "Llegada a Merzouga",

        "Dunas de Erg Chebbi",

        "Noche en el Sahara",
      ],
    },
    {
      day:
        3,

      title:
        "Merzouga – Erg Chebbi – Khamlia – Rissani – Valle del Draa",

      description:
      `
        El tercer día está dedicado a descubrir mejor la región de Merzouga y
        sus alrededores.

        Después del desayuno exploraremos la zona de Erg Chebbi, una de las
        áreas de dunas más famosas del Sahara marroquí.

        Visitaremos Khamlia, un pueblo conocido por su música Gnawa y su
        tradición cultural vinculada a las comunidades del desierto.

        Continuaremos hacia Rissani, una localidad histórica con una gran
        importancia comercial en la región.

        Después seguiremos la ruta hacia el valle del Draa, famoso por sus
        extensos palmerales y sus paisajes de oasis.

        La jornada permite descubrir diferentes caras del sur de Marruecos,
        combinando desierto, cultura y naturaleza.

        Noche en la zona de Ouarzazate o alrededores.
      `,

      highlights:
      [
        "Exploración de Erg Chebbi",

        "Desierto de Merzouga",

        "Visita de Khamlia",

        "Música Gnawa",

        "Rissani",

        "Valle del Draa",

        "Paisajes de oasis",
      ],
    },


    {
      day:
        4,

      title:
        "Valle del Draa – Ouarzazate – Alto Atlas – Marrakech",

      description:
      `
        Después del desayuno comenzaremos la última etapa de esta ruta de Agadir
        a Marrakech.

        Pasaremos nuevamente por la región de Ouarzazate antes de comenzar el
        cruce del Alto Atlas.

        Durante el camino disfrutaremos de vistas panorámicas de las montañas,
        valles y pequeños pueblos tradicionales.

        La carretera nos llevará finalmente hasta Marrakech, donde termina este
        tour privado después de recorrer una de las rutas más completas del sur
        de Marruecos.

        Llegada a Marrakech y fin del servicio.
      `,

      highlights:
      [
        "Salida hacia Marrakech",

        "Ouarzazate",

        "Cruce del Alto Atlas",

        "Paisajes de montaña",

        "Llegada a Marrakech",

        "Fin del tour",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included:
  [
    "Transporte privado desde Agadir hasta Marrakech",

    "Conductor profesional de habla inglesa o francesa",

    "Tres noches de alojamiento",

    "Alojamiento en hoteles, riads o campamento según paquete elegido",

    "Desayunos diarios",

    "Visita de Ait Ben Haddou",

    "Visita de las gargantas del Todra",

    "Ruta por el valle del Dades",

    "Visita de Merzouga y Erg Chebbi",

    "Visita cultural de Khamlia",

    "Visita de Rissani",

    "Traslado final en Marrakech",

    "Paradas flexibles durante el recorrido",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded:
  [
    "Almuerzos",

    "Bebidas",

    "Entradas a monumentos y atracciones",

    "Guías locales salvo solicitud previa",

    "Actividades opcionales",

    "Gastos personales",

    "Seguro de viaje",

    "Propinas",

    "Servicios no mencionados en incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation:
  [
    {
      night:
        1,

      location:
        "Valle del Dades",

      type:
        "Hotel o riad",
    },

    {
      night:
        2,

      location:
        "Merzouga",

      type:
        "Hotel, riad o campamento según opción elegida",
    },

    {
      night:
        3,

      location:
        "Ouarzazate o alrededores",

      type:
        "Hotel o riad",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery:
  [
    "/images/tours/4-day-agadir-marrakech-desert-tour.webp",
  ],


  // ─────────────────────────────
  // FAQ
  // ─────────────────────────────

  faqs:
  [
    {
      question:
        "¿Qué incluye este tour de Agadir a Marrakech?",

      answer:
        "Incluye transporte privado, alojamiento, visitas durante la ruta, Merzouga, Erg Chebbi, Ait Ben Haddou, Todra, Dades y traslado final a Marrakech.",
    },


    {
      question:
        "¿Este tour pasa por el desierto de Marruecos?",

      answer:
        "Sí. La ruta incluye Merzouga y las dunas de Erg Chebbi, una de las zonas desérticas más conocidas del país.",
    },


    {
      question:
        "¿Dónde comienza y termina el viaje?",

      answer:
        "El recorrido comienza en Agadir y termina en Marrakech.",
    },


    {
      question:
        "¿Cuántos días dura la ruta de Agadir a Marrakech?",

      answer:
        "La ruta dura 4 días y 3 noches, permitiendo visitar el desierto y varios lugares importantes del sur de Marruecos.",
    },


    {
      question:
        "¿Visitamos Merzouga durante este tour?",

      answer:
        "Sí. Merzouga es una de las principales paradas del recorrido y permite descubrir las dunas de Erg Chebbi.",
    },


    {
      question:
        "¿Qué es Erg Chebbi?",

      answer:
        "Erg Chebbi es una de las zonas de dunas más famosas del Sahara marroquí, situada junto a Merzouga.",
    },


    {
      question:
        "¿La ruta incluye Ait Ben Haddou?",

      answer:
        "Sí. Ait Ben Haddou forma parte del recorrido y es una de las visitas culturales más importantes del sur de Marruecos.",
    },


    {
      question:
        "¿Se visita Khamlia?",

      answer:
        "Sí. Khamlia forma parte de la ruta y es conocida por su música Gnawa y su cultura local.",
    },


    {
      question:
        "¿Este tour es privado?",

      answer:
        "Sí. Es un tour privado con transporte propio y flexibilidad durante el recorrido.",
    },


    {
      question:
        "¿Es diferente de un tour desde Marrakech al desierto?",

      answer:
        "Sí. Esta ruta empieza en Agadir y permite combinar la costa atlántica con el sur de Marruecos antes de llegar a Marrakech.",
    },


    {
      question:
        "¿Los almuerzos están incluidos?",

      answer:
        "No. Los almuerzos no están incluidos. Durante la ruta se realizan paradas donde puedes elegir dónde comer.",
    },


    {
      question:
        "¿Se puede personalizar el recorrido?",

      answer:
        "Sí. Al ser un tour privado, algunos detalles pueden adaptarse según fechas e intereses.",
    },
  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo:
  {
    title:
      "Agadir Marrakech en 4 días | Merzouga y Desierto de Marruecos",

    description:
      "Tour privado de Agadir a Marrakech en 4 días con Merzouga, Erg Chebbi, Ait Ben Haddou, Dades, Todra, Ouarzazate y paisajes del desierto.",

    keywords:
    [
      "agadir marrakech",

      "agadir a marrakech",

      "tour agadir marrakech",

      "excursion agadir marrakech",

      "agadir merzouga",

      "agadir to merzouga",

      "merzouga agadir",

      "ruta agadir marrakech",

      "desierto desde agadir",

      "tour desierto agadir",
    ],
  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking:
  {
    available:
      true,

    minimumDays:
      4,

    customizable:
      true,

    contactLabel:
      "Solicitar presupuesto",
  },
},
{
  id: "27",

  // ─────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────

  slug:
    "surf-camp-taghazout-8-dias",

  title:
    "Surf Camp en Taghazout de 8 días",

  shortDescription:
    "Disfruta de un surf camp en Taghazout de 8 días con alojamiento, clases de surf o surf guiding, transporte diario, Imsouane, Paradise Valley y traslados desde Agadir.",

  image:
    "/images/tours/8-day-taghazout-surf-camp.webp",

  badge:
    "Surf Camp Taghazout",

  featured:
    true,

  category:
    "Surf Camps en Marruecos",


  // ─────────────────────────────
  // DETALLES DEL TOUR
  // ─────────────────────────────

  duration:
    "8 días / 7 noches",

  nights:
    7,

  tourType:
    "Tour privado",

  groupSize:
    "Hasta 4 personas",

  languages:
    ["Inglés", "Francés"],

  departure:
    "Agadir",

  arrival:
    "Agadir",

  locations: [
    "Agadir",
    "Taghazout",
    "Tamraght",
    "Imsouane",
    "Paradise Valley",
    "Costa Atlántica",
  ],


  // ─────────────────────────────
  // MAPA
  // ─────────────────────────────

  map: {
    stops: [
      {
        name: "Agadir",
        position: [30.4278, -9.5981],
      },
      {
        name: "Tamraght",
        position: [30.5111, -9.6742],
      },
      {
        name: "Taghazout",
        position: [30.5426, -9.7083],
      },
      {
        name: "Paradise Valley",
        position: [30.5929, -9.5314],
      },
      {
        name: "Imsouane",
        position: [30.8398, -9.8181],
      },
      {
        name: "Agadir",
        position: [30.4278, -9.5981],
      },
    ],
  },


  // ─────────────────────────────
  // DESTACADOS
  // ─────────────────────────────

  highlights: [
    "Disfruta de siete noches en la costa atlántica de Marruecos",
    "Vive una experiencia completa de surf camp en Taghazout",
    "Aprende a surfear o mejora tu nivel con sesiones adaptadas a tu experiencia",
    "Practica surf en Taghazout y Tamraght en spots elegidos según las condiciones",
    "Utiliza tabla de surf y neopreno durante las sesiones incluidas",
    "Viaja cada día al spot más adecuado según las olas, la marea y tu nivel",
    "Pasa dos noches en Imsouane y disfruta de más tiempo para surfear",
    "Dedica un día completo al surf en Imsouane",
    "Descansa del surf con una excursión a Paradise Valley",
    "Disfruta de transporte organizado entre el alojamiento y los spots de surf",
    "Combina surf, costa, naturaleza y tiempo libre en un solo viaje",
    "Programa adecuado para principiantes, surfistas intermedios y surfistas con experiencia",
    "Posibilidad de personalizar el viaje para parejas, amigos y grupos pequeños",
    "Los acompañantes que no practican surf también pueden participar con un programa adaptado",
    "Posibilidad de organizar recogida y traslado al aeropuerto de Agadir",
  ],


  // ─────────────────────────────
  // DESCRIPCIÓN GENERAL
  // ─────────────────────────────

  overview: `
    Disfruta de ocho días en la costa atlántica con este surf camp en Taghazout,
    Marruecos. El viaje combina alojamiento, surf, transporte, pueblos costeros y
    tiempo para relajarte.

    La mayor parte del programa se desarrolla entre Taghazout y Tamraght, dos de las
    zonas más conocidas para practicar surf en Marruecos. Las sesiones no siguen un
    único spot. Cada día podemos elegir la playa según tu nivel, la marea, el swell
    y las condiciones del mar.

    Si nunca has hecho surf, comenzarás con las bases: seguridad, posición sobre la
    tabla, remada, take-off y primeras olas. Si ya tienes experiencia, podemos adaptar
    las sesiones para trabajar técnica, posicionamiento, lectura de olas o surf guiding.

    Este surf camp en Marruecos no se limita a Taghazout. Después de varios días de
    surf en la zona, tendrás una jornada de descanso en Paradise Valley y continuarás
    hacia Imsouane.

    Pasarás dos noches en Imsouane. Esto permite disfrutar de la zona con más calma y
    tener un día completo dedicado al surf sin convertir la visita en una excursión
    rápida de ida y vuelta.

    Después regresarás hacia Taghazout o Tamraght para disfrutar de la última noche
    junto al Atlántico.

    El paquete puede adaptarse para parejas o amigos con diferentes niveles. Si una
    persona quiere surfear y otra prefiere playa, yoga, hammam, naturaleza u otras
    actividades, podemos organizar un programa más flexible.

    Si buscas un surf camp Taghazout con alojamiento, transporte y diferentes zonas
    de surf incluidas en el mismo viaje, esta ruta de 8 días ofrece una forma sencilla
    de descubrir Taghazout, Tamraght e Imsouane.
  `,


  // ─────────────────────────────
  // ITINERARIO
  // ─────────────────────────────

  itinerary: [

    {
      day: 1,

      title:
        "Llegada a Agadir – Traslado a Taghazout o Tamraght",

      description: `
        Tu viaje de surf comienza con la llegada a Agadir.

        La recogida puede organizarse en el aeropuerto de Agadir Al Massira o en otro
        punto acordado de la ciudad.

        Desde Agadir viajaremos hacia el norte por la costa hasta Taghazout o Tamraght,
        donde se encuentra tu alojamiento.

        Después del check-in tendrás tiempo para instalarte y descansar.

        Más tarde podrás conocer al equipo local y hablar sobre tu experiencia previa
        con el surf.

        Si eres principiante, prepararemos las primeras sesiones para aprender las bases
        de forma progresiva.

        Si ya tienes experiencia, podremos hablar sobre tu nivel, el tipo de olas que
        buscas y si prefieres coaching o surf guiding.

        El resto del día queda libre para caminar por el pueblo, disfrutar de la playa
        o descansar antes de la primera jornada de surf.
      `,

      highlights: [
        "Llegada a Agadir",
        "Recogida en el aeropuerto cuando esté incluida",
        "Traslado hacia Taghazout o Tamraght",
        "Check-in en el alojamiento",
        "Encuentro con el equipo local",
        "Revisión de tu nivel de surf",
        "Planificación de las primeras sesiones",
        "Tiempo libre junto al Atlántico",
        "Noche en Taghazout o Tamraght",
      ],
    },


    {
      day: 2,

      title:
        "Primer día de surf – Evaluación y clase adaptada a tu nivel",

      description: `
        Después del desayuno comienza tu primer día completo de surf en Taghazout.

        El spot se elige según las condiciones del día y tu nivel. No utilizamos siempre
        la misma playa porque las olas, la marea y el viento pueden cambiar.

        Los principiantes comenzarán con seguridad, posición sobre la tabla, remada y
        movimientos básicos para ponerse de pie.

        Después podrás practicar en condiciones adecuadas acompañado por el instructor.

        Los surfistas intermedios pueden utilizar esta primera sesión para evaluar su
        nivel y trabajar aspectos como el posicionamiento, el timing o la selección de olas.

        Si tienes más experiencia, puedes elegir surf guiding en lugar de una clase para
        principiantes.

        Después de la sesión tendrás tiempo para comer, descansar y recuperar energía.

        Dependiendo de las condiciones y del paquete contratado, puede organizarse una
        segunda sesión o dejar la tarde libre.
      `,

      highlights: [
        "Desayuno antes de la sesión",
        "Spot elegido según las condiciones",
        "Clase de surf para principiantes",
        "Evaluación para surfistas intermedios",
        "Opción de surf guiding",
        "Tabla y neopreno cuando estén incluidos",
        "Transporte hasta el spot",
        "Tiempo para comer y descansar",
        "Segunda sesión opcional según condiciones",
        "Noche en Taghazout o Tamraght",
      ],
    },


    {
      day: 3,

      title:
        "Surf en Taghazout y Tamraght – Día de progresión",

      description: `
        El tercer día está pensado para seguir mejorando tu surf.

        Después del desayuno revisaremos las condiciones y viajaremos a un spot adecuado
        para el grupo.

        Si eres principiante, trabajarás sobre lo aprendido durante la primera sesión.
        El objetivo es coger más olas, mejorar el take-off y ganar control sobre la tabla.

        Los surfistas intermedios pueden trabajar lectura de olas, posicionamiento y
        técnica.

        Los surfistas con más experiencia pueden continuar con surf guiding y buscar
        mejores condiciones a lo largo de la costa.

        El programa sigue siendo flexible porque las condiciones pueden cambiar de un
        día a otro.

        Después del surf regresarás a Taghazout o Tamraght.

        La tarde queda libre para descansar, disfrutar de la playa, tomar algo en el
        pueblo o añadir yoga o estiramientos.
      `,

      highlights: [
        "Segundo día completo de surf",
        "Surf en Taghazout o Tamraght",
        "Spot flexible según las condiciones",
        "Progresión para principiantes",
        "Trabajo técnico para nivel intermedio",
        "Surf guiding para surfistas con experiencia",
        "Transporte diario hasta el spot",
        "Tarde libre después de la sesión",
        "Yoga o estiramientos opcionales",
        "Noche en Taghazout o Tamraght",
      ],
    },


    {
      day: 4,

      title:
        "Paradise Valley – Día de naturaleza y descanso",

      description: `
        Después de varios días de surf, haremos una pausa para descubrir otra parte de
        la región de Agadir.

        Después del desayuno viajaremos hacia Paradise Valley.

        Dejaremos atrás la costa para entrar en un paisaje de montañas, palmeras y zonas
        rocosas.

        Tendrás tiempo para caminar, relajarte y disfrutar del entorno.

        Esta jornada también ayuda a descansar el cuerpo antes de continuar con más días
        de surf.

        El almuerzo puede organizarse durante la excursión o realizarse por libre,
        dependiendo del paquete elegido.

        Regresaremos a Taghazout o Tamraght más tarde durante el día.

        La noche queda libre. También se pueden solicitar actividades opcionales como
        hammam, masaje o yoga cuando estén disponibles.
      `,

      highlights: [
        "Desayuno en el alojamiento",
        "Excursión a Paradise Valley",
        "Paisajes de montaña y palmeras",
        "Tiempo para caminar",
        "Día de recuperación",
        "Regreso a la costa",
        "Hammam opcional",
        "Masaje opcional",
        "Yoga opcional",
        "Noche en Taghazout o Tamraght",
      ],
    },


    {
      day: 5,

      title:
        "Taghazout o Tamraght – Imsouane – Sesión de surf",

      description: `
        Después del desayuno dejaremos la zona de Taghazout y Tamraght para viajar hacia
        el norte por la costa atlántica.

        La ruta continúa hasta Imsouane, otro destino conocido entre surfistas que viajan
        por Marruecos.

        Al llegar realizarás el check-in en el alojamiento.

        Dependiendo de la hora, las condiciones del mar y tu nivel, podremos salir para
        una primera sesión de surf en Imsouane.

        Los principiantes pueden continuar practicando las habilidades aprendidas durante
        los primeros días.

        Los surfistas intermedios pueden trabajar recorridos más largos, posicionamiento
        y control.

        Si tienes experiencia, puedes realizar una sesión guiada según las condiciones.

        Después del surf tendrás tiempo libre para disfrutar del ambiente tranquilo del
        pueblo.

        Pasarás la primera noche en Imsouane.
      `,

      highlights: [
        "Ruta por la costa atlántica",
        "Llegada a Imsouane",
        "Check-in en el alojamiento",
        "Primera sesión de surf en Imsouane",
        "Progresión para principiantes",
        "Trabajo para nivel intermedio",
        "Surf guiding opcional",
        "Tiempo libre en el pueblo",
        "Primera noche en Imsouane",
      ],
    },


    {
      day: 6,

      title:
        "Día completo de surf en Imsouane",

      description: `
        El sexto día está dedicado completamente al surf en Imsouane.

        Después del desayuno revisaremos las condiciones y organizaremos la sesión de la
        mañana.

        Tener dos noches en Imsouane permite pasar más tiempo en el agua sin tener que
        regresar inmediatamente a Taghazout.

        Los principiantes pueden seguir trabajando confianza, control de la tabla y
        entrada en las olas.

        Los surfistas intermedios pueden mejorar técnica y aprovechar mejor cada ola.

        Los surfistas con experiencia pueden utilizar el conocimiento local para elegir
        la mejor sesión disponible según las condiciones.

        Después del surf tendrás tiempo para comer y descansar.

        Si las condiciones y tu energía lo permiten, puede organizarse una segunda sesión.

        También puedes pasar la tarde caminando por el pueblo, descansando junto al mar
        o disfrutando de la puesta de sol.
      `,

      highlights: [
        "Día completo en Imsouane",
        "Sesión de surf por la mañana",
        "Coaching adaptado a tu nivel",
        "Tiempo para descansar entre sesiones",
        "Segunda sesión opcional",
        "Tiempo libre en el pueblo",
        "Puesta de sol junto al Atlántico",
        "Segunda noche en Imsouane",
      ],
    },


    {
      day: 7,

      title:
        "Última sesión de surf – Imsouane a Taghazout o Tamraght",

      description: `
        Disfruta del último día activo de este surf camp en Marruecos.

        Dependiendo de las condiciones, podemos comenzar con una última sesión en
        Imsouane o elegir un spot durante el regreso hacia el sur.

        Para los principiantes será una oportunidad para aplicar todo lo aprendido
        durante la semana.

        Los surfistas intermedios pueden trabajar consistencia y selección de olas.

        Los surfistas con experiencia pueden disfrutar de una última sesión guiada.

        Después del surf regresaremos hacia Taghazout o Tamraght.

        Allí realizarás el check-in para la última noche.

        El resto del día queda libre para la playa, caminar por Taghazout, tomar algo
        frente al mar o añadir una actividad de bienestar.
      `,

      highlights: [
        "Última sesión de surf",
        "Sesión adaptada a tu nivel",
        "Spot elegido según las condiciones",
        "Regreso hacia Taghazout o Tamraght",
        "Tiempo libre junto al mar",
        "Actividad wellness opcional",
        "Última noche en la costa",
      ],
    },


    {
      day: 8,

      title:
        "Taghazout o Tamraght – Salida hacia Agadir",

      description: `
        Disfruta del desayuno y de tu última mañana junto al océano Atlántico.

        Dependiendo de tu horario de salida, podrás tener algo de tiempo libre para la
        playa, caminar por el pueblo, hacer compras o tomar un café.

        A la hora acordada te recogeremos en el alojamiento.

        El traslado continuará hacia Agadir.

        Si lo necesitas, puede organizarse el traslado hasta el aeropuerto de Agadir
        Al Massira según el horario de tu vuelo.

        Aquí termina tu surf camp de 8 días después de descubrir Taghazout, Tamraght,
        Imsouane, Paradise Valley y diferentes spots de la costa atlántica.

        Si quieres continuar viajando por Marruecos, también podemos organizar un
        traslado personalizado hacia tu siguiente destino.
      `,

      highlights: [
        "Último desayuno",
        "Tiempo libre según el horario",
        "Recogida en el alojamiento",
        "Traslado hacia Agadir",
        "Traslado al aeropuerto cuando esté contratado",
        "Fin del surf camp de 8 días",
        "Traslado posterior personalizable",
      ],
    },

  ],


  // ─────────────────────────────
  // INCLUIDO
  // ─────────────────────────────

  included: [
    "Siete noches de alojamiento",
    "Alojamiento en la zona de Taghazout o Tamraght",
    "Dos noches de alojamiento en Imsouane",
    "Desayuno diario",
    "Traslado de llegada desde Agadir cuando esté incluido en el paquete",
    "Traslado de salida hacia Agadir cuando esté incluido en el paquete",
    "Clases de surf o surf guiding según el paquete elegido",
    "Tabla de surf durante las sesiones programadas",
    "Neopreno durante las sesiones programadas",
    "Transporte diario hasta los spots seleccionados",
    "Selección del spot según tu nivel y las condiciones del mar",
    "Transporte entre Taghazout o Tamraght e Imsouane",
    "Excursión a Paradise Valley",
    "Coordinación local durante el viaje",
    "Itinerario flexible según las condiciones del surf",
  ],


  // ─────────────────────────────
  // NO INCLUIDO
  // ─────────────────────────────

  excluded: [
    "Vuelos internacionales",
    "Almuerzos y cenas salvo que estén incluidos en el paquete elegido",
    "Bebidas",
    "Seguro de viaje",
    "Gastos personales",
    "Hammam opcional",
    "Masajes opcionales",
    "Sesiones de yoga opcionales salvo que estén incluidas",
    "Actividades opcionales no indicadas en el paquete elegido",
    "Equipo de surf avanzado o específico salvo solicitud previa",
    "Propinas",
    "Servicios no mencionados en la sección de incluidos",
  ],


  // ─────────────────────────────
  // ALOJAMIENTO
  // ─────────────────────────────

  accommodation: [
    {
      night: 1,
      location: "Taghazout o Tamraght",
      type: "Surf house, riad u hotel",
    },
    {
      night: 2,
      location: "Taghazout o Tamraght",
      type: "Surf house, riad u hotel",
    },
    {
      night: 3,
      location: "Taghazout o Tamraght",
      type: "Surf house, riad u hotel",
    },
    {
      night: 4,
      location: "Taghazout o Tamraght",
      type: "Surf house, riad u hotel",
    },
    {
      night: 5,
      location: "Imsouane",
      type: "Surf house, guesthouse u hotel",
    },
    {
      night: 6,
      location: "Imsouane",
      type: "Surf house, guesthouse u hotel",
    },
    {
      night: 7,
      location: "Taghazout o Tamraght",
      type: "Surf house, riad u hotel",
    },
  ],


  // ─────────────────────────────
  // GALERÍA
  // ─────────────────────────────

  gallery: [
    "/images/tours/8-day-taghazout-surf-camp.webp",
  ],


  // ─────────────────────────────
  // PREGUNTAS FRECUENTES
  // ─────────────────────────────

  faqs: [

    {
      question:
        "¿Este surf camp en Taghazout es adecuado para principiantes?",

      answer:
        "Sí. El programa puede adaptarse a personas que nunca han practicado surf. Las primeras sesiones pueden incluir seguridad, remada, posición sobre la tabla, take-off y práctica progresiva en condiciones adecuadas.",
    },

    {
      question:
        "¿Necesito experiencia previa para participar?",

      answer:
        "No. Pueden participar principiantes, surfistas intermedios y personas con experiencia. Las sesiones se adaptan al nivel de cada viajero.",
    },

    {
      question:
        "¿Este Taghazout surf camp también sirve para surfistas intermedios?",

      answer:
        "Sí. Si ya tienes experiencia, las sesiones pueden centrarse en posicionamiento, lectura de olas, técnica, selección de olas y mayor consistencia en el agua.",
    },

    {
      question:
        "¿Ofrecéis surf guiding para surfistas con experiencia?",

      answer:
        "Sí. Los surfistas con experiencia pueden solicitar surf guiding en lugar de clases básicas. El spot se elige según tu nivel y las condiciones del día.",
    },

    {
      question:
        "¿Las clases de surf están incluidas todos los días?",

      answer:
        "El número exacto de clases depende del paquete contratado. El itinerario incluye varios días de surf, además de desplazamientos, tiempo de recuperación y una excursión a Paradise Valley.",
    },

    {
      question:
        "¿Los spots de surf se deciden antes del viaje?",

      answer:
        "No siempre. Las condiciones del Atlántico cambian, por lo que elegimos el spot según el swell, la marea, el viento y tu nivel. Esto permite mantener el programa flexible.",
    },

    {
      question:
        "¿Está incluido el equipo de surf?",

      answer:
        "La tabla y el neopreno pueden estar incluidos durante las sesiones programadas. Si necesitas equipo específico o quieres traer tu propia tabla, indícalo antes del viaje.",
    },

    {
      question:
        "¿Dónde nos alojamos durante el surf camp?",

      answer:
        "El itinerario incluye alojamiento en Taghazout o Tamraght y dos noches en Imsouane. El alojamiento exacto depende del presupuesto y del nivel de comodidad que prefieras.",
    },

    {
      question:
        "¿El viaje incluye surf en Imsouane?",

      answer:
        "Sí. El programa incluye dos noches en Imsouane y tiempo para realizar varias sesiones de surf según las condiciones.",
    },

    {
      question:
        "¿Paradise Valley está incluido?",

      answer:
        "Sí. El cuarto día está pensado como una jornada de naturaleza y recuperación con una excursión a Paradise Valley.",
    },

    {
      question:
        "¿Es un surf camp privado?",

      answer:
        "El viaje puede organizarse de forma privada para parejas, amigos, familias o grupos pequeños. Las clases y actividades se adaptan al paquete acordado.",
    },

    {
      question:
        "¿Puede venir conmigo una persona que no practica surf?",

      answer:
        "Sí. Los acompañantes que no practican surf pueden participar. Podemos organizar alojamiento, playa, Paradise Valley y otras actividades mientras tú realizas las sesiones.",
    },

    {
      question:
        "¿Se puede añadir yoga, hammam o masaje?",

      answer:
        "Sí. Yoga, hammam y masaje se pueden añadir como actividades opcionales según disponibilidad y la zona donde te alojes.",
    },

    {
      question:
        "¿Este surf camp incluye traslado desde Agadir?",

      answer:
        "La recogida y el traslado desde Agadir o el aeropuerto de Agadir Al Massira pueden incluirse en el paquete. Comparte los datos de tu vuelo para organizar el servicio.",
    },

    {
      question:
        "¿Se puede personalizar este surf camp en Marruecos?",

      answer:
        "Sí. Podemos adaptar el programa según tu nivel de surf, fechas, alojamiento, tamaño del grupo y actividades que quieras añadir.",
    },

    {
      question:
        "¿Qué pasa si las condiciones de surf no son buenas?",

      answer:
        "El programa es flexible. Podemos cambiar el spot, modificar la hora de la sesión o adaptar las actividades según las condiciones locales y la seguridad.",
    },

  ],


  // ─────────────────────────────
  // SEO
  // ─────────────────────────────

  seo: {

    title:
      "Surf Camp Taghazout 8 días | Surf en Marruecos",

    description:
      "Surf camp en Taghazout de 8 días con alojamiento, clases o surf guiding, transporte diario, Imsouane, Paradise Valley y traslados desde Agadir.",

    // Mapa interno de keywords basado en Semrush España.
    // No convertir este array en <meta name="keywords">.
    //
    // Primary:
    // surf camp taghazout = Volume 210 / KD 13 / Commercial / Relevance 100
    //
    // Strong commercial + transactional opportunities:
    // surf camp marruecos = 480 / KD 13 / Commercial
    // surf en taghazout = 320 / KD 15 / Commercial
    // taghazout surf camp = 140 / KD 8 / Transactional
    // agadir surf camp = 170 / KD 10 / Transactional
    // imsouane surf camp = 90 / KD 8 / Informational + Transactional

    keywords: [
      "surf camp taghazout",
      "taghazout surf camp",
      "surf camp marruecos",
      "surf en taghazout",
      "surf marruecos",
      "surf en marruecos",
      "agadir surf camp",
      "imsouane surf camp",
      "surf trip marruecos",
      "taghazout surf",
    ],

  },


  // ─────────────────────────────
  // RESERVA
  // ─────────────────────────────

  booking: {
    available: true,
    minimumDays: 8,
    customizable: true,
    contactLabel: "Solicitar presupuesto",
  },

},


];