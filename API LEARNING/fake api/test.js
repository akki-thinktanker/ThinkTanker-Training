fetch('https://2966d096-d44e-4e75-ad93-8e28d70089fd-00-19psv60nobluk.riker.replit.dev/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });   