var i = 0, qtdData;
getData(0);
function getData(i) {
var parserHttp = new XMLHttpRequest();
parserHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var section = " ";
        var objeto = JSON.parse(this.responseText);
        for(i in objeto.news)
        section += '<article><h2>' + objeto.news[i].titlenotice + '</h2><h5>' 
        + objeto.news[i].datanotice + '</h5><p>' + 
        objeto.news[i].notice + '</p><a href="' + 
        objeto.news[i].link + '">Veja aqui</a></article>';
        document.getElementById('news').innerHTML = section;
    }
     };
     parserHttp.open("GET", "/assets/json/noticias.json", true); 
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