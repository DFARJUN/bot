setTimeout(function () { document.getElementById("convers").innerHTML += savtastart + varopen + savtaend }, 800);

function myfunc() {
    var x = String(document.getElementById("Text1").value);
    if (x!=""){
    document.getElementById("convers").innerHTML += mestart + x + meend;
    


    if ((x.includes("ראש")) || (x.includes("דור"))) {
        setTimeout(function () { document.getElementById("convers").innerHTML += savtastart + varhead + savtaend }, 800);    }
    else {
        if (x == "גב") {
            setTimeout(function () { document.getElementById("convers").innerHTML += savtastart + varback + savtaend }, 800);        }
        else {
            if (x == "בטן") {
                setTimeout(function () { document.getElementById("convers").innerHTML += savtastart + varbeten + savtaend }, 800);
            }
        else {
            setTimeout(function () { document.getElementById("convers").innerHTML += savtastart + varundifined + savtaend }, 800);
        }
         }
     }


    document.getElementById("Text1").value = "";
    }     
}

var savtastart = "<div class=bubble alt><div class=txt><p class=alt class=name >סבתא</p><p class=message>"
var savtaend = "</p></div><div class=alt class=bubble-arrow></div>"
var mestart = "<div class=speech-wrapper><div class=bubble><div class=txt><p class=name>אני</p><p class=message>";
var meend = "</p></div><div class=bubble-arrow></div></div></div>";
var varopen ="חיים של סבתא, אני שמחה לראות אותך. במה אפשר לעזור?";
var varundifined = "לא הצלחתי להבין, בואו ננסה שוב";
var varhead = "הראש הראש הראש";
var varback = "הגב הגב הגבה";
var varbeten = "בטן בטן בטן";