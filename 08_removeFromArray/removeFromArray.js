const removeFromArray = function(array, ...remove) {
    return array.filter(number => !remove.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
