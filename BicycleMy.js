function whoseBicycle(diary1, diary2, diary3) {
  let d1 = 0;
  d2 = 0;
  d3 = 0;
  let res;
  for (let key in diary1) {
    d1 += +diary1[key];
    //console.log(diary1[key]);
  }

  for (let key in diary2) {
    d2 += +diary2[key];
  }

  for (let key in diary3) {
    d3 += +diary2[key];
  }

  res = Math.max(d1, d2, d3);

  //if (res === d1) return "I need to buy a bicycle for my first son.";
  //if (res === d2) return "I need to buy a bicycle for my second son.";
  //if (res === d3) return "I need to buy a bicycle for my third son.";

  if ((d1 == d2) == d3 || (d3 == d2) == d1) {
    return "I need to buy a bicycle for my third son.";
  }
  if (d1 == d2 || d1 == d3) return "I need to buy a bicycle for my third son.";
  if (d2 == d1 || d2 == d3) return "I need to buy a bicycle for my third son.";
  if (d3 == d1 || d3 == d2) return "I need to buy a bicycle for my third son.";
  if (d1 == d2) return "I need to buy a bicycle for my second son.";
  if (d1 == d3) return "I need to buy a bicycle for my third son.";
  if (d2 == d1) return "I need to buy a bicycle for my second son.";
  if (d3 == d1) return "I need to buy a bicycle for my third son.";
}
