function addanimal() {
    var x = document.getElementById("input").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(x);
    node.appendChild(textnode);
    document.getElementById("animals").appendChild(node);
    reset();
    itemcount();
}
function reset() {
    document.getElementById("input").value = "";
}
function itemcount() {
    var z = document.getElementById("animals").getElementsByTagName("li");
    var count = z.length;
    document.getElementById("demo").innerHTML = count;
}