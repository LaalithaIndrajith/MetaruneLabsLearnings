// Create the NumberFormat object
const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "LKR",
  style: "currency",
});

export function formatCurrency(price: number) {
  return CURRENCY_FORMATTER.format(price);
}
