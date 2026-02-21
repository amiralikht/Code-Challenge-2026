document.addEventListener('DOMContentLoaded', () => {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const menuBtnImage = document.getElementById('menu-btn-image');
	const backToTop = document.getElementById('back-to-top');
	const form = document.getElementById("contact-form");
	const formStatus = document.getElementById("form-status");

	const toggleMenu = () => {
		const isOpen = menu.classList.toggle("visible");
		menuBtn.setAttribute("aria-expanded", isOpen);
		menuBtnImage.src = isOpen ? "assets/xmark.svg" : "assets/bars.svg";
	}

	menuBtn.addEventListener('click', toggleMenu);

	if (backToTop) {
		const handleScroll = () => {
			const atBottom =
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 2;

			backToTop.classList.toggle("visible", atBottom);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
	}
	if(form){
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const requiredFields = form.querySelectorAll("[required]");
			let isValid = true;

			requiredFields.forEach(element => {
				const value = element.value.trim();
				const checkInput = !value || !element.checkValidity();
				element.classList.toggle("input-error", checkInput);
				if (checkInput) isValid = false;
			});
			if(!isValid){
				formStatus.innerText = "Please fill out all required fields correctly";
				return;
			}
			formStatus.innerText = "";
			alert('Form submitted!');
			form.reset();
		});
	}
});

