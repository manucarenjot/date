let result = document.getElementById('result');

let aujourdhui = new Date();

result.innerHTML =
    "jour de la semaine" + aujourdhui.getDay() + "<br/>" +
    "Jour du mois:" + aujourdhui.getDate() + '<br/>' +
    'Mois en cours version JS:' + (aujourdhui.getMonth() + 1) + '<br/>'+
    "Année au format 4 chiffres:" + aujourdhui.getFullYear() + '<br/>'+
    "Année au format 2 chiffres:" + aujourdhui.getFullYear().toString().slice(2) + '<br/>'+
    "Heure:"+ aujourdhui.getHours()+ "<br/>"+
    "Heure avec un zero devant si besoin"+ aujourdhui.getHours().toString().padStart(2, 0) + "<br/>"+
    "Minutes:" + aujourdhui.getMinutes() + "<br/>" +
    "Minutes avec un zero devant si besoin:" + aujourdhui.getMinutes().toString().padStart(2, 0) + "<br/>"+
    "seconde:" + aujourdhui.getSeconds() + "<br/>" +
    "Milliseconde:" + aujourdhui.getMilliseconds() + "<br/>" + "<br>"
;


aujourdhui = new Date();
aujourdhui.setHours(20);
aujourdhui.setMinutes(68);

result.innerHTML +=
    "Heure:"  + aujourdhui.getHours() + "<br>" +
    "Minutes:" + aujourdhui.getMinutes()
;
