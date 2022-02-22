import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <nav>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/products/new">New Product</Link>
            </div>
        </nav>
    )
};

