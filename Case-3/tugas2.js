const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Masukkan umur anak (tahun): ", function(umur) {
  rl.question("Masukkan tinggi anak (cm): ", function(tinggi) {
    umur = parseInt(umur)
    tinggi = parseInt(tinggi)
    let tarif = 0

    if (umur < 1) {
      console.log("Dilarang masuk")
    } 
    else if (umur < 3) {
      tarif = 30000
      if (umur >= 2 && tinggi > 70) {
        tarif += 10000
      }
      console.log("Tarif: Rp " + tarif)
    } 
    else if (umur < 7) {
      tarif = 40000
      if (umur >= 4 && tinggi > 120) {
        tarif += 15000
      }
      console.log("Tarif: Rp " + tarif)
    } 
    else if (umur < 10) {
      tarif = 50000
      if (umur >= 8 && tinggi > 150) {
        tarif += 20000
      }
      console.log("Tarif: Rp " + tarif)
    } 
    else {
      tarif = 80000
      console.log("Tarif: Rp " + tarif)
    }

    rl.close()
  })
})
