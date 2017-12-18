function changeText() {
    var num;
    var elems = document.getElementsByClassName("animated-text")[0].children

    for(var i = 0; i < elems.length; i++ ) {
        if (elems[i].className === "is-active") {
            elems[i].className = "is-hidden"
            if (i + 1 > elems.length - 1) {
                num = 0
            } else {
                num = i + 1
            }
        };
    };

    elems[num].className = "is-active";
}

function typeText() {

}

function highlightText() {

}


//setInterval(function() {changeText()}, 3000)