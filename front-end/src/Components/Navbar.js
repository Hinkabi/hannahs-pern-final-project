import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <nav>
            <h2>
                <Link to="/products">Products</Link>
            </h2>
            <button>
                <Link to="/products/new">New Product</Link>
            </button>
        </nav>
    )
};

