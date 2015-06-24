// HET GEBRUIK VAN COMMENTAAR LEVERT EXTRA PUNTEN OP!
$(document).ready(function () {

    //OPDRACHT 1    -   DOM MANIPULATIE
    //ZORG ERVOOR DAT JE ONDERSTAANDE DOM MANIPULATIES UITVOERT DOOR GEBRUIK TE MAKEN VAN JQUERY (DUS NIET RECHTSTREEKS IN JE CSS AANPASSEN!)

    //A.    DE TEKST "INLEIDING" IN HET EERSTE H2 ELEMENT MOET WORDEN AANGEPAST NAAR: "VOORWOORD"
    //B.    ALLE H1, H2 EN H3 ELEMENTEN WORDEN IN HET ORANJE WEERGEGEVEN.
    //C.    ALLE PARAGRAFEN MET EEN EVEN INDEX KRIJGEN DE CSS KLASSE "PARAGRAPGH" TOEGEWEZEN.
    //D.    DE ACHTERGRONDKLEUR VAN DE HTML-PAGINA MOET ZWART WORDEN.

    //COMMENTAARGEBRUIK (1 PUNT)

    //UITWERKING A      (2 PUNTEN)

    //selecteer de eerste(index 0) h2 en verander de tekst naar VOORWOORD
    $("h2:eq(0)").html('VOORWOORD');

    //UITWERKING B      (2 PUNTEN)
    //selecteer alle h1, h2 en h3 elementen en verander de kleur (als het om de achtergrond kleur ging dan moet het background-color zijn ipv color, werd niet specifiek gezegt
    $("h1, h2, h3").css("color", "yellow");

    //UITWERKING C      (2 PUNTEN)

    //selecteer alle paragraven met een even index nummer en geef ze een de class: "paragraph"
    $("p:even").addClass("paragraph");

    //UITWERKING D      (2 PUNTEN)
    // selecteer de body en verander de achtergrond kleur in zwart.
    $("body").css("background-color", "black");


    //OPDRACHT 2    -   EVENTS
    //ZORG ERVOOR DAT JE ONDERSTAANDE EVENTS PROGRAMMEERT DOOR GEBRUIK TE MAKEN VAN JQUERY

    //E.    ALS JE MET JE MUIS OVER DE DIV MET ID "SUCCES" BEWEEGT ZORG JE ERVOOR DAT DE DIV OP DAT MOMENT DE KLASSE "HOVER" KRIJGT. GA JE MET JE MUIS WEER VAN DE DIV AF, MOET DE DIV IN OORSPRONKELIJKE STAAT TERUGKEREN.
    //F.    ALS JE DUBBELKLIKT OP EEN PARAGRAAF MOET DE PARAGRAAF WAAR JE OP KLIKT VERDWIJNEN.
    //G.    ALS JE OP EEN H1 KLIKT MOETEN ALLE PARAGRAFEN WEER ZICHTBAAR WORDEN.
    


    //COMMENTAARGEBRUIK (1 PUNT)

    // UITWERKING E     (2  PUNTEN)

    // zodra op een h1 wordt gedubbelklikt zijn alle onzichtbare paragraven weer zichtbaar.
    $("h1").dblclick(function () {
        $("p").show() ();
    });

    // UITWERKING F     (2  PUNTEN)

    // selecteer alle paragrafen, zodra er een wordt gedubbelklikt. hide de paragraaf waar op gedubbelklikt wordt. (hide vanwege opdracht G, zou die echt weg moeten dan is het .remove ipv .hide)
    $("p").dblclick(function () {
        $(this).hide() ();
    });

    // UITWERKING G     (2  PUNTEN)  

    // selecteer het element met de id "succes" en geef hem de class hover zodra je er op staat en verwijder de klas weer als je met de muis er niet meer op hoverd.
    $("#succes").hover(
      function () {
          $(this).addClass("hover");
      }, function () {
          $(this).removeClass("hover");
      }
    );

    //OPDRACHT 3   -   ANIMATIES
    //ZORG ERVOOR DAT JE ONDERSTAANDE ANIMATIES PROGRAMMEERT DOOR GEBRUIK TE MAKEN VAN JQUERY

    //H.    ALS JE KLIKT OP DE DIV MET ID "SUCCES" ZORG JE ERVOOR DAT DE DIV IN EEN VLOEIENDE BEWEGING 2X ZO BREED EN 2X ZO HOOG WORDT. LAAT DEZE ANIMATIE 3,5 SECONDE DUREN. 
    //      ZORG ERVOOR DAT ALS JE ER DAARNA NOGMAALS OP KLIKT DE DIV MET ID "SUCCES" WEER TERUGGAAT NAAR ZIJN OORSPRONKELIJKE GROOTTE. LAAT DEZE ANIMATIE 3,5 SECONDE DUREN. 
    //I.    ZORG ERVOOR DAT DE IMG MET CLASS "SMILE" NAAR LINKS EN NAAR RECHTS BEWOGEN KAN WORDEN DOOR GEBRUIK TE MAKEN VAN DE PIJLTESTOETSEN OP HET TOETSENBORD.
    //      ALS JE DE PIJLTJESTOETSEN LOSLAAT MOET DE AFBEELDING DIRECT WEER STIL STAAN.

    //COMMENTAARGEBRUIK (1 PUNTEN)

    // UITWERKING H     (5 PUNTEN)

    // selecteer de div met het id succes. zodra je klikt gaat er een animatie van start. De animatie duurt 3500 miliseconde (3,5 seconde). De hoogte en breedte wordt 2 keer zo groot dan normaal.
    // wanneer je voor de tweede keer klikt dan gaat de div weer terug naar zijn oude grootte, ook weer in 3,5 seconde
   
    $('#succes').toggle(
    function(){
         $(this).animate({height: "200px", width: "600px"}, 3500);
    },
    function(){
        $(this).animate({height: "100px", width: "300px"}, 3500);
    });


    // UITWERKING I     (5 PUNTEN)

    // als in de pagina het linker(39) of rechter(37) pijltje inhoudt dan zal die ook naar links of rechts gaan. zodra je het pijltje niet meer indrukt stop het plaatje ook met bewegen.

    $(document).keydown(function(e) {
        switch (e.which) {
            case 37:
            $('.smile').css('left', $('.smile').offset().left - 10);
            break;
            case 39:
            $('.smile').css('left', $('.smile').offset().left + 10);
            break;
            
        }
    })


});

