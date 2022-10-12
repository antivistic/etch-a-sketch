const startButton = document.querySelector("#makeGrid");
startButton.addEventListener('click', makeGrid);

const basicButton = document.querySelector('#basicBlack');
basicButton.addEventListener('click', toggleBasicListener);

const randomButton = document.querySelector('#randomToggle');
randomButton.addEventListener('click', toggleRandomListener);

const shaderButton = document.querySelector('#shadeToggle');
shaderButton.addEventListener('click', toggleShaderListener);

const gridContainer = document.getElementById("grid-container");

let cells = [];

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
	};
	toggleBasicListener();
	setBrightness();
}

function clearGrid() {
	cells = document.querySelectorAll('.grid-item');
	cells.forEach(cell => {
		cell.remove();
	});
}

function getRandomRGB() {
	return Math.floor(Math.random() * 255);
}

function toggleBasicListener() {
	removeListeners();
	cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
    	cell.style.setProperty('background-color', 'black');
    }));
}

function toggleRandomListener() {
	removeListeners();
	cells = document.querySelectorAll('.grid-item');
	cells.forEach(cell => cell.addEventListener('mouseover', () => {
	 	cell.style.setProperty('background-color', `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`);
	 	cell.style.setProperty('filter', 'brightness(1)');
    }));
}

function toggleShaderListener() {
	removeListeners();
	let brightLevel;
	let str;
	cells = document.querySelectorAll('.grid-item');
	cells.forEach(cell => cell.addEventListener('mouseover', () => {
        str = (cell.style.filter);
        console.log(str);
        brightLevel = parseFloat(str.match(/[\d\.]+/));
        console.log(brightLevel);
        brightLevel = brightLevel - (brightLevel / 10);
	 	cell.style.setProperty('filter', `brightness(${brightLevel})`);
    }));
}

function removeListeners() {
	cells = document.querySelectorAll('.grid-item');
	for (i = 0; i < cells.length; i++) {
		cells[i].replaceWith(cells[i].cloneNode(true));
	};
}

function setBrightness () {
	cells = document.querySelectorAll('.grid-item');
	for (i = 0; i < cells.length; i++) {
		cells[i].style.setProperty('filter', 'brightness(1)');
	}
}