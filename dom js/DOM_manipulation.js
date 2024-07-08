// inner HTML // mengganti content html;
const judul = document.getElementById("judul");
judul.innerHTML = "Hilmi Afifi";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello world";

const sectionA = document.querySelector("section#a");
sectionA.style.color = "aqua";
sectionA.style.backgroundColor = "green";

// element.setAttribute() // mengganti attribute sebelumnya;
const a = document.querySelector("section#a a");
a.setAttribute("href", "https://github.com/HilmiAfifi24");
a.style.color = "aqua";
a.style.textDecoration = "none";

// element.classList.add(); menambahkan class baru
// element.classList.replace(); mengganti nama class
const label = document.querySelector(".p2");
label.classList.add("label", "satu", "dua");
label.classList.replace("satu", "link");

// element.classList.remove() // menghapus class sebelumnya ;
// element.classList.toggle() // menambahkan jika sebelumnya tidak ada dalam html;
const label1 = document.querySelector(".p1");
label1.classList.remove("p1");
label1.classList.toggle("label");

document.body.classList.toggle("biru-muda");

