//23. Dapatkan substr 7 karakter terakhir dari string "Universitas Gajah Mada adalah salah satu universitas favorite di Indonesia".
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan jumlah index terakhir yang ingin dicari: ", (jumlah) => {
        jumlah = Number(jumlah);
        const awal = input.length - jumlah;
        const substring = input.slice(awal, input.length);
        console.log(`${jumlah} karakter terakhir dari kalimat tersebut adalah: ${substring}`);
        rl.close();
    });
});