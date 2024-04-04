const calculateCategoryDiscount = (cart) => {
    const categoryDiscounts = {
      Clothing: 0.15,
      Accessories: 0.20,
      Electronics: 0.01,
    };
  
    const discounts = {};
    let totalDiscountCategory = 0;
  
    cart.forEach((item) => {
      if (categoryDiscounts[item.category] > 0) {
        const discountAmount = item.price * item.quantity * categoryDiscounts[item.category];
        if (!discounts[item.category]) {
          discounts[item.category] = discountAmount;
        } else {
          discounts[item.category] += discountAmount;
        }
        totalDiscountCategory += discountAmount;
      }
    });
  
    return { discounts, totalDiscountCategory };
  };
  
  export default calculateCategoryDiscount;