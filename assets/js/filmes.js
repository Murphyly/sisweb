var i = 0, qtdData;
getData(0);
function getData(i) {
var parserHttp = new XMLHttpRequest();
parserHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var section = " ";
        var objeto = JSON.parse(this.responseText);
        for(i in objeto.movies){
            section += '<article><div><h2>' + objeto.movies[i].TITLEMOVIE + '</h2><img src="' 
            + objeto.movies[i].IMG + '" alt="' + 
            objeto.movies[i].ALTIMG +'"></div><p>' + 
            objeto.movies[i].RESUME + '</p><iframe src="'+ 
            objeto.movies[i].TEASER + '"></iframe><div><h5>Elenco</h5><ul>';
            for(j in objeto.movies[i].CAST){
                section += '<li>' + objeto.movies[i].CAST[j].ACTOR + '</li>';
            }
            section += '</ul></div><a href="' + objeto.movies[i].REVIEW 
            + '">Resenha Crítica</a></article>';
        }
        document.getElementById('content').innerHTML = section;
    }
     };
     parserHttp.open("GET", "/assets/json/filmes.json", true); 
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