const removeFromArray = function(array, num) {
    const args = [...arguments];
    return array.filter(number => 
        !args.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
