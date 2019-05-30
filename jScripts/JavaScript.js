function myfunc() {
    var x = String(document.getElementById("Text1").value);
    document.getElementById("convers").innerHTML += n + x +l;


    if ((x.includes("ראש")) || (x.includes("דור"))) {
        document.getElementById("convers").innerHTML += y + "אלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלףאלף אלף" + u;
    }

    if (x == "גב") {
        document.getElementById("convers").innerHTML += "חיים של דודה"
    }
    document.getElementById("Text1").value ="";
      
}

var y = "<div class=bubble alt><div class=txt><p class=name alt>סבתא</p><p class=message>"
var u = "</p></div><div class=bubble-arrow alt></div>"
var n = "<div class=speech-wrapper><div class=bubble><div class=txt><p class=name>אני</p><p class=message>";
var l = "</p></div><div class=bubble-arrow></div></div></div>";