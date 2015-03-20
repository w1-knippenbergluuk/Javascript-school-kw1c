function bereken(){
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;
    
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var hboJunior = 0.5 ;
    var hboMedior = 2 ;

 if (opleiding == "MBO") {
        BerekeNaar();
     }	else{
	    
        if (jaar <= hboJunior) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar. Dat wil zeggen dat u een junior programmeur bent';
        }   
        else{
            if (jaar <= hboMedior) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar. Dat wil zeggen dat u een medior programmeur bent';
            }   
        else{
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar. Dat wil zeggen dat u een senior programmeur bent';
    }   
    }   
	}   
	    
}    

function BerekeNaar(){
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;

    var mboJunior = 1;
    var mboMedior = 3;

    if (jaar <= mboJunior){
        document.getElementById('resultaat');
        resultaat.innerHTML = 'Je hebt een ' + opleiding + ' diploma en al '+ jaar + ' jaar ervaring. Dus je bent een junior programmeur.';
    } else{
        if (jaar <= mboMedior){
            document.getElementById('resultaat');
            resultaat.innerHTML = 'Je hebt een ' + opleiding + ' diploma en al '+ jaar + ' jaar ervaring. Dus je bent een medior programmeur.';
        }
    else{
        document.getElementById('resultaat');
            resultaat.innerHTML = 'Je hebt een ' + opleiding + ' diploma en al '+ jaar + ' jaar ervaring. Dus je bent een senior programmeur.';
    }
    }
}
