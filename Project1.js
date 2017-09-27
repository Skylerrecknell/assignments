function alphabetizing() {
    var initial = document.getElementById("Listinput").value;
    var array = initial.split(", ");
    var sorted = array.sort();
    var clean = sorted.join(" / ");
    document.getElementById("demo").innerHTML = clean;
    document.getElementById("Listinput").value = "";
}
    
