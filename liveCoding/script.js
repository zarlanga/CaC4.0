
var cont=1;

//var myInterval = setInterval(() => setColor("#mi_mensaje"),400);

var myInterval = setInterval( () => setColor("#pal"),250);

function setColor(t){
	var col = getColor3();
	$(t+cont).css("background-color", col[0]);
	$(t+cont).css("color", col[1]);
	console.log(cont++)
	if (cont == 4) cont = 1;
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