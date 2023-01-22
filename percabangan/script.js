// var angka = prompt('masukkan angka :');
// if(angka % 2 == 0){
//     alert (angka + ' adalah bilangan genap');
// }else if  (angka % 2 == 1) {
//     alert (angka + ' adalah bilangan ganjil'); 
// } else {
//     alert ('yang anda masukkan bukan angka!'); 
// }


// var angka = prompt ('masukkan angka : ');
// if (angka % 2 == 0) {
//     alert (angka + ' adalah bilangan genap'); 
// } else if (angka % 2 == 1 ) {
//     alert (angka + ' adalah bilangan ganjil');
// } else {
//     alert (' yang anda masukkan bukan angka!');
// }



// angkot4.js

var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 4;
var angkotLembur = 10;




for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 10 || noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else if (noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else if (noAngkot === 6) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
    }
}
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }



// var jmlBis = 10;
// var bisBeroperasi = 6;
// var noBis = 1;

// for (noBis; noBis <= jmlBis; noBis++) {
//     if (noBis <= bisBeroperasi) {
//         console.log ('Bis No. ' + noBis + ' Beroperasi dengan baik.')
//     } else {
//         console.log( 'Bis No. ' + noBis + ' Sedang tidak beroperasi.')
//     }
// }


  // alert('mulai');
        // for (var i = 0; i < 5; i++) {
        //     alert('Hello World!');
        // }
        // alert('selesai!');
