document.addEventListener("DOMContentLoaded", () => {
    const helloButton = document.getElementById("helloButton");
    const helloMessages = document.getElementById("helloMessages");

    const sayHello = () => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Hello";
        helloMessages.appendChild(newParagraph);
    };

    helloButton.addEventListener("click", sayHello);

    /* Some of the color picker code below from W3Schools site */

    const colorPicker = document.getElementById("colorPicker");
    const icon = document.querySelector("#pickColor .icon");

    colorPicker.addEventListener("input", (event) => {
        icon.style.color = event.target.value;
    });

    const imageBox = document.getElementById("imageBox");
    const imageContainer = document.querySelector(".image-container");
    
    imageBox.addEventListener("click", () => {
        if (imageBox.style.width === "150px") {
            imageBox.style.width = "200px";
            imageBox.style.height = "200px";
            imageContainer.style.width = "200px";
            imageContainer.style.height = "200px";
        } else {
            imageBox.style.width = "150px";
            imageBox.style.height = "150px";
            imageContainer.style.width = "150px";
            imageContainer.style.height = "150px";
        }
    });
});
