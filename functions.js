function checkIsValidNumber(arrayNums) {
    /* 
    Checks arrayNums to see if a number is invalid.
    If invalid, will return object that includes that validNumber is false 
    and the number that is invalid.
    Otherwise, returns true.
    */
    for (let i = 0; i < arrayNums.length; i++) {
        let curr = arrayNums[i] 
        let num = Number(curr)

        if (Number.isNaN(num) === true) {
            let notValid = {isValid: false, num: curr}
            return notValid
        }
    }
    return true 
}


function createDictForMode(arrayNums) {
    /*
    Returns dictionary that includes number and the count of how many 
    times it occurs in arrayNums.
    */

    let dict = arrayNums.reduce((acc, curr, i, arr) => {
        let num = Number(curr)
        let count = 0
        
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1
        }
        return acc
        
    }, {})
    return dict
}

////////////////////////////////////////////////////////////////////////////////////////////
// Functions for app.js
function mean(arrayNums) {
    /*
    Checks numbers to see if all numbers are valid. 
    If valid, will calculate and return mean.
    If invalid, will return object that includes false and 
    number that was invalid.
    */

    let checkNum = checkIsValidNumber(arrayNums)

    if (checkNum === true) {
        let sum = arrayNums.reduce((acc, curr) => {
            let num = Number(curr)
            acc += num
        
            return acc  
        }, 0)

        let mean = sum/arrayNums.length

        return mean 
    } else {
        return checkNum
    }
}

function median(arrayNums) {
    /*
    Checks numbers to see if all numbers are valid. 
    If valid, will calculate and return median.
    If invalid, will return object that includes false and 
    number that was invalid.
    */

    let checkNum = checkIsValidNumber(arrayNums)

    if (checkNum === true) {
        let arrayLength = arrayNums.length  
        let sortedArrayNums = arrayNums.slice().sort((a, b) => a - b)

        if (arrayLength % 2 === 0) {
            let middle1 = sortedArrayNums[arrayLength / 2 - 1];
            let middle2 = sortedArrayNums[arrayLength / 2];
        
            let median = mean([middle1, middle2])
        
            return median
        } else {
            let median = sortedArrayNums[Math.floor(sortedArrayNums.length / 2)];
            return Number(median)
        }   
    } else {
        return checkNum
    }
}

function mode(arrayNums) {
    /*
    Checks numbers to see if all numbers are valid. 
    If valid, will calculate and return median. 
    If invalid, will return object that includes false
    and number that was invalid. 
    */

    let checkNum = checkIsValidNumber(arrayNums)

    if (checkNum === true) {
        let dict = createDictForMode(arrayNums)
        let count = 0
        let mode;

        for (let [key, value] of Object.entries(dict)) {
            if (value > count) {
                count = value
                mode = key
            }   
        }
        return mode
    } else {
        return checkNum
    }
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    mean, 
    median, 
    mode, 
    checkIsValidNumber,
    createDictForMode
}