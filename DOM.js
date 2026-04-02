let input = document.getElementById("userinput");
let button = document.getElementById("addtask");
let list = document.getElementById("list");
let error = document.getElementById("error");

button.addEventListener("click", function () {

    if (input.value === "") {
        error.innerText = "Enter the task";
        error.style.color = "red";
        return;
    }

    error.innerText = "";

    let li = document.createElement("li");
    li.innerText = input.value;

    // delete button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Delete";

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = ""; // clear input
});