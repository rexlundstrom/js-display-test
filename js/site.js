// get start/end numbers from inputs
// Entry point AKA Controller function
function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  let startNumber = parseInt(startValue);
  let endNumber = parseInt(endValue);

  if (typeof(startNumber) === 'number' && typeof(endNumber) === 'number') {

    let numbersArray = generateNumbers(startNumber, endNumber);
    displayNumbers(numbersArray);

  } else {
    // error message
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid numbers only",
      backdrop: false
    });
  }

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

// places generated numbers on a page AND bolding prime numbers
// View function
function displayNumbers (numbers) {

  let results = '';

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= num/2; i++) {
      if (num % i === 0) return false
    }
    return true;
  }

  for (let i = 0; i < numbers.length; i++) {
    let currNumber = numbers[i];

    if (isPrime(currNumber)) {
      results += '<tr><td class="evenBold">' + currNumber + "</td></tr>";
    } else {
      results += "<tr><td>" + currNumber + "</td></tr>";
    }


  }


  let tableBody = document.getElementById('results');
  tableBody.innerHTML = results;
};