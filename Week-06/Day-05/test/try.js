const pics = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg", "images/pic4.jpeg", "images/pic5.jpeg"]
const div = document.querySelector('.gallery');
const container = document.querySelector('.container');


    for (let i = 0; i < pics.length; i++) {
     let img = document.createElement('img');
     img.setAttribute("src", `${pics[i]}`)
     div.appendChild(img)
    }