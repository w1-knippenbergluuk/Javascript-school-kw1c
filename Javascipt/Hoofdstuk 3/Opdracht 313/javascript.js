var score = 0;
console.log(score); // 0

var score = 100;
console.log(score); // 100

var score = score - 10;
console.log(score); // 90

var score = score * 10;
console.log(score); // 900

var score = score++;
console.log(score); // 900

var score = score++;
console.log(score); // 900

var score = score += 5;
console.log(score); // 905

var score = score -= 10;
console.log(score); // 895

var score = score--;
console.log(score); // 895

var score = score + 'sok';
console.log(score); // 895sok

var score = (parseInt(score) + 30) /10;
console.log(score); // 92.5

var score = score /= 2;
console.log(score); // 46.25

var score = score;
console.log(score); // 46.25

var score = score += 1;
console.log(score); // 47.25

var score = score + y;
console.log(score); // NaN

var y = score + 100;
console.log(score); // NaN

var score = (y > score);
console.log(score); // false

var score = !score; 
console.log(score); // true