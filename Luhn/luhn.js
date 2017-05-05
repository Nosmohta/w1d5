


function check(numStr){

  let numAry = numStr.split("");
  numAry = numAry.map( (x) => Number(x) )
    console.log(numAry);
  let k = numAry.pop();
    console.log(numAry);
  numAry.push(0);
    console.log(numAry);

  numAry.reverse()
     console.log(numAry);

  numAry = numAry.map( (x, i) => {
    if ( i % 2 !== 0) {
      return x * 2
    } else {
      return x
    }
  })
  console.log(numAry);

  numAry = numAry.map( (x) => {
    if ( x > 10) {
      return x - 9
    } else {
      return x
    }
  })
  console.log(numAry);

  let sum = numAry.reduce( ( ac, cur) => {
    return ac + cur
  }, 0 )

  console.log('sum', sum);
  console.log('key', k)
  console.log( sum * 9)


  return (((sum * 9) % 10) === k )
}



console.log(check("79927398713"))
//console.log(check("79927398714"))


module.exports = {
  check: check
}
