
/*
const leapYears = function (year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (year % 4 == 0 || year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    }
};

*/

const leapYears = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;


/*
1. divisible by 4 
2. but if it's divisible by 100-> False
3. if it's divisible by 400-> True.
 */