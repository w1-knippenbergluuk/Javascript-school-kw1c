function bereken(){
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;
    
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var HBO1 = 0.5 ;
    var HBO2 = 2 ;

    var MBO1 = 0.5;
    var MBO2 = 2;

    if (opleiding == "MBO") {
        MBOCalculate();
     }	else{
	    
        if (jaar <= HBO1) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U doet al ' + jaar + ' jaar ' + opleiding + '. Dat wil zeggen dat u een junior programmeur bent';
        }   
        else{
            if (jaar <= HBO2) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U doet al ' + jaar + ' jaar ' + opleiding + '. Dat wil zeggen dat u een medior programmeur bent';
            }   
        else{
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U doet al ' + jaar + ' jaar ' + opleiding + '. Dat wil zeggen dat u een senior programmeur bent';
    }
    }
	}  
	    
}    

function MBOCalculate(){
    alert("test")
    }
 //   alert("debug");
