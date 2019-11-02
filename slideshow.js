slide = document.getElementsByClassName("slide");
var index = 0;
var cc;
var count = 0;
shows(1);
function shows(n) {
    var i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[n - 1].style.display = "block";
    index = n;
}
function show() {

    index++;
    if (index > slide.length) {
        index = 1;
    }
    shows(index);
    timeout = setTimeout(show, 1000);

}

function pause() {
    clearTimeout(timeout);
}
function changeStatus() {

    switch (count % 2) {
        case 0:
            show();
            document.getElementById("icon2").src = "image/pause.png";
            break;
        case 1:
            pause();
            document.getElementById("icon2").src = "image/play.png";
            break;
    }
    count++;
}
