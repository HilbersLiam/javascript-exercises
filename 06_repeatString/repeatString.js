const repeatString = function(string, num) {
    let i = 1;
    originalString = string;
    while(i < num ){
        string+=originalString;
        i++;
    }
    if(num == 0){
        return "";
    }
    else if(num < 0){
        return "ERROR";
    }
    else if(num > 0){
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
