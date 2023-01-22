var jmlAngkot = 10;
var angkotBeroperasi = 6;

// OPSI 1
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');

    } else if (noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');

    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}



// OPSI 2

// var noAngkot = 1;
// var jmlAngkot = 10;
// var angkotBeroperasi = 4;
// var angkotLembur = 10;   


// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if (noAngkot === 10 || noAngkot === 8) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     } else if (noAngkot === 5) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     } else if (noAngkot === 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     }
//     else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
//     }
// }


// opsi 3
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 6 && noAngkot !== 5) { //  && dibaca (dan) note : jika menggunakan operator && dua2nya harus bernilai true supaya seluruh kondisinya true jika ada 1 saja yang false maka seluruh kondisinya akan bernilai false.. dan aksinya tidak akan dikerjakan
        //lalu untuk tanda !== tidak sama dengan
        console.log('Angkot No' + noAngkot + 'Beroperasi dengan baik.')
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) { // beda dengan || (or) jika salah satu bernilai true maka seluruh kondisinya terevaluasi atau bernilai true
    } else {
        console.log('Angkot No. ' + noAngkot + 'sedang tidak dapat beroperasi.');
    }
}
