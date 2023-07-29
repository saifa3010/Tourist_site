AOS.init();



let text = ["Take a tour of the world portal our world","You can choose your preferred destination"];
let counter = 0;
let elem = document.getElementById("special-heading");
let inst = setInterval(change, 3000);

function change() {
    for (i = 1; i < text.length; i++) {
        elem.innerHTML = text[counter];
        counter += 1;
        if (counter >= text.length) {
            counter = 0;
        }
    
}
    
}

window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');

    document.getElementById('result-name').innerHTML = name;

})
