var d = new Date();
document.getElementById("date-time").innerHTML = d.toDateString();

//var hero = document.getElementById('hero'),
   var leaves = document.getElementById("leaves"),
    viewportHeight = Math.max(window.innerHeight || 0),
    leavesOffsetTop = leaves.offsetTop;

//hero.style.height = viewportHeight + 'px';

var hasScrolled = function() {

    var fromTop = document.body.scrollTop || document.documentElement.scrollTop || 0;

    if (leavesOffsetTop < fromTop) {
        leaves.classList.add('fixed-position');
    } else {
        leaves.classList.remove('fixed-position');
    }

}

window.addEventListener('scroll', hasScrolled);