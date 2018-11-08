var testArr =  [1, 7, 3, 4];
//takes an array of integers
//returns array of products

var get_products_of_all_ints_except_at_index = function(arr){

  var products = [];
  var product = 1;

  for(var idx in arr){
    var index = arr[idx];

    for(var i=0; i<arr.length; i++){
      var num = arr[i];
      if(num !== index){
        product = product * num;
      }
    }
    products.push(product);
    product = 1;
  }

console.log(products);

}

get_products_of_all_ints_except_at_index(testArr);
