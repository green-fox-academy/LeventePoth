const section = document.querySelector('section');
let one = 0
function createDiv(one) {
    for (let i = 1; i < 101; i++) {
        let newDiv = document.createElement('div');
        if (i < 2) {
            newDiv.classList.add("prime")
        };
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                newDiv.classList.add("not-prime")
            };
            if (newDiv.className === undefined) {
                newDiv.classList.add("prime")
            };
            section.appendChild(newDiv)
        }
    }
}

setInterval(() => createDiv(one), 1000)
