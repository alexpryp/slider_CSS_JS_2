"use strict"

let lis = document.getElementsByTagName("li");

let width = 1000;

let slider = document.querySelector(".slider");
let list = slider.querySelector("ul");
let listElems = slider.querySelectorAll("li");

let position = 0;

function back () {
	position = Math.min(position + width, 0);
	list.style.marginLeft = position + "px";
}

function forward () {
	position = Math.max(position - width, -width * (listElems.length - 1));
	list.style.marginLeft = position + "px";	
}

slider.querySelector('.prev').onclick = back;

slider.querySelector('.next').onclick = forward;

function autoSlide () {
	if (position > -3000) {
		forward();
	} else {
		position = 0;
		list.style.marginLeft = "0px";
	}
}

let timerId = setInterval(autoSlide, 5000);