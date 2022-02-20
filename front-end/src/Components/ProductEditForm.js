import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;



function ProductEditForm(){
    const [products, setProducts] = useState({
        name:"",
        image:"",
        description:"",
        color:"",
        price:"",
        featured: false

    })

    return(
        <div>

        </div>
    )
}

export default ProductEditForm;