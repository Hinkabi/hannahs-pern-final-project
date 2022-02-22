import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/products/" + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(API + "/products/" + id)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="details-container">
    <div className="product-details">
      <div className="img-container">
        <img src={product.image} />
      </div>
      <div className="info-container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>${product.price}</span>
    </div>
    </div>
      <div className="showNavigation">
      <div>
        <Link to={`/products`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/products/${product.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    </div>

  );
}

export default ProductDetails;
