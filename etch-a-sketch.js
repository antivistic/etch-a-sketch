const startButton = document.querySelector("#makeGrid");
startButton.addEventListener('click', makeGrid);
const gridContainer = document.getElementById("grid-container");

function makeGrid(e) {	//creates a grid that is num x num area.
	clearGrid();
	let num = prompt("How big would you like your square grid? Please note the max number is 100. Ex: 64 would create a 64x64 grid.");
	if (num < 1 || isNaN(num) || num > 100) {
		alert("Please enter a number between 1 and 100.");
		return;
	}
    gridContainer.style.setProperty('--grid-rows', num);
    gridContainer.style.setProperty('--grid-cols', num);
	for (i = 0; i < (num * num); i++) {
		let cell = document.createElement("div");
		cell.setAttribute('id',`cell${i}`);
		gridContainer.appendChild(cell).className = "grid-item";
		cell.addEventListener('mouseover', () => {
			cell.classList.add('permahover');
		});
	};
};

function clearGrid() {
	let cells = document.querySelectorAll('.grid-item');
	cells.forEach(cell => {
		cell.remove();
	});
};