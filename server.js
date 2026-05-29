const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* 🍔 PRODUTOS */
const products = [
  { id: 1, name: "Pastel de Carne", price: 8 },
  { id: 2, name: "Pastel de Frango", price: 8 },
  { id: 3, name: "Coxinha", price: 6 }
];

let orders = [];

/* 🌐 MOSTRAR TELA NO CELULAR */
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pastelaria Maná</title>
    </head>
    <body style="font-family:Arial;text-align:center">

      <h1>🍔 Pastelaria Maná</h1>
      <div id="app"></div>

      <script>
        fetch("/products")
        .then(r=>r.json())
        .then(data=>{
          document.getElementById("app").innerHTML =
          data.map(p=>
            "<div style='margin:10px;padding:10px;border:1px solid #ccc'>" +
            "<h3>"+p.name+"</h3>" +
            "<p>R$ "+p.price+"</p>" +
            "</div>"
          ).join("");
        });
      </script>

    </body>
    </html>
  `);
});

/* 📦 PRODUTOS */
app.get("/products", (req, res) => {
  res.json(products);
});

/* 🛒 PEDIDOS */
app.post("/order", (req, res) => {
  const order = {
    id: Date.now(),
    items: req.body.items,
    total: req.body.total,
    status: "novo"
  };

  orders.push(order);
  res.json(order);
});

/* 📋 ADMIN */
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Pastelaria Maná rodando");
});
