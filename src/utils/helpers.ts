export const CurrencyFormatter = (amount: number) => {
  const currency = new Intl.NumberFormat().format(
    parseFloat(amount).toFixed(2)
  );
  return currency;
};

export function formatFileSize(bytes: number) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)}${units[unitIndex]}`;
}
