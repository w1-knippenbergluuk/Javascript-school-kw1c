  function getSalaris(opleiding, ervaring){
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;
    
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;

    var salaris = 0;

     if (opleiding == "MBO" && (jaar <= 1)) {
         salaris = 1800;
     }  else    {
             if (opleiding == "MBO" && (jaar <= 3)) {
             salaris = 2000;
         }  else    {
                 if (opleiding == "MBO" && (jaar > 3)) {
                 salaris = 2200;
             }  else    {
                     if (opleiding == "HBO" && (jaar <= 1)) {
                     salaris = 2000;
                 }  else    {
                     if (opleiding == "HBO" && (jaar <= 3)) {
                         salaris = 2250;
                     }  else{
                         if (opleiding == "HBO" && (jaar > 3)) {
                             salaris = 2400;
                         }
                     }
                 }
             }
         }
     }
     document.getElementById('resultaat').innerHTML = 'U doet ' + jaar + ' jaar ' + opleiding + ', uw salaris is ' + salaris + ' euro per maand.' ;
 }