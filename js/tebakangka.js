var lagi = true;

while (lagi) {
    var computer = Math.floor(Math.random() * 10) + 1;
    
    var change = 3;
    alert("Pertama kali, anda akan mendapatkan 3 kali kesempatan melakukan");

    while (change > 0) {
        var player = parseInt(prompt("Masukkan angka antara 1-10:"));

        if (player == computer) {
            alert(`Selamat, anda menang!`);
            break;
        } else if (player < computer) {
            alert(`Maaf, Tebakanmu terlalu rendah. Anda tinggal ${change - 1} kali kesempatan.`);
        } else {
            alert(`Maaf, Tebakanmu terlalu tinggi. Anda tinggal ${change - 1} kali kesempatan.`);
        }
        change--;
    }

    alert(`Jawabannya adalah ${computer}`);
    lagi = confirm("Mau coba lagi?");
}

alert("Terima kasih sudah bermain");
