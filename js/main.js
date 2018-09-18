"use strict"

$(document).ready(function(){

	/********* 	activate circles during scrolling  *********/

var cirlcesList	= document.querySelector('.circles-list');
var docHeight = document.documentElement.clientHeight;

cirlcesList.children[0].firstElementChild.id = 'circles-active';

window.onscroll = function() {
	var docScrolled = window.pageYOffset;


	if ( docScrolled > docHeight && docScrolled < (docHeight * 2) ) {

		cirlcesList.children[0].firstElementChild.removeAttribute('id');
		cirlcesList.children[2].firstElementChild.removeAttribute('id');
		cirlcesList.children[3].firstElementChild.removeAttribute('id');
		cirlcesList.children[1].firstElementChild.id = 'circles-active';

	} else if ( docScrolled < docHeight ) {

		cirlcesList.children[1].firstElementChild.removeAttribute('id');
		cirlcesList.children[2].firstElementChild.removeAttribute('id');
		cirlcesList.children[3].firstElementChild.removeAttribute('id');
		cirlcesList.children[0].firstElementChild.id = 'circles-active';
		
	} else if ( docScrolled > (docHeight * 2) && docScrolled < (docHeight * 3) ) {

		cirlcesList.children[0].firstElementChild.removeAttribute('id');
		cirlcesList.children[1].firstElementChild.removeAttribute('id');
		cirlcesList.children[3].firstElementChild.removeAttribute('id');
		cirlcesList.children[2].firstElementChild.id = 'circles-active';

	} else if ( docScrolled > (docHeight * 3) ) {

		cirlcesList.children[0].firstElementChild.removeAttribute('id');
		cirlcesList.children[1].firstElementChild.removeAttribute('id');
		cirlcesList.children[2].firstElementChild.removeAttribute('id');
		cirlcesList.children[3].firstElementChild.id = 'circles-active';

	}

}


	/********* 	animating scroll  *********/

	$(".circles-list").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

	//detecting browser

	var user = detect.parse(navigator.userAgent),
	warningBox = document.getElementById('warning');

	if (user.browser.family === 'IE' || user.browser.family === 'Opera Mini') {
		warningBox.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	}

});

