import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;



function ProductEditForm(){
    let { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name:"",
        image:"",
        description:"",
        color:"",
        price:0,
        rating:0,
        featured: false
    });

    

    const handleTextChange = (event)=> {
        setProduct({...product,[event.target.id]: event.target.value})
    }

    const handleCheckboxChange = () => {
        setProduct({ ...product, featured: !product.featured });
      };

    useEffect(()=>{
        axios.get(API + "/products/" + id)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            navigate("/not-found")
        });
    },[id]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(API + "/products/" + id, product)
        .then((res)=>{
            navigate(`/products`);
        }).catch((err)=>{
          console.log(err)
        })
    }

    return(
        <div>
             <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input required
            id="name"
            value={product.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of product"
            />
            <label htmlFor="image">Image:</label>
            <input 
            id="image"
            type="text"
            name="image"
            value={product.image}
            placeholder="Image"
            onChange={handleTextChange}
            />
            <label htmlFor="description">Description:</label>
            <input
            id="description"
            type="text"
            value={product.description}
            placeholder="description"
            onChange={handleTextChange}
            />
            <label htmlFor="color">Color:</label>
            <input
            id="color"
            type="text"
            onChange={handleTextChange}
            value={product.color}
            placeholder="color"
            />
            <label htmlFor="price">Price:</label>
            <input
            id="price"
            value={product.price}
            type="number"
            onChange={handleTextChange}
            placeholder="Price"
            />
            <label htmlFor="rating">rating:</label>
            <input
            id="rating"
            value={product.rating}
            type="number"
            onChange={handleTextChange}
            placeholder="rating"
            />
             <label htmlFor="featured">Featured:</label>
            <input
            id="featured"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={product.featured}
        />
            <br />
            <input type="submit" />
      </form>

        </div>
    )
}

export default ProductEditForm;