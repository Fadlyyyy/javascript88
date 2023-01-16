var lagi = true;

while (lagi) {
  //Komputer membangkitkan angka random
  var random = Math.floor(Math.random() * 10) + 1;
console.log(random);

  // Alur Permainan
var hasil = "";
var chance = 3;
for (; chance >= 1; chance--) {
    // Player melakukan input (menebak)
    var guess = prompt("Pilihlah angka antara 1-10! \n(Anda memiliki " + chance + " kali kesempatan)");

    if (guess == random) {
    hasil = "BENAR";
    alert("Angka tebakan anda " + hasil + ".");
    break;
    } else if (guess != random && chance > 1 && hasil != "BENAR") {
    hasil = guess < random ? "terlalu RENDAH" : "terlalu TINGGI";
    } else if (guess != random && chance == 1) {
    hasil = "SALAH";
    alert("Angka tebakan anda " + hasil + ". \nKesempatan anda sudah habis.");
    }
}

lagi = confirm("Apakah anda ingin main lagi?");
}

alert("Terimakasih sudah bermain!");
