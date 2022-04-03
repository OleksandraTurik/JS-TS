function sequence(start = 0, step = 1) {
    start -= step;
      return function() {
          return start += step;
  }
}


  
