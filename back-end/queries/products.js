const db = require("../db/dbConfig.js");

getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (err) {
    return err;
  }
};

getOneProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (err) {
    return err;
  }
};

deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", id);
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

createProduct = async (product) => {
    try{
        const newProduct = await db.one("INSERT INTO products(name, image, description, color, rating, featured) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [product.name, product.image, product.description, product.color, product.rating, product.featured]);
        return newProduct;
    } catch (err) {
        return err;
    }
};

updateProduct = async (id, product) => {
    try{
        const updatedProduct = await db.one("UPDATE products SET name=$1, image=$2, description=$3, color=$4, rating=$5, featured=$6 WHERE id=$7 RETURNING *",
        [product.name, product.image, product.description, product.color, product.rating, product.featured],id);
        return updatedProduct;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllProducts, getOneProduct, deleteProduct, createProduct, updateProduct };
