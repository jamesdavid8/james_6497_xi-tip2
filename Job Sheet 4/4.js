//4. Berapa jumlah karakter dalam string "1234567890"?

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    console.log(`Panjang kalimat tersebut adalah: ${input.length}`);
    rl.close();
});
//Panjang kata tersebut adalah 10