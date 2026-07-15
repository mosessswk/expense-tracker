function isPositiveInt(str) {
    return /^[1-9]\d*$/.test(str);
}

module.exports = {
    isPositiveInt
}