// contoh 1

// function tambah (a,b) {
//     return a + b;
// }


// tambah(2,3);

// console.log(tambah(2,3));



// hasil jika dijalankan belum muncul ke console karena kita tidak memanggilnya, namun hasilnya sudah ada di memori.

// tambahkan console.log jika anda ingin melihat hasil dari nilai yang dicetak!



// hasilnya adalah 5
// hasil dari penjumlahan 2 + 3 = 5


// contoh 2

// function tambah (a,b) {
//     return a + b;
// }


// var hasil = tambah (2,3);

// console.log(hasil);

// hasilnya adalah 5
// 2 masuk ke dalam paarameter a
// 3 masuk ke dalam parameter b
// hasil dari penjumlahan 2 + 3 = 5

// argument bisa diisi nilainya dengan banyak cara
// bisa langsung ditulis langsung atau bisa disimpan dulu kedalam sebuah variabel.
// kita bisa menyimpan variabel untuk argument

// contoh 3 
// function tambah (a,b) {
//     return a + b;

// }

// var a = 10;
// var b = 20;
// var hasil = tambah(a,b);
// console.log(hasil);


// argument juga bisa kita ambil dari input an oleh user, dengan cara menggunakan pop up prompt
// namun kalian perlu menambahkan parseInt pada prompt, karena prompt akan menghasilkan string, dan kita ingin menghasilkan angka.
// ketika kita membuat sebuah prompt itu yang kita masukkan adalah "string" sedangkan contoh yang hendak kita coba ini nilainya adalah angka
// maka kita perlu mengubahnya menjadi angka dengan menggunakan parseInt

// contoh 4

// function tambah (a,b) {
//     return a + b;
// }

// var a = parseInt(prompt('masukkan nilai 1:'));
// var b = parseInt(prompt('masukkan nilai 2:'));
// var hasil = tambah(a,b);
// console.log(hasil);

// kita juga bisa memasukkan operasi matematika contohnya dengan menambahkan tanda *

// contoh 5
// function tambah (a,b) {
//     return a + b;
// }

// var a = parseInt(prompt('masukkan nilai 1:'));
// var b = parseInt(prompt('masukkan nilai 2:'));
// var hasil = tambah(a*2,b*2);    //dibaca : apapun input an dari user kita jadikan integer lalu kalikan dengan 2
// console.log(hasil);


// contoh diatas ialah kita bisa memasukkan argument menggunakan expresi

// contoh 6 
// kita bisa memasukkan argumentnya itu adalah function juga.

// function tambah(a,b) {
//     return a + b;
// }   

// function kali(a,b) {
//     return a * b;
// }

// var hasil = kali(tambah (1,2), tambah(3,4)); //function ini akan mengalikan 3 dikali dengan 7
// console.log(hasil);


// contoh lain
// ada 5 argument tambah (5,10,20,"hi"false);
// semua argument akan ditampung kedalam sebuah variabel yang tipenya array yang didalamnya nilainya bisa banyak lalu  masing2 nilai mempunyai index.

// contoh soal

// function tambah () {
//     return arguments;
// }

// var coba = tambah (5,10,20,"hi",false); 
// console.log(coba);

// cara membuat function yang tanpa parameter dan tanpa argument namun hanya dengan menggunakan arguments yang variablenya bertipe array.

function tambah () {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah (1,2,3,4); //misal argumentnya ini ditambahkan juga tidak apa2, tidak perlu merubah lagi functionnya. nantinya akan otomatis bertambah.
console.log(coba);