// node fetchphoto.js

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(photos => {
    photos.forEach(photo => {
      console.log(`URL: ${photo.url}`);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error.message);
  });
