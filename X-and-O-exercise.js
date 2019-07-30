function xo(str) {
  var A ='';
  var B ='';
  for (var i = 0; i<str.length;i++){
    if (str.charAt(i) == 'x'){
      A=A+1;
    } else{
      B=B+1;
    }
  }
  if(A==B){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true