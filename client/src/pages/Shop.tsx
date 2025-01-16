import { useCart } from "../context/cartContext";

interface Surfboard {
  id: number;
  name: string;
  image: string;
  price: number;
}
const surfboards: Surfboard[] = [
  {
    id: 1,
    name: "Shortboard Pro",
    image: "shortboard.jpg",
    price: 599.99,
  },
  {
    id: 2,
    name: "Longboard Classic",
    image: "longboard.jpeg",
    price: 799.99,
  },
  {
    id: 3,
    name: "Mini malibu",
    image: "minimalibu.webp",
    price: 499.99,
  },
  {
    id: 4,
    name: "Fishboard Agile",
    image: "fish.jpg",
    price: 549.99,
  },
];

function Shop() {
  // Etape 5 : Je viens récupérer la valeur fournie par mon contexte
  const { cart, setCart } = useCart();

  const addToCart = (surfboard: Surfboard): void => {
    setCart([...cart, surfboard]);
  };

  console.info("cart dans ma page shop ", cart);
  return (
    <div>
      <header className="header">
        <p className="subtitle">
          Découvrez les meilleures planches de surf pour dompter les vagues !
        </p>
      </header>
      <section className="surfboards-container">
        {surfboards.map((surfboard) => (
          <div key={surfboard.id} className="card">
            <img src={surfboard.image} alt={surfboard.name} className="image" />
            <h2 className="name">{surfboard.name}</h2>
            <p className="price">{surfboard.price} €</p>
            <button
              type="button"
              className="button"
              onClick={() => addToCart(surfboard)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Shop;
