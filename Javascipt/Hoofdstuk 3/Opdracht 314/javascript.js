var a = 20, b = 9, c = 1, d = null;
var dag1 = 'maandag';
var dag2 = 'dinsdag';
var dag3 = 'Dinsdag';
var score = 100;

function codeAddress() {
    if (dag3 == dag2 ) {
        alert("True!");
    }   else{
        alert("false!")
    }

}

/*
score === 100 True
score !==100 False
score < 20 || score >50 True
score > 0 && score > 99 True 
score < 30 || score > 100 || 1==1 True
a === 20 && b<8 && c<3 False
a === 20 && b>8 || c<3 True 
a == d False
dag1 != dag2 True
dag3 == dag2 False
*/