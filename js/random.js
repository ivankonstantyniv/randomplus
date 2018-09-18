"use strict"

$(document).ready(function(){

	var randomForm = document.forms.random,
			inputMin 	 = randomForm.elements.numberMin,
			inputMax 	 = randomForm.elements.numberMax,
			value      = randomForm.elements.value;


	randomForm.onsubmit = function(e) {
		e.preventDefault();

		function randomInteger(min, max) {
			var rand = min - 0.5 + Math.random() * (max - min + 1)
			rand = Math.round(rand);
			return rand;
		}

		if  (
					isNaN(inputMin.value) ||
					isNaN(inputMax.value) ||
					Math.sign(inputMin.value) === -1 ||
					Math.sign(inputMax.value) === -1 ||
					+inputMin.value >= +inputMax.value
				) {
				value.value = 'Error! Something went wrong!';
		} else {
			value.value = randomInteger(+inputMin.value, +inputMax.value);
		}
		
		
	}


});



