


//Version 1 where we learned arrow functions
const doStuff = () => {
    console.log("doing stuff");
}

//do stuff when button clicked
document.getElementById("btn-click-me").onclick = doStuff;

// script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add();
    displayP.innerHTML = "Sad TImes";
};