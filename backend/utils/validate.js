export function isValidTitle(title) {
  if (!title || typeof title !== "string") return false;
  return title.trim().length > 0;
}

export function formatPrice(amount) {
  if (typeof amount !== "number" || amount < 0) return "PHP 0.00";
  return `PHP ${amount.toFixed(2)}`;
}