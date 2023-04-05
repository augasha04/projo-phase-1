// This code will create a web application for a liquor shop.
// When the user clicks on the 'Order Drink' button in the navigation bar,
// a form will be displayed that allows the user to input their age, drink type, and quantity.

// Create the 'Order Drink' button in the navigation bar
const orderDrinkButton = document.createElement('button');
orderDrinkButton.innerText = 'Order Drink';
orderDrinkButton.addEventListener('click', displayForm);

// Create the form
const form = document.createElement('form');

// Create the age input field
const ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.name = 'age';
ageInput.placeholder = 'Age';

// Create the drink type input field
const drinkTypeInput = document.createElement('input');
drinkTypeInput.type = 'text';
drinkTypeInput.name = 'drinkType';
drinkTypeInput.placeholder = 'Drink Type';

// Create the quantity input field
const quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.name = 'quantity';
quantityInput.placeholder = 'Quantity';

// Append the input fields to the form
form.appendChild(ageInput);
form.appendChild(drinkTypeInput);
form.appendChild(quantityInput);

// Function to display the form when the 'Order Drink' button is clicked
function displayForm() {
  document.body.appendChild(form);
}