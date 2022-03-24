



// Function 1 - This function will take 2 arguments expected to be integers. 
//              The function will add the two arguments together and then 
//              multiply the result by five. The function will finally 
//              return this newly computed value.

function equationOne(num1, num2) {
    return (num1 + num2) * 5;
}

// Function 2 - This function will take in 1 argument expected to be a string. 
//              The function will return true if the string length
//              is > 10 characters and false otherwise.


function stringLengthCheck(str) {
    if (str.length <= 10) {
        return 'False';
    } else {
        return 'True';
    }
}

// Function 3 - This function will take in 1 argument expected to 
//              be an array of strings. The function will return the 
//              first element in the array that starts with "ph"

// ------------------Trying and trying---------------------------
// let items = phWords1.filter(characterCheck);
//  
// A little bit of progress here but it listed everything a few times over
// phWords1.forEach(function(item) {
//     if (item.startsWith('ph')) {
//         console.log(`${item}`);
//     } else {
//         console.log('There were no words in this array that began with the letters "ph"');
//     }
// })

//  FINALLY!!!!   This one works.  Looking at it now doesn't look difficult but I tried many times with little
//                tweaks here and there.  It took a good few hours of trial-and-error and research to 
//                figure this function out  


function characterCheck(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('ph')) {
            return arr[i];
        }
    }
}

function checkStartsWith(str, regex) {
    if (str.startsWith('')) {
        console.log(`This is the first word that starts with ${regex}`)
    }
}


// Function 1: output
const result1 = equationOne(1, 5)
console.log(result1);
const result2 = equationOne(3, 7)
console.log(result2);
const result3 = equationOne(2, 6)
console.log(result3);

equationOne(3, 5);

// Function 2: output
const charCheck1 =  stringLengthCheck('This string is longer than 10 characters');
console.log(charCheck1);
const charCheck2 =  stringLengthCheck('Less than');
console.log(charCheck2);
const charCheck3 =  stringLengthCheck('Larger than ten characters again');
console.log(charCheck3);

// function 3: variables and output
var phWords1 = ['carpet', 'epiphany', 'telephone', 'phase', 'ophelia', 'phone'];
var phWords2 = ['prophecy', 'ashphalt', 'phony', 'pheonix', 'phonics'];
var phWords3 = ['orphan', 'ashphalt', 'philanthropist', 'philosophy', 'phantom'];

console.log(characterCheck(phWords1));
console.log(characterCheck(phWords2));
console.log(characterCheck(phWords3));
