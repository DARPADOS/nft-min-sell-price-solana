export const calculateMinSellPriceForProfit = (totalCost, feeOfSell) => {
  return (totalCost/(1-feeOfSell));
};
