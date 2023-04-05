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

  const characters = document.querySelector('drinksdetails');
  




