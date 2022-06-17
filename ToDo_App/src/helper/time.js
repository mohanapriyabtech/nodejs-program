
  
  const date = new Date("2022-06-15");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, "0");
  const date_Format = (year + "-" + month + "-" + day).toString();
  exports.startDate = date_Format + "T00:00:00.000Z";
  exports.endDate = date_Format + "T23:59:59.000Z";

  