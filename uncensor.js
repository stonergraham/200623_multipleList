//Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed. Given a censored string and a string of the censored vowels, return the original uncensored string.

var test1 = 'Wh*r* d*d my v*w*ls g*?';
var test1V = 'eeioeo';
var test2 = 'k*r*t*';
var test2V = 'aae';

var starFixer = function (censored, vowels) {
  var vLnth = vowels.length;
  for (var i = 0; i < vLnth; i++) {
    censored = censored.replace('*', vowels[i])
  };
  return censored;
};

console.log(starFixer(test1, test1V));
console.log(starFixer(test2, test2V));