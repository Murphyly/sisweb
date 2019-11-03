var i = 0, qtdData;
getData(0);
function getData(i) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
        var datas = this.responseXML.getElementsByTagName("MOVIE");
        var datasInner = this.responseXML.getElementsByTagName("CAST");
        var section=' ';
        for(i = 0; i < datas.length; i++) {
            section += '<article><div><h2>' + datas[i].getElementsByTagName("TITLEMOVIE")[0].childNodes[0].nodeValue + '</h2><img src="' 
            + datas[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue + '" alt="' + 
            datas[i].getElementsByTagName("ALTIMG")[0].childNodes[0].nodeValue +'"></div><p>' + 
            datas[i].getElementsByTagName("RESUME")[0].childNodes[0].nodeValue + '</p><iframe src="'+ 
            datas[i].getElementsByTagName("TEASER")[0].childNodes[0].nodeValue + '"></iframe><div><h5>Elenco</h5><ul>';
            for(j = 0; j < datasInner.length; j++) {
                section += '<li>' + datasInner[j].getElementsByTagName("ACTOR")[0].childNodes[0].nodeValue + '</li>';
            }
            section += '</ul></div><a href="' + datas[i].getElementsByTagName("REVIEW")[0].childNodes[0].nodeValue 
            + '">Resenha Crítica</a></article>';
        }
        document.getElementById('content').innerHTML = section;
    }
     };
     xmlhttp.open("GET", "/assets/xml/filme.xml", true); 
     xmlhttp.send();
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