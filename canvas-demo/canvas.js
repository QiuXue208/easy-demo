
var div = document.getElementById('canvas');

var painting = false;

div.onmousedown = function (a) {

    painting = true;
    //  console.log(a)
    var x = a.clientX;
    //  console.log(x)
    var y = a.clientY;
    //  console.log(y)
    var divA = document.createElement('div');
    divA.style = "background:black;width:6px; height:6px;" +
        "border-radius:50%;position:absolute;left:" + (x - 1) + "px;" +
        "top:" + (y - 1) + "px;";
    div.appendChild(divA);
}

div.onmousemove = function (a) {
    if (painting) {
        var x = a.clientX;
        var y = a.clientY;
        var divB = document.createElement('div');
        divB.style = "background:black;width:6px; height:6px;" +
            "border-radius:50%;position:absolute;left:" + (x - 1) + "px;" +
            "top:" + (y - 1) + "px;";
        div.appendChild(divB);
    }else{

    }
}
div.onmouseup = function(){
    painting = false;
}