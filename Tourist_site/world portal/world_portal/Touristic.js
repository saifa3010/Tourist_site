


function over(e) {
    e.style.fontSize = "40px";
}
function out(e) {
    e.style.fontSize = "20px";

}

function myFunction() {
    let x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}
function myFunction2() {
    let x = document.getElementById("show2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}

function myFunction3() {
    let x = document.getElementById("show3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}

function myFunction4() {
    let x = document.getElementById("show4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}


function myFunction5() {
    let x = document.getElementById("show5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}


function myFunction6() {
    let x = document.getElementById("show6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}


let x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}


let image = document.querySelector('#image');

image.onclick = function () {
    image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png';
};



window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');

    document.getElementById('result-name').innerHTML = name;

})
