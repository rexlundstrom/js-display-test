// get start/end numbers from inputs
// Entry point AKA Controller function
function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  let startNumber = parseInt(startValue);
  let endNumber = parseInt(endValue);

  let numbersArray = generateNumbers(startNumber, endNumber);
  displayNumbers(numbersArray)
};



// generate numbers to display
// business/logic function
function generateNumbers(start, end) {

  let numbersArray = [];

  for (let i = start; i <= end; i++) {
    numbersArray.push(i);
  }

  return numbersArray;
};

// places generated numbers on a page AND bolding even numbers
// View function
function displayNumbers (numbers) {

  let results = '';

  for (let i = 0; i < numbers.length; i++) {
    let currNumber = numbers[i];

    results = results + '<tr><td>' + currNumber + "</td></tr>";

  }


  let tableBody = document.getElementById('results');
  tableBody.innerHTML = results;
};
