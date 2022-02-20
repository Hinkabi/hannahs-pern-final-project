import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="Product">
      <h4>
        <img src={product.image} alt={product.name} />
      </h4>
      <Link to={`/products/${product.id}`}>
        <h4>{product.name}</h4>
      </Link>
    </div>
  );
}

export default Product;
