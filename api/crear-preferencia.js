export default async function handler(req, res) {

  /* Permitimos que tu página de GitHub se comunique con Vercel */

  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://sgarrabos-netizen.github.io"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );


  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }


  if (req.method !== "POST") {

    return res.status(405).json({
      error: "Método no permitido"
    });

  }


  try {

    const {
      carrito,
      costoEnvio
    } = req.body;


    if (
      !Array.isArray(carrito) ||
      carrito.length === 0
    ) {

      return res.status(400).json({
        error: "El carrito está vacío"
      });

    }


    /* PRECIOS REALES DE SUEEDE */

    const PRECIOS = {

      "top-flecos-marron": 28000,
      "top-flecos-crudo": 28000,
      "top-siena": 25000,
      "top-mocha": 25000,

      "short-safari": 42000,
      "short-flecos-chocolate": 40000,
      "mini-short-chocolate": 30000,
      "pollera-dakota": 50000,
      "mini-noir": 35000,
      "mini-siena": 35000,
      "mini-arizona": 40000,

      "conjunto-siena": 60000,

      "cinto-mia": 7000,
      "cinto-terra": 22000,
      "cinto-senda": 25000,
      "cinto-oasis": 25000,

      "llavero-tachas-estrella": 8000,
      "llavero-rodeo": 8000,

      "collar-daisy": 7000,
      "panuelo-kala": 12000

    };


    const items = carrito.map(

      function (item) {

        const precio =
          PRECIOS[item.id];


        if (!precio) {

          throw new Error(
            "Producto inválido: " +
            item.id
          );

        }


        return {

          id: item.id,

          title:
            item.nombre +
            " - " +
            item.color,

          quantity: 1,

          currency_id: "ARS",

          unit_price: precio

        };

      }

    );


    /* ENVÍO */

    const envio =
      Number(costoEnvio) === 5000
        ? 5000
        : 0;


    if (envio > 0) {

      items.push({

        id: "envio-caba-gba",

        title:
          "Envío CABA / GBA",

        quantity: 1,

        currency_id: "ARS",

        unit_price: envio

      });

    }


    /* CREAR PREFERENCIA EN MERCADO PAGO */

    const respuesta =
      await fetch(

        "https://api.mercadopago.com/checkout/preferences",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            "Authorization":
              "Bearer " +
              process.env.MERCADOPAGO_ACCESS_TOKEN

          },

          body: JSON.stringify({
            items: items
          })

        }

      );


    const data =
      await respuesta.json();


    if (!respuesta.ok) {

      console.error(data);

      return res.status(500).json({
        error:
          "No se pudo crear el pago"
      });

    }


    return res.status(200).json({

      init_point:
        data.init_point,

      sandbox_init_point:
        data.sandbox_init_point

    });


  }

  catch (error) {

    console.error(error);

    return res.status(500).json({
      error:
        "Error al crear la preferencia"
    });

  }

}