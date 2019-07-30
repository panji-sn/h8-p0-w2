//Soal Nomor 1
var rows1 = 5;

console.log('Soal Nomor 1');
for (var i = 1;i <= rows1;i++){
  console.log('*');
}

//Soal Nomor 2
var rows2 = 5;
var sym = '';

console.log('Soal Nomor 2');
for (var i = 1; i<= rows2;i++){
  for (var j=1;j<=rows2;j++){
    sym+='*';
  }
  console.log(sym);
  sym='';
}

//Soal Nomor 3
var rows3 = 5;
var sym2 ='';

console.log('Soal Nomor 3');
for (var i = 1; i<= rows3;i++){
  for (var j=1;j<=i;j++){
    sym2 +='*';
  }
  console.log(sym2);
  sym2='';
}