// global scope / window scope

// var a = 1;

// function tes () {

//     //name conflict
//     a = 2;
// }

// tes ();
// console.log(a);
// mengapa disebut window scope atau global scope karena dia berada didalam objek window yang artinya objek paling luar didalam browser kita.

// jika var nya dihilangkan maka hasilnya yang akan tampil pada console adalah 2 
// jika menggunakan var akan maka hasilnya yang akan tampil pada console adalah 1 karena (a) sudah pasti mengacu pada variabel global.
// sedangkan jika tidak menggunakan var hasil yang tampil adalah 2 hal ini karena javascript akan mengecek a = 2; tidak memiliki var
// dia akan mengecek ada atau tidak didalam function tersebut deklarasi variabel (a) , jikalau ada brarti akan dibuat variabel lokal.
// jikalau tidak ada brarti function akan mengintip keluar, ia akan mengecek ke variabel globalnya ada atau tidak.
// maka a = 2 akan menimpa 1 jadi hasilnya adalah 2

//  jika terjadi kasus 
function tes() {
    a = 2;
}

tes ();
console.log(a);

// hasil yang tampil adalah 2
// yang terjadi adalah pada saat didalam function ditulis a = 2; javascript melihat bahwa tidak ada keyword var didalamnya maka ia akan mengecek
//  ada atau tidak deklarasi variabel didalam function tersebut, jika tidak ada berarti (a) bukanlah variable lokal.
// lalu dia akan mengecek keluar. \
// memastikan bahwa ada atau tidak deklarasi variable a
// jika tidak ada maka yang terjadi ialah javascript akan secara otomatis membuat variable (a) diluar.
// sehingga a = 2; adalah variable global.

// namun hal ini perlu hati2 jika user berniat ingin membuat variable lokal maka pastikan user harus selalu menuliskan keyword var didalamnya!
// caranya adalah 
// var a;
// a = 2

// cara tersebut bisa kalian lakukan jikalau kalian hanya ingin membuat variable (a) bisa diakses didalam function saja.
// karena jikalau kalian tidak menuliskan dengan cara (var maka akan dibuat variable global.
// hal tersebut dilakukan jika user ingin membuat variable a bisa diakses didalam function saja.


