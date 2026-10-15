
$(document).ready(function () {
    const balloon = $("#balloon");

    let size = 200;
    let colorIndex = 0;

    const colors = ["red", "green", "blue"];

    function updateBalloon() {
        balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }

    // When the balloon is clicked
    balloon.on("click", function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > 420) {
            size = 200;
        }

        updateBalloon();
    });

    // When the mouse leaves the balloon
    balloon.on("mouseleave", function () {
        size = Math.max(200, size - 5);

        colorIndex = (colorIndex - 1 + colors.length)
            % colors.length;

        updateBalloon();
    });
});
