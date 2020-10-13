
var cont=0;

var myInterval = setInterval(() => setColor("#mi_mensaje"),400);

function setColor(t){
	var col = getColor3();
	$(t).css("background-color", col[0]);
	$(t).css("color", col[1]);
	console.log(cont++)
}

function getColor3(){
	gr = Math.floor(Math.random()*255);
	re = Math.floor(Math.random()*255);
	blu = Math.floor(Math.random()*255);
	gr1 = 255 - gr;
	re1 = 255- re;
	blu1 = 255- blu;
	return ["rgb("+ re+","+gr+","+blu+")","rgb("+ re1+","+gr1+","+blu1+")"];
  }

function frenarIntervalo(){
clearInterval(myInterval);
}