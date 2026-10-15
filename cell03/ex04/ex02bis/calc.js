
$(document).ready(function () {
    const form = $("#calculator");
    const leftInput = $("#left");
    const rightInput = $("#right");
    const operatorInput = $("#operator");

    form.on("submit", function (event) {
        event.preventDefault();

        const leftText = leftInput.val().trim();
        const rightText = rightInput.val().trim();

        // Check that both inputs contain non-negative integers
        if (
            !/^\d+$/.test(leftText) ||
            !/^\d+$/.test(rightText)
        ) {
            alert("Error :(");
            return;
        }

        const left = Number(leftText);
        const right = Number(rightText);
        const operator = operatorInput.val();

        // Reject integers that JavaScript cannot represent safely
        if (
            !Number.isSafeInteger(left) ||
            !Number.isSafeInteger(right)
        ) {
            alert("Error :(");
            return;
        }

        // Division and modulo by zero are forbidden
        if (right === 0 && (operator === "/" || operator === "%")) {
            alert("It's over 9000!");
            return;
        }

        let result;

        switch (operator) {
            case "+":
                result = left + right;
                break;

            case "-":
                result = left - right;
                break;

            case "*":
                result = left * right;
                break;

            case "/":
                result = left / right;
                break;

            case "%":
                result = left % right;
                break;
        }

        alert(result);
        console.log(result);
    });

    // Show a reminder every 30 seconds
    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
