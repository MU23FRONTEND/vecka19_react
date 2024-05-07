import Cart from '../cart/Cart';
import './header.css';

type Props = {
  cartSize: number; // Använd samma namn som i App-komponenten
}

function Header({ cartSize }: Props) {
  return (
    <header className="page-header">
      <div className="header content-wrapper">
        <i className="page-logo fa-solid fa-book-open"></i>
        <Cart cartItems={cartSize} /> {/* Använd cartSize här */}
      </div>
    </header>
  )
}

export default Header;
