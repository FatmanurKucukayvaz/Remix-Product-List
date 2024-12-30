export const PriceComponent = (price?: number) => {
  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(price ? price : 0);

  return formattedPrice;
};
