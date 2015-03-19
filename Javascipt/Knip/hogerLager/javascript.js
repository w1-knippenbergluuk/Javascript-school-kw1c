    var randomGetal = Math.floor((Math.random() * 1000) + 1);
    var pogingen = [];
    var uitslag = 1000;
    console.log(randomGetal);

function bereken(){
    var getalElement = document.getElementById('input');
    var input = getalElement.value;
    pogingen[pogingen.length] = "1";
    
    if(input < randomGetal){
        document.getElementById('voortgang').innerHTML = 'Poging ' + pogingen.length + ' - Je zit te laag!';
    }   else    {
        if(input > randomGetal){
            document.getElementById('voortgang').innerHTML = 'Poging ' + pogingen.length + ' - Je zit te hoog!';
        }   else{
                document.getElementById('voortgang').innerHTML = 'Poging ' + pogingen.length + ' - Je hebt het geraden!';
                berekenScore();
        }
    }
    
}

function berekenScore(){
    var uitslag = 1000 - (pogingen.length * 50);
    document.getElementById('scoreUitslag').innerHTML += '<h1>' + uitslag + '</h1>';
   }