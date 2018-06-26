// Credit: https://stackoverflow.com/questions/1241555/algorithm-to-generate-poisson-and-binomial-random-numbers

function poisson() {
  var mean = 3;

  var L = Math.exp(-mean);
  var p = 1.0;
  var k = 0;

  do {
      k++;
      p *= Math.random();
  } while (p > L);


  return k - 1;
}


module.exports = poisson;
