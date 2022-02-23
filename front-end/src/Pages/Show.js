import ProductDetails from "../Components/ProductDetails.js"

function Show({handleAddToCart}){

    return(
        <div>
            <ProductDetails handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Show;