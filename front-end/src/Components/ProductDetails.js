import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
            <Button
              variant="outlined"
              type="submit"
              sx={{
                borderRadius: 35,
                borderColor: "#ff6bb5",
                backgroundColor: "#ff6bb5",
                color: "white",
              }}
            >
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/products/${product.id}/edit`}>
            <Button
              variant="outlined"
              type="submit"
              sx={{
                borderRadius: 35,
                borderColor: "#ff6bb5",
                backgroundColor: "#ff6bb5",
                color: "white",
              }}
            >
              Edit
            </Button>
          </Link>
        </div>
        <div>
          <Button
            onClick={handleDelete}
            variant="outlined"
            type="submit"
            sx={{
              borderRadius: 35,
              borderColor: "#ff6bb5",
              backgroundColor: "#ff6bb5",
              color: "white",
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
