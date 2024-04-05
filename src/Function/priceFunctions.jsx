export const getTotalPriceAfterDiscount = (
  getTotalPrice,
  calculateCategoryDiscount,
  isCouponApplied,
  isCouponApplied2,
  inputPointstotal,
  cart
) => {
  const { totalDiscountCategory } = calculateCategoryDiscount(cart);

  let totalPrice = getTotalPrice();
  let discounts = {};
  console.log("ontop Category", totalDiscountCategory);
  totalPrice -= totalDiscountCategory;

  if (isCouponApplied) {
    let disfix = 50;
    totalPrice -= disfix;
    console.log("CouponApplied -50 ", totalPrice);
    discounts.disfix = disfix;
  }
  if (isCouponApplied2) {
    let dispercent = totalPrice * 0.1;
    totalPrice -= dispercent;
    console.log("CouponApplied -10% ", totalPrice);
    discounts.dispercent = parseFloat(dispercent.toFixed(2));
  }

  const maxPointDiscount = totalPrice * 0.2;
  if (inputPointstotal > 0) {
    const availablePoints = Math.min(
      maxPointDiscount,
      inputPointstotal
    ).toFixed(2);
    totalPrice -= availablePoints;
    discounts.availablePoints = availablePoints;
  }
  discounts.maxPointDiscount = maxPointDiscount.toFixed(2);

  const Seasonal = Math.floor(totalPrice / 300) * 40;
  console.log("Seasonal", Seasonal);
  totalPrice -= Seasonal;
  discounts.Seasonal = Seasonal;

  return { totalPrice, ...discounts };
};
