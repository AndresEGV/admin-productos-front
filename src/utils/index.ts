export function formatCurrency(amount: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}
