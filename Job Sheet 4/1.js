//1. Hitung panjang karakter dari kalimat berikut ini: "Budi adalah seorang siswa jurusan RPL yang tinggal didaerah Bekasi"

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    console.log(`Panjang kalimat tersebut adalah: ${input.length}`);
    rl.close();
});
//Panjang kata tersebut adalah 66