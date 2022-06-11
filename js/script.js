/*const search = document.querySelector('.header__search');
const btn = document.querySelector('.header__btn');

btn.addEventListener('click', function() {
    search.classList.toggle('header__active');
});*/

const login = document.querySelector('.header__btn');
const form = document.querySelector('[data-modal]');
const cros = document.querySelector('.header__remove');

login.addEventListener('click', function() {
    form.classList.remove('hidden');
});

cros.addEventListener('click', function() {
    form.classList.add('hidden');
})

form.addEventListener('click', function() {
    form.classList.add('hidden');
})

form.querySelector('.header__in').addEventListener('click', function(e) {
    e.stopPropagation();
});




const burger = document.querySelector('.header__burger');
const menuOpen = document.querySelector('.header__section');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    menuOpen.classList.toggle('open');
});

'use strict';

$(document).ready(function(){

	$('.slider__content').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive:[
			{
				breakpoint: 920,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1
				}
			}
		]
	});
});

const introButton = Array.from(document.querySelectorAll('.intro__item'))
const introContent = Array.from(document.querySelectorAll('.intro__photo'))

const clearActive = (element, className = 'intro__active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActive = (element, index, className = 'intro__active') => {
	element[index].classList.add(`${className}`)
}

const check = (item, index) => {
	item.addEventListener('click', () => {
		console.log(item)

		clearActive(introButton)
		clearActive(introContent)

		setActive(introButton, index)
		setActive(introContent, index)
	})
}

introButton.forEach(check)

/* Function

const section = document.querySelectorAll('.intro__item');
const picture = document.querySelector('.intro__first');

console.log(section);

section.forEach(function(i) {

    i.addEventListener('click', function() {
        section[0].classList.toggle('intro__active');
        
    });
});
*/


    