//27. Ubah kalimat "Jurusan Teknik Informatika Pemrograman" menjadi huruf besar (uppercase).
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat yang ingin diubah menjadi huruf besar: ", (input) => {
    const hasil = input.toUpperCase()
    console.log(`Hasil: ${hasil}`);
    rl.close();
});