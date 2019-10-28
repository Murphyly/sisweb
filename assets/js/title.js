var c = document.getElementById("myCanvas");
if (c.getContext){
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(50,0);
    ctx.lineTo(100,100);
    ctx.lineTo(150,0);
    ctx.stroke();

    ctx.moveTo(160,0);
    ctx.lineTo(160,100);
    ctx.stroke();

	ctx.moveTo(170,0);
    ctx.lineTo(170,100);
    ctx.lineTo(170,0);
    ctx.lineTo(200,100);
    ctx.lineTo(200,100);
	ctx.lineTo(200,0);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(255, 50, 45, 0.5, 1.9 * Math.PI);
	ctx.moveTo(295,70);
	ctx.lineTo(250,70);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(300,100);
	ctx.lineTo(330,0);
	ctx.lineTo(360,100);
	ctx.lineTo(345,50);
	ctx.lineTo(315,50);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(370,0);
	ctx.lineTo(370,100);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(370,50,50,Math.PI*1.5,Math.PI*0.5,false);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(480,50,50,0,Math.PI*2);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(540,100);
	ctx.lineTo(540,0);
	ctx.arc(540,25,25,Math.PI*1.5,Math.PI*0.5,false);
	ctx.lineTo(570,100);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(615,0);
	ctx.lineTo(580,0);
	ctx.lineTo(580,50);
	ctx.moveTo(615,50);
	ctx.lineTo(580,50);
	ctx.lineTo(580,100);
	ctx.lineTo(615,100);
    ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(650,25,25,Math.PI*2,Math.PI*0.5,true);
	ctx.arc(650,75,25,Math.PI*1.5,Math.PI*1,false);
    ctx.stroke();
	ctx.closePath();


}

