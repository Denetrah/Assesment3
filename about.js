console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

// form.addEventListener('submit', handleSubmit);
// document.getElementById("duck").addEventListener("mouseover",mouseOver);
// document.getElementById("duck").addEventListener("mouseout",mouseOut)
function displayQuote() {
	document.getElementById("duck").value= "You're Doing Great"
}


function myFunction() {
	alert("Successfully Submitted")
}

