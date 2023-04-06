const orderDrinkBtn = document.getElementById('order-drink-btn');
    const orderDrinkForm = document.getElementById('order-drink-form');
  
    orderDrinkBtn.addEventListener('click', () => {
      if (orderDrinkForm.style.display === 'none') {
        orderDrinkForm.style.display = 'block';
      } else {
        orderDrinkForm.style.display = 'block';
      }
    });