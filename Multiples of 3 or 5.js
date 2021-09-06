function solution(number) {
  let result;
  let sum = 0;
  let set = new Set();

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }

    if (i % 3 === 0 && i % 5 === 0) {
      set.add(i);
      //arr.push(i)
    }
  }

  result = Array.from(set).reduce((sum, item) => sum + item, 0) + sum;

  return result;
}

let number = 10;

console.log(solution(number));
