function isPalindrome(str) {
  let i = 0;
  let result = '';

  if (typeof str == "number"){
    newstr = str.toString();
    str = newstr;
  }

while (i < str.length) {
result = str[i] + result;
i = i + 1;
}

return (str == result);
}

isPalindrome ('anna');
isPalindrome ("walter");
isPalindrome (123211);
isPalindrome (1234561);
isPalindrome ('.1');
isPalindrome ('.!!.1');
