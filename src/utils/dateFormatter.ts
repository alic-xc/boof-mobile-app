export function formatDate(timestamp: number) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;

  const day = date.getDate();
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${formattedHours}:${minutes}${period} - ${month} ${day}${daySuffix} ${year}`;
}
export function formatDateOnly(date: number | string | undefined) {
  if (!date) return;

  // Convert input to Date object
  const dateObj =
    typeof date === "number"
      ? new Date(date * 1000) // For timestamp (seconds to milliseconds)
      : new Date(date); // For date string

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = dateObj.getDate();
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${month} ${day}${daySuffix} ${year}`;
}
