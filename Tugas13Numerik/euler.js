let T = 80; //suhu awal
let k = 0.1;
let T_ruang = 25;
let h = 1; //waktu

for (let t = 0; t < 3; t++) {
  let dTdt = -k * (T - T_ruang);
  T = T + h * dTdt;
  console.log("t =", t + 1, "detik, T =", T.toFixed(2));
}