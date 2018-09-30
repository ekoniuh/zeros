module.exports = function getZerosCount(number) {
  let zero = 0;
  let fives = 5;



  while (fives <= number){
  	zero += Math.floor(number/fives);
  	fives *= 5;
  }

  return zero;

}