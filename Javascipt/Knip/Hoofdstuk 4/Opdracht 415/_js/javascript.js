var klas = ['Nick Arts','Thijs Assmann','Rick Bats','Kim Cobben','Richard van Dartel','Dennis van Empel','Luuk  van Gennip',
'Florent Guichard','Mahamed Hassan','Stijn Hendriks','Dirk van Herpen','Daniël Kartotaroeno','Tony van Klink',
'Stephan Klomp','Twan Korthout','Max Lenssen','Aron van der Linden','Aron de Looijer','Anil Manbodh',
'Sietse Manders','Ben Moerkens','Sven van Mourik','Teun Salters','Sven Slijkoord','Daan Soeten',
'Joey van Straalen','Koen van Veen','Maxim Westbroek']; 

function telOp() {
    var counter = 0;
    document.getElementById('stopwatch').innerHTML = '';
    while (counter < 11) {
    document.getElementById('stopwatch').innerHTML += counter + " ";
    counter++;
 }
}

function telAf() {
	var counter = 10;
    document.getElementById('stopwatch').innerHTML = '';
    while (counter > -1) {
    document.getElementById('stopwatch').innerHTML += counter + " ";
    counter--;
 }
}

function gelijkOp(){
    var counter = 0;
    document.getElementById('stopwatch').innerHTML = '';
    while (counter < 51) {
    document.getElementById('stopwatch').innerHTML += counter + " ";
    counter = counter + 2;
 }
}

function deelBaarOp(){
    var counter = 3;
    document.getElementById('stopwatch').innerHTML = '';
    while (counter < 61) {
    document.getElementById('stopwatch').innerHTML += counter + " ";
    counter = counter + 3;
 }
}

function namenTonen(){
    var counter = 0;
    document.getElementById('stopwatch').innerHTML = '';
    while (counter < klas.length) {
    document.getElementById('stopwatch').innerHTML += klas[counter] + " <br />";
    counter++;
 }
}

function kortsteNaam()  {
    var lgth = 0;
    var kortste;

for(var i=0; i < klas.length; i++){
    if(klas[i].length > lgth){
        var lgth = klas[i].length;
        kortste = klas[i];
    }      
} 
alert(kortste);
}

function langsteNaam()  {
    var lgth = 0;
    var langste;

for(var i=0; i < klas.length; i++){
    if(klas[i].length > lgth){
        var lgth = klas[i].length;
        langste = klas[i];
    }      
} 
alert(langste);
}



alert(longest);
function reset() {

}