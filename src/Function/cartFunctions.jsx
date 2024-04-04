export const addToCart = (cart, setCart, product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  export const getQuantity = (cart, productId) => {
    console.log("cartqq",cart )
    console.log("productIdqq",productId )

    const item = cart.find((item) => item.id === productId);
 
    return item ? item.quantity : 0;
  };
  
  export const removeFromCart = (cart, setCart, productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  
  export const decreaseQuantity = (cart, setCart, productId) => {
    const existingItemIndex = cart.findIndex((item) => item.id === productId);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity - 1,
        };
        setCart(updatedCart);
      } else {
        removeFromCart(cart, setCart, productId);
      }
    }
  };
  
  export const increaseQuantity = (cart, setCart, productId) => {
    const existingItemIndex = cart.findIndex((item) => item.id === productId);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCart(updatedCart);
    }
  };