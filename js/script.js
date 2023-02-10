let lastScrollTop = 0;
navbar = document.getElementById("navigation");
window.addEventListener("scroll", function() {
	var scrollTop = window.pageYOffSet || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top= "-82px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})

// ---------------------------- //

const txtAnim = document.getElementById("text_anim");

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(80)
.typeString('Duchaufour Melvin')
.pauseFor(1000)
.deleteChars(17)
.pauseFor(1000)
.start()

