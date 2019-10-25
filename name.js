
function addName() {
    var task = document.getElementById("nameField").value;
        listNode = document.getElementById("myList");
        liNode = document.createElement("LI");
        
        taskNode = document.createTextNode(task);
        liNode.appendChild(taskNode);
        listNode.appendChild(liNode);
        TransformStream.removeChild("nameField").value;
}
