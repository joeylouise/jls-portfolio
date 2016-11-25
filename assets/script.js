var d = new Date();
document.getElementById("date-time").innerHTML = d.toDateString();

// //var hero = document.getElementById('hero'),
//    var leaves = document.getElementById("leaves"),
//     viewportHeight = Math.max(window.innerHeight || 0),
//     leavesOffsetTop = leaves.offsetTop;

// //hero.style.height = viewportHeight + 'px';

// var hasScrolled = function() {

//     var fromTop = document.body.scrollTop || document.documentElement.scrollTop || 0;

//     if (leavesOffsetTop < fromTop) {
//         leaves.classList.add('fixed-position');
//     } else {
//         leaves.classList.remove('fixed-position');
//     }

// }

// window.addEventListener('scroll', hasScrolled);

function showNav(target){
	document.getElementById(target).style.display = 'block';
	document.getElementById("site-nav__cross").style.display = 'block';
	document.getElementById("site-nav__hamburger").style.display = 'none';
}

function hideNav(target){
	document.getElementById(target).style.display = 'none';
	document.getElementById("site-nav__hamburger").style.display = 'block';
	document.getElementById("site-nav__cross").style.display = 'none';
}

function restoreDisplay() {
	document.getElementById("site-nav__cross").style.display = 'none';
	if (window.innerWidth > 629) {
		document.getElementById("site-nav__list").style.display = 'block';
		document.getElementById("site-nav__hamburger").style.display = 'none';
	} else {
		document.getElementById("site-nav__list").style.display = 'none';
		document.getElementById("site-nav__hamburger").style.display = 'block';
	}
}