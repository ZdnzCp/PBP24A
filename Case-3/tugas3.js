const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Pilih olahraga (lari/push-up/plank): ", function(olahraga) {
  rl.question("Berapa menit melakukan olahraga tersebut: ", function(menit) {
    menit = parseInt(menit)
    let kalori = 0

    if (olahraga === "lari") {
      kalori = (menit / 5) * 60
    } 
    else if (olahraga === "push-up") {
      kalori = (menit / 30) * 200
    } 
    else if (olahraga === "plank") {
      kalori = menit * 5
    } 
    else {
      console.log("Jenis olahraga tidak dikenal.")
      rl.close()
      return
    }

    console.log(`Kalori yang terbakar setelah ${menit} menit ${olahraga} adalah ${kalori} kalori.`)
    rl.close()
  })
})