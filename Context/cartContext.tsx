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
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

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
  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
