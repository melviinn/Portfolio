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
    deleteSpeed: 25
})
.changeDelay(80)
.typeString('developpeur')
.pauseFor(1000)
.deleteChars(11)
.pauseFor(1000)
.typeString('motivé')
.pauseFor(1000)
.deleteChars(6)
.pauseFor(1000)
.typeString('enthousiaste')
.pauseFor(1000)
.deleteChars(12)
.pauseFor(1000)
.typeString('polyvalent')
.pauseFor(1000)
.deleteChars(10)
.pauseFor(1000)
.typeString('assidu')
.pauseFor(1000)
.deleteChars(6)
.pauseFor(1000)
.start()

