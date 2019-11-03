var i = 0, qtdData;
getData(0);
function getData(i) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("members").innerHTML = this.responseText;
        var section = " ";
        var datas = this.responseXML.getElementsByTagName("HEROI");
        for(i = 0; i < datas.length; i++)
        section += '<article><div><a href="' + datas[i].getElementsByTagName("linkheroi")[0].childNodes[0].nodeValue + 
        '"><img src="' + datas[i].getElementsByTagName("img")[0].childNodes[0].nodeValue
        + '"></a></div><hr><h2>' + datas[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</h2></article>";
        document.getElementById("members").innerHTML = section;
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