//your JS code here. If required.


let para  = document.querySelector("#timer");



function  ClockTimer(){

let time_date = new Date();
	
	let str = ""
	let h = time_date.getHours();
	let mi = time_date.getMinutes();
	let s = time_date.getSeconds();

	let d = time_date.getDate();
	let m = time_date.getMonth()+1;
	let y = time_date.getFullYear();

	// let d = d<10?"0":d;
	 m = m<10?"0"+m:m;
     mi = mi<10?"0"+mi:mi;
	s = s < 10 ? "0" + s : s;

	let ap = h>=12?"AM":"PM";

	h = h%12;
	h = h?h:12

	
	str = `${d}/${m}/${y}, ${h}:${mi}:${s} ${ap}`;
	para.innerText = str;

	// /function call after 1 second;
	setTimeout(()=>{
		ClockTimer();
	},1000);
	
}

ClockTimer();
	

	
	
	
	

	
