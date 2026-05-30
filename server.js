const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

let orders = [];

/* PEDIDOS */
app.post("/api/order", (req, res) => {
  const order = {
    id: Date.now(),
    ...req.body,
    status: "novo",
    createdAt: new Date()
  };

  orders.push(order);

  res.json(order);
});

/* ADMIN */
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

/* HOME */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Pastelaria Maná online");
});
