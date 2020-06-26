//Xmas Countdown.

var today = new Date();
var day = today.getDay();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
const xMonth = 11;
const xMonthLit = 12;
const xDate = 25;

function findXYear (yr, mon, dt) {
  var xYear = yr;
  if (mon === 12 && dt >= 25) {
    xYear += 1;
  }
  return xYear;
};

var foundXYear = findXYear(year, month, date)
var nextXmas = new Date(foundXYear, xMonth, xDate);
var delta = Math.ceil((nextXmas - today)/1000/60/60/24);

var todaysDate = 'Today\'s date is\: ' + month + '/' + date + '/' + year;
var xmasDate = 'The date for next Christmas is\: ' + xMonthLit + '/' + xDate + '/' + foundXYear;
var countDown = 'That means that Christmas is ' + delta + ' days away!';

console.log(todaysDate);
console.log(xmasDate);
console.log(countDown);