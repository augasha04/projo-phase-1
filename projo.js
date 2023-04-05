fetch("http://localhost:3000/drinks")
  .then(response => response.json())
  .then(data => {
    // use the fetched data here
    console.log(data);
  })
  .catch(error => {
    // handle any errors here
    console.error(error);
  });

