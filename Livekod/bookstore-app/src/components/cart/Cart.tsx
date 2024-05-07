import './cart.css';

type Props = {
  cartItems: number;
}

function Cart({ cartItems } : Props) {
  return (
    <div className="cart">
      <p className="cart-text">Cart: </p>
      <p className="cart-indicator">{ cartItems }</p>
    </div>
  )
}

export default Cart;
