// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const db = require("./db/dbConfig.js");

app.get("/products", async (req, res) => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    res.json(allProducts);
  } catch (err) {
    res.json(err);
  }
});


// EXPORT
module.exports = app;
