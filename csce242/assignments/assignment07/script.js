document.addEventListener("DOMContentLoaded", () => {
    const drawButton = document.getElementById("drawStairs");
    const climbButton = document.getElementById("climbStairs");
    const stairContainer = document.getElementById("stairContainer");
    const stickFigure = document.getElementById("stickFigure");

    drawButton.addEventListener("click", () => {
        stairContainer.innerHTML = ""; // Clear previous stairs before drawing
        let stepCount = 10; // Always generate 10 rungs

        for (let i = 0; i < stepCount; i++) {
            let step = document.createElement("div");
            step.classList.add("stair-step");
            step.style.height = "50px"; // Increase rung spacing

            let rung = document.createElement("div");
            rung.classList.add("stair-rung");
            step.appendChild(rung);

            stairContainer.appendChild(step);
        }

        // Ensure stick figure is placed inside the stair container
        stairContainer.appendChild(stickFigure);
        stickFigure.style.display = "block";
        stickFigure.style.width = "60px"; // Ensure stick figure is wider

        // Position stick figure **inside** stair container on the first rung
        let firstStep = stairContainer.children[stairContainer.children.length - 2]; 
        if (firstStep) {
            stickFigure.style.position = "absolute";
            stickFigure.style.bottom = `${firstStep.offsetTop}px`;
            stickFigure.style.left = "50%";
            stickFigure.style.transform = "translateX(-50%)";
        }

        // Show climb button after stairs are built
        climbButton.style.display = "block";
    });

    climbButton.addEventListener("click", () => {
        let stepIndex = 0;
        let isLeftHand = true;
        let steps = stairContainer.children;
        let stepCount = steps.length - 1; // Adjust for stick figure inside container

        let interval = setInterval(() => {
            if (stepIndex >= stepCount) {
                clearInterval(interval);
                return;
            }

            // Toggle climbing animation
            stickFigure.src = isLeftHand ? "images/StickFigure1.png" : "images/StickFigure2.png";
            isLeftHand = !isLeftHand;

            // Move stick figure **UP**
            let step = steps[stepCount - 1 - stepIndex]; 
            if (step) {
                stickFigure.style.bottom = `${step.offsetTop}px`;
            }

            stepIndex++;
        }, 700); // Increase interval to match greater rung spacing
    });
});
