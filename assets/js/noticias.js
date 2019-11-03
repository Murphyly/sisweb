var i = 0, qtdData;
getData(0);
function getData(i) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("news").innerHTML = this.responseText;
        var datas = this.responseXML.getElementsByTagName("article");
        var section=' ';
        for(i = 0; i < datas.length; i++)
        section += '<article><h2>' + datas[i].getElementsByTagName("titlenotice")[0].childNodes[0].nodeValue + '</h2><h5>' 
        + datas[i].getElementsByTagName("datanotice")[0].childNodes[0].nodeValue + '</h5><p>' + 
        datas[i].getElementsByTagName("notice")[0].childNodes[0].nodeValue + '</p><a href="' + 
        datas[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + '">Veja aqui</a></article>';
        document.getElementById('news').innerHTML = section;
    }
     };
     xmlhttp.open("GET", "/assets/xml/noticia.xml", true); 
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