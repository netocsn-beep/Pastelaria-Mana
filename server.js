const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* 🍔 PRODUTOS DA PASTELARIA MANÁ */
const products = [
  { id: 1, name: "Pastel de Carne", price: 8 },
  { id: 2, name: "Pastel de Frango", price: 8 },
  { id: 3, name: "Coxinha", price: 6 }
];

let orders = [];

/* 📦 LISTAR PRODUTOS */
app.get("/products", (req, res) => {
  res.json(products);
});

/* 🛒 CRIAR PEDIDO */
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

/* 📋 VER PEDIDOS (ADMIN) */
app.get("/orders", (req, res) => {
  res.json(orders);
});

/* 🔄 ATUALIZAR STATUS */
app.put("/order/:id", (req, res) => {
  orders = orders.map(o =>
    o.id == req.params.id ? { ...o, status: req.body.status } : o
  );

  res.json({ ok: true });
});

/* 🚀 START */
app.listen(process.env.PORT || 3000, () => {
  console.log("Pastelaria Maná rodando");
});
