// alert('halo');
// alert('nama');
// alert('saya');
// alert('fardli yansah');

// var nama = prompt('masukan nama anda');
// alert(nama);


// var tes = confirm('apakah kamu yakin?');
// if(tes === true) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan cancel!');
// }
// alert(tes);


alert('selamat datang..');
var lagi = true;

while ( lagi ) {
    var nama = prompt('masukkan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}
alert('terima kasih..');