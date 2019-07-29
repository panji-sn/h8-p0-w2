var nama = 'Asu';
var peran = 'Ksatria';

if (!nama){
    console.log("Nama harus diisi!");
} else if (nama && !peran){
    console.log("Halo "+nama+", Pilih peranmu untuk memulai game ! Peran yang tersedia adalah Ksatria, Tabib, dan Penyihir");
}

switch (nama && peran){
    case 'Ksatria':
        console.log("Selamat datang di Dunia Proxytia, "+nama);
        console.log("Halo "+ peran+" "+ nama+", kamu dapat menyerang dengan senjatamu!");
        break;
    case 'Tabib':
        console.log("Selamat datang di Dunia Proxytia, "+nama);
        console.log("Halo "+ peran+" "+ nama+", kamu akan membantu temanmu yang terluka.");
        break;
    case 'Penyihir':
        console.log("Selamat datang di Dunia Proxytia, "+nama);
        console.log("Halo "+ peran+" "+ nama+", ciptakan keajaiban yang membantu kemenanganmu!");
        break;

}