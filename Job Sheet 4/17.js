//17. Ambil substring dari kalimat "Jika anda ingin menjadi orang sukses, jangan berhenti untuk bermimpi" mulai dari indeks 7 hingga akhir kalimat.
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (input) => {
    rl.question("Masukan index awal: ", (awal) => {
        rl.question("Masukan index akhir: ", (akhir) => {
            awal = Number(awal);
            akhir = Number(akhir); 
            const substring = input.slice(awal, akhir);
            console.log(`Hasil dari index ${awal} hingga ${akhir} adalah ${substring}`);
            rl.close();
        })
    })
});