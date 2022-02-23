function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="cart-items">
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
