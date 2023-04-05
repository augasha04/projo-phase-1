const drinkslist = document.querySelector('#drinks');

// fetching drinks data

fetch("http://localhost:3000/drinks")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  data.forEach(function (drink) {
    const listItem = document.createElement('li');
    listItem.classList.add('drinks', 'item');
    listItem.textContent = drink.strDrink;
    quenchList.appendChild(listItem);
  })});

  
//adding an eventListeners for buying tickets
const buyButton = card.querySelector('order-drink');
buyButton.addEventListener('click', function(event) {
  const availableDrinks = card.querySelector('available-drinks');
  const numAvailableDrinks = parseInt(availableDrinks.textContent);
})


//the code down here updates drinks
availableDrinks.textContent = availableDrinks;
const newDrinksSold = movie.strDrink;
fetch(`http://localhost:3000/drinks${drinks.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ strDrink: newDrinksSold })
})

alert('Drink already Sold Out');




