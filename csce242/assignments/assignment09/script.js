document.addEventListener("DOMContentLoaded", function () {
    const pizzas = [
        { name: "Hawaiian", ingredients: "Ham, Pineapple", sauce: "Tomato Sauce", cheese: "Mozzarella", price: 15.99, imageFile: "HawaiianPizza.jpeg" },
        { name: "Buffalo Chicken Ranch", ingredients: "Chicken, Ranch, Buffalo Sauce", sauce: "Ranch Sauce", cheese: "Mozzarella", price: 18.50, imageFile: "BuffaloChickenPizza.jpeg" },
        { name: "Margarita", ingredients: "Basil, Tomatoes", sauce: "Extra Virgin Olive Oil", cheese: "Fresh Mozzarella", price: 19.20, imageFile: "MargheritaPizza.jpeg" },
        { name: "Pepperoni", ingredients: "Pepperoni Slices", sauce: "Tomato Sauce", cheese: "Mozzarella", price: 14.99, imageFile: "PepperoniPizza.jpeg" },
        { name: "Veggie", ingredients: "Mushrooms, Peppers, Onions", sauce: "Tomato Sauce", cheese: "Mozzarella", price: 16.50, imageFile: "VeggiePizza.png" }
    ];

    const pizzaContainer = document.getElementById("pizza-container");
    const modal = document.getElementById("pizza-modal");

    pizzas.forEach(pizza => {
        const pizzaElement = document.createElement("div");
        pizzaElement.classList.add("pizza");
        pizzaElement.innerHTML = `
            <img src='images/${pizza.imageFile}' alt='${pizza.name}'>
            <h3>${pizza.name}</h3>
        `;
        pizzaElement.onclick = () => showPopup(pizza);
        pizzaContainer.appendChild(pizzaElement);
    });

    document.querySelector(".close").addEventListener("click", closePopup);
});

function showPopup(pizza) {
    const modal = document.getElementById("pizza-modal");
    document.getElementById("modal-title").textContent = pizza.name;
    document.getElementById("modal-ingredients").textContent = pizza.ingredients;
    document.getElementById("modal-sauce").textContent = pizza.sauce;
    document.getElementById("modal-cheese").textContent = pizza.cheese;
    document.getElementById("modal-price").textContent = pizza.price;
    document.getElementById("modal-image").src = "images/" + pizza.imageFile;
    modal.classList.remove("hidden");
}

function closePopup() {
    document.getElementById("pizza-modal").classList.add("hidden");
}
