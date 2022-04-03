function take(fn, x) {
  let res, arr = new Array();
  for(let i=1; i<=x; i++) {
      res = fn();
      arr.push(res);
    }
  return arr;
}