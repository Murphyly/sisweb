var i = 0, qtdData;
getData(0);
function getData(i) {
var parserHttp = new XMLHttpRequest();
parserHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var section = " ";
        var objeto = JSON.parse(this.responseText);
        for(i in objeto.members)
        section += '<article><div><a href="' + objeto.members[i].link + 
        '"><img src="' + objeto.members[i].img + '"title="' + objeto.members[i].title 
        + '"alt="' + objeto.members[i].alt + '"></a></div><hr><h2>' + objeto.members[i].name + 
        "</h2></article>";
        document.getElementById("members").innerHTML = section;
    }
     };
     parserHttp.open("GET", "/assets/json/membros.json", true); 
     parserHttp.send();
 }

 function proximo() {
    if(i > 0) {
        i--;
        getData(i);
    }
}

function anterior() {
    if(i < qtdData - 1) {
        i++;
        getData(i);
    }
}