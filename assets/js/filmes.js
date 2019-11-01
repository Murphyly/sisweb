var i = 0, qtdData;
getData(0);
function getData(i) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
        var table = " ";
        var datas = this.responseXML.getElementsByTagName("MOVIE");
        var datasInner = this.responseXML.getElementsByTagName("CAST");
        for(i = 0; i < datas.length; i++)
        document.getElementById("content").innerHTML = datas[i].getElementsByTagName("VIEW")[0].childNodes[0].nodeValue;
        document.getElementById('rcontent').innerHTML = '</br>' + datas[i].getElementsByTagName("RESUME")[0].childNodes[0].nodeValue;
        for(j = 0; j < datasInner.length; j++)
        document.getElementById('content').innerHTML = datasInner[i].getElementsByTagName("ACTOR")[0].childNodes[0].nodeValue;
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