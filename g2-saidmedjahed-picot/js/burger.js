var burger = document.querySelector('.burger');
var li = document.querySelectorAll('.hidden');


burger.addEventListener('click', function(event) {
	for (var i = 0; i < li.length; i++) {
		if (li[i].className === 'hidden') {
			li[i].className = 'visible';
		}
		else if (li[i].className === 'visible'){
			li[i].className = 'hidden';
		};	
	}
})