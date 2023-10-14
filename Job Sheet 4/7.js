//7. Karakter apa yang terdapat pada indeks ke-7 dalam kata "Republik Indonesia"?

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan index yang ingin anda cari: ", (index) => {
        index = Number(index);

        if (index >= 0 && index < input.length) {
            result = input.charAt(index);
            console.log(`Huruf pada index ke ${index} adalah ${result}`);
        } else {
            console.log(`Maaf, huruf pada index ke ${index} tidak ditemukan`);
        };
        rl.close();
    });
});
//Huruf pada index ke 7 adalah k