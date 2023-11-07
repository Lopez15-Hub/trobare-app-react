import { Seed } from "../adapter/seed.adapter";
import { WorldLegacy } from "../interfaces/world-legacy.interface";

export class WorldsService {
  seed = new Seed<WorldLegacy>("worlds-legacy.seed.json");

  get = () => [
    {
      category: "Deportes y Atracciones",
      icon_category: "3.jpg",
      id_category: "1",
      subcategories: [
        {
          subcategory: "Deportes de Aventura",
          icon_subcategory: "01.jpg",
          id_subcategory: "11",
          categories: [
            {
              subcategoryFinal: "Karting",
              icon_subcategoryFinal: "017.jpg",
              id_subcategoryFinal: "111",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Karting GoKarts",
                  image: "1000.jpg",
                  desc: "Estamos ubicados en Valenzuela Puelma 9.500, Santiago, Las Condes, Región Metropolitana. (límite comuna La Reina)",
                },
                {
                  id: "1112",
                  name: "Karting Club Tocornal",
                  image: "tocornal.jpg",
                  desc: "Un lugar popular para el karting que ofrece alquiler de karts y carreras competitivas.",
                },
                {
                  id: "1113",
                  name: "Kartodromo Las Americas",
                  image: "lasamericas.jpg",
                  desc: "Otro lugar popular para correr karts, con una amplia pista y karts de alquiler.",
                },
                {
                  id: "1114",
                  name: "Happyland Parque Arauco",
                  image: "happyland.jpg",
                  desc: "Además de ser un parque de diversiones, también tiene una pista de karting para los entusiastas de las carreras.",
                },
                {
                  id: "1115",
                  name: "Kart Indoor Santiago",
                  image: "kartindoor.jpg",
                  desc: "Ofrece carreras de karts en un ambiente interior, lo que es perfecto para los días de lluvia.",
                },
                {
                  id: "1116",
                  name: "XtremeKart",
                  image: "xtremekart.jpg",
                  desc: "Conocido por su amplia pista y varios karts para elegir.",
                },
              ],
            },
            {
              subcategoryFinal: "Paintball",
              icon_subcategoryFinal: "018.jpg",
              id_subcategoryFinal: "112",
              categoriesFinal: [
                {
                  id: "1122",
                  name: "Paintball Santiago",
                  image: "paintballsantiago.jpg",
                  desc: "Ubicado en La Florida, Paintball Santiago ofrece campos de juego temáticos y equipamiento completo para disfrutar de la experiencia del paintball.",
                },
                {
                  id: "1123",
                  name: "Paintball Extremo",
                  image: "paintballextremo.jpg",
                  desc: "Situado en la comuna de Puente Alto, Paintball Extremo cuenta con diversos campos de juego y ofrece paquetes para grupos, cumpleaños y eventos corporativos.",
                },
                {
                  id: "1124",
                  name: "Paintball Park",
                  image: "paintballpark.jpg",
                  desc: "Este parque de paintball se encuentra en la comuna de Maipú y ofrece una amplia variedad de escenarios y modalidades de juego.",
                },
                {
                  id: "1125",
                  name: "Paintball Zone",
                  image: "paintballzone.jpg",
                  desc: "Ubicado en San Bernardo, Paintball Zone brinda campos de juego al aire libre y cuenta con instalaciones adecuadas para grupos grandes y pequeños.",
                },
                {
                  id: "1126",
                  name: "Paintball Tricolor",
                  image: "paintballtricolor.jpg",
                  desc: "Situado en la comuna de La Reina, Paintball Tricolor cuenta con campos de juego especialmente diseñados para diversas modalidades de paintball, como speedball y woodsball.",
                },
              ],
            },
            {
              subcategoryFinal: "Parapente",
              icon_subcategoryFinal: "019.jpg",
              id_subcategoryFinal: "113",
              categoriesFinal: [
                {
                  id: "1131",
                  name: "Parapente Andes",
                  image: "parapenteandes.jpg",
                  desc: "Ubicado en Las Condes, Parapente Andes ofrece vuelos en parapente en las montañas de los Andes.",
                },
                {
                  id: "1132",
                  name: "Parapente Aire Libre",
                  image: "parapenteairelibre.jpg",
                  desc: "Parapente Aire Libre, situado en Vitacura, ofrece vuelos en parapente para principiantes y pilotos más experimentados.",
                },
                {
                  id: "1133",
                  name: "Fly Santiago Paragliding School",
                  image: "flysantiago.jpg",
                  desc: "Esta escuela de parapente ubicada en Santiago ofrece cursos de parapente y vuelos en tándem.",
                },
                {
                  id: "1134",
                  name: "Paravolar",
                  image: "paravolar.jpg",
                  desc: "Paravolar, en la comuna de Lo Barnechea, ofrece vuelos en parapente con instructores experimentados.",
                },
                {
                  id: "1135",
                  name: "Parapente Chicureo",
                  image: "parapentechicureo.jpg",
                  desc: "Ubicado en Colina, Parapente Chicureo ofrece vuelos en parapente en una de las zonas más hermosas de la región.",
                },
              ],
            },
            {
              subcategoryFinal: "Salto en Paracaídas",
              icon_subcategoryFinal: "020.jpg",
              id_subcategoryFinal: "114",
              categoriesFinal: [
                {
                  id: "1141",
                  name: "Skydive Andes",
                  image: "skydiveandes.jpg",
                  desc: "Skydive Andes, ubicado cerca de Santiago, ofrece la oportunidad de saltar en paracaídas sobre el hermoso paisaje de los Andes.",
                },
                {
                  id: "1142",
                  name: "Skydive Chile",
                  image: "skydivechile.jpg",
                  desc: "Skydive Chile, situado en Lampa, ofrece experiencias de salto en paracaídas para principiantes y saltadores experimentados.",
                },
                {
                  id: "1143",
                  name: "Adrenaline Skydive",
                  image: "adrenalineskydive.jpg",
                  desc: "Adrenaline Skydive, en Melipilla, ofrece saltos en tándem y cursos de salto en paracaídas.",
                },
                {
                  id: "1144",
                  name: "Paracaidismo Rancagua",
                  image: "paracaidismorancagua.jpg",
                  desc: "Paracaidismo Rancagua, ubicado en la ciudad de Rancagua, ofrece la oportunidad de saltar en paracaídas con vistas al impresionante paisaje de la región.",
                },
                {
                  id: "1145",
                  name: "Skydiving Maitencillo",
                  image: "skydivingmaitencillo.jpg",
                  desc: "Skydiving Maitencillo ofrece saltos en paracaídas con vistas al hermoso paisaje costero de Maitencillo.",
                },
              ],
            },
            {
              subcategoryFinal: "Bungee y Swing",
              icon_subcategoryFinal: "021.jpg",
              id_subcategoryFinal: "115",
              categoriesFinal: [
                {
                  id: "1151",
                  name: "Bungee Chile",
                  image: "bungeechile.jpg",
                  desc: "Bungee Chile, ubicado en Cajón del Maipo, ofrece experiencias de bungee jumping en un entorno natural impresionante.",
                },
                {
                  id: "1152",
                  name: "Extreme Zone Bungee",
                  image: "extremezone.jpg",
                  desc: "Extreme Zone Bungee, en Santiago, ofrece experiencias de bungee jumping en plena ciudad.",
                },
                {
                  id: "1153",
                  name: "Mundo Aventura",
                  image: "mundoaventura.jpg",
                  desc: "Mundo Aventura, ubicado en Quillota, ofrece una variedad de actividades de aventura, incluyendo bungee jumping y swings.",
                },
                {
                  id: "1154",
                  name: "Adventure Kingdom",
                  image: "adventurekingdom.jpg",
                  desc: "Adventure Kingdom, en Valparaíso, ofrece una variedad de actividades de aventura, incluyendo bungee jumping y swings.",
                },
                {
                  id: "1155",
                  name: "Adrenalina Máxima",
                  image: "adrenalinamaxima.jpg",
                  desc: "Adrenalina Máxima, ubicado en Pucón, ofrece una variedad de actividades de aventura, incluyendo bungee jumping y swings.",
                },
              ],
            },
            {
              subcategoryFinal: "Canopy y Tirolesa",
              icon_subcategoryFinal: "022.jpg",
              id_subcategoryFinal: "116",
              categoriesFinal: [
                {
                  id: "1161",
                  name: "Canopy Las Vertientes",
                  image: "canopylasvertientes.jpg",
                  desc: "Canopy Las Vertientes, en el Cajón del Maipo, ofrece experiencias de canopy y tirolesa en un impresionante entorno natural.",
                },
                {
                  id: "1162",
                  name: "Canopy San José de Maipo",
                  image: "canopysanjosedemaipo.jpg",
                  desc: "Canopy San José de Maipo, ubicado en el corazón del Cajón del Maipo, ofrece emocionantes recorridos en tirolesa.",
                },
                {
                  id: "1163",
                  name: "Canopy Adventure Park",
                  image: "canopyadventurepark.jpg",
                  desc: "Canopy Adventure Park, en Puchuncaví, ofrece recorridos en tirolesa con vistas al océano Pacífico.",
                },
                {
                  id: "1164",
                  name: "Canopy El Canelo",
                  image: "canopyelcanelo.jpg",
                  desc: "Canopy El Canelo, en Algarrobo, ofrece recorridos en tirolesa a través de un hermoso bosque nativo.",
                },
                {
                  id: "1165",
                  name: "Parque de la Aventura",
                  image: "parquedelaaventura.jpg",
                  desc: "Parque de la Aventura, ubicado en San Esteban, ofrece una variedad de actividades de aventura, incluyendo canopy y tirolesa.",
                },
              ],
            },
            {
              subcategoryFinal: "Barranquismo",
              icon_subcategoryFinal: "023.jpg",
              id_subcategoryFinal: "117",
              categoriesFinal: [
                {
                  id: "1171",
                  name: "Barranquismo Cajón del Maipo",
                  image: "cajondelmaipo.jpg",
                  desc: "El Cajón del Maipo es un popular lugar para barranquismo, con varios operadores turísticos que ofrecen excursiones en la zona.",
                },
                {
                  id: "1172",
                  name: "Barranquismo San Alfonso",
                  image: "sanalfonso.jpg",
                  desc: "San Alfonso, situado en el Cajón del Maipo, es un excelente lugar para barranquismo, con una variedad de rutas para elegir.",
                },
                {
                  id: "1173",
                  name: "Barranquismo en Pucón",
                  image: "pucon.jpg",
                  desc: "Pucón, a pesar de estar a unas horas de Santiago, es conocido por sus emocionantes excursiones de barranquismo en la zona volcánica.",
                },
                {
                  id: "1174",
                  name: "Barranquismo en Las Melosas",
                  image: "lasmelosas.jpg",
                  desc: "Las Melosas, en el Cajón del Maipo, ofrece emocionantes recorridos de barranquismo en un entorno de montaña espectacular.",
                },
                {
                  id: "1175",
                  name: "Barranquismo en San José de Maipo",
                  image: "sanjosedemaipo.jpg",
                  desc: "San José de Maipo, situado en la región del Maipo, ofrece una variedad de rutas de barranquismo para todos los niveles de habilidad.",
                },
              ],
            },
            {
              subcategoryFinal: "Rafting y Kayak",
              icon_subcategoryFinal: "024.jpg",
              id_subcategoryFinal: "118",
              categoriesFinal: [
                {
                  id: "1181",
                  name: "Rafting Maipo",
                  image: "raftingmaipo.jpg",
                  desc: "Rafting Maipo, ubicado en el Cajón del Maipo, ofrece emocionantes recorridos de rafting y kayak en el río Maipo.",
                },
                {
                  id: "1182",
                  name: "Rafting Cajón del Maipo",
                  image: "cajondelmaipo.jpg",
                  desc: "Cajón del Maipo es un lugar popular para rafting y kayak, con varios operadores que ofrecen recorridos por el río Maipo.",
                },
                {
                  id: "1183",
                  name: "Rafting Trancura",
                  image: "raftingtrancura.jpg",
                  desc: "Rafting Trancura, ubicado en Pucón, ofrece emocionantes recorridos de rafting y kayak en el río Trancura.",
                },
                {
                  id: "1184",
                  name: "Kayak Santiago",
                  image: "kayaksantiago.jpg",
                  desc: "Kayak Santiago ofrece cursos de kayak y excursiones en los ríos y lagos de la región de Santiago.",
                },
                {
                  id: "1185",
                  name: "Chile Rafting",
                  image: "chilerafting.jpg",
                  desc: "Chile Rafting ofrece una variedad de excursiones de rafting y kayak en varios ríos alrededor de Santiago.",
                },
              ],
            },
            {
              subcategoryFinal: "Patinaje Sobre Hielo",
              icon_subcategoryFinal: "025.jpg",
              id_subcategoryFinal: "119",
              categoriesFinal: [
                {
                  id: "1191",
                  name: "Pista de Hielo Mallplaza Egaña",
                  image: "mallplazaegana.jpg",
                  desc: "Ubicada en el Mallplaza Egaña, esta pista de hielo ofrece una oportunidad para disfrutar del patinaje sobre hielo en pleno centro comercial.",
                },
                {
                  id: "1192",
                  name: "Pista de Hielo SnowZone Parque Arauco",
                  image: "parquearauco.jpg",
                  desc: "SnowZone en Parque Arauco es otra opción para disfrutar del patinaje sobre hielo. Además, ofrece clases para principiantes.",
                },
                {
                  id: "1193",
                  name: "Pista de Hielo Mallplaza Oeste",
                  image: "mallplazaoeste.jpg",
                  desc: "Ubicada en el Mallplaza Oeste, esta pista de hielo es un lugar ideal para disfrutar del patinaje sobre hielo en un entorno cómodo.",
                },
                {
                  id: "1194",
                  name: "Pista de Hielo Mallplaza Norte",
                  image: "mallplazanorte.jpg",
                  desc: "La pista de hielo del Mallplaza Norte es otra opción para los amantes del patinaje sobre hielo.",
                },
                {
                  id: "1195",
                  name: "Pista de Hielo en el Mallplaza Vespucio",
                  image: "mallplazavespucio.jpg",
                  desc: "Esta pista de hielo ubicada en el Mallplaza Vespucio es ideal para patinadores de todos los niveles.",
                },
              ],
            },
            {
              subcategoryFinal: "Escaladas (Boulder y Muros)",
              icon_subcategoryFinal: "026.jpg",
              id_subcategoryFinal: "1100010",
              categoriesFinal: [
                {
                  id: "11000101",
                  name: "Rocódromo Santiago",
                  image: "rocodromosantiago.jpg",
                  desc: "Rocódromo Santiago ofrece una amplia gama de muros de escalada y zonas de boulder para escaladores de todos los niveles.",
                },
                {
                  id: "11000102",
                  name: "Andino Club",
                  image: "andinoclub.jpg",
                  desc: "Andino Club cuenta con instalaciones de escalada y ofrece cursos para aquellos interesados en aprender o perfeccionar sus habilidades.",
                },
                {
                  id: "11000103",
                  name: "BoulderGym",
                  image: "bouldergym.jpg",
                  desc: "BoulderGym es un gimnasio de escalada que se centra en la escalada de boulder. Ofrecen una variedad de problemas para resolver y muros para escalar.",
                },
                {
                  id: "11000104",
                  name: "La Piedra Feliz",
                  image: "lapiedrafeliz.jpg",
                  desc: "La Piedra Feliz es un gimnasio de escalada que ofrece muros de escalada y zonas de boulder. También ofrecen cursos de escalada.",
                },
                {
                  id: "11000105",
                  name: "Vertical Climbing Gym",
                  image: "verticalclimbing.jpg",
                  desc: "Vertical Climbing Gym ofrece una variedad de muros de escalada y zonas de boulder para todas las edades y niveles de habilidad.",
                },
              ],
            },
            {
              subcategoryFinal: "Trekking y Caminatas",
              icon_subcategoryFinal: "027.jpg",
              id_subcategoryFinal: "1100011",
              categoriesFinal: [
                {
                  id: "11000111",
                  name: "Parque Nacional La Campana",
                  image: "lacampana.jpg",
                  desc: "El Parque Nacional La Campana es famoso por su extenso sistema de senderos de trekking que atraviesan diversos ecosistemas.",
                },
                {
                  id: "11000112",
                  name: "Parque Natural Aguas de Ramón",
                  image: "aguasderamon.jpg",
                  desc: "Aguas de Ramón es un parque natural situado en la cordillera de los Andes que ofrece senderos de trekking para todos los niveles.",
                },
                {
                  id: "11000113",
                  name: "Reserva Nacional Altos de Lircay",
                  image: "altosdelircay.jpg",
                  desc: "La Reserva Nacional Altos de Lircay ofrece impresionantes senderos de trekking que atraviesan bosques nativos y terrenos montañosos.",
                },
                {
                  id: "11000114",
                  name: "Cerro Manquehue",
                  image: "cerromanquehue.jpg",
                  desc: "El Cerro Manquehue es un popular destino de trekking en Santiago, conocido por sus impresionantes vistas de la ciudad y el valle circundante.",
                },
                {
                  id: "11000115",
                  name: "Cajón del Maipo",
                  image: "cajondelmaipo1.jpg",
                  desc: "El Cajón del Maipo es un cañón ubicado en los Andes, al sureste de Santiago, conocido por sus impresionantes paisajes y senderos de trekking.",
                },
              ],
            },
            {
              subcategoryFinal: "Buceo",
              icon_subcategoryFinal: "028.jpg",
              id_subcategoryFinal: "1100012",
              categoriesFinal: [
                {
                  id: "11000121",
                  name: "Buceo Quintay",
                  image: "buceoquintay.jpg",
                  desc: "Buceo Quintay es un centro de buceo muy reconocido, ubicado a unos 120 km al oeste de Santiago, donde los buzos pueden explorar antiguas estructuras submarinas y la rica vida marina.",
                },
                {
                  id: "11000122",
                  name: "Buceo Rapa Nui",
                  image: "buceorapanui.jpg",
                  desc: "Si bien está en la Isla de Pascua, Buceo Rapa Nui ofrece una experiencia de buceo única en la vida con su impresionante visibilidad y estatuas moai submarinas.",
                },
                {
                  id: "11000123",
                  name: "Orca Diving Center",
                  image: "orcadiving.jpg",
                  desc: "Orca Diving Center es un centro de buceo con base en Santiago que ofrece cursos de buceo y excursiones a varios destinos de buceo en Chile.",
                },
                {
                  id: "11000124",
                  name: "Albatros Diving",
                  image: "albatrosdiving.jpg",
                  desc: "Albatros Diving, ubicado en Santiago, ofrece una variedad de cursos de buceo, desde principiantes hasta avanzados.",
                },
                {
                  id: "11000125",
                  name: "Pacific Divers Chile",
                  image: "pacificdivers.jpg",
                  desc: "Pacific Divers es un centro de buceo con sede en Santiago que ofrece excursiones de buceo, cursos de buceo y alquiler de equipos.",
                },
              ],
            },
            {
              subcategoryFinal: "Surf",
              icon_subcategoryFinal: "029.jpg",
              id_subcategoryFinal: "1100013",
              categoriesFinal: [
                {
                  id: "11000131",
                  name: "Pichilemu Surf",
                  image: "pichilemusurf.jpg",
                  desc: "Pichilemu es la capital del surf en Chile y está a un par de horas de Santiago. Cuenta con playas que son adecuadas para todos los niveles de surfistas.",
                },
                {
                  id: "11000132",
                  name: "Maule Surf School",
                  image: "maulesurf.jpg",
                  desc: "Maule Surf School en Curanipe ofrece clases de surf y alquiler de equipos. Es un gran lugar para los surfistas que buscan buenas olas.",
                },
                {
                  id: "11000133",
                  name: "Punta de Lobos",
                  image: "puntadelobos.jpg",
                  desc: "Punta de Lobos en Pichilemu es conocida por sus grandes olas y es un lugar popular para los surfistas más experimentados.",
                },
                {
                  id: "11000134",
                  name: "Matanzas Surf Spot",
                  image: "matanzassurf.jpg",
                  desc: "Matanzas es una playa con condiciones ideales para el surf y es famosa por su ambiente tranquilo y relajado.",
                },
                {
                  id: "11000135",
                  name: "La Boca Con Con Surf Spot",
                  image: "labocaconcon.jpg",
                  desc: "La Boca Con Con es conocida por sus consistentes olas y es ideal para los surfistas de todos los niveles.",
                },
              ],
            },
            {
              subcategoryFinal: "Cabalgatas",
              icon_subcategoryFinal: "030.jpg",
              id_subcategoryFinal: "1100014",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Centros de Ski",
              icon_subcategoryFinal: "031.jpg",
              id_subcategoryFinal: "1100015",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Sandboard",
              icon_subcategoryFinal: "032.jpg",
              id_subcategoryFinal: "1100016",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Otros Deportes de Aventura",
              icon_subcategoryFinal: "033.jpg",
              id_subcategoryFinal: "1100017",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Parques y Centros de Diversiones",
          icon_subcategory: "02.jpg",
          id_subcategory: "12",
          categories: [
            {
              subcategoryFinal: "Piscinas",
              icon_subcategoryFinal: "034.jpg",
              id_subcategoryFinal: "121",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Atracciones Juveniles y Familiares",
              icon_subcategoryFinal: "035.jpg",
              id_subcategoryFinal: "122",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Atracciones Infantiles",
              icon_subcategoryFinal: "036.jpg",
              id_subcategoryFinal: "123",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Arcades y Flippers",
              icon_subcategoryFinal: "037.jpg",
              id_subcategoryFinal: "124",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Bowling",
              icon_subcategoryFinal: "038.jpg",
              id_subcategoryFinal: "125",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Pool",
              icon_subcategoryFinal: "039.jpg",
              id_subcategoryFinal: "126",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Mini Golf",
              icon_subcategoryFinal: "040.jpg",
              id_subcategoryFinal: "127",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Mundo Animal",
          icon_subcategory: "03.jpg",
          id_subcategory: "13",
          categories: [
            {
              subcategoryFinal: "Zoológicos",
              icon_subcategoryFinal: "041.jpg",
              id_subcategoryFinal: "131",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Granjas Educativas",
              icon_subcategoryFinal: "042.jpg",
              id_subcategoryFinal: "132",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Acuarios",
              icon_subcategoryFinal: "043.jpg",
              id_subcategoryFinal: "133",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Atractivos Turisticos",
          icon_subcategory: "04.jpg",
          id_subcategory: "14",
          categories: [
            {
              subcategoryFinal: "Parques y Reservas Nacionales",
              icon_subcategoryFinal: "044.jpg",
              id_subcategoryFinal: "141",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Cerros y Miradores",
              icon_subcategoryFinal: "045.jpg",
              id_subcategoryFinal: "142",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Tours y Rutas Turísticas",
              icon_subcategoryFinal: "046.jpg",
              id_subcategoryFinal: "143",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Playas",
              icon_subcategoryFinal: "047.jpg",
              id_subcategoryFinal: "144",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Monumentos y Arquitectura",
              icon_subcategoryFinal: "048.jpg",
              id_subcategoryFinal: "145",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Mundo Culinario",
      icon_category: "1.jpg",
      id_category: "2",
      subcategories: [
        {
          subcategory: "Restaurantes",
          icon_subcategory: "05.jpg",
          id_subcategory: "21",
          categories: [
            {
              subcategoryFinal: "Especialidad en Diversos Platos",
              icon_subcategoryFinal: "049.jpg",
              id_subcategoryFinal: "211",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Especialidad en Carnes",
              icon_subcategoryFinal: "050.jpg",
              id_subcategoryFinal: "212",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Especialidad del Mar",
              icon_subcategoryFinal: "051.jpg",
              id_subcategoryFinal: "213",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Especialidad en Pizzas",
              icon_subcategoryFinal: "052.jpg",
              id_subcategoryFinal: "214",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Especialidad en Sanwiches & Hamburguesas",
              icon_subcategoryFinal: "053.jpg",
              id_subcategoryFinal: "215",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Vegetariana",
              icon_subcategoryFinal: "054.jpg",
              id_subcategoryFinal: "216",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Picadas",
              icon_subcategoryFinal: "055.jpg",
              id_subcategoryFinal: "217",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Restaurantes Étnicos",
          icon_subcategory: "06.jpg",
          id_subcategory: "22",
          categories: [
            {
              subcategoryFinal: "Comida Chilena",
              icon_subcategoryFinal: "056.jpg",
              id_subcategoryFinal: "221",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Italiana",
              icon_subcategoryFinal: "057.jpg",
              id_subcategoryFinal: "222",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Alemana",
              icon_subcategoryFinal: "058.jpg",
              id_subcategoryFinal: "223",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Francesa",
              icon_subcategoryFinal: "059.jpg",
              id_subcategoryFinal: "224",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Peruana",
              icon_subcategoryFinal: "060.jpg",
              id_subcategoryFinal: "225",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Japonesa",
              icon_subcategoryFinal: "061.jpg",
              id_subcategoryFinal: "226",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Nikei",
              icon_subcategoryFinal: "062.jpg",
              id_subcategoryFinal: "227",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida China",
              icon_subcategoryFinal: "063.jpg",
              id_subcategoryFinal: "228",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Tailandesa",
              icon_subcategoryFinal: "064.jpg",
              id_subcategoryFinal: "229",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Árabe",
              icon_subcategoryFinal: "065.jpg",
              id_subcategoryFinal: "2200010",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Comida Mexicana",
              icon_subcategoryFinal: "066.jpg",
              id_subcategoryFinal: "2200011",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Otras Comidas Típicas",
              icon_subcategoryFinal: "067.jpg",
              id_subcategoryFinal: "2200012",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Comida Rapida",
          icon_subcategory: "07.jpg",
          id_subcategory: "23",
          categories: [
            {
              subcategoryFinal: "Cadenas de Comida Rápida",
              icon_subcategoryFinal: "068.jpg",
              id_subcategoryFinal: "231",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Sandwishes, Completos y F. de Soda",
              icon_subcategoryFinal: "069.jpg",
              id_subcategoryFinal: "232",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Empanadas",
              icon_subcategoryFinal: "070.jpg",
              id_subcategoryFinal: "233",
              categoriesFinal: [
                {
                  id: "1111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Bajones",
              icon_subcategoryFinal: "071.jpg",
              id_subcategoryFinal: "234",
              categoriesFinal: [
                {
                  id: "1121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "1122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Gustos Dulces",
          icon_subcategory: "08.jpg",
          id_subcategory: "24",
          categories: [
            {
              subcategoryFinal: "Cafeterías",
              icon_subcategoryFinal: "072.jpg",
              id_subcategoryFinal: "241",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Heladerías",
              icon_subcategoryFinal: "073.jpg",
              id_subcategoryFinal: "242",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Pastelerías",
              icon_subcategoryFinal: "074.jpg",
              id_subcategoryFinal: "243",
              categoriesFinal: [
                {
                  id: "1",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Discos & Tragos",
      icon_category: "2.jpg",
      id_category: "3",
      subcategories: [
        {
          subcategory: "Fiestas",
          icon_subcategory: "09.jpg",
          id_subcategory: "31",
          categories: [
            {
              subcategoryFinal: "Discotecas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "311",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Club Nocturnos",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "312",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Fiestas Especieales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "313",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Bebidas y Música",
          icon_subcategory: "010.jpg",
          id_subcategory: "32",
          categories: [
            {
              subcategoryFinal: "Pubs & Bares",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "321",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Restobar",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "322",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Karaoke",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "323",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Arte & Espectáculo",
      icon_category: "4.jpg",
      id_category: "4",
      subcategories: [
        {
          subcategory: "Funciones",
          icon_subcategory: "011.jpg",
          id_subcategory: "41",
          categories: [
            {
              subcategoryFinal: "Cine",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "411",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Teatro y Musicales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "412",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Danza",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "413",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Circos",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "414",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Humor",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "415",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Magia",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "416",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Shows Infantiles",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "417",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Shows Especiales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "418",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Música",
          icon_subcategory: "012.jpg",
          id_subcategory: "42",
          categories: [
            {
              subcategoryFinal: "Conciertos",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "421",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Orquestas y Óperas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "422",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Festivales Musicales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "423",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Centros y Eventos Culturales",
          icon_subcategory: "013.jpg",
          id_subcategory: "43",
          categories: [
            {
              subcategoryFinal: "Museos",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "431",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Ferias y Exposiciones",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "432",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Conferencias y Charlas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "433",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Eventos Deportivos",
          icon_subcategory: "014.jpg",
          id_subcategory: "44",
          categories: [
            {
              subcategoryFinal: "Fútbol",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "441",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Deportes de Raqueta",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "442",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Artes Marciales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "443",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Básquetbol",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "444",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Rugby",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "445",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Hockey",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "446",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Carreras",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "447",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Juegos de Mesa",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "448",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Atletismo",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "449",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Otros Eventos Deportivos",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "4400010",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Salud y Relajación",
      icon_category: "5.jpg",
      id_category: "5",
      subcategories: [
        {
          subcategory: "Descanso y Bienestar",
          icon_subcategory: "015.jpg",
          id_subcategory: "51",
          categories: [
            {
              subcategoryFinal: "Termas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "511",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Spa, Masajes y Terapias",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "512",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Baños y Saunas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "513",
              categoriesFinal: [
                {
                  id: "2111",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2112",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Piscinas Temperadas",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "514",
              categoriesFinal: [
                {
                  id: "2121",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2122",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
        {
          subcategory: "Cuerpo y Mente",
          icon_subcategory: "016.jpg",
          id_subcategory: "52",
          categories: [
            {
              subcategoryFinal: "Retiros Naturales y Yoga",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "521",
              categoriesFinal: [
                {
                  id: "2211",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2212",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
            {
              subcategoryFinal: "Eventos Especiales",
              icon_subcategoryFinal: "1.jpg",
              id_subcategoryFinal: "522",
              categoriesFinal: [
                {
                  id: "2231",
                  name: "Prueba Imagen 1",
                  image: "1.jpg",
                  desc: "Prueba de descripción 1",
                },
                {
                  id: "2232",
                  name: "Prueba Imagen 2",
                  image: "2.jpg",
                  desc: "Prueba de descripción 2",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
