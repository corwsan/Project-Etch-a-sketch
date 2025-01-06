const container = document.querySelector("#container");
const squareDiv = document.createElement("div");
squareDiv.classList.add("square");

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.classList.add("red");
    }
})

for (let i = 0; i < 16; i++) {
    container.appendChild(squareDiv.cloneNode(true))
}

