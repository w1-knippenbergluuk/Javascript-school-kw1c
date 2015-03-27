/*
* Deze functie initialiseert het spell
* - verbergt de start knop
* - haalt de canvas leeg
* geen parameters en geen return waarde
*/
function initialiseerSpel() {
	$('#start').hide();

	//schoonmaken van de canvas
	var elem = document.getElementById('myCanvas');
	var context = elem.getContext('2d');
	context.clearRect(0, 0, elem.width, elem.height);
	
	$('#status').html('Raad het woord door een letter uit het alfabet te kiezen.');
}

/*
* Deze functie tekent de galg als animatie in 12 stappen
* geen parameters/return waarde
*/
function animatie() {	
	if (stap < 12) {
		tekenGalgje();
		setTimeout(animatie,500);
		stap++;
	}
	else {
		$('#status').html('Je hangt !!<br><button id="start" onclick="galgje();">Start spel</button>');
	}
}

/*
* De functie tekent 1 stap van de galg aan de hand van de globale variabel stap
* in een switch case statement in de canvas met id='myCanvas'
* geen parameters of return waarde
*/
function tekenGalgje() {
	var elem = document.getElementById('myCanvas');
	// Always check for properties and methods, to make sure your code doesn't break 
	// in other browsers.
	$('#status').html(stap);
	if (elem && elem.getContext) {
	  // Get the 2d context.
	  // Remember: you can only initialize one context per element.
	  var ctx = elem.getContext('2d');
	  if (ctx) {
			switch(stap) {
			case 0:
			// eerste lijn
			ctx.beginPath();              
			ctx.lineWidth= "5";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(5,150);
			ctx.lineTo(250,150);
			ctx.stroke();  // Draw it
			break;
			//tweede lijn
			case 1:
			ctx.beginPath();              
			ctx.lineWidth= "7";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(100,20);
			ctx.lineTo(100,150);
			ctx.stroke();  // Draw it
			break;
			case 2:
			//derde lijn
			ctx.beginPath();              
			ctx.lineWidth= "5";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(20,20);
			ctx.lineTo(240,20);
			ctx.stroke();  // Draw it
			break;
			case 3:
			//vierde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(100,50);
			ctx.lineTo(150,20);
			ctx.stroke();  // Draw it
			break;
			case 4:
			//vijfde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "yellow";  // black path
			ctx.moveTo(100,50);
			ctx.lineTo(150,20);
			ctx.stroke();  // Draw it
			break;
			case 5:
			//zesde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "yellow";  // black path
			ctx.moveTo(240,20);
			ctx.lineTo(240,40);
			ctx.stroke();  // Draw it	
			break;
			case 6:
			//het hoofd			
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.arc(240,50,10,0,2*Math.PI);
			ctx.stroke();  // Draw it	
			break;
			case 7:
			//het lichaam		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.arc(240,80,15,0,2*Math.PI);
			ctx.stroke();  // Draw it
			break;
			case 8:
			//arm 1		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.moveTo(225,70);
			ctx.lineTo(180,60);
			ctx.stroke();  // Draw it
			break;
			case 9:
			//arm 2		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.moveTo(250,70);
			ctx.lineTo(295,60);
			ctx.stroke();  // Draw it
			break;
			case 10:
			//been 1		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "red";  // black path
			ctx.moveTo(230,95);
			ctx.lineTo(200,120);
			ctx.stroke();  // Draw it
			break;
			case 11:
			//been 2		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "red";  // black path
			ctx.moveTo(250,95);
			ctx.lineTo(280,120);
			ctx.stroke();  // Draw it
			break;
			default:
				alert ('nothing');
			break;
			};
		}
	}
}

