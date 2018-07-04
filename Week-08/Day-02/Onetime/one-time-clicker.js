
const pushButton = document.querySelector('.push');
let counter = 0;

pushButton.addEventListener('click', function (e) {
    counter++;
    if (counter === 1) {
        document.querySelector('.result').innerHTML = `${e.timeStamp}`;
        if(document.querySelector('.result').innerHTML !== "0") {
            pushButton.disabled = true;
        }
    }
});