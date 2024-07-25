const removeFromArray = function(arr, ...args) {
    const Array2 = [];

    arr.forEach((item) =>{
        if (!args.includes(item)) {
            Array2.push(item);
        }
    });
    return Array2;
};

// Do not edit below this line
module.exports = removeFromArray;
