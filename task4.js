let fmap = function(a, gen){ 
    let generation = function(){ 
     let array = []; 
     for(let i = 0; i<arguments.length; i++){ 
      array[i] = arguments[i]; 
    } 
     let el = gen.apply(null, array); 
     let otherEl = a(el); 
     return otherEl; 
    } 
    return generation; 
}