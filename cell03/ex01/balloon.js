const balloon = document.getElementById("balloon");

let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

// When the balloon is clicked
balloon.addEventListener("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > 420) {
        size = 200;
    }

    updateBalloon();
});

// When the mouse leaves the balloon
balloon.addEventListener("mouseleave", function () {
    size = Math.max(200, size - 5);

    colorIndex = (colorIndex - 1 + colors.length)
        % colors.length;

    updateBalloon();
});

