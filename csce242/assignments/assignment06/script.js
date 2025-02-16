document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-toggle").innerHTML = "&#9660;";
});

function toggleMenu() {
    let menu = document.getElementById("menu");
    let toggleIcon = document.querySelector(".menu-toggle");
    let isHidden = menu.style.display === "none";
    menu.style.display = isHidden ? "block" : "none";
    toggleIcon.innerHTML = isHidden ? "&#9650;" : "&#9660;";
}

function showExercise(num) {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.add("hidden");
    document.getElementById(`exercise${num}`).classList.remove("hidden");
}

function changeHeartColor(color) {
    document.getElementById("heart").style.color = color;
}

function updateTransportImage() {
    let input = document.getElementById("transportInput").value.toLowerCase();
    let imageContainer = document.getElementById("transportImage");
    let images = {
        "bike": "images/bike.png",
        "scooter": "images/scooter.png",
        "car": "images/car.png",
        "skateboard": "images/skateboard.png"
    };
    imageContainer.innerHTML = images[input] ? `<img src="${images[input]}" alt="${input}" height=130px>` : "";
}