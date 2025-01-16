import { useCart } from "../context/cartContext";

function Cart() {
  const { cart } = useCart();
  if (!cart.length) {
    return <h1>pas d'article</h1>;
  }
  return (
    <div>
      <div className="title">Mon panier</div>
      <div className="surfboards-container">
        {cart.map((surfboard) => (
          <div key={surfboard.id} className="card">
            <img src={surfboard.image} alt={surfboard.name} className="image" />
            <h2 className="name">{surfboard.name}</h2>
            <p className="price">{surfboard.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
