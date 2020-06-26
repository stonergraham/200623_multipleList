// Create the function that takes an array with objects and returns the sum of people's budgets.
var budgets1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];
  
  var budgets2 = [
    { name: "Ben",  age: 21, budget: 29000 },
    { name: "Jennifer",  age: 32, budget: 32000 },
    { name: "Angelina",  age: 16, budget: 1600 }
  ];
  
  var budgets3 = [
    { name: "Ralph",  age: 21, level: 3, budget: 26000 },
    { name: "Alejandra",  age: 32, level: 9, budget: 31000 },
    { name: "Inez",  age: 16, level: 5, budget: 52000 }
  ]
  
  var getValues = function (budgArr) {
    var objArr = [];
    var keys;
    var vals;
    for (var i = 0; i < budgArr.length; i++) {
      keys = Object.keys(budgArr[i]);
      vals = Object.values(budgArr[i]);
        for (j = 0; j < keys.length; j++) {
          objArr.push([keys[j], vals[j]]);
        };
    };
    return objArr;
  };
  
  var getBudgets = function(objArr) {
    var total = 0;
    for (var k = 0; k < objArr.length; k++) {
      if (objArr[k][0] === 'budget') {
        total+=objArr[k][1];
      };
    };
    return total;
  };
  console.log(getBudgets(getValues(budgets1)));
  console.log(getBudgets(getValues(budgets2)));
  console.log(getBudgets(getValues(budgets3)));