// // console.clear();

// let btns = document.querySelectorAll('button');

// for (i of btns) {
//   i.addEventListener('click', function() {
//     document.querySelector('.msg').innerHTML = this.innerHTML;
//   });
// }

const displays = document.querySelector('#display')

function handleColor(){
	//alert(`My favorite color is Green`);
    displays.textContent = `My favorite color is Jade`
}

document.querySelector('#color').addEventListener('click',handleColor);


function handlePlace(){

	displays.textContent = `My house is my favorite place to be`
}

document.querySelector('#place').addEventListener('click',handlePlace);


function handleRitual(){

	displays.textContent = `Decorating the Christmas tree`
}

document.querySelector('#ritual').addEventListener('click',handleRitual);