// // Built in functions
// var nama = "Hilmi Afifi";//mengetahui di angka ke 3 ada huruf apa
// console.log(nama.charAt(3));

// var bil = Math.random();
// console.log(bil);


// // user defined function
// function jumlahDuaBilangan(a, b) { // function declaration
//     var jumlah;
//     jumlah = a + b;
//     return jumlah;
// }

// console.log(jumlahDuaBilangan(5, 10));

// var jumlahBilangan = function (c, d) {  // function expression
//     var hasil;
//     hasil = c * d;
//     return hasil;
// }

// console.log(jumlahBilangan(3, 7));

function ikhtiar(doa, usaha) {
    if(doa && usaha) {
        alert`Iktiar kita akan membuahkan hasil`;
    } else {
        alert`Iktiar kita tidak akan membuahkan hasil`;
    }
}

ikhtiar(true, true);
// ikhtiar(true, false);

// menghitung dua buah kubus
var volumeA = parseInt(prompt(`Masukkan angka sisi pertama`));
var volumeB = parseInt(prompt(`Masukkan angka sisi kedua`));

function jumlahVolumeKubus() {
    var totalVolume = 0;

    for (var i = 0; i < arguments.length; i++) {
        totalVolume += arguments[i] * arguments[i] * arguments[i];
    }
    return totalVolume;
}

var totalVolume = jumlahVolumeKubus(volumeA, volumeB);
alert(`Total volume adalah : ${totalVolume}`)