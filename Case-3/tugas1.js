const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let data = {}

rl.question("Nama: ", nama => {
  data.nama = nama
  rl.question("Umur: ", umur => {
    data.umur = parseInt(umur)
    rl.question("Tempat tinggal: ", tempat => {
      data.tempat = tempat
      rl.question("Tabungan ($): ", tabungan => {
        data.tabungan = parseFloat(tabungan)

        if (data.umur > 40 && (data.tempat == "Nevada" || data.tempat == "New York" || data.tempat == "Havana") && data.tabungan > 10000000)
          console.log(`${data.nama} kemungkinan adalah seorang anggota mafia dengan pangkat Don.`)
        else if (data.umur >= 25 && data.umur <= 40 && (data.tempat == "New Jersey" || data.tempat == "Manhattan" || data.tempat == "Nevada") && data.tabungan >= 1000000 && data.tabungan <= 2000000)
          console.log(`${data.nama} kemungkinan adalah seorang anggota mafia dengan pangkat Underboss.`)
        else if (data.umur >= 18 && data.umur <= 24 && (data.tempat == "California" || data.tempat == "Detroit" || data.tempat == "Boston") && data.tabungan < 1000000)
          console.log(`${data.nama} kemungkinan adalah seorang anggota mafia dengan pangkat Capo.`)
        else
          console.log(`${data.nama} tidak mencurigakan.`)

        rl.close()
      })
    })
  })
})