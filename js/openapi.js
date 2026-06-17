const button = document.getElementById('random-cat-btn');
button.addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const cat = data[0];
            const container = document.getElementById('cat-container');
            container.innerHTML = `
                <img src="${cat.url}" alt="A cute cat">
                <h3>Image Information</h3>
                <p>Width: ${cat.width}pixels</p>
                <p>Height: ${cat.height}pixels</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
            const container = document.getElementById('cat-container');
            container.innerHTML = `<p>😿 Sorry! We couldn't load a cat right now.</p>`;
        });
});

const breedButton = document.getElementById('breed-btn');
breedButton.addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            const randomIndex = (max) => Math.floor(Math.random() * data.length);
            const breed = data[randomIndex(data.length)];
            const container = document.getElementById('cat-container');
            container.innerHTML = `
                <h2>🐱 ${breed.name}</h2>
                <p>${breed.description}</p>
                <p><strong>Temperament:</strong> ${breed.temperament}</p>
                <p><strong>Origin:</strong> ${breed.origin}</p> 
                <p><strong>Life Span:</strong> ${breed.life_span} years</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching cat breeds:', error);
            const container = document.getElementById('cat-container');
            container.innerHTML = `<p>😿 Sorry! We couldn't load cat breeds right now.</p>`;
        });
});
