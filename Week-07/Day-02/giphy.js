'use strict'

const http = new XMLHttpRequest();

http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=ziL5kdGxIL0af0Gc3FOf4uZXq2Etya65&q=cat&limit=16&offset=0&rating=G&lang=en')
http.onload = () => {
    const response = JSON.parse(http.responseText); //response-t kiconsolozni hogy, mert ott majd lehet hogy nem data-ra hivatkozunk
    console.log(response)
    response.data.forEach(element => {
        const div = document.querySelector('#pics'); // ezek a hivatkozások amikre hivatkozunk, nem kerül bele a mi HTML-ünkbe
        const image = document.createElement('img');
        
        image.src = element.images.fixed_width_still.url; //imageknek meghatározzuk az url-jét
        div.appendChild(image); // be is tesszük az image-t
        image.addEventListener('click', () => {
            image.setAttribute('src', element.images.fixed_height.url)
        });
    });
}

const button = document.querySelector('#get-images')
button.addEventListener('click', () => {
    http.send(); 
})

// console.log(JSON.parse(http.responseText));