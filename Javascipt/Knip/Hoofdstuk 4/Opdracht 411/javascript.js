function bereken(){
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;
    
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var HBO1 = 0.5 ;
    var HBO2 = 2 ;



    if (opleiding == "MBO") {
        MBOCalculate();
     }	else{
	    
        if (jaar <= HBO1) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een junior programmeur bent';
        }   
        else{
            if (jaar <= HBO2) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een medior programmeur bent';
            }   
        else{
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een senior programmeur bent';
    }
    }
	}  
	    
}    

function MBOCalculate(){
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;

    var MBO1 = 1;
    var MBO2 = 3;

    if (jaar <= MBO1){
        document.getElementById('resultaat');
        resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een junior programmeur bent';
    } else{
        if (jaar <= MBO2){
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een medior programmeur bent';
        }
    else{
        document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een senior programmeur bent';
    }
    }
}
 //   alert("debug");
