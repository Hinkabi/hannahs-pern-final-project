import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, useNavigate } from "react-router-dom";
import { FormControl , InputLabel, OutlinedInput, Checkbox , FormControlLabel} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        <div className="edit-container">
             <Box component="form" onSubmit={handleSubmit}>
        <FormControl margin="dense">      
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput required
            id="name"
            value={product.name}
            label="Name"
            type="text"
            onChange={handleTextChange}
            placeholder="Name of product"
            />
        </FormControl> 
        <FormControl margin="dense">
            <InputLabel htmlFor="image">Image:</InputLabel>
            <OutlinedInput 
            id="image"
            type="text"
            label="Image"
            value={product.image}
            onChange={handleTextChange}
            />
        </FormControl>  
        <FormControl margin="dense">
            <InputLabel htmlFor="description">Description:</InputLabel>
            <OutlinedInput
            id="description"
            type="text"
            label="Description"
            value={product.description}
            onChange={handleTextChange}
            />
        </FormControl>   
        <FormControl margin="dense">
            <InputLabel htmlFor="color">Color:</InputLabel>
            <OutlinedInput
            id="color"
            type="text"
            label="Color"
            onChange={handleTextChange}
            value={product.color}
            placeholder="color"
            />
        </FormControl> 
        <FormControl margin="dense"> 
            <InputLabel htmlFor="price">Price:</InputLabel>
            <OutlinedInput
            id="price"
            value={product.price}
            label="Price"
            type="number"
            onChange={handleTextChange}
            placeholder="Price"
            />
        </FormControl> 
        <FormControl margin="dense">
            <InputLabel htmlFor="rating">Rating:</InputLabel>
            <OutlinedInput
            id="rating"
            value={product.rating}
            label="Rating"
            type="number"
            onChange={handleTextChange}
            placeholder="rating"
            />
        </FormControl> 
        <br />
        <FormControlLabel control={<Checkbox />} label="Featured" onChange={handleCheckboxChange} />   
            <br />
            {/* <input type="submit" /> */}
            <Button variant="outlined" type="submit" sx={{color:"red"}} >Submit</Button>
      </Box>

        </div>
    )
}

export default ProductEditForm;