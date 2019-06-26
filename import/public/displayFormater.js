const dateFormatter = require("dateformat");

function toDateFormatYYYYDDMM(date) {
  return dateFormatter(date, "yyyy-mm-dd");
}

export { toDateFormatYYYYDDMM };
