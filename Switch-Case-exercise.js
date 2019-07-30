var tanggal = Math.round(Math.random()*31);
var bulan = Math.round(Math.random()*12);
var tahun = Math.round(Math.random()*2019);

switch (bulan){
  case 1:
    console.log(tanggal+' '+'Januari'+' '+tahun);
    break;
  case 2:
    if (tanggal>28  && tahun % 4 !==0){
      console.log('Bulan Februari hanya sampai tanggal 28');
    } else if (tanggal<=29){
      console.log(tanggal+' '+'Februari'+' '+tahun);
    }
    break;
  case 3:
    console.log(tanggal+' '+'Maret'+' '+tahun);
    break;
  case 4:
    if (tanggal>30){
      console.log('Bulan April hanya sampai tanggal 30');
    } else {
      console.log(tanggal+' '+'April'+' '+tahun);
    }
    break;
  case 5:
    console.log(tanggal+' '+'Mei'+' '+tahun);
    break;
  case 6:
    if (tanggal>30){
      console.log('Bulan Juni hanya sampai tanggal 30');
    } else {
      console.log(tanggal+' '+'Juni'+' '+tahun);
    }
    break;
  case 7:
    console.log(tanggal+' '+'Juli'+' '+tahun);
    break;
  case 8:
    console.log(tanggal+' '+'Agustus'+' '+tahun);
    break;
  case 9:
    if (tanggal>30){
      console.log('Bulan September hanya sampai tanggal 30');
    } else {
      console.log(tanggal+' September'+' '+tahun);
    }
    break;
  case 10:
    console.log(tanggal+' '+'Oktober'+' '+tahun);
    break;
  case 11:
    if (tanggal>30){
      console.log('Bulan November hanya sampai tanggal 30');
    } else {
      console.log(tanggal+' November'+' '+tahun);
    }
    break; 
  case 12:
    console.log(tanggal+' '+'Desember'+' '+tahun);
    break;
  default:
    console.log('Bulan yang dimasukkan salah !');

}

