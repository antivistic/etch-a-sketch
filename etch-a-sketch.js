const startButton = document.querySelector("#makeGrid");
startButton.addEventListener('click', makeGrid);
const gridContainer = document.getElementById("grid-container");

function makeGrid(e) {	//creates a grid that is num x num area.
	let num = 10;
    gridContainer.style.setProperty('--grid-rows', num);
    gridContainer.style.setProperty('--grid-cols', num);
	for (i = 0; i < (num * num); i++) {
		let cell = document.createElement("div");
		//cell.innerText = (i + 1);
		gridContainer.appendChild(cell).className = "grid-item";
	};
};