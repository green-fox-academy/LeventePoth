const pics = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg", "images/pic4.jpeg", "images/pic5.jpeg"]
const container = document.querySelector('.container');
const gallery = document.querySelector('.gallery');
let newimage = document.createElement('image');
console.log(newimage);
newimage.style.width = '500px';
newimage.style.height = '200px';
newimage.setAttribute("src", pics[1])
gallery.appendChild(newimage)

const next = document.getElementsByClassName("next")

// let i = 0;
next.onclick = function nnext() {
    if()
    for (let i = 0; i < pics.length; i++) {       
        gallery.setAttribute("src", `${pics[i]}`)
        // gallery.appendChild(newImg)
    }
}


// gallery.appendChild(newImg);


// let img = document.createElement('img');


// let i = 0
// next.onclick = function next () {
//     i++
//     if (i === pics.length) i = 0;
//     img.setAttribute("src", `${pics[i]}`) //itt a source-t választom !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     container.appendChild(img); // itt mindig egy új képet adok hozzá !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// }



//thumnails and eventlistener

// i=0
// function next () {
//     i++;
//     if (i === pics.length) i=0;
//     document.getElementById("gallery").src = x[i];
// }

// var btn = document.createElement("BUTTON");        
// var t = document.createTextNode("CLICK ME");       
// btn.appendChild(t);                             
// document.body.appendChild(btn); 


// a picsbe objeckteket kellene belerakni, aminek van címe és src-je. és később arra src-vel lehet hivatkozni 


// document.getElementsByName('p' + pos)[0].
//             getElementsByTagName("img")[0].src = `${pics[i]}`;