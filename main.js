	function headingFadeIn() {
		pFadeIn();
		var elem = document.querySelector("#hider h1");
		elem.style.transform = "translateY(0)";
		elem.style.opacity = "1";
	}	
	function pFadeIn(){
		var plem = document.querySelector("#hider p");
		plem.style.transform= "translatez(0)";
		plem.style.opacity= "1";
	}
	function openNav() {
		document.getElementById("myNav").style.left = "0%";
	}
	function closeNav() {
		document.getElementById("myNav").style.left = "-100%";
	}

	window.onload = headingFadeIn; 