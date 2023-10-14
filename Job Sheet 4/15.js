//15. Dimana posisi kata "jurusan" pertama kali muncul dalam kalimat "Banu merupakan seorang murid di sekolah SMK di Jakarta dan jurusan dia adalah RPL"?

const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan huruf yang ingin anda cari: ", (huruf) => {
        const indexHuruf = input.indexOf(huruf);
        if (indexHuruf != -1) {
            console.log(`Huruf ${huruf} ditemukan pada index ke ${indexHuruf}`);
        } else {
            console.log(`Maaf, huruf yang anda cari tidak ditemukan`);
        };
        rl.close();
    });
});