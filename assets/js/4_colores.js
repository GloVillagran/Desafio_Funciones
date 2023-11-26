const oneColor = document.querySelector('#oneColor');
const twoColor = document.querySelector('#twoColor');
const threeColor = document.querySelector('#threeColor');
const fourColor = document.querySelector('#fourColor');

const keyDiv = document.querySelector('#key');


const changeColor = function(element) {
    element.style.backgroundColor = 'black';
};

oneColor.addEventListener("click", function() {
    changeColor(oneColor);
});

twoColor.addEventListener("click", function() {
    changeColor(twoColor);
});

threeColor.addEventListener("click", function() {
    changeColor(threeColor);
});

fourColor.addEventListener("click", function() {
    changeColor(fourColor);
});

//Cambiar color al apretar letras y crear un nuevo div
const createNewDiv = function (color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = 'solid black';
    newDiv.style.marginTop = '1em';
    document.body.appendChild(newDiv);
};

document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase(); 

    if (key === 'a') {
        changeColorKey('pink');
    } else if (key === 's') {
        changeColorKey('orange');
    } else if (key === 'd') {
        changeColorKey('lightblue');
    } else if (key === 'q') {
        createNewDiv('purple');
    } else if (key === 'w') {
        createNewDiv('gray');
    } else if (key === 'e') {
        createNewDiv('brown');
    }
});

const changeColorKey = function (color) {
    keyDiv.style.backgroundColor = color;
}

