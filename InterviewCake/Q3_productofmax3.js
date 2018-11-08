var array_of_ints = [3, 3, 1, 2, 1, -10, 0, -10];

highestProduct = function(arr){
//   arr = Math.abs(arr);
  console.log(arr)

  var highest = 1;

  var i=1;
  while(i<=3){
    highest*=(arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1))
    i++
  }

  console.log(highest)

};

highestProduct(array_of_ints);
