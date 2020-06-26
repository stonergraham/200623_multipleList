//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

var pTest1 = 98140723568910;
var pTest2 = 90864523148909;
var pTest3 = 112233445566778899;

var pandigital = function (num) {
  var numStr = BigInt(num).toString();
  var response;
  var isThere = true;
  for (var i = 0; i <= 9 ; i++) {
    isThere = numStr.includes(i.toString());
      if (isThere === false) {
        response = `Missing ${i}. Not a Pandigital.`;
        break;
      } else {
        response = 'Is a Pandigital.';
      };
  };
  console.log(response);
};
pandigital(pTest1);
pandigital(pTest2);
pandigital(pTest3);