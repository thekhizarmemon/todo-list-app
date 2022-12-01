exports.getDate = function (day, weekday, month, year) {
  const today = new Date();
  const datFormatOptions = { day: day, weekday: weekday, month: month, year: year };
  const formattedDate = today.toLocaleDateString(`en-US`, datFormatOptions);
  return formattedDate;
};
