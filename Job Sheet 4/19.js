//19. Dapatkan substring dari kalimat "I love programming" mulai dari indeks 2 dengan panjang 5 karakter.
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