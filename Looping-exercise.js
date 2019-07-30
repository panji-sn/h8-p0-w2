//soal 1
var angka1 = 2;
var angka2 = 20;
var lp1 = 'LOOPING PERTAMA';
var lp2 = 'LOOPING KEDUA';
var teks1 = ' - I love coding';
var teks2 = ' - I will become fullstack developer';

console.log('Soal Nomor 1');
console.log(lp1);
while (angka1<=20){
  console.log(angka1+teks1);
  angka1 = angka1 + 2;
}

console.log(lp2);
while (angka2>=2){
  console.log(angka2+teks2);
  angka2 = angka2 - 2;
}

//soal 2
var angka1 = 1;
var angka2 = 20;
var lp1 = 'LOOPING PERTAMA';
var lp2 = 'LOOPING KEDUA';
var teks1 = ' - I love coding';
var teks2 = ' - I will become fullstack developer';

console.log('Soal Nomor 2');
console.log(lp1);
for(var jumlah =20;angka1 <= jumlah;angka1++){
   console.log(angka1+teks1);
}

console.log(lp2);
for(var jumlah =1;angka2 >= jumlah;angka2--){
  console.log(angka2+teks2);
}

//soal 3
var ganjil = 'GANJIL';
var genap = 'GENAP';
var teks3 = ' KELIPATAN ';

console.log('Soal Nomor 3')
console.log('Bilangan Ganjil-Genap');
for (var i = 1;i <=100;i++){
  if(i % 2 == 0){
    console.log(genap);
  } else{
    console.log(ganjil);
  }
}
console.log('Bilangan KELIPATAN 3')
for (var i = 1;i <=100;i+=2){
  if(i % 3 == 0){
    console.log(i+teks3+'3' );
  } else{
    console.log('');
  }
}
console.log('Bilangan KELIPATAN 6')
for (var i = 1;i <=100;i+=5){
  if(i % 6 == 0){
    console.log(i+teks3+'6' );
  } else{
    console.log('');
  }
}
console.log('Bilangan KELIPATAN 10')
for (var i = 1;i <=100;i+=9){
  if(i % 10 == 0){
    console.log(i+teks3+'10' );
  } else{
    console.log('');
  }
}