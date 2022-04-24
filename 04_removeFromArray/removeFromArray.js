// My solution;
/*
const removeFromArray = function() {
    for(let item of targets){
        for(let i=0; i<arr.length; i++) {
            if(item === arr[i]){
                arr.splice(i,1);
            }
        }
    }
    return arr;
};

const removeFromArray = function(...args) {
    const arr = args[0];
    const newArray = [];
    arr.forEach((item)=> {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};
*/

const removeFromArray = function (...args) {
    const arr = args[0];
    const newArray = [];
    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
};


// Do not edit below this line
module.exports = removeFromArray;
