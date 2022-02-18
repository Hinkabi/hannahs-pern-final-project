const express = require("express");
const products = express.Router();
const {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../queries/products.js");

products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
      res.status(200).json(allProducts);
    } else {
      res.status(500).json({ error: "Server error" });
    }
  } catch (err) {
    return err;
  }
});

products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getOneProduct(id);
    if(product.id){
      res.status(200).json(product);
    } else {
      res.status(500).json({ error: "Product not found" });
    }
  } catch (err) {
    return err;
  }
});

module.exports = products;
