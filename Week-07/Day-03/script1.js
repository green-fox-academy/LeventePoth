'use strict'

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/api/books/full');
http.onload = () => {
    const result = JSON.parse(http.responseText); //response-t kiconsolozni hogy, mert ott majd lehet hogy nem data-ra hivatkozunk
    console.log(result)}
    response.div.forEach(element => {

        div.src = element.images.fixed_width_still.url; //imageknek meghatározzuk az url-jét
        body.appendChild(div); // be is tesszük az image-t
        image.addEventListener('click', () => {
            image.setAttribute('src', element.images.fixed_height.url)
        });
    };

const tbody = document.querySelector('#books')
result.forEach((book) => {
    let tr = document.createElement('tr');

    let td_author = document.createComment('td');
    td_author.innerText = book.aut_name;

    let td_author = document.createComment('td');
    td_author.innerText = book.aut_name;
    
    let td_author = document.createComment('td');
    td_author.innerText = book.aut_name;

    tr.appendChild
})
    http.send()
})