window.onload = function(){
	const delay = 500;
	setInterval(function(){
		document.getElementById("counter").innerText ++;
	}, delay);

	const btn = document.getElementById('btn');

	btn.addEventListener('click', (e) => {
		alert('alert');
	});
}