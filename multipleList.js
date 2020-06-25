//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length:

var multipleList = function(num, length) {
    var result = [];
    for (let i = 1; i < length + 1; i++) {
      result.push(num * i);
    }
    return result;
  };
  console.log(multipleList(17, 6));