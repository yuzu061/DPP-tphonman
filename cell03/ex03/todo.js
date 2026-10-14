
const newBtn = document.getElementById("newBtn");
const ftList = document.getElementById("ft_list");

const COOKIE_NAME = "ft_todos";

// Save todos to a cookie
function saveTodos() {
    const todos = Array.from(ftList.children).map(function (item) {
        return item.textContent;
    });

    document.cookie =
        COOKIE_NAME + "=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=2592000; path=/; SameSite=Lax";
}

// Load todos from a cookie
function loadTodos() {
    const prefix = COOKIE_NAME + "=";

    const cookie = document.cookie
        .split("; ")
        .find(function (item) {
            return item.startsWith(prefix);
        });

    if (!cookie) {
        return [];
    }

    try {
        return JSON.parse(
            decodeURIComponent(cookie.substring(prefix.length))
        );
    } catch (error) {
        return [];
    }
}

// Create a todo item
function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const shouldDelete = confirm(
            "Do you want to remove this to-do?"
        );

        if (shouldDelete) {
            todo.remove();
            saveTodos();
        }
    });

    ftList.prepend(todo);
}

// Add a new todo when clicking New
newBtn.addEventListener("click", function () {
    const text = prompt("Enter a new to-do:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text.trim());
    saveTodos();
});

// Restore saved todos when the page loads
const savedTodos = loadTodos();

savedTodos.forEach(function (text) {
    if (typeof text === "string" && text.trim() !== "") {
        createTodo(text);
    }
});
