const container = document.querySelector("#container");

const squareDiv = document.createElement("div");
squareDiv.classList.add("square");

const btnContainer = document.querySelector("#buttons");
const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
btnContainer.appendChild(newGridButton);

const getRandomColor = () => {
    const randomNumber = () => Math.floor(Math.random() * 256);
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

const createGrid = (size) => {

    container.innerHTML = "";

    if (size > 0 && size <= 100) {  

        squareDiv.style.width = (960 / size) - 2+"px";
        squareDiv.style.height = (960 / size) - 2+"px";
        
        for (let i = 0; i < (size * size); i++) {
            container.appendChild(squareDiv.cloneNode(true));
        }
    };

    container.addEventListener ("mouseover", (event) => {
        event.target.style.backgroundColor = getRandomColor();
    })
}

createGrid (16);

function newGrid () {
    const newSize = prompt ("What size grid would you like (1-100)");
    if (newSize <= 0 || newSize > 100) {
        alert ("Please enter a number between 0 and 100!");
    } else {
        createGrid(newSize);
    }
}

newGridButton.addEventListener ("click" , newGrid);