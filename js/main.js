function changeText() {
    var num = 0;
    var elems = document.getElementsByClassName("animated-text")[0].children;

    for (var i = 0; i < elems.length; i++ ) {
        if (elems[i].className === "is-active highlighted") {
            elems[i].className = "is-hidden"

            for (var j = 0; j < elems[i].children.length; j++) {
                elems[i].children[j].className = "out";
            }

            if (i + 1 > elems.length - 1) {
                num = 0
            } else {
                num = i + 1
            };
        };
    };
    elems[num].className = "is-active";
    typeText(elems[num]);
};

function typeText(elem) {
    var letters = elem.children

    for (var i = 0; i < letters.length; i++) {
        (function(i) {
            setTimeout(function(){letters[i].className = "in"}, i * 100)
        })(i);
    }

}

function highlightText() {
    var active = document.getElementsByClassName("is-active")
    active[0].classList.add("highlighted")
};


function animateText () {
    setTimeout(highlightText, 3500);
    setTimeout(changeText, 4000);
}

typeText(document.getElementsByClassName("is-active")[0]);
setTimeout(highlightText, 3500);
setTimeout(changeText, 4000);
setInterval(animateText, 4000);