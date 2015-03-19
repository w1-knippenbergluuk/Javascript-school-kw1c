//globale variable lijst voor een array met getallen
var lijst = [];
var totaal = 0;
/*
*  functie getGetal haalt het getal op in de div met id getal
*  Deze functie heeft geen parameters
*  @return een geheel getal 
*/
function getGetal() {
		return parseInt($('#getal').val());
}

/*
*  De functie add() voegt het ingevulde getal in de de div met id= 'getal' toe aan de globale variabele lijst
*  Als de ingevulde wwaarde geen getal is dan gebeurt er niets.
*  Als het wel een getal is dan wordt het getal toegevoegd aan de variabele lijst en wordt de lijst geprint
*  in de span met id='lijst' 
*  geen parameters
*  geen return waardes
*/
function add() {
    checkUnique();
	getal = getGetal();
	if (isNaN(getal)) {
		return;
	}
	else {			
		lijst.push(getal);
		printLijst();
	}
}
/* de functie printLijst() print alle getallen uit de variabele lijst in de div met id=lijst
*  geen parameters
*  geen return waardes
*/
function printLijst() {
	var strLijst = '', del='';
	
	for (var i=0; i<lijst.length; i++) {
		strLijst =  strLijst + del + lijst[i];
        del = ',';		
	}
	
	printInHtml( 'lijst', strLijst );
}

/* De functie printInHtml print een tekst in de html tag met id=plek
*  @param1 plek is een string met de id van de html waar de tekst moet worden toegevoegd
*  @param2 tekst is een string die wordt gezet in de html tag met id=tekst
*/ 
function printInHtml(plek, tekst) {
	$('#'+plek).html(tekst);
}


function countLijst() {     
     document.getElementById('resultaat').innerHTML = lijst.length;
}

function countDistinct() {
     alert('countDistinct() wordt aangeroepen');
	 
}

function deleteFirst() {
     lijst.shift();
     printLijst();
}

function deleteLast() {
     lijst.pop();
     printLijst();
}

var text = ''

function sum() {
    var totaal = 0;
for (i=0;i<lijst.length;i++){
    totaal = totaal + lijst[i];
}

document.getElementById('resultaat').innerHTML = totaal;
}

function average() {
    totaal = 0;
for (i=0;i<lijst.length;i++){
    totaal = totaal + lijst[i];
}

var gemiddelde = totaal / lijst.length;
document.getElementById('resultaat').innerHTML = gemiddelde;

}

$(document).ready(function() {
	printLijst();
});


function checkUnique(){
    var uniek = [];
    for (i=0; i < lijst.length; i++){
        var gevonden = false;
        for (x=0; x < uniek.length; x++){
            if (lijst[i] == uniek[x]){
                gevonden = true;
                alert('test');
            }
        }   
        if (gevonden == false){
            uniek.push(lijst[i]);
        }
    }
}