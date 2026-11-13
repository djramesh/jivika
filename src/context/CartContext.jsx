/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "jeevika_cart_v1";
const WISHLIST_STORAGE_KEY = "jeevika_wishlist_v1";
const FREE_SHIPPING_THRESHOLD = 999;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore storage quota errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      // ignore storage quota errors
    }
  }, [wishlist]);

  const showToast = useCallback((message, subtext = "") => {
    setToast({ message, subtext, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (product, variant = null, quantity = 1) => {
      const chosenVariant = variant || product.variants[0];
      setCartItems((prev) => {
        const existingIndex = prev.findIndex(
          (item) => item.productId === product.id && item.variantId === chosenVariant.id
        );
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            scientificName: product.scientificName,
            origin: product.origin,
            image: product.img,
            variantId: chosenVariant.id,
            variantLabel: chosenVariant.label,
            sku: chosenVariant.sku,
            price: chosenVariant.price,
            quantity,
          },
        ];
      });
      showToast(
        `Added ${product.name}`,
        `${chosenVariant.label} × ${quantity} added to your bag`
      );
    },
    [showToast]
  );

  const updateQuantity = useCallback((productId, variantId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId && item.variantId === variantId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }, []);

  const removeFromCart = useCallback((productId, variantId) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.variantId === variantId))
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        const exists = prev.includes(product.id);
        if (exists) {
          showToast("Removed from saved items", product.name);
          return prev.filter((id) => id !== product.id);
        }
        showToast("Saved to wishlist", product.name);
        return [...prev, product.id];
      });
    },
    [showToast]
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlist,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        cartCount,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        toast,
        dismissToast: () => setToast(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

