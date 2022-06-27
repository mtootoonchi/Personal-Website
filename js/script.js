window.addEventListener('scroll', () => { // Listen for scroll

let scroll = window.pageYOffset; // get page-Y-offset value with every scroll

//If the scroll is greater than position, user has scrolled down, else they scrolled up
scroll == 0 ? document.getElementById("titleHeaderID").setAttribute('style', 'border-color: #131313') : document.getElementById("titleHeaderID").setAttribute('style', 'border-color: whitesmoke');

scroll > 700 && scroll < 1551 ? document.getElementById("textLink0ID").setAttribute('style', 'background-color: whitesmoke') : document.getElementById("textLink0ID").setAttribute('style', 'background-color: #444444')

scroll > 1550 ? document.getElementById("textLink1ID").setAttribute('style', 'background-color: whitesmoke') : document.getElementById("textLink1ID").setAttribute('style', 'background-color: #444444')

console.log(scroll);

});