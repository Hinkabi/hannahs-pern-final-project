import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then(
        (response) => {
          setProducts(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <ul>
        {products.map((products) => (
          <li key={products.name}>{products.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
