"use strict"

let lis = document.getElementsByTagName("li");
let width = 1000;
let slider = document.querySelector(".slider");
let list = slider.querySelector("ul");
let listElems = slider.querySelectorAll("li");
let timerId = null;
let thumbs = document.querySelector(".slider-thumbs");
let selectThumb = document.querySelector("img[data-number='1']");
let position = 0;

let slides = {
	"1": 0,
	"2": 1000,
	"3": 2000,
	"4": 3000,
	"0": 1,
	"1000": 2,
	"2000": 3,
	"3000": 4
}

//adding a thumbSelect class to the corresponding thumbnail
function highlight(position) {
	let elem = null;
	let slideNum = slides[ ""+ Math.abs(position)];
	
	elem = `img[data-number="${slideNum}"]`;
	elem = document.querySelector(elem);

	if(selectThumb) {
		selectThumb.classList.remove("thumbSelect");
	}

	selectThumb = elem;
	elem.classList.add("thumbSelect")
}

function back () {
	position = Math.min(position + width, 0);
	highlight(position);
	list.style.marginLeft = position + "px";
}

function forward () {
	position = Math.max(position - width, -width * (listElems.length - 1));
	highlight(position);
	list.style.marginLeft = position + "px";	
}

slider.querySelector('.prev').addEventListener("click", back);
slider.querySelector('.next').addEventListener("click", forward);

function autoSlide () {
	if (position > -3000) {
		forward();
	} else {
		position = 0;
		highlight(0);
		list.style.marginLeft = "0px";
	}
}

timerId = setInterval(autoSlide, 5000);

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