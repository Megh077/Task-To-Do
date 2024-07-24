function newElement() {
    let container = document.createElement("div");
    container.className="container"
    let listItem = document.createElement("li");
    let inputValue = document.getElementById("input-box").value;
    let textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode);
    listItem.onclick = function() {
        listItem.classList.toggle("checked");
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.id = "delete";
    deleteBtn.className = "deleteButton";
    deleteBtn.onclick = function deletion() {
        container.parentNode.removeChild(container);
    };
    container.appendChild(listItem);
    container.appendChild(deleteBtn);
    if (inputValue.trim() === "") {
        alert("You must write something");
    } 
    else {
        document.getElementById("mylist").appendChild(container);
    }
    document.getElementById("input-box").value = "";
}