/* Dit is een globale variabele met een lijst van lange woorden */
var woorden = ['campylobacteriose'
,'basaalcelcarcinoom'
,'zoutwateraquariums'
,'basisberoepsgericht'
,'identificatienummer'
,'baarmoedermonderosie'
,'overzichtelijkshalve'
,'aandrangincontinentie'
,'calamiteitenhospitaal'
,'aanwezigheidsindicatie'
,'desoxyribonucleinezuur'
,'ruitensproeiervloestof'
,'paraskevidekatriafobie '
,'veronderstellenderwijs'
,'fietspompreparatiesetje '
,'hooggeindustrialiseerde'
,'natuurkundigheidsmuseum'
,'langeafstandsbommenwerper'
,'Gasselterboerveenschemond'
,'raceaoutobandventieldopje'
,'terugkoppelingsmechanisme'
,'vijfhonderdduizendklapper'
,'aandeelhoudersovereenkomst'
,'gehandicaptenparkeerplaats'
,'hottentottententoonstelling'
,'persoonlijkheidsstoornissen'
,'milieubeschermingsmaatregelen'
,'centraleverwarmingsinstallatie'
,'huwelijksvruchtbaarheidscijfer'
,'levensverzekeringsmaatschappij'
,'televisieproductiemaatschappij'
,'telecommunicatie-infrastructuur'
,'afvalwaterzuiveringsinstallatie'
,'bejaardenziekenfondsverzekering'
,'chronischevermoeidheidssyndroom'
,'levensmiddelendistributiesector'
,'rioolwaterzuiveringsinstallatie'
,'studentenuitwisselingsprogramma'
,'vertegenwoordigingsovereenkomst'
,'wapenstilstandsonderhandelingen'
,'aankoopwaardegarantieverzekering'
,'accountant-administratieconsulent'
,'geneesmiddelenvergoedingssysteem'
,'gelegenheidskledingverhuurbedrijf'
,'onderzeebootbestrijdingsvliegtuig'
,'hippopotomonstrosesquippedaliofobie'
,'landbouwmechanisatietentoonstelling'
,'pensioenfondstoetredingsvoorwaarden'
,'zandzeepsodemineraalwatersteenstralen'
,'arbeidsongeschiktheidsverzekeringsformulier'];

var stap = 0;
$(document).ready(function() {
        animatie();
});

// 2 hoofdvariabelen voor het hele spel
// var teRadenWoord is het woord dat geraden moet worden dus bijvoobeeld 'fietspomp'
// var geradenWoord is het woord waarin de geraden letters staan: bijvoorbeeld '..e..po.p';
var teRadenWoord = "";
var geradenWoordNu = "";
/* 
* Deze functie wordt aangeroepen als je op start spel klikt
* Geen parameters of return waarde
*/
function galgje() {
        alert('De functie galgje() wordt nu aangeroepen..');
        
        teRadenWoord = kiesRandomWoord();
        alert( 'Een willekeurig woord is bijvoorbeeld ' + teRadenWoord );
        
        printDeLegeVakjes();
        printHetAlfabet();
        initialiseerSpel();
}

/*
* Deze functie kiest voor jou een random/willekeurig woord uit de globale variabele woorden (zie galgje.js)
* Geen parameters
* @return een random woord 
*/
function kiesRandomWoord() {
        var eengetal = Math.floor((Math.random()*woorden.length));
        var randomWoord = woorden[eengetal];
        return randomWoord;
}

/*
* functie om de legevakjes te printen voor het raden woord
*/
function printDeLegeVakjes() {
        var vakjesHtml = '';
        for (var i=0; i< teRadenWoord.length; i++) {
                vakjesHtml += "<span class='raadme'>?<span class='ix'>" + i + "</span></span>";
        }
        $('#vakken').html(vakjesHtml);
}

function printHetAlfabet() {
        var alfabetHtml = '';
        for (var i=0; i< 26; i++) {
                alfabetHtml += "<button onclick=raadLetter('"+ String.fromCharCode(i + 97) +"') class='letter' >"+ String.fromCharCode(i + 97) + "</button>";
        }
        $('#alfabet').html(alfabetHtml);
}


function raadLetter(letter) {
        alert('Je denkt dat de letter '+ letter +' in het woord zit ?');
}
