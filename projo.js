const orderDrinkBtn = document.getElementById('order-drink-btn');
    const orderDrinkForm = document.getElementById('order-drink-form');
  
    orderDrinkBtn.addEventListener('click', () => {
      if (orderDrinkForm.style.display === 'none') {
        orderDrinkForm.style.display = 'block';
      } else {
        orderDrinkForm.style.display = 'none';
      }
    });


    // fetching data
    fetch("")
  .then(response => response.json())
  .then(data => {
    // use the fetched data here
    console.log(data);
  })
  .catch(error => {
    // handle any errors here
    console.error(error);
  });
