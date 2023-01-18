// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n-1)
// }
// tampilAngka(10);

// menghasilkan infinite loop karena tidak diberi base case


// contoh base case

function cetakAngka(n) {
    if (n === 0) {
        return;  // fungsinya untuk memberhentikan fungsinya saja.     
    }
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);


