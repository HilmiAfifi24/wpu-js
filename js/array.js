var hari = [];
hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

console.log(hari.length);


var myArr = ['teks', 2, false, myApp, [4, 5, 6]];
console.log(myArr[3]());

function myApp() {
    var nama;
    nama = alert(`Hello world!`);

    return nama;
};

// Manipulasi array of javascript

var mhsLulus = ["Hilmi", "Alfian", "Attar", "Rizal", "Adrian","Redian"];

for (var i = 0; i < mhsLulus.length; i++) {
    console.log(`Mahasiswa lulus ke - ${i} : ${mhsLulus[i]}`);
}

// Method pada array of javascript

var mhs = ["Hilmi", "Alfian", "Attar", "Rizal", "Adrian","Redian"];
mhs.push("Rahmi","Rasyid");
mhs.unshift("Raihan","Taufiq");
mhs.shift();
mhs.pop();
console.log(mhs.join());

// bab 36 sampai 45

var lulus = ["Rifky", "Irok", "Nandana"];
lulus.splice(2, 0, "Afif", "Zhafif");
console.log(lulus.join());

var bukanLulus = ["Hilmi", "Alfian", "Attar", "Rizal", "Adrian","Redian"];
var bukanLulus2 = bukanLulus.slice(0, 4);
console.log(bukanLulus2.join());

// foreach dan map dan sort array pada javascript
var karyawan = ["Rifky", "Irok", "Nandana", "Afif", "Zhafif"];
var angka = [1]
karyawan.forEach(function(e, i) {
    console.log(`Karyawan ke- ${i + 1} atas nama mas ${e}`);
})

var nilai = [1, 2, 3, 4, 5, 6, 7];
var nilai2 = nilai.map(function(x) {
    return x * 2;
})
console.log(nilai2.join());

var tiya = [1,3,5,6,8,2,4,7,9,20,40,10,15];
tiya.sort(function(a, b) {
    return a - b;  // ascending order
});
console.log(tiya.join());

// filter dan find array pada javascript

var data = [1,2,3,4,5,6,7,];
var data2 = data.filter(function(y) {
    return y > 2 ;
});
console.log(data2.join());

var data3 = data.find(function(z) {
    return z > 3;
});
console.log(data3);