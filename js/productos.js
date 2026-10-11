/* =========================================================
   SUEEDE · PRODUCTOS

   Acá están todos los datos de los productos:
   - nombre
   - categoría
   - precio
   - descripción
   - colores
   - fotos

   Si más adelante querés cambiar un precio, nombre o texto,
   lo hacés directamente acá.
========================================================= */


const PRODUCTOS = [

  /* =====================================================
     TOPS
  ===================================================== */

  {
    id: "top-flecos-marron",
    nombre: "Top Flecos Marrón Asimétrico",
    categoria: "Tops",

    precio: 28000,

    descripcion:
      "Top asimétrico en tono marrón con flecos, ideal para darle movimiento y personalidad a cualquier look.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/top-flecos-marron-1.jpg",
      "img/top-flecos-marron-2.jpg",
    
    ]
  },


  {
    id: "top-flecos-crudo",
    nombre: "Top Flecos Crudo",
    categoria: "Tops",

    precio: 28000,

    descripcion:
      "Top en tono crudo con detalle de flecos, liviano y versátil para combinar con tonos neutros y tierra.",

    colores: [
      "Crudo"
    ],

    fotos: [
      "img/top-flecos-crudo-1.jpg",
    ]
  },


  {
    id: "top-siena",
    nombre: "Top Siena",
    categoria: "Tops",

    precio: 25000,

    descripcion:
      "Top femenino de líneas entalladas y escote delicado. Disponible en marrón y nude.",

    colores: [
  "Marrón",
  "Beige"
],

    fotos: [
      "img/top-siena-1.jpg",
      "img/top-siena-2.jpg",
      "img/top-siena-5.jpg",
    ]
  },


  {
    id: "top-mocha",
    nombre: "Top Mocha",
    categoria: "Tops",

    precio: 25000,

    descripcion:
      "Top asimétrico de un hombro con caída suave y manga amplia. Disponible en marrón y negro.",

    colores: [
  "Marrón",
  "Negro"
],
    fotos: [
      "img/top-mocha-2.jpg",
      "img/top-mocha-1.jpg"
    ]
  },



  /* =====================================================
     SHORTS & MINIS
  ===================================================== */

  {
    id: "short-safari",
    nombre: "Short Safari",
    categoria: "Shorts & Minis",

    precio: 42000,

    descripcion:
      "Short en tonos tierra con una estética relajada y canchera, perfecto para looks de verano.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/short-safari-1.jpg",
      "img/short-safari-2.jpg",
      "img/short-safari-3.jpg",
      "img/short-safari-1.jpg",
    ]
  },


  {
    id: "short-flecos-chocolate",
    nombre: "Short Flecos Chocolate",
    categoria: "Shorts & Minis",

    precio: 40000,

    descripcion:
      "Short en gamuza color chocolate con flecos, una pieza protagonista con mucha textura y movimiento.",

    colores: [
      "Chocolate"
    ],

    fotos: [
      "img/short-flecos-chocolate-1.jpg",
      "img/short-flecos-chocolate-2.jpg"
    ]
  },


  {
    id: "mini-short-chocolate",
    nombre: "Mini Short Chocolate",
    categoria: "Shorts & Minis",

    precio: 30000,

    descripcion:
      "Mini short chocolate de diseño simple y tiro bajo, un básico fácil de combinar.",

    colores: [
      "Chocolate"
    ],

    fotos: [
      "img/mini-short-chocolate-1.jpg",
      "img/mini-short-chocolate-2.jpg"
    ]
  },


  {
    id: "pollera-dakota",
    nombre: "Pollera Dakota",
    categoria: "Shorts & Minis",

    precio: 50000,

    descripcion:
      "Mini en tono marrón con textura tipo gamuza y calce al cuerpo.",

    colores: [
      "Marrón"
    ],

    fotos: [
    "img/pollera-dakota-1.jpg",
      "img/pollera-dakota-3.jpg",
      "img/pollera-dakota-2.jpg",
            ]
  },


  {
    id: "mini-noir",
    nombre: "Mini Noir",
    categoria: "Shorts & Minis",

    precio: 35000,

    descripcion:
      "Mini negra de líneas simples y silueta ajustada, un básico para usar de día o de noche.",

    colores: [
      "Negro"
    ],

    fotos: [
      "img/mini-noir-1.jpg",
      "img/mini-noir-2.jpg"
    ]
  },


  {
    id: "mini-siena",
    nombre: "Mini Siena",
    categoria: "Shorts & Minis",

    precio: 35000,

    descripcion:
      "Mini marrón de tiro bajo y calce al cuerpo, pensada para combinar especialmente con el Top Siena.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/mini-siena-1.jpg",
       "img/mini-siena-3.jpg",
    ]
  },


  {
    id: "mini-arizona",
    nombre: "Mini Arizona",
    categoria: "Shorts & Minis",

    precio: 40000,

    descripcion:
      "Mini de estética western con combinación de tonos oscuros, recortes contrastantes y detalles de tachas.",

    colores: [
      "Negro"
    ],

    fotos: [
      "img/mini-arizona-1.jpg",
      "img/mini-arizona-2.jpg"
    ]
  },



  /* =====================================================
     CONJUNTOS
  ===================================================== */

  {
    id: "conjunto-siena",
    nombre: "Conjunto Siena",
    categoria: "Conjuntos",

    precio: 60000,

    descripcion:
      "Top y mini en tonos tierra que forman un total look femenino, simple y súper combinable.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/conjunto-siena-1.jpg",
    ]
  },



  /* =====================================================
     ACCESORIOS · CINTURONES
  ===================================================== */

  {
    id: "cinto-mia",
    nombre: "Cinto Mía",
    categoria: "Accesorios",
    subcategoria: "Cinturones",

    precio: 100,

    descripcion:
      "Cinturón fino de estilo minimalista, ideal para sumar un detalle sutil al look.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/cinto-mia-1.jpg",
      "img/cinto-mia-2.jpg"
    ]
  },


  {
    id: "cinto-terra",
    nombre: "Cinto Terra",
    categoria: "Accesorios",
    subcategoria: "Cinturones",

    precio: 22000,

    descripcion:
      "Cinturón en tono tierra con hebilla protagonista y estética vintage.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/cinto-terra-1.jpg",
    ]
  },


  {
    id: "cinto-senda",
    nombre: "Cinto Senda",
    categoria: "Accesorios",
    subcategoria: "Cinturones",

    precio: 25000,

    descripcion:
      "Cinturón ancho con detalles metálicos, pensado para transformar hasta el look más simple.",

    colores: [
      "Chocolate"
    ],

    fotos: [
      "img/cinto-senda-1.jpg",
    ]
  },


  {
    id: "cinto-oasis",
    nombre: "Cinto Oasis",
    categoria: "Accesorios",
    subcategoria: "Cinturones",

    precio: 25000,

    descripcion:
      "Cinturón de inspiración boho con textura y detalles que aportan personalidad.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/cinto-oasis-1.jpg",
    ]
  },



  /* =====================================================
     ACCESORIOS · LLAVEROS
  ===================================================== */

  {
    id: "llavero-tachas-estrella",
    nombre: "Llavero Tachas & Estrella",
    categoria: "Accesorios",
    subcategoria: "Llaveros",

    precio: 8000,

    descripcion:
      "Llavero con estrella y detalles de tachas, disponible en marrón y negro.",

    colores: [
      "Negro",
      "Marrón"
    ],

    fotos: [
      "img/llavero-tachas-estrella-1.jpg",
      "img/llavero-tachas-estrella-2.jpg",
      "img/llavero-tachas-estrella-3.jpg",
    ]
  },


  {
    id: "llavero-rodeo",
    nombre: "Llavero Rodeo",
    categoria: "Accesorios",
    subcategoria: "Llaveros",

    precio: 8000,

    descripcion:
      "Llavero con corazón, flecos y detalles metálicos de inspiración western.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/llavero-rodeo-1.jpg",
    ]
  },



  /* =====================================================
     ACCESORIOS · OTROS
  ===================================================== */

  {
    id: "collar-daisy",
    nombre: "Collar Daisy",
    categoria: "Accesorios",
    subcategoria: "Otros accesorios",

    precio: 7000,

    descripcion:
      "Collar de cordón con dije de flor, un detalle simple con aire boho y vintage.",

    colores: [
      "Marrón"
    ],

    fotos: [
      "img/collar-daisy-1.jpg",
    ]
  },


  {
    id: "panuelo-kala",
    nombre: "Pañuelo Kala",
    categoria: "Accesorios",
    subcategoria: "Otros accesorios",

    precio: 12000,

    descripcion:
      "Pañuelo liviano y versátil para usar al cuello, en la cintura o como accesorio. Disponible en crudo y negro.",

    colores: [
  "Crudo",
  "Negro"
],
    fotos: [
      "img/panuelo-kala-1.jpg",
      "img/panuelo-kala-2.jpg",
    ]
  }

];



/* =========================================================
   FUNCIÓN PARA MOSTRAR LOS PRECIOS

   Convierte:
   28000

   en:
   $28.000
========================================================= */

function formatearPrecio(numero) {

  return "$" + numero.toLocaleString("es-AR");

}
