const sumAll = function(first, last) {

    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";

    if (last < 0 || first < 0) return "ERROR";

    if (first>last) {
        let temp = first;
        first = last;
        last = temp;

    }

    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];

    let sum = 0;
    for (i = first; i<=last; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
