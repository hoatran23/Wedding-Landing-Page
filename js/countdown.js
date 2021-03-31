var countDate = new Date('May 9, 2021 11:30:00').getTime();

function WeddingDay() {
	var now = new Date().getTime();
	if (now > countDate) {
		document.getElementById('day').innerText = '00';
		document.getElementById('hour').innerText = '00';
		document.getElementById('minute').innerText = '00';
		document.getElementById('second').innerText = '00';
	} else {
		gap = countDate - now;

		var second = 1000;
		var minute = second * 60;
		var hour = minute * 60;
		var day = hour * 24;

		var d = Math.floor(gap/(day));
		var h = Math.floor((gap%(day))/(hour));
		var m = Math.floor((gap%(hour))/(minute));
		var w = Math.floor((gap%(minute))/(second));

		document.getElementById('day').innerText = d;
		document.getElementById('hour').innerText = h;
		document.getElementById('minute').innerText = m;
		document.getElementById('second').innerText = w;
	}

		
}

setInterval(function() {
	WeddingDay();
}, 1000);