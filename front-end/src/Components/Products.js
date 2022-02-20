import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../Components/Product.js";
const API = process.env.REACT_APP_API_URL;


console.log(API);
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
    <div>
      <ul>
        {products.map((product)=>{
          return <Product key={product.id} product={product} />
        })}
      </ul>
    </div>
  )
  
}

export default Products;