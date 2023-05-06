const discoverBox = document.querySelector('.discover__box')
const discoverImg = document.querySelector('.discover__img')
const sponsors = document.querySelector('.sponsors')
const analytics = document.querySelector('.analytics')
const ourAppBox = document.querySelector('.our-app__box')
const ourAppImg = document.querySelector('.our-app__img')
const commentsBox = document.querySelector('.comments__box')
const action = document.querySelector('.action')

window.addEventListener("scroll", function () {
	function getOffset(el) {
		const rect = el.getBoundingClientRect();
		return {
			left: rect.left + window.scrollX,
			top: rect.top + window.scrollY
		};
	}

	if (getOffset(discoverBox).top <= this.innerHeight && getOffset(discoverImg).top <= this.innerHeight) {
		sponsors.style.transform = "translateY(0px)"
		sponsors.style.opacity = "1"
		discoverBox.style.transform = "translateX(0px)"
		discoverBox.style.opacity = "1"
		discoverImg.style.transform = "translateX(0px)"
		discoverImg.style.opacity = "1"
	}
	if (getOffset(discoverBox).top * -1 >= this.innerHeight - 400) {
		sponsors.style.transform = "translateY(100px)"
		sponsors.style.opacity = "0"
		discoverBox.style.transform = "translateX(-100px)"
		discoverBox.style.opacity = "0"
		discoverImg.style.transform = "translateX(100px)"
		discoverImg.style.opacity = "0"
	}

	if (getOffset(analytics).top <= this.innerHeight - 250) {
		analytics.style.transform = "translateY(0px)"
		analytics.style.opacity = "1"
	}
	if (getOffset(analytics).top * -1 >= this.innerHeight - 450) {
		analytics.style.transform = "translateY(-100px)"
		analytics.style.opacity = "0"
	}
	if (getOffset(ourAppBox).top <= this.innerHeight - 100) {
		ourAppBox.style.transform = "translateX(0px)"
		ourAppBox.style.opacity = "1"
		ourAppImg.style.transform = "translateX(0px)"
		ourAppImg.style.opacity = "1"
	}
	if (getOffset(ourAppBox).top * -1 >= this.innerHeight - 300) {
		ourAppBox.style.transform = "translateX(-100px)"
		ourAppBox.style.opacity = "0"
		ourAppImg.style.transform = "translateX(100px)"
		ourAppImg.style.opacity = "0"
	}
	if (getOffset(commentsBox).top <= this.innerHeight - 200) {
		commentsBox.style.transform = "translateY(0px)"
		commentsBox.style.opacity = "1"
	}
	if (getOffset(commentsBox).top * -1 >= this.innerHeight - 400) {
		commentsBox.style.transform = "translateY(-100px)"
		commentsBox.style.opacity = "0"
	}
	if (getOffset(action).top <= this.innerHeight - 200) {
		action.style.opacity = "1"
	}
	if (getOffset(action).top * -1 >= this.innerHeight - 400) {
		action.style.opacity = "0"
	}

}, true);

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}

if (getOffset(discoverBox).top <= this.innerHeight && getOffset(discoverImg).top <= this.innerHeight) {
	sponsors.style.transform = "translateY(0px)"
	sponsors.style.opacity = "1"
	discoverBox.style.transform = "translateX(0px)"
	discoverBox.style.opacity = "1"
	discoverImg.style.transform = "translateX(0px)"
	discoverImg.style.opacity = "1"
}
if (getOffset(discoverBox).top * -1 >= this.innerHeight - 400) {
	sponsors.style.transform = "translateY(100px)"
	sponsors.style.opacity = "0"
	discoverBox.style.transform = "translateX(-100px)"
	discoverBox.style.opacity = "0"
	discoverImg.style.transform = "translateX(100px)"
	discoverImg.style.opacity = "0"
}

if (getOffset(analytics).top <= this.innerHeight - 250) {
	analytics.style.transform = "translateY(0px)"
	analytics.style.opacity = "1"
}
if (getOffset(analytics).top * -1 >= this.innerHeight - 450) {
	analytics.style.transform = "translateY(-100px)"
	analytics.style.opacity = "0"
}
if (getOffset(ourAppBox).top <= this.innerHeight - 100) {
	ourAppBox.style.transform = "translateX(0px)"
	ourAppBox.style.opacity = "1"
	ourAppImg.style.transform = "translateX(0px)"
	ourAppImg.style.opacity = "1"
}
if (getOffset(ourAppBox).top * -1 >= this.innerHeight - 300) {
	ourAppBox.style.transform = "translateX(-100px)"
	ourAppBox.style.opacity = "0"
	ourAppImg.style.transform = "translateX(100px)"
	ourAppImg.style.opacity = "0"
}
if (getOffset(commentsBox).top <= this.innerHeight - 200) {
	commentsBox.style.transform = "translateY(0px)"
	commentsBox.style.opacity = "1"
}
if (getOffset(commentsBox).top * -1 >= this.innerHeight - 400) {
	commentsBox.style.transform = "translateY(-100px)"
	commentsBox.style.opacity = "0"
}
if (getOffset(action).top <= this.innerHeight - 200) {
	action.style.opacity = "1"
}
if (getOffset(action).top * -1 >= this.innerHeight - 400) {
	action.style.opacity = "0"
}

const burgerMenu = document.querySelector('.header__offcanvas-body')
const backgourndOpacity = document.querySelector('.background-opacity')

document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-offcanvas-button]");
	if (!isDropdownButton && e.target.closest("[data-offcanvas]") != null) return;
	let currentDropdown;
	if (isDropdownButton) {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
		currentDropdown = e.target.closest("[data-offcanvas]");
		currentDropdown.classList.toggle("active");
		backgourndOpacity.classList.toggle("active");
		if (burgerMenu.classList.value.match(/active/gm) == 'active') {
			document.querySelector('body').style.overflow = "hidden"
			document.querySelector('body').style.opacity = "1"
		} else {
			document.querySelector('body').style.overflow = "auto"
		}
	}
	document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
		if (offcanvas === currentDropdown) return;
		offcanvas.classList.remove("active");
		backgourndOpacity.classList.remove("active");
		if (burgerMenu.classList.value.match(/header__offcanvas-body/gm) == 'header__offcanvas-body') {
			document.querySelector('body').style.overflow = "auto"
		}
	});
	document.querySelector('.header__offcanvas-btn').addEventListener('click', () => {
		document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
			offcanvas.classList.remove("active");
			backgourndOpacity.classList.remove("active");
			if (burgerMenu.classList.value.match(/header__offcanvas-body/gm) == 'header__offcanvas-body') {
				document.querySelector('body').style.overflow = "auto"
			}
		});
	});
	if (window.innerWidth >= 576) {
		document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
			offcanvas.classList.remove("active");
			backgourndOpacity.classList.remove("active");
			if (burgerMenu.classList.value.match(/header__offcanvas-body/gm) == 'header__offcanvas-body') {
				document.querySelector('body').style.overflow = "auto"
			}
		});
	}
	window.addEventListener('resize', function (event) {
		if (window.innerWidth >= 576) {
			document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
				offcanvas.classList.remove("active");
				backgourndOpacity.classList.remove("active");
				if (burgerMenu.classList.value.match(/header__offcanvas-body/gm) == 'header__offcanvas-body') {
					document.querySelector('body').style.overflow = "auto"
				}
			});
		}
	}, true);
});