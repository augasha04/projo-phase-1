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
  const numAvailableTickets = parseInt(availableDrinks.textContent);
})




