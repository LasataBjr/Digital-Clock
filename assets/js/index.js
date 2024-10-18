const hourEl= document.getElementById("hour");
const minuteEl= document.getElementById("minutes");
const secondEl= document.getElementById("seconds");
const ampm= document.getElementById("ampm");

function updateClock()
{
	let h= new Date().getHours();
	let m= new Date().getMinutes();
	let s= new Date().getSeconds();
	let ampmel= "AM";
	if(h>12)
	{
		ampmel="PM";
	}
	h = h<10 ? "0"+ h : h;
	m = m<10 ? "0"+ m : m;
	s = s<10 ? "0"+ s : s;
	
	hourEl.innerText= h;
	minuteEl.innerText= m;
	secondEl.innerText= s;
	ampm.innerText= ampmel;
	setTimeout(()=>{updateClock()},1000);
}
updateClock();