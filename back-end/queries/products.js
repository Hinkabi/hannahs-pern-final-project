const db = require("../db/dbConfig.js")

getAllProducts = async () =>{
    try{
        const allProducts = await db.any("SELECT * FROM products");
        return allSnacks;

    }catch(err){
        return err
    }
}