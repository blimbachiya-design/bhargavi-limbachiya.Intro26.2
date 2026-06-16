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