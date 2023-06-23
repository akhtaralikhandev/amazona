"use client";
import { createContext, useState } from "react";

export const CartTotalItemContext = createContext({});

const CartContextProvider = ({ children }) => {
  const [totalCartItems, setTotalCartItems] = useState(0);
  return (
    <CartTotalItemContext.Provider
      value={{ totalCartItems, setTotalCartItems }}
    >
      {children}
    </CartTotalItemContext.Provider>
  );
};
export default CartContextProvider;
