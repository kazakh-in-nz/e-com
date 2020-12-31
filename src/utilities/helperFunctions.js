function customSort({...a}, {...b}, param) {
    if (param === 'purchaseOn') {
        a[param] = typeof(a[param]) === 'string' ? formDate(a[param]) : a[param]
        b[param] = typeof(b[param]) === 'string' ? formDate(b[param]) : b[param]
    }
    if (a[param] > b[param]) return 1
    else if (a[param] < b[param]) return -1
    return 0
}

function formDate(str) {
    console.log(typeof(str))
    let dateParts = str.split("/");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    return dateObject
}

module.exports = {customSort}