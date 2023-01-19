'use strict';

const button = document.querySelector('.button');
const body= document.querySelector('.body');
const colorResult = document.querySelector('.hidden');

function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
	let color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
	return "rgb" + color;
}

function handleClick(ev) {
    ev.preventDefault();
	const result = colorRGB()
	body.style.background = result;
	colorResult.classList.remove('hidden');
	colorResult.innerHTML = `El color selecciondo es: ${result}`
	button.style.color=result;
	button.style.borderColor=result;
}

button.addEventListener('click', handleClick);
