//contoh sederhana dalam kasus angkot beroperasi atau tidak menggunakan while dan for statement
var nama = prompt(`Silahkan masukkan nama anda`);
alert(`Selamat datang: ${nama}`);

var jmlAngkot = prompt(`Berapa jumlah angkot yang ingin diperiksa ?`);
var noAngkot = 1;
var angkotBeroperasi = prompt(
  `Berapa jumlah angkot yang sedang beroperasi dengan baik ?`
);

while (noAngkot <= angkotBeroperasi) {
  document.getElementById(
    "demo"
  ).innerHTML += `Angkot No, ${noAngkot} beroperasi dengan baik.</br>`;
  noAngkot++; // incrementing the counter by 1 each time through the loop.
}

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  document.getElementById(
    "demo"
  ).innerHTML += `Angkot No, ${noAngkot} sedang dalam perawatan.</br>`;
}

alert(`Terima kasih ${nama}`);

// Contoh sederhana dalam kasus mahasiswa lulus menggunakan if else dan else if statement
var nama1 = prompt("Masukkan nama anda kembali");
alert(`Selamat datang dosen ${nama1}`);
var jmlMhs = prompt("Berapa banyak mahasiswa yang ingin diperiksa?");
var mhsLulus = prompt("Berapa banyak mahasiswa yang lulus");
var mhsRulus = prompt("Masukkan nomor mahasiswa yang baru lulus?")
  .split(",")
  .map(Number);
var noMhs = 1;

for (noMhs; noMhs <= jmlMhs; noMhs++) {
  if (mhsRulus.includes(noMhs)) {
    document.getElementById(
      "demo1"
    ).innerHTML += `Mahasiswa No. ${noMhs} baru lulus.</br>`;
  } else if (noMhs <= mhsLulus) {
    document.getElementById(
      "demo1"
    ).innerHTML += `Mahasiswa No. ${noMhs} lulus.</br>`;
  } else {
    document.getElementById(
      "demo1"
    ).innerHTML += `Mahasiswa No. ${noMhs} gagal.</br>`;
  }
}

// Penggunaan switch case

var n = 5; // jumlah baris
var result = "";

// buat baris
for (var row = 1; row <= n; row++) {
  // cetak spasi
  for (var space = 0; space < n - row; space++) {
    result += " ";
  }

  // buat pola
  for (var star = 0; star < row; star++) {
    // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya
    if (star >= 1) {
      result += "+";
    }

    // selain dari itu langsung cetak *
    result += "*";
  }

  // print row
  result += "\n";
}

console.log(result);
