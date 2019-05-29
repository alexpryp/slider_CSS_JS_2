"use strict"

let lis = document.getElementsByTagName("li");

let width = 1000;

let slider = document.querySelector(".slider");
let list = slider.querySelector("ul");
let listElems = slider.querySelectorAll("li");
let timerId = null;
let thumbs = document.querySelector(".slider-thumbs");
let selectThumb = null;

let position = 0;

function back () {
	position = Math.min(position + width, 0);
	list.style.marginLeft = position + "px";
}

function forward () {
	position = Math.max(position - width, -width * (listElems.length - 1));
	list.style.marginLeft = position + "px";	
}

slider.querySelector('.prev').addEventListener("click", back);

slider.querySelector('.next').addEventListener("click", forward);

function autoSlide () {
	if (position > -3000) {
		forward();
	} else {
		position = 0;
		list.style.marginLeft = "0px";
	}
}

timerId = setInterval(autoSlide, 5000);

let slides = {
	"1": 0,
	"2": 1000,
	"3": 2000,
	"4": 3000
}

function showLargeImg(event) {
	let target = event.target;

	while (target != this) {
		if(target.nodeName == "IMG") {
			if(selectThumb) {
				selectThumb.classList.remove("thumbSelect");
			}
			
			selectThumb = target;
			target.classList.add("thumbSelect");
			list.style.marginLeft = -slides[target.getAttribute('data-number')] + "px";
		}
		target = target.parentNode;
	}
}

thumbs.addEventListener("click", showLargeImg);