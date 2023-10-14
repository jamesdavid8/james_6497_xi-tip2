//24. Dapatkan slice dari kalimat "Bahasa yang digunakan untuk membuat aplikasi mobile adalah Kotlin dan Javascript" mulai dari indeks 7 dengan panjang 8 karakter.
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan index awal: ", (awal) => {
        rl.question("Masukan panjang index: ", (panjang) => {
            awal = Number(awal);
            panjang = Number(panjang); 
            const substring = input.substr(awal, panjang);
            console.log(`Hasil slice dari index ${awal} dengan panjang ${panjang} adalah ${substring}`);
            rl.close();
        })
    })
});