//28. Ubah string "Android Studio" menjadi huruf kecil (lowercase).
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat yang ingin diubah menjadi huruf kecil: ", (input) => {
    const hasil = input.toLocaleLowerCase()
    console.log(`Hasil: ${hasil}`);
    rl.close();
});