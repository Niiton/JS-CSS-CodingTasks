// Task 1

document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('text');
    paragraph.textContent = "Now hello Javascript world!";
});

//Task 2
const image = document.createElement('img');
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_loAIO35hsBCzwrXRmBvytt231VXHYCTi4g&s';
image.alt = 'Javascript Image';
image.width = 150;

const container = document.getElementById('imageContainer');
container.appendChild(image);

// Task 3
let itemCount = 1;  //Track Item Numbers
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${itemCount++}`;

    itemList.appendChild(listItem);
});

// Task 4
const styledDiv = document.getElementById('styledDiv');
styledDiv.style.backgroundColor = 'blue';
styledDiv.style.color = 'white';
styledDiv.style.padding = '10px';

// Task 5 & 6
const removeButton = document.getElementById('removeButton');
const removeParagraph = document.getElementById('removeParagraph');

removeButton.addEventListener('click', function () {
    alert('I told you not to click me! Say goodbye to my little friend.')
    removeParagraph.remove();  // Remove the paragraph when button is clicked
});

//Task 7
const inputField = document.getElementById('inputField');
const changeValueButton = document.getElementById('changeValueButton');

changeValueButton.addEventListener('click', function () {
    inputField.value = "New Value!";
});

//Task 8
const showDayButton = document.getElementById('showDayButton');
const dayInput = document.getElementById('dayInput');
const dayResult = document.getElementById('dayResult');

showDayButton.addEventListener('click', function () {
    const dayNumber = parseInt(dayInput.value);
    let day;

    // Switch statement to determine the day of the week
    switch (dayNumber) {
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            day = 'Invalid number. Please enter a number between 1 and 7.';
    }

    // Display result
    dayResult.textContent = day;
});

// Task 9
const showFruitButton = document.getElementById('showFruitButton');
const fruitInput = document.getElementById('fruitInput');
const fruitResult = document.getElementById('fruitResult');

showFruitButton.addEventListener('click', function () {
    const fruitName = fruitInput.value.toLowerCase();
    let fruitInfo;

    // Switch statement to determine the fruit information
    switch (fruitName) {
        case 'apple':
            fruitInfo = 'Apples are red.';
            break;
        case 'banana':
            fruitInfo = 'Bananas are yellow.';
            break;
        case 'orange':
            fruitInfo = 'Oranges are orange.';
            break;
        case 'grape':
            fruitInfo = 'Grapes are purple.';
            break;
        case 'lemon':
            fruitInfo = 'Lemons are yellow.';
            break;
        default:
            fruitInfo = 'Unknown fruit.';
    }

    // Display result
    fruitResult.textContent = fruitInfo;
});

  // Task 10
  const compareButton = document.getElementById('compareButton');
  const firstNumber = document.getElementById('firstNumber');
  const secondNumber = document.getElementById('secondNumber');
  const comparisonResult = document.getElementById('comparisonResult');

  compareButton.addEventListener('click', function() {
      const num1 = parseFloat(firstNumber.value);
      const num2 = parseFloat(secondNumber.value);

      if (num1 > num2) {
          comparisonResult.textContent = 'First number is greater';
      } else if (num1 < num2) {
          comparisonResult.textContent = 'Second number is greater';
      } else {
          comparisonResult.textContent = 'Both numbers are equal';
      }
  });

   // Task 11
   const evenOddButton = document.getElementById('evenOddButton');
   const evenOddInput = document.getElementById('evenOddInput');
   const evenOddResult = document.getElementById('evenOddResult');

   evenOddButton.addEventListener('click', function() {
       const number = parseInt(evenOddInput.value);

       if (isNaN(number)) {
           evenOddResult.textContent = 'Please enter a valid number';
       } else if (number % 2 === 0) {
           evenOddResult.textContent = 'Even';
       } else {
           evenOddResult.textContent = 'Odd';
       }
   });

   