document.addEventListener('DOMContentLoaded', function () {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
      const container = document.getElementById('photos');
      photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.innerHTML = `
          <p>ID: ${photo.id}</p>
          <p>Title: ${photo.title}</p>
          <img src="${photo.thumbnailUrl}" alt="${photo.title}">
        `;
        container.appendChild(photoElement);
      });
    })
    .catch(error => console.error('Error:', error));
});
