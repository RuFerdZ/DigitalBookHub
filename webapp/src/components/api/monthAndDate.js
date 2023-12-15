function getMonthAndDate(timestamp) {
  // Create a new Date object from the timestamp
  const dateObject = new Date(timestamp);

  // Get the month (0-indexed, so we add 1) and date
  const month = dateObject.toLocaleString("en-US", { month: "short" });
  const day = dateObject.getUTCDate();

  // Return the result as an object
  return {
    month: month,
    day: day,
  };
}
export { getMonthAndDate };
