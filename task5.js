function partial(fn, ...fnArgs) { 
    return function(...args) { 
      return fn.apply(this, fnArgs.concat(args)); 
    } 
}