let prevScrollPos = window.scrollY;

window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").classList.remove("sh");
    } else {
        document.querySelector("header").classList.add("sh");
    }
    prevScrollPos = currentScrollPos;
}