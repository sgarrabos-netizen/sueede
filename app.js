/* =========================================================
   SUEEDE · HOME

   Este archivo:
   1. toma los productos de productos.js
   2. los separa por categoría
   3. arma las tarjetas
   4. conecta cada tarjeta con producto.html
   5. permite buscar productos
========================================================= */


/* =========================================================
   1. BUSCAR LOS CONTENEDORES DEL HTML
========================================================= */

const contenedorTops =
  document.getElementById("productosTops");

const contenedorShorts =
  document.getElementById("productosShorts");

const contenedorConjuntos =
  document.getElementById("productosConjuntos");

const contenedorCinturones =
  document.getElementById("productosCinturones");

const contenedorLlaveros =
  document.getElementById("productosLlaveros");

const contenedorOtros =
  document.getElementById("productosOtros");

const buscador =
  document.getElementById("buscador");



/* =========================================================
   2. FUNCIÓN PARA CREAR UNA TARJETA
========================================================= */

function crearTarjeta(producto) {

  const article =
    document.createElement("article");

  article.className =
    "card";


  article.innerHTML = `

    <a href="./producto.html?id=${producto.id}">

      <div class="card-imagen">

        <img
          src="${producto.fotos[0]}"
          alt="${producto.nombre}"
        >

      </div>


      <h3>
        ${producto.nombre}
      </h3>


      <p class="precio">
        ${formatearPrecio(producto.precio)}
      </p>

    </a>

  `;


  return article;

}



/* =========================================================
   3. FUNCIÓN PARA LIMPIAR LOS CONTENEDORES
========================================================= */

function limpiarContenedores() {

  contenedorTops.innerHTML = "";

  contenedorShorts.innerHTML = "";

  contenedorConjuntos.innerHTML = "";

  contenedorCinturones.innerHTML = "";

  contenedorLlaveros.innerHTML = "";

  contenedorOtros.innerHTML = "";

}



/* =========================================================
   4. FUNCIÓN PARA MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(listaProductos) {

  limpiarContenedores();


  listaProductos.forEach(

    function (producto) {


      const tarjeta =
        crearTarjeta(producto);



      if (
        producto.categoria === "Tops"
      ) {

        contenedorTops.appendChild(
          tarjeta
        );

      }



      else if (
        producto.categoria === "Shorts & Minis"
      ) {

        contenedorShorts.appendChild(
          tarjeta
        );

      }



      else if (
        producto.categoria === "Conjuntos"
      ) {

        contenedorConjuntos.appendChild(
          tarjeta
        );

      }



      else if (
        producto.categoria === "Accesorios" &&
        producto.subcategoria === "Cinturones"
      ) {

        contenedorCinturones.appendChild(
          tarjeta
        );

      }



      else if (
        producto.categoria === "Accesorios" &&
        producto.subcategoria === "Llaveros"
      ) {

        contenedorLlaveros.appendChild(
          tarjeta
        );

      }



      else if (
        producto.categoria === "Accesorios" &&
        producto.subcategoria === "Otros accesorios"
      ) {

        contenedorOtros.appendChild(
          tarjeta
        );

      }

    }

  );


  actualizarSecciones();

}



/* =========================================================
   5. MOSTRAR / OCULTAR SECCIONES VACÍAS

   Si buscás "Top Siena", no queremos que queden
   visibles títulos vacíos como "Cinturones".
========================================================= */

function actualizarSecciones() {

  const seccionTops =
    document.getElementById("tops");

  const seccionShorts =
    document.getElementById("shorts");

  const seccionConjuntos =
    document.getElementById("conjuntos");

  const seccionAccesorios =
    document.getElementById("accesorios");


  seccionTops.style.display =
    contenedorTops.children.length > 0
      ? "block"
      : "none";


  seccionShorts.style.display =
    contenedorShorts.children.length > 0
      ? "block"
      : "none";


  seccionConjuntos.style.display =
    contenedorConjuntos.children.length > 0
      ? "block"
      : "none";


  const hayAccesorios =

    contenedorCinturones.children.length > 0 ||

    contenedorLlaveros.children.length > 0 ||

    contenedorOtros.children.length > 0;


  seccionAccesorios.style.display =
    hayAccesorios
      ? "block"
      : "none";

}



/* =========================================================
   6. MOSTRAR TODOS LOS PRODUCTOS AL CARGAR LA PÁGINA
========================================================= */

mostrarProductos(PRODUCTOS);



/* =========================================================
   7. BUSCADOR
========================================================= */

buscador.addEventListener(

  "input",

  function () {


    const textoBuscado =
      buscador.value
        .toLowerCase()
        .trim();



    /* Si el buscador está vacío,
       mostramos todo otra vez */

    if (textoBuscado === "") {

      mostrarProductos(PRODUCTOS);

      return;

    }



    const resultados =
      PRODUCTOS.filter(

        function (producto) {


          const nombre =
            producto.nombre
              .toLowerCase();


          const categoria =
            producto.categoria
              .toLowerCase();


          const subcategoria =
            producto.subcategoria
              ? producto.subcategoria.toLowerCase()
              : "";


          const colores =
            producto.colores
              .join(" ")
              .toLowerCase();


          return (

            nombre.includes(textoBuscado) ||

            categoria.includes(textoBuscado) ||

            subcategoria.includes(textoBuscado) ||

            colores.includes(textoBuscado)

          );

        }

      );


    mostrarProductos(
      resultados
    );

  }

);