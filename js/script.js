//Contoh sederhana dalam popup box
alert(`Selamat datang di website kami`);
var lagi = true;

while (lagi) {
    var nama = prompt('Masukkan nama Anda:');
    alert(`Selamat datang ${nama}`);

    lagi = confirm(`Apakah ada kesalahan username?`);
}

alert('Terima kasih sudah menggunakan website kami');

// Control flow for javascript

console.log(`Mulai`);
for (var i = 0; i <= 5; i++) {
    console.log(`Selamat datang user ${i}`);
}
console.log('Terima kasih');

var angka = prompt(`Silahkan masukkan bilangan anda`);
if(angka % 2 == 0) {
    console.log(`Angka ${angka} adalah genap`);
} else {
    console.log(`Angka ${angka} adalah ganjil`);
}

// Pengulangan menggunakan while dan for

var nilaiAwal = 1;
for (nilaiAwal; nilaiAwal <= 10; nilaiAwal++) {
    document.getElementById("demo").innerHTML += `Nilai awal adalah ${nilaiAwal}.<br/>`;
}

// Pengulangan menggunakan else if statement

var nilai = prompt(`Masukkan nilai anda`);

if (nilai % 2 === 0) {
    console.log(`${nilai} adalah genap.`);
} else if (nilai % 2 === 1) {
    console.log(`${nilai} adalah ganjil.`);
} else {
    console.log(`${nilai} bukan merupakan angka.`);
}

// switch case dalam perulangan

var bulan = prompt(`Masukkan bulan (1-12)`);

switch (bulan) {
    case '1':
        alert('Januari memiliki 31 hari.');
        break;
    case '2':
        alert('Februari memiliki 28 hari.');
        break;
    case '3':
        alert('Maret memiliki 31 hari.');
        break;
    case '4':
        alert('April memiliki 30 hari.');
        break;
    case '5':
        alert('Mei memiliki 31 hari.');
        break;
    case '6':
        alert('Juni memiliki 30 hari.');
        break;
    case '7':
        alert('Juli memiliki 31 hari.');
        break;
    case '8':
        alert('Agustus memiliki 31 hari.');
        break;
    case '9':
        alert('September memiliki 30 hari.');
        break;
    case '10':
        alert('Oktober memiliki 31 hari.');
        break;
    case '11':
        alert('November memiliki 30 hari.');
        break;
    case '12':
        alert('Desember memiliki 31 hari.');
        break;
    default:
        alert('Bulan yang Anda masukkan salah.');
}

// pengulangan dan pengkondisian bersarang

var s = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    s += "* ";
  }
  s += "\n";
}

console.log(s);

// function pada javascript

