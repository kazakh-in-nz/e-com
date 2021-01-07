function customSort({ ...a }, { ...b }, param) {
  if (param === "purchaseOn") {
    a[param] = typeof a[param] === "string" ? formDate(a[param]) : a[param];
    b[param] = typeof b[param] === "string" ? formDate(b[param]) : b[param];
  }
  if (a[param] > b[param]) return 1;
  else if (a[param] < b[param]) return -1;
  return 0;
}

function formDate(str) {
  let dateParts = str.split("/");
  let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  return dateObject;
}

function getDatesOfLastWeek(firstDay) {
  let aDay = null;
  let result = [];
  for (let i = 0; i < 7; i++) {
    aDay = new Date(firstDay.getTime() + i * 24 * 3600 * 1000);
    result.push(aDay);
  }
  return result;
}

function getDeliveryData(data) {
  let result = { received: 0, canceled: 0, pending: 0 };
  for (let i = 0; i < data.length; i++) {
    result[data[i].status] = result[data[i].status] + 1;
  }
  return result;
}

module.exports = { customSort, formDate, getDatesOfLastWeek, getDeliveryData };
