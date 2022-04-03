function pluck(array, fieldName) { 
    return array.filter(el => fieldName in el).map(el => el[fieldName]) 
}