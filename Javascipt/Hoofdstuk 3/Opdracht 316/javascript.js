var leerlingen = ["Mohammed", "Tolga", "Adem","Thomas", "Jean"];
document.write("<p>De eerste leerling is <strong>");
document.write(leerlingen[0] + "</strong></p>"); 

document.write("<p>De laatste leerling is <strong>");
document.write(leerlingen[4] + "</strong></p>"); 

document.write("<p>De tweede leerling is <strong>");
document.write(leerlingen[1] + "</strong></p>"); 

document.write("<p>De voorlaatste leerling is <strong>");
document.write(leerlingen[3] + "</strong></p>");

leerlingen.pop();
document.write("<p>De laatste leerling is nu <strong>");
document.write(leerlingen[3] + "</strong></p>"); 

leerlingen.unshift("Nick","Mike");
document.write("<p>De eerste leerling is nu <strong>");
document.write(leerlingen[0] + "</strong></p>"); 