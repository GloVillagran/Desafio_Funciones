function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

const ele = document.querySelector('#ele1');

ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});

//Color por defecto como argumento
pintar(ele, 'green');



