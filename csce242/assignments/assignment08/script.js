document.addEventListener("DOMContentLoaded", function () {
    const titles = {
        "Happy Birthday": "images/birthday.png",
        "Crazy Clown": "images/clown.png",
        "It's Raining": "images/rain.png",
        "Quiet Time": "images/read.png",
        "Working Hard": "images/shovel.png",
        "Work from Home": "images/work.png"
    };

    const titlesList = document.getElementById("titles-list");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.getElementById("close");

    for (let title in titles) {
        let li = document.createElement("li");
        li.textContent = title;
        li.addEventListener("click", function () {
            popupTitle.textContent = title;
            popupImage.src = titles[title];
            popup.classList.add("show");
        });
        titlesList.appendChild(li);
    }

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });
});
