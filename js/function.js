// // Built in functions
// var nama = "Hilmi Afifi";//mengetahui di angka ke 3 ada huruf apa
// console.log(nama.charAt(3));

// var bil = Math.random();
// console.log(bil);


// user defined function
function jumlahDuaBilangan(a, b) { // function declaration
    var jumlah;
    jumlah = a + b;
    return jumlah;
}

console.log(jumlahDuaBilangan(5, 10));

var jumlahBilangan = function (c, d) {  // function expression
    var hasil;
    hasil = c * d;
    return hasil;
}

console.log(jumlahBilangan(3, 7));

function ikhtiar(doa, usaha) {
    if(doa && usaha) {
        document.getElementById("demo").innerHTML += `Ikhtiar akan membuahkan hasil`;
    } else {
        document.getElementById("demo").innerHTML += `Ikhtiar tidak akan membuahkan hasil`;
    }
}

ikhtiar(true, true);
// ikhtiar(true, false);

function panggilNama() {
    var nama = prompt(`Masukkan nama anda`);

    return nama;
}

var nama = panggilNama();
alert(`Halo, selamat datang ${nama}`);

// menghitung dua buah kubus


var volumeA = parseInt(prompt(`Masukkan sisi kubus pertama`));
var volumeB = parseInt(prompt(`Masukkan sisi kubus kedua`));
var volumeC = parseInt(prompt(`Masukkan sisi kubus ketiga`));

function volumeKubus() {
    var totalVolume = 0;

    for (var i = 0; i < arguments.length; i++) {
        totalVolume += arguments[i] * arguments[i] * arguments[i];
    }

    return totalVolume;
}

var totalVolume = volumeKubus(volumeA, volumeB, volumeC);
alert(`Total volume kubus adalah : ${totalVolume}`);

