document.addEventListener('DOMContentLoaded', function() {

	var accordion = document.querySelector('.accordion');
	var headings = document.getElementsByClassName('accordion-heading');

	var togglePanel = function (targetHeading) {
		var targetPanel = targetHeading.nextElementSibling,
		hidden = targetPanel.getAttribute('aria-hidden');
		if (hidden == "true") {
			targetHeading.setAttribute('aria-pressed', "true");
			targetPanel.setAttribute('aria-hidden', "false");
			targetPanel.setAttribute('aria-expanded', "true");
			targetHeading.childNodes[1].innerHTML = "&ndash;";
		}

		else if(hidden == "false") {
			targetHeading.setAttribute('aria-pressed', "false");
			targetPanel.setAttribute('aria-hidden', "true");
			targetPanel.removeAttribute('aria-expanded');
			targetHeading.childNodes[1].innerHTML = "&#43;";
		}
	}

	var handleClick = function (event) {
		
		togglePanel(event.target);
		event.preventDefault();
	}


	var handleKeypress = function (event) {
		var key = event.keyCode,

		targetHeading = event.target;
		targetPanel = targetHeading.nextElementSibling;


		if (key === 37 || key === 38) {
			if (targetHeading.previousElementSibling) {
				targetHeading = targetHeading.previousElementSibling.previousElementSibling;
			}

			else {
				targetHeading = targetHeading.parentNode.lastElementChild.previousElementSibling;
			}
		}

		else if (key === 39 || key === 40) {
			if (targetHeading.nextElementSibling.nextElementSibling) {
				targetHeading = targetHeading.nextElementSibling.nextElementSibling;
			}

			else {
				targetHeading = targetHeading.parentNode.firstElementChild;
			}
		}

		else if (key === 13 || key === 32) {
			togglePanel(targetHeading);
		}

		if (targetHeading) {
			targetHeading.focus();
		}

	}

	for (var i = 0; i < headings.length; i++) {
		headings[i].addEventListener('click', handleClick);
	}
	
	headings[0].focus();

	accordion.addEventListener('keyup', handleKeypress);
});