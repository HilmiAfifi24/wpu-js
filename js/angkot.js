// program menggunakan function dan array
// membuat CRUD kasus angkot online

var penumpang = [];

// Fungsi untuk menambah penumpang
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada dalam angkot`);
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

// Fungsi untuk menghapus penumpang
var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log(`Angkot masih kosong`);
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(`${namaPenumpang} belum ada dalam angkot`);
            }
        }
    }
    return penumpang;
}

// Fungsi untuk memperbarui penumpang
var updatePenumpang = function(oldName, newName, penumpang) {
    if (penumpang.length == 0) {
        console.log(`Angkot masih kosong`);
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == oldName) {
                penumpang[i] = newName;
                return penumpang;
            }
        }
        console.log(`${oldName} tidak ditemukan dalam angkot`);
    }
    return penumpang;
}

// Fungsi untuk menampilkan detail penumpang
var detailPenumpang = function(penumpang) {
    if (penumpang.length == 0) {
        console.log(`Angkot masih kosong`);
    } else {
        console.log(`Detail penumpang angkot:`);
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] != undefined) {
                console.log(`Penumpang ke-${i+1}: ${penumpang[i]}`);
            }
        }
    }
}




