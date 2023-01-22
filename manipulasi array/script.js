// manipulasi array

// 1. Menambah isi array
// var arr = ["a",1,true];
// console.log(arr[1]); 

// var arr = [];
// arr[0] = "Rizki";
// arr[1] = "Rahmat";
// arr[2] = "Rahman";
// console.log(arr);


// 2. Menghapus isi array
// var arr = ["Rizki", "Rahmat", "Rahman"];
// arr[1] = undefined;

// console.log(arr);


// 3. Menampilkan isi array dengan looping

// var arr = ["Rizki", "Rahmat", "Rahman", 'budi', 'joko'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ':' + arr[i]);
// }

//  4. Method pada array
// 1. join

// var arr = ["Rizki", "Rahmat", "Rahman", 'budi', 'joko'];
// console.log(arr.join(' - '));

// 2. push & pop

// push
// push digunakan untuk menambah elemen array diakhir arraynya jadi push mendorong atau memasukkan elemen baru diakhir arraynya.
// push bisa lebih dari 1 elemen

// var arr = ["Rizki", "Rahmat", "Rahman", 'budi', 'joko'];
// arr.push('Doddy');
// console.log(arr.join(' - '));

// pop
// pop digunakan untuk menghilangkan elemen terakhir dari sebuah akhir (kebalikan dari push)
// analoginya seperti memecahkan sebuah balon
// pop harus 1 persatu tidak bisa sekaligus

// var arr = ["Rizki", "Rahmat", "Rahman", 'budi', 'joko'];
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));


// unshift & shift
// sama dengan push dan pop namun kebalikannya
// bekerja untuk elemen pertama pada array 


// unshift
// jika menulis unshift user akan menambahkan elemen baru di awal arraynya

// var arr = ["Rizki", "Rahmat", "Rahman"];

// arr.unshift('budi');
// console.log(arr.join(' - '));


// shift menghilangkan elemen pertama
// var arr = ["Rizki", "Rahmat", "Rahman"];

// arr.shift('Rizki');
// console.log(arr.join(' - '));


// shift dan pop benar2 menghilangkan elemennya bukan merubahnya menjadi undefined.

// 4. splice

// var arr = ["Rizki", "Rahmat", "Rahman"];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

// arr.splice(1,2, 'Dodit', 'fitri');
// console.log(arr.join(' - '));


// 5. slice
// slice digunakan untuk mengiris sebuah array menjadi array yang baru..
// var arr = ["Rizki", "Rahmat", "Rahman", "budi", "boril"];

//  slice(awal,akhir);
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// mulai dari 0 angka mulai
// slice menghasilkan array baru, array yang lama masih tetap bisa diakses.


// 6. foreach 


// jika menggunakan for biasa
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for( var i = 0; i < angka.length; i++ ) {
//     console.log(angka[i]);
// }

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Rizki", "Rahmat", "Rahman", "budi", "boril"];

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// });

// var cetak = function(e) {
//     console.log(e);
// }
// .
// angka.forEach(function(e) {
//     consolelog(e);
// });
// sintaks diatas dibaca foreach untuk setiap elemen yang ada pada array angka lakukan fungsi berikut ini..

// kerennya pada foreach adalah kita tidak perlu membuat indeks kita tidak perlu menentukan akan looping berapa kali dan kita tidak perlu increment
// ini juga bisa dikeluarkan dan dijadikan function sendiri



// 7. map (dapat mengembalikan array)

// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) { 
//     return e * 2;
// });

// console.log(angka2.join( ' - '));


// 8. sort

// sort berfungsi untuk mengurutkan isi arraynya

// var angka = [1,2,5,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

// namun jika ada kasus seperti 
// var angka = [1,2,,10,5,,20,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));


// hasil diatas akan mengurutkan karakter pertamanya dahulu
// jika mengurutkannya ingin benar kalian harus tambahkan sebuah function perbandingan angkanya.
// lalu 

// var angka = [1,2,,10,5,,20,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));


//  hal tersebut musti dilakukan agar membuat urutan arraynya benar 

// 9. filter
// fungsinya untuk mencari nilai pada array dan mengembalikkannya dalam bentuk array

// var angka = [1,2,,10,5,,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5 ;
// });
// console.log(angka2.join(' - '));

// 10. find
// dia hanya menemukan 1 nilai saja
// var angka = [1,2,,10,5,,20,3,6,8,4];
// var angka2 = angka.find(function(x) {
//     return x > 5 ;
// });
// console.log(angka2.join(' - '));

// jangan menggunakan join karena find tidak menghasilkan array tapi dia menghasilkan 1 nilai, makanya tidak bisa memakai join, karena join berfungsi untuk menggabungkan array.

var angka = [1,2,,10,5,,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5 ;
});
console.log(angka2);
