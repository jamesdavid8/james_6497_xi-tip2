//3. Berapa karakterkah dalam kata "Ibu Kota Negara"?

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    console.log(`Panjang kalimat tersebut adalah: ${input.length}`);
    rl.close();
});
//Panjang kata tersebut adalah 15