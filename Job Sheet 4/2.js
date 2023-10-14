//2. Hitung panjang karakter dari kalimat berikut ini: "JavaScript is a powerful language."

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    console.log(`Panjang kalimat tersebut adalah: ${input.length}`);
    rl.close();
});
//Panjang kata tersebut adalah 34