import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  productId: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
}

interface CartContextType {
  cart: Product[];
  userID: string | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setuserID:(id:string)=>void;
  clearUserID: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  userID:null,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  setuserID:()=>{},
  clearUserID: () =>{}
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [userID, setUserID] = useState<string | null>(null);
  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex(item => item.productId === product.productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += product.count;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (productId: string) => {
    setCart(cart.filter(product => product.productId !== productId));
  };
  const clearCart = () => {
    setCart([]);
  };
  const setuserID=(id:string)=>{
    setUserID(id);
  }
  const clearUserID = () => {
    setUserID(null);
  };
  return (
    <CartContext.Provider value={{ cart,userID, addToCart,removeFromCart,clearCart,setuserID,clearUserID }}>
      {children}
    </CartContext.Provider>
  );
};
