"use strict";

//Start or Controll function - get needed values
function getValues() {
    // get unique input values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // Use the "parseInt()" function to cast/convert from string input to integers    
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // validate - check if above parsed input are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // if true call generateNumbers() - generate the numbers return them in an array
        let numbers = generateNumbers(startValue, endValue);

        // Call the display function with "numbers" variable to display results on the page 
        displayNumbers(numbers);

    } else {
        alert("You must enter whole integers.");

    }

}

//Logic function - Generate numbers based on the start and endvalue
function generateNumbers(sValue, eValue) {
    // Declare an array variable called numbers and set it equal to []
    let numbers = [];


    // loop over the sValue and eValue from start to end.
    for (let i = sValue; i <= eValue; i++) {
        // add each number to the "numbers" array
        numbers.push(i);

    }

    //Return the "numbers" array
    return numbers;

}


//View/Display Function - display the results (numbers) to the screen
function displayNumbers(numbers) {
    // Delare a variable called "className" and set it equal to 'even' for use with displaying even numbers
    let className = 'odd';

    //Decalre a variable called "templateRows" and set it equal to ''
    let templateRows = "";

    // loop through the numbers array- allow loop to run up to numbers.length
    for (let i = 0; i < numbers.length; i++) {
        // declare "number" variable and set it equal to numbers[index]
        let number = numbers[i];

        // use "if-else-statement" to test each number against the zero modulus(%)
        if ((number % 3 === 0) && (number % 5 === 0)) {
            templateRows += `<tr><td>${number} is divisible by 3 and 5, <span class="Fizz">FIZZ</span><span class="Buzz">BUZZ!</span></td></tr>`;
        } else if (number % 3 === 0) {
            className = 'Fizz';
            templateRows += `<tr><td>${number} is divisible by 3, <span class="${className}">FIZZ!</span></td></tr>`;
        } else if (number % 5 === 0) {
            className = 'Buzz';
            templateRows += `<tr><td>${number} is divisible by 5, <span class="${className}">BUZZ!</span></td></tr>`;
        } else {
            className = 'odd';
            templateRows += `<tr><td class="${className}">${number} is Not divisible by 3 or 5.</td></tr>`;

        }

    } 

    // HTML page Markup - set the "results" element/innerHTML to the concatenated "templateRows"
    document.getElementById('results').innerHTML = templateRows;

}