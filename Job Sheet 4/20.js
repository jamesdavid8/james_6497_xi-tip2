//20. Dapatkan substring dari string "Universitas Sudirman merupakan universitas yang terletak di kota Purwokerto" mulai dari indeks 3 hingga indeks 10.
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan index awal: ", (awal) => {
        rl.question("Masukan index akhir: ", (panjang) => {
            awal = Number(awal);
            panjang = Number(panjang); 
            const substring = input.slice(awal, panjang);
            console.log(`Hasil slice dari index ${awal} dengan panjang ${panjang} adalah ${substring}`);
            rl.close();
        })
    })
});