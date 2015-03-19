// initialiseren van variabelen
var snelheid=0, vervoer='', weg='';


//functie waarmee de waardes van de radio-buttons en de snelheid wordt opgehaald
function getWaardes() {
snelheid = $('#snelheid').val();
weg = $('input[name=weg]:checked').val();
vervoer = $('input[name=vervoer]:checked').val();
}

//Dit is de functie die wordt aangeroepen als je op wijzig klikt
function wijzigSnelheid() {
    
// De eerste stap is dat de waardes van de globale variabelen
 // snelheid, vervoer en weg worden gevuld met de ingevulde/gekozen waardes in het formulier
getWaardes();
alert('test');
alert('plek: ' + weg);
alert('vervoer: ' + vervoer);
alert('snelheid: ' + snelheid);
/* Schrijf hieronder je code */
    
}

//Met deze functie kun je een melding in de pagina schrijven.( in de div met id=’status’ )
function meldStatus(tekst) {
 $("#status").html(tekst);
}