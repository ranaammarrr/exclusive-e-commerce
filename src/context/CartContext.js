import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const fetchedProducts = response.data;
      setProducts(fetchedProducts);
      localStorage.setItem("products", JSON.stringify(fetchedProducts)); // Save products to local storage
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/categories");
      const fetchedCategories = response.data;
      setCategories(fetchedCategories);
      localStorage.setItem("categories", JSON.stringify(fetchedCategories));
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // Load products from local storage if available
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts && savedProducts.length > 0) {
      setProducts(savedProducts);
      setLoading(false);
    } else {
      // Fetch products if not available in local storage
      fetchProducts();
    }
    const savedCategories = JSON.parse(localStorage.getItem("categories"));
    if (savedCategories && savedCategories.length > 0) {
      setCategories(savedCategories);
    } else {
      // Fetch categories if not available in local storage
      fetchCategories();
    }
  }, []);

  const handleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const sortProductsByTitle = (products) => {
    return products.sort((a, b) => a.title.localeCompare(b.title));
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
      : products;
  const addToCart = (item, quantity) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { item: item, quantity: quantity },
    ]);
    const updatedCartItems = [...cartItems, { item: item, quantity: quantity }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decrementCartItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const incrementCartItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };



  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        handleCategorySelection,
        sortProductsByTitle,
        decrementCartItem,
        incrementCartItem,
        cartItems,
        setCartItems,
        products,
        categories,
        selectedCategories,
        loading,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
