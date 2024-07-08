// DOM Selection

// document.getElementById()
const jdl = document.getElementById("judul");
jdl.style.color = "red";
jdl.style.backgroundColor = "#ccc";
jdl.innerHTML = "Hilmi Afifi";

// document.getElementByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari JavaScript";

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "25px";

const li2 = document.querySelector('section#b ul li:nth-child(1)');
li2.style.backgroundColor = "orange";

// // document.querySelectorAll() -> NodeList

const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "lightgreen";
}

// cara yang lebih efisien
const sectionB = document.getElementById("b");
const list = sectionB.querySelectorAll("li");

// list.forEach(item => {
//     item.style.backgroundColor = "orange";
// });

if (list.length > 1) {
    list[1].style.backgroundColor = "orange";
}