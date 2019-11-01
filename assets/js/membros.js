var i = 0, qtdData;
getData(0);
function getData(i) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
        var table = " ";
        var datas = this.responseXML.getElementsByTagName("HEROI");
        for(i = 0; i < datas.length; i++)
        table += '<tr><td>' + datas[i].getElementsByTagName("img")[0].childNodes[0].nodeValue
        + '</td><td>' + datas[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</td></tr>";
        document.getElementById("content").innerHTML = table;
    }
     };
     xmlhttp.open("GET", "/assets/xml/membro.xml", true); 
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