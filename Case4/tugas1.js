let studentsScore = [
    {
        name: "Andi",
        score: 98
    },
    {
        name: "Rudi",
        score: 89
    },
    {
        name: "Dira",
        score: 100
    }
]

let nilaiTertinggi = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > nilaiTertinggi.score) {
        nilaiTertinggi = studentsScore[i];
    }
}

console.log("Siswa dengan nilai tertinggi:");
console.log("Nama: " + nilaiTertinggi.name);
console.log("Nilai: " + nilaiTertinggi.score);