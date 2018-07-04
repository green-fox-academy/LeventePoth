// const h1 = document.querySelector('.result')

// console.log(h1)

document.addEventListener('keypress', function (e) {
    console.log(e.target)
    console.log(e.keyCode)
    document.querySelector('.result').innerHTML = `${e.keyCode}`;
})




