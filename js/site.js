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
    // array to hold fizz, buzz, fizzbuzz or the number
    let fbArray = [];

    // loop through the numbers array
    for (let i = 0; i < numbers.length; i++) {
        // declare "number" variable and set it equal to numbers[index]
        let number = numbers[i];

        // use "if-else-statement" to test each number against the zero modulus(%)
        if ((number % 3 == 0) && (number % 5 == 0)) {
            fbArray.push('FizzBuzz');
        } else if (number % 3 == 0) {
            fbArray.push('Fizz');
        } else if (number % 5 == 0) {
            fbArray.push('Buzz');
        } else {
            // push the number to the arry
            fbArray.push(number);
        }

    }

    // get the tbody element from the page by it's ID
    let tableBody = document.getElementById('results');

    // get the html template the defines the table row and the table data structure
    let rowTemplate = document.getElementById('rowTemplate');

    // make sure the html table is already clear
    tableBody.innerHTML = "";

    // loop thrugh fbArray in sets of five
    for (let j = 0; j <= fbArray.length -1; j += 5) {

        // get a copy of the template as document fragment to populate content in the page
        let tableRow = document.importNode(rowTemplate.content, true);

        // get just the template <td> and add them to an array
        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(fbArray[j]);  // add 'Fizz', 'Buzz' or "FizzBuzz" as a css class
        rowCols[0].textContent = fbArray[j];

        rowCols[1].classList.add(fbArray[j + 1]);
        rowCols[1].textContent = fbArray[j + 1];

        rowCols[2].classList.add(fbArray[j + 2]);
        rowCols[2].textContent = fbArray[j + 2];

        rowCols[3].classList.add(fbArray[j + 3]);
        rowCols[3].textContent = fbArray[j + 3];

        rowCols[4].classList.add(fbArray[j + 4]);
        rowCols[4].textContent = fbArray[j + 4];

        tableBody.appendChild(tableRow);

    }

}