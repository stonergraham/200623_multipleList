//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length:

test1 = 17
lnth1 = 6
test2 = 9
lnth2 = 19

var multipleList = function(num, length) {
    var result = [];
    for (let i = 1; i < length + 1; i++) {
      result.push(num * i);
    }
    return result;
  };
  console.log(multipleList(test1, lnth1));
  console.log(multipleList(test2, lnth2));