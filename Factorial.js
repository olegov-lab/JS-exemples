function factorial(n){
  let result = 1;

  if (n < 0  || n > 12) {
  throw new RangeError('error');
  }

  while(n){
  result *= n--;
  }

  return result;

}

console.log(factorial(5));