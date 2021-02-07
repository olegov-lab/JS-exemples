function fizzbuzz(n) {
  var out = [];
  for(var i = 1; i <= n; i++) {
    var res = '';
    if(i % 3 == 0) res += 'Fizz';
    if(i % 5 == 0) res += 'Buzz';
    out.push(res.length == 0 ? i : res);
  }
  return out;
}
var fizzify = fizzbuzz;
