const container = document.querySelector("#container");
const squareDiv = document.createElement("div");

for (let i = 0; i < 16; i++) {
    container.appendChild(squareDiv.cloneNode(true))
}
