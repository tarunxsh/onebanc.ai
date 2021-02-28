var i = 0;
var j = 0;
var speed = 200;
var txt =['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENTS', 'FOREX', 'ANALYTICS']

function typeWriter() {
	if(i==txt[j].length){
		i=0;
		j=(j+1)%9;
		document.getElementById("typing").innerHTML="";
	}

  if (i < txt[j].length) {
    document.getElementById("typing").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




var x=0;
var y=0;
function anime() {
	document.querySelectorAll(".s"+x).forEach((item)=>item.classList.add("selected"))
	setTimeout(animeremove, 2000);
	x=((x+1)%9)+1;
	setTimeout(anime, 2000);
}


function animeremove(){
	document.querySelectorAll(".s"+y).forEach((item)=>item.classList.remove("selected"))
	y = ((y+1)%9)+1;
}



function submitmail() {
  document.getElementById("mail").style.display = "none";
  document.getElementById("msg").style.display = "block";

}


typeWriter()
anime()