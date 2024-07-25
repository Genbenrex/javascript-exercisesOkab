const repeatString = function(word, number) {
    if (number < 0)
    {
        return "ERROR"
    }
    let ogstring = "";
    for (let i=0; i < number; i++){
        ogstring = ogstring.concat(word);
    }
    return ogstring;
};

// Do not edit below this line
module.exports = repeatString;
