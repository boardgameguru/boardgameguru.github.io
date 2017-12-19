function changeText() {
    var num = 0;
    var elems = document.getElementsByClassName("animated-text")[0].children;

    for (var i = 0; i < elems.length; i++ ) {
        if (elems[i].className === "is-active highlighted") {
            elems[i].className = "is-hidden"
            if (i + 1 > elems.length - 1) {
                num = 0
            } else {
                num = i + 1
            };
        };
    };
    elems[num].className = "is-active";
};

function typeText() {

}

function highlightText() {
    var active = document.getElementsByClassName("is-active")
    active[0].classList.add("highlighted")
};


function animateText () {
    setTimeout(highlightText, 2500);
    setTimeout(changeText, 3000)
}

animateText();
setInterval(animateText, 3000);