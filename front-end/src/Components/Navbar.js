import { Link } from "react-router-dom";
import heart from "../assets/heart.png"

export default function NavBar(){

    return(
        <nav>
            <div>
                <Link to="/">
                <img src={heart} />
                </Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/products/new">New Product</Link>
            </div>
        </nav>
    )
};

