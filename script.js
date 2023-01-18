const toggleTarget = document.getElementById("display-cursos");
const toggleBoton = document.getElementById("button-cursos");
toggleBoton.addEventListener("click", ToggleDisplay);

function ToggleDisplay() {
	if (toggleTarget.style.display == "block") {
		toggleBoton.innerText = "Desplegar cursos";
		toggleTarget.style.display = "none";
	} else {
		toggleBoton.innerText = "Ocultar cursos";
		toggleTarget.style.display = "block";
	}
}

const toggleTargetInfo = document.getElementById("display-info");
const toggleBotonInfo = document.getElementById("button-info");
toggleBotonInfo.addEventListener("click", ToggleDisplayInfo);

function ToggleDisplayInfo() {
	if (toggleTargetInfo.style.display == "block") {
		toggleBotonInfo.innerText = "Desplegar informacion sensible";
		toggleTargetInfo.style.display = "none";
	} else {
		toggleBotonInfo.innerText = "Ocultar informacion sensible";
		toggleTargetInfo.style.display = "block";
	}
}
