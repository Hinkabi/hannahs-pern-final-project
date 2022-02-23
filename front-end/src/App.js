import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Edit from "./Pages/Edit";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/Navbar";
import Cart from "./Components/Cart"

function App(){
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) =>{
    setCartItems([...cartItems, product])
    console.log(cartItems)
  }


  return(
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index handleAddToCart={handleAddToCart}/>} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show handleAddToCart={handleAddToCart}/>} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>

    </div>
  )
}

export default App;
