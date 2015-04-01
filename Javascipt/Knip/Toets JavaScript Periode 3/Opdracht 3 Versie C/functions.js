// Aanmaken array met gegooide punten
var punten = [20, 17, 36, 60, 2];
var totaal = 0;
// Print informatie in een opgegeven ID
function printInHtml(plek, tekst) 
{
	$('#'+plek).html(tekst);
}
        
// Laat de huidige gegooide punten zien
function huidigePunten()
{
  var strPunten = '', del = '';

  for (var i = 0; i < punten.length; i++)
  {
    strPunten = strPunten + del + punten[i];
    del = ',';
  }
  printInHtml('puntenlijst', strPunten);
}

// LET OP: VERGEET JE COMMENTAAR NIET!

//  functie die de het gemiddelde van de getallen uit de array achterhaald en schrijft
function gemiddeldePunten() {
    totaal = 0;
for (i=0;i<punten.length;i++){
    totaal = totaal + punten[i];
}

var gemiddelde = totaal / punten.length;
document.getElementById('resultaat').innerHTML = gemiddelde;

}


//  functie die de het laagste getal uit de array achterhaald en schrijft
function laagstePunten() {
    //basis variable getal aanmaken
    var getal = 1000;
    //achterhalen in een lus wat het laagste getal is en die waarde in een variable zetten
for (x=0;x<punten.length;x++){
    if(punten[x] < getal){
        getal = punten[x]
    }
}
//schrijven kleinste getal
document.getElementById('resultaat').innerHTML = getal;
}

//  functie die de het hoogste getal uit de array achterhaald en schrijft
function hoogstePunten() {
    //basis variable getal aanmaken
    var getal = 0;
    //achterhalen in een lus wat het hoogste getal is en die waarde in een variable zetten
for (x=0;x<punten.length;x++){
    if(punten[x] > getal){
        getal = punten[x]
    }
}
//schrijven hoogste getal
document.getElementById('resultaat').innerHTML = getal;
}


//  functie die de aantal elementen in de array achterhaald en schrijft
function aantalPunten() {
    //basis variable teller aanmaken
    var teller = 0;
    //achterhalen in een lus hoeveel elementen er in de array zitten.
for (x=0;x<punten.length;x++){
    teller = teller + 1;
}
//schrijven hoeveel elementen er in de array zitten
document.getElementById('resultaat').innerHTML = teller;
}

//  functie die de een element toevoegt aan de array
function puntenToevoegen() {
    // ophalen input en omzetten in variable
	var getalElement = document.getElementById('puntenAantal');
    var puntenAantal = getalElement.value; 

    // als de value van input iets bevat pushen naar array(anders niet)
    if(puntenAantal == ''){
        
    }   else{
        punten.push(puntenAantal);
    }
		
}