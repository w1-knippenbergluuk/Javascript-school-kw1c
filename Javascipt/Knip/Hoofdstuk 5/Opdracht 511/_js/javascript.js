var zin;
function getZin() {
	zin = $('#langezin').html();
}

function setZin(anderezin) {
	$('#langezin').html(anderezin);
}

function keerZinOm() {
    // variable "omgekeerdezin" aanmaken
	var omgekeerdezin = '';
    // Lus aanmaken die net zo lang doorgaat tot hij de lengte van de zin heef berijkt.
	for (var x=0; x<zin.length; x++) {
    // substr(x,1) zorgt ervoor dat het maar 1 keer word uitgevoerd, stel je hebt alleen x dan zou het net zo vaak herhaald worden tot de lus voorbij is.
    // plus hij draait de zin hier om.
		omgekeerdezin =  zin.substr(x,1) + omgekeerdezin;
	}
    //Hij zet de omgekeerde zin als huidige zin.
	setZin(omgekeerdezin);
    //Hij pakt de huidige staande zin weer als basis.
	getZin();
}

function zoekLetter() {
    var getalElement = document.getElementById('search');
    var searchValue = getalElement.value;
    var posities = [];
    var teller = 0;

    for(i=0;i<zin.length; i++){
        console.log(i);
        if(zin[i] == searchValue){
            posities.push(i);
            teller = teller + 1;
        }
        
    }
    alert('De letter ' + searchValue + ' komt ' + teller + ' keer voor. '+ 'Je kunt de letter op deze positie(s) vinden: ' + posities);
}

$(document).ready(function() {
	getZin();
});