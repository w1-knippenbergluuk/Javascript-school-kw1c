    var randomGetal = Math.floor((Math.random() * 1000) + 1);

   function bereken(){
        var getalElement = document.getElementById('input');
        var input = getalElement.value;
        
        if(input < randomGetal){
            alert('Je zit te laag!')
        }   else    {
            if(input > randomGetal){
                alert('Je zit te hoog!')
            }   else{
                if(input == randomGetal){
                    alert('U heeft het goed!')
                }
            }
        }

        alert(randomGetal);
   }