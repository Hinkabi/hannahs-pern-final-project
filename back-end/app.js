// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const productsController = require("./controllers/productController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my Makeup Store!");
});

// const db = require("./db/dbConfig.js");

// app.get("/products", async (req, res) => {
//   try {
//     const allProducts = await db.any("SELECT * FROM products");
//     res.json(allProducts);
//   } catch (err) {
//     res.json(err);
//   }
// });

app.use("/products", productsController)

app.get("*", (req,res)=>{
  res.status(404).send("Page Not Found")
})



// EXPORT
module.exports = app;
