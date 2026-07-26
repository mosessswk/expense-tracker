function isPositiveInt(str) {
    return /^[1-9]\d*$/.test(str);
}

function isNonEmptyString(str) {
    return (typeof str === "string") && (str.trim().length > 0);
}

function isAmount(str) {
    return /^\d{0,10}(\.\d{1,2})?$/.test(str);
}

function isDate(str) {
    return /^\d{4}\-\d{2}\-\d{2}$/.test(str);
}

module.exports = {
    isPositiveInt,
    isNonEmptyString,
    isAmount,
    isDate
}