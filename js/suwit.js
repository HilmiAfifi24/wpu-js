var lagi = true;

while (lagi) {

// menangkap pilihan player

var player = prompt(`silahkan pilih: gajah, semut, orang`);

// menangkap pilihan komputer
// membangkitkan bilangan random

var computer = Math.random();

if (computer < 0.33) {
    computer = 'gajah';
} else if (computer >= 0.34 && computer < 0.67) {
    computer = 'orang';
} else {
    computer ='semut';
}

console.log(computer);
// menentukan rules 

var hasil = '';

if (player == computer) {
    hasil = 'kamu seri';
} else if (player == 'semut') {
    // if (computer == 'gajah') {
    //     hasil = 'Kamu menang!';
    // } else {
    //     hasil = 'Kamu kalah!';
    // }
    hasil = (computer == 'gajah')? 'Kamu menang!' : 'Kamu kalah!';
} else if (player == 'orang') {
    hasil = (computer == 'gajah')? 'Kamu kalah!' : 'Kamu menang!';
} else if (player == 'gajah') {
    hasil = (computer == 'orang')? 'Kamu menang!' : 'Kamu kalah!';
} else {
    hasil = 'pilihan anda salah!';
}
// tampilkan hasilnya

alert(`Kamu memilih ${player}, dan computer memilih ${computer}. maka hasilnya ${hasil}`);

    lagi = confirm('Are you sure you want to exit this game?');
}

alert('Thank you for playing!');