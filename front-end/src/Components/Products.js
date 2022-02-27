import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../Components/Product.js";
const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then(
        (res) => {
          setProducts(res.data);
          console.log(res.data)
        },
        (error) => console.log("get", error)
      )}, []);
      
  return (
    <div className="products-container">
      <div className="products">
        {products.map((product)=>{
          return <Product key={product.id} product={product} />
        })}
      </div>
    </div>
  )
  
}

export default Products;