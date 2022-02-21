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

products.put("/:id", async(req,res)=>{
  const { id } = req.params;
  const { body } = req;
  const updatedProduct = await updateProduct(id, body);
  if(updatedProduct.id){
    console.log(updatedProduct)
      res.status(200).json(updatedProduct);
  } else {
      res.status(404).json({error: "Product not Found"});
  }
});

products.post("/", async (req,res) =>{
    const { body } = req;
    try{
        if(!body.name){
            res.status(422).json({error: "Please include product name"});
            return
        }
        if(!body.image){
            body.image = "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
        }

        const newProduct = await createProduct(body);
        if(newProduct.id){
            res.status(200).json(newProduct);
        } else {
            res.status(500).json({error: "Product creation error"})
        }
    } catch (err){
        return err;
    }
});

products.delete("/:id", async (req,res)=>{
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if(deletedProduct.id){
        res.status(200).json(deletedProduct);
    } else {
        res.status(404).json({error: "Product not found"});
    }
});



module.exports = products;
