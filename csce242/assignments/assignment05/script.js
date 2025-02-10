// script.js

document.addEventListener("DOMContentLoaded", () => {
    const helloButton = document.getElementById("helloButton");
    const helloMessages = document.getElementById("helloMessages");

    const sayHello = () => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Hello";
        helloMessages.appendChild(newParagraph);
    };

    helloButton.addEventListener("click", sayHello);

    const colorPicker = document.getElementById("colorPicker");
    const icon = document.querySelector("#pickColor .icon");

    colorPicker.addEventListener("input", (event) => {
        icon.style.color = event.target.value;
    });

    const imageBox = document.getElementById("imageBox");
    
    imageBox.addEventListener("click", () => {
        imageBox.src = "https://via.placeholder.com/150/004d40/FFFFFF?text=New+Image";
        imageBox.style.width = "150px";
        imageBox.style.height = "150px";
    });
});
