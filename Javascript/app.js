function agregar() {
    var left = document.getElementById("left");
    var index = left.selectedIndex;
    var element = document.querySelector('select[name="foodFrom"] option:checked')
    left.remove(index);
    var right = document.getElementById("right");

    var optgroup = document.createElement("optgroup");
    right.appendChild(optgroup);
    optgroup.appendChild(element);

}

function remover() {
    var right = document.getElementById("right");
    var index = right.selectedIndex;
    var element = document.querySelector('select[name="food"] option:checked')
    right.remove(index);
    var left = document.getElementById("left");

    var optgroup = document.createElement("optgroup");
    left.appendChild(optgroup);
    optgroup.appendChild(element);
}

