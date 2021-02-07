function squareDigits(num){

  let strNum = String(num);
  let result = '';

  for (let i = 0; i < strNum.length; i++){
    let square = parseInt(strNum[i], 10) * parseInt(strNum[i], 10);
    result = result + String(square);
  }
  return parseInt(result);
}
