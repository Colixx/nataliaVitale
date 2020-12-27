var cine = document.getElementById("remote1");
function chanfge(image){
    cine.src=image.src;
}
var ana = document.getElementById("ana");
function change(image){
    ana.src=image.src;
}

var chile = document.getElementById("chile");
function changef(image){
    chile.src=image.src;
}

var fuga = document.getElementById("fuga");
function changes(image){
    fuga.src=image.src;
}

var plus = document.getElementById('plus');

function plusToggle() {
   plus.classList.toggle('plus--active');
}

plus.addEventListener('click', plusToggle);