var angka = prompt ('masukkan angka:');
if (isNaN(angka)){
alert ('yang anda masukkan bukan angka!!');
} else if (angka % 2 === 0) {
alert (angka + ' adalah bilangan genap');
} else {
alert (angka + ' adalah bilangan ganjil');
}