const container = document.querySelector("#container");

const squareDiv = document.createElement("div");
squareDiv.classList.add("square");

const btnContainer = document.querySelector("#buttons");
const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
btnContainer.appendChild(newGridButton);

newGridButton.addEventListener ("click" , () => {
    const squares = prompt ("How many squares per side for new grid?");
    container.innerHTML = "";

    squareDiv.style.width = (960 / squares) - 2+"px";
    squareDiv.style.height = (960 / squares) - 2+"px";


    for (let i = 0; i < (squares * squares); i++) {
        container.appendChild(squareDiv.cloneNode(true))
    }

})

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.classList.add("red");
    }
})



