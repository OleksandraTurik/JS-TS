function partialAny(fn, ...fnArgs) { 
    return (...args) => { 
      return fn(...fnArgs.map(el => el === undefined ? args.shift() : el), ...args) 
 
    } 
 
}