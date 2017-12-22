function add( lhs, rhs ) {
   return lhs+rhs;
};

function sum_array( array ) {
  var sum = 0;
  for (var i=0; i<array.length;i++){
    sum += array[i];
  }
  return sum;
};
