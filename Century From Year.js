function century(year) {
  // Finish this :)
  let ofCentury = 100;
  let ofYear = year / ofCentury;

  if (year <= ofCentury) {
    return 1;
  } else if (ofYear > Math.round(ofYear)) {
    return Math.round(ofYear)+1;
  } else if (year > Math.round(ofYear)) {
    return Math.round(ofYear);
  }
}
