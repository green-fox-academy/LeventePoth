const list = document.querySelector('.pictures');
const image = document.querySelector('.img-inspector');
let position = 0;

console.log(list)

list.addEventListener('click', function (e) {
    console.log(e.target.innerHTML)
    if (e.target.innerHTML === "Left") {
        image.style.position = 'relative';
        position -= 10;
        image.style.backgroundPositionX = position + 'px';
    }

    else if (e.target.innerHTML === "Right") {
        image.style.position = 'relative';
        position += 10;
        image.style.backgroundPositionX = position + 'px';
    }

    else if (e.target.innerHTML === "Up") {
        image.style.position = 'relative';
        position += 10;
        image.style.backgroundPositionY = position + 'px';
    }

    else if (e.target.innerHTML === "Down") {
        image.style.position = 'relative';
        position -= 10;
        image.style.backgroundPositionY = position + 'px';
    }
})

list.addEventListener('click', function (e) {
    if (e.target.innerHTML === "Zoom in") {
        image.style.position = 'fixed';
        image.style.backgroundSize = 
    }
})
