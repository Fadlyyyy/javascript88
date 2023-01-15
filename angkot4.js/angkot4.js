var operasi1 = ' beroperasi dengan baik.';
var operasi2 = ' sedang tidak beroperasi.';
var operasi3 = ' sedang lembur.';
var jumlahAngkot = 10;
var angkot = 1;

for (angkot; angkot <= jumlahAngkot ; angkot++) {
    if (angkot <= 6) {
        var aksi = operasi1;
    } else if (angkot === 8) {
        var aksi = operasi3;
    } else {
        var aksi = operasi2;
    }
    console.log('Angkot No. ' + angkot + aksi);
}