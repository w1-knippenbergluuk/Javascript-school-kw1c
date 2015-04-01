//aanmaken globale variablen
var week = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
var aantalDeelnemers = 12;


function doeIets(){
    //aanmaken variablen
    var getalElement = document.getElementById('dag');
    var dag = getalElement.value;
    
    var getalElement = document.getElementById('deelnemers');
    var deelnemers = getalElement.value;

    if(deelnemers > 16){
        alert('Je mag niet met meer dan 16 mensen deelnemen');
        abort;
    }
    //achterhalen of het weekend of doordeweeks is 
    for(i=0;i<week.length; i++){
        if(week[i] == dag && i <= 4){
            doordeweeks();
        }   else{
            if (week[i] == dag) {
                weekend();
            }
        }
        
    }
    //aangeven dat je wel een bestaande dag moet invullen
    alert('U moet wel een bestaande dag invullen');

}

function doordeweeks(){
    //variablen ophalen en aanmaken
    var getalElement = document.getElementById('dag');
    var dag = getalElement.value;

    var getalElement = document.getElementById('deelnemers');
    var deelnemers = getalElement.value;
    // kosten berekenen
    if(deelnemers < 5){
        var kosten = 12;
    }   else{
        if (deelnemers > 10) {
            var kosten = 9;
        }   else{
            var kosten = 10.5;
        }
    }
    // antwoord tonen
    document.getElementById('resultaat').innerHTML = 'Omdat het doordeweeks(' + week[i]  + ') is zijn de kosten per persoon ' + kosten + ' euro';
}

function weekend(){
    //variablen ophalen en aanmaken
    var getalElement = document.getElementById('dag');
    var dag = getalElement.value;
    
    var getalElement = document.getElementById('deelnemers');
    var deelnemers = getalElement.value;
    // kosten berekenen
    if(deelnemers < 5){
        var kosten = 13;
    }   else{
        if (deelnemers > 10) {
            var kosten = 10;
        }   else{
            var kosten = 11;
        }
    }
     // antwoord tonen
    document.getElementById('resultaat').innerHTML = 'Omdat het weekend(' + week[i]  + ') is zijn de kosten per persoon ' + kosten + ' euro';
}


/*
dinsdag 4 €12
zondag 5 €11
geluksdag 12 € kan niet
*/