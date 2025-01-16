import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src="/logo.webp" alt="logo" className="logo" />
      </Link>

      <div className="nav-menu">
        <Link to="/shop">SHOP</Link>
        <Link to="/cart">
          <FaShoppingCart size={24} color="white" />
        </Link>
        {cart.length > 0 ? (
          <div className="cart-count">{cart.length}</div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
