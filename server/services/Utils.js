
const codeGenerator = ( prefix, digits ) => {
    const min = Math.ceil(Math.pow(10, digits));
    const max = Math.floor((min * 10) -1);
    return `${prefix}${Math.floor(Math.random() * (max - min + 1)) + min}`;
}

module.exports = {
    codeGenerator,
}