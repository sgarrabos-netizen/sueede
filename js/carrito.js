let carrito =
  JSON.parse(
    localStorage.getItem("carrito")
  ) || [];


const listaCarrito =
  document.getElementById(
    "listaCarrito"
  );


const subtotalElemento =
  document.getElementById(
    "subtotal"
  );


const envioElemento =
  document.getElementById(
    "costoEnvio"
  );


const totalElemento =
  document.getElementById(
    "total"
  );


let costoEnvio = 0;



function formatearPrecio(numero) {

  return "$" +
    numero.toLocaleString("es-AR");

}



function mostrarCarrito() {

  listaCarrito.innerHTML = "";


  if (carrito.length === 0) {

    listaCarrito.innerHTML = `
      <p class="carrito-vacio">
        Tu carrito está vacío.
      </p>
    `;

    actualizarTotal();

    return;

  }


  carrito.forEach(

    function (item, indice) {


      const producto =
        document.createElement("div");


      producto.className =
        "carrito-producto";


      producto.innerHTML = `

        <img
          src="${item.foto}"
          alt="${item.nombre}"
        >


        <div class="carrito-producto-info">

          <h3>
            ${item.nombre}
          </h3>

          <p>
            Color: ${item.color}
          </p>

          <p>
            ${formatearPrecio(item.precio)}
          </p>

        </div>


        <button
          class="eliminar-producto"
          onclick="eliminarProducto(${indice})"
        >
          Eliminar
        </button>

      `;


      listaCarrito.appendChild(
        producto
      );

    }

  );


  actualizarTotal();

}



function eliminarProducto(indice) {

  carrito.splice(
    indice,
    1
  );


  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );


  mostrarCarrito();

}



function calcularSubtotal() {

  return carrito.reduce(

    function (total, item) {

      return total + item.precio;

    },

    0

  );

}



function actualizarTotal() {

  const subtotal =
    calcularSubtotal();


  const total =
    subtotal + costoEnvio;


  subtotalElemento.textContent =
    formatearPrecio(subtotal);


  envioElemento.textContent =
    formatearPrecio(costoEnvio);


  totalElemento.textContent =
    formatearPrecio(total);

}



document
  .querySelectorAll(
    'input[name="envio"]'
  )
  .forEach(

    function (opcion) {

      opcion.addEventListener(

        "change",

        function () {

          costoEnvio =
            Number(this.value);


          actualizarTotal();

        }

      );

    }

  );



/* =========================================================
   PAGAR CON MERCADO PAGO
========================================================= */

document
  .getElementById("botonPagar")
  .addEventListener(

    "click",

    async function () {


      if (carrito.length === 0) {

        alert(
          "Tu carrito está vacío."
        );

        return;

      }


      const boton =
        document.getElementById(
          "botonPagar"
        );


      boton.disabled = true;

      boton.textContent =
        "Procesando...";


      try {


        const respuesta =
          await fetch(

            "https://sueede.vercel.app/api/crear-preferencia",

            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json"

              },


              body: JSON.stringify({

                carrito:
                  carrito,

                costoEnvio:
                  costoEnvio

              })

            }

          );


        const data =
          await respuesta.json();


        if (!respuesta.ok) {

          throw new Error(
            data.error ||
            "No se pudo iniciar el pago."
          );

        }


        /*
        Como estamos usando credenciales de prueba,
        primero intentamos abrir el checkout de prueba.
        */

        window.location.href =
  data.init_point;


      }

      catch (error) {


        console.error(
          error
        );


        alert(
          "Hubo un problema al iniciar el pago."
        );


        boton.disabled = false;

        boton.textContent =
          "Pagar con Mercado Pago";

      }

    }

  );


mostrarCarrito();
