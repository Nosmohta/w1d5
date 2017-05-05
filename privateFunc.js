function privateSum(a , b){
  let sum = a + b
  return sum
}

var exportMult = function(a , b , c) {
    let results = privateSum( a, b) * c ;
    return results
  }


module.exports = {
    exportMult: exportMult
}
