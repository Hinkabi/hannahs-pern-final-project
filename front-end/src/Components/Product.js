import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div>
    <div className="product">
        <img src={product.image} alt={product.name} />
      <Link to={`/products/${product.id}`}>
        <h4>{product.name}</h4>
      </Link>
    </div>
    </div>
  );
}

export default Product;
