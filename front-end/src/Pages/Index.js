import Products from "../Components/Products"
function Index({ handleAddToCart }){

    return(
        <div>
            <h2>All Products</h2>
            <Products handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Index;