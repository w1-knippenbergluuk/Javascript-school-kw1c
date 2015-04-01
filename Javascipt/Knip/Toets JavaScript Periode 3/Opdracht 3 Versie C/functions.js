// Aanmaken array met gegooide punten
var punten = [20, 17, 36, 60, 2];

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