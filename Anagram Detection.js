// write the function isAnagram
var isAnagram = function(test, original) {
original = original.toLowerCase().split('').sort().join('');
test = test.toLowerCase().split('').sort().join('');
return test == original;
};
