/* =========================================================
   SUEEDE · PÁGINA DE PRODUCTO

   Este archivo:
   1. lee qué producto queremos mostrar
   2. lo busca en productos.js
   3. completa producto.html automáticamente
========================================================= */


/* =========================================================
   1. LEER EL ID DE LA URL

   Ejemplo:

   producto.html?id=top-siena

   devuelve:
   top-siena
========================================================= */

const parametros = new URLSearchParams(window.location.search);

const idProducto = parametros.get("id");



/* =========================================================
   2. BUSCAR EL PRODUCTO
========================================================= */

const producto = PRODUCTOS.find(

  function (item) {

    return item.id === idProducto;

  }

);



/* =========================================================
   3. SI NO EXISTE EL PRODUCTO
========================================================= */

if (!producto) {

  document.querySelector("main").innerHTML = `

    <section
      style="
        padding: 80px 20px;
        text-align: center;
      "
    >

      <h1>
        Producto no encontrado
      </h1>

      <p
        style="
          margin-top: 10px;
        "
      >
        El producto que buscás no existe.
      </p>

      <a
        href="./index.html"
        class="boton-whatsapp"
      >
        Volver a la tienda
      </a>

    </section>

  `;

}



/* =========================================================
   4. SI EL PRODUCTO EXISTE
========================================================= */

else {


  /* -------------------------
     TÍTULO DE LA PESTAÑA
  ------------------------- */

  document.title =
    producto.nombre + " · Sueede";



  /* -------------------------
     CATEGORÍA
  ------------------------- */

  const categoria = document.getElementById(
    "categoriaProducto"
  );


  if (producto.subcategoria) {

    categoria.textContent =
      producto.categoria +
      " · " +
      producto.subcategoria;

  }

  else {

    categoria.textContent =
      producto.categoria;

  }



  /* -------------------------
     NOMBRE
  ------------------------- */

  document.getElementById(
    "nombreProducto"
  ).textContent =
    producto.nombre;



  /* -------------------------
     PRECIO
  ------------------------- */

  document.getElementById(
    "precioProducto"
  ).textContent =
    formatearPrecio(producto.precio);



  /* -------------------------
     DESCRIPCIÓN
  ------------------------- */

  document.getElementById(
    "descripcionProducto"
  ).textContent =
    producto.descripcion;



  /* -------------------------
     COLORES
  ------------------------- */

  const contenedorColores =
  document.getElementById("coloresProducto");


let colorSeleccionado =
  producto.colores[0];


producto.colores.forEach(

  function (color, indice) {


    const boton =
      document.createElement("button");


    boton.type =
      "button";


    boton.className =
      "color-opcion";


    boton.textContent =
      color;


    if (indice === 0) {

      boton.classList.add(
        "seleccionado"
      );

    }


    boton.addEventListener(

      "click",

      function () {


        colorSeleccionado =
          color;


        document
          .querySelectorAll(".color-opcion")
          .forEach(

            function (otroBoton) {

              otroBoton.classList.remove(
                "seleccionado"
              );

            }

          );


        boton.classList.add(
          "seleccionado"
        );


        actualizarWhatsApp();

      }

    );


    contenedorColores.appendChild(
      boton
    );


  }

);


  /* =====================================================
     5. FOTOS
  ===================================================== */

  const galeria =
    document.getElementById(
      "galeriaProducto"
    );


  producto.fotos.forEach(

    function (foto, indice) {


      const imagen =
        document.createElement("img");


      imagen.src =
        foto;


      imagen.alt =
        producto.nombre +
        " - foto " +
        (indice + 1);


      galeria.appendChild(
        imagen
      );


    }

  );



  /* =====================================================
     6. WHATSAPP
  ===================================================== */

  /*
  Cuando tengas tu número real,
  cambiamos este valor.

  Formato:
  código país + característica + número

  Sin:
  +
  espacios
  guiones

  Ejemplo Argentina:
  54911XXXXXXXX
  */


  const numeroWhatsApp =
  "5491123039448";


function actualizarWhatsApp() {


  const mensajeWhatsApp =

    "Hola! Quiero comprar " +
    producto.nombre +
    " en color " +
    colorSeleccionado +
    ".";
const enlaceWhatsApp =

    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(
      mensajeWhatsApp
    );


  document.getElementById(
    "botonWhatsApp"
  ).href =
    enlaceWhatsApp;

}


actualizarWhatsApp();


  const mensajeWhatsApp =

    "Hola! Quiero consultar por " +
    producto.nombre +
    ".";


  const enlaceWhatsApp =

    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(
      mensajeWhatsApp
    );


  document.getElementById(
    "botonWhatsApp"
  ).href =
    enlaceWhatsApp;



  /* =====================================================
     7. PRODUCTOS RELACIONADOS
  ===================================================== */

  const relacionados =
    PRODUCTOS.filter(

      function (item) {

        return (
          item.categoria === producto.categoria &&
          item.id !== producto.id
        );

      }

    ).slice(0, 4);



  const contenedorRelacionados =

    document.getElementById(
      "productosRelacionados"
    );



  relacionados.forEach(

    function (item) {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "card";


      article.innerHTML = `

        <a
          href="./producto.html?id=${item.id}"
        >

          <div class="card-imagen">

            <img
              src="${item.fotos[0]}"
              alt="${item.nombre}"
            >

          </div>

          <h3>
            ${item.nombre}
          </h3>

          <p class="precio">
            ${formatearPrecio(item.precio)}
          </p>

        </a>

      `;


      contenedorRelacionados.appendChild(
        article
      );


    }

  );


}