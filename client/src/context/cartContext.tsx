import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface MyContextProps {
  children: ReactNode;
}

interface cartType {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CartContextType {
  cart: cartType[];
  setCart: (cart: cartType[]) => void;
}

// Première étape , je crée mon contexte
const cartContext = createContext(null as CartContextType | null);

// Etape 2 : Je crée mon provider et je l'exporte
export function CartProvider({ children }: MyContextProps) {
  const [cart, setCart] = useState([] as cartType[]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}
//On crée notre hook personnalisé pour notre contexte
export const useCart = () => {
  const value = useContext(cartContext);

  if (value == null) {
    throw new Error("useContext has to be used within <CartProvider>");
  }
  return value;
};
