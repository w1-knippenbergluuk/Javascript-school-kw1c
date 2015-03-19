// initialiseren van variabelen
var snelheid=0, vervoer='', weg='', totaleAfstand=0;


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

/* Schrijf hieronder je code */
if (vervoer == "voet") {
    voetRegels();
     }	else {
        if (vervoer == "fiets") {
            fietsRegels();
        }   else {
        if (vervoer == "auto") {
            autoRegels();
        }  
    }
    }
}

function voetRegels() {
    if (weg != "stoep") {
        alert('U mag alleen op de stoep lopen');
    } else {
        if (snelheid > 6) {
            alert('Een voetganger loopt niet harder dan 6 km/u')
        }  else {
        if (snelheid <= 6) {
            meldStatus();
        }  
    }
    }
}

function fietsRegels() {
    if (weg != "straat") {
        alert('U mag alleen op de straat fietsen ');
    }else {
        if (snelheid > 25) {
            alert('Als fietser kun je maximaal 25 km/u.')
        }   else {
        if (snelheid <= 25) {
            meldStatus();
        }  
    }
    }
}

function autoRegels() {
    if (weg == "stoep") {
        alert('U mag niet op de stoep rijden');
    }

    if (weg == "straat" && (snelheid > 50)) {
        alert('op de straat mag je maximaal 50 km/u');
    }   else {
    if (weg == "straat" && (snelheid <= 50)) {
        meldStatus();
    }
    
    if (weg == "autoweg" && (snelheid > 100)) {
        alert('op de autoweg mag je maximaal 100km/u');
    } else {
        if (weg == "autoweg" && (snelheid <= 100)) {
            meldStatus();
        }

    if (weg == "snelweg" && (snelheid > 120)) {
        alert('op de snelweg mag je maximaal 120km/u');
    } else {
        if (weg == "snelweg" && (snelheid <= 120)) {
            meldStatus();
        }
        }
        }
        }

}

//Met deze functie kun je een melding in de pagina schrijven.( in de div met id=’status’ )
function meldStatus(tekst) {
 $("#status").html(tekst);
 document.getElementById('status').innerHTML += 'U gaat over de ' + weg + ' te ' + vervoer + ' met een snelheid van: ' + snelheid + ' km/u <br />';
}