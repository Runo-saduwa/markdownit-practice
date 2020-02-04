window.addEventListener('DOMContentLoaded', () => {
    fetch('/').then((response) => {
		response.json().then((data) => {
            console.log(data);
            // const body = document.querySelector('div');
            // body.innerHTML = data.result;
		});
	});
 
})