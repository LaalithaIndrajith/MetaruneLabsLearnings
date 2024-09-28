import { createContext, ReactNode, useContext, useState } from "react";

//Create a Type for the props to the ShoppingCartProvider
type shoppingCartProviderProps = {
  children: ReactNode;
};

//Create a type for passing the value to ShoppingCart context
type ShoppingCartContext = {
  getItemQty: (id: number) => number;
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
};

//Create a type for cart item
type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

//Create a custom Hook
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

//Create Provider for the ShoppingCart for providing the values and all the rendering of the Shopping Cart
export function ShoppingCartProvider({ children }: shoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

   /**
   * Function to get the quantity of a selected item in the shopping cart
   * @param {number} id
   * @returns {number} 
   */
  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  /**
   * Function to increase the quantity of a selected item in the shopping cart
   * @param {number} id
   * @returns {void}
   */
  function increaseCartQty(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  /**
   * Function to decrease the quantity of a selected item in the shopping cart
   * @param {number} id
   * @returns {void}
   */
  function decreaseCartQty(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  /**
   * Function to decrease the quantity of a selected item in the shopping cart
   * @param {number} id
   * @returns {void}
   */
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{ getItemQty, increaseCartQty, decreaseCartQty, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
