//let upToDate = new Date (lastModified)
//let element = document.querySelector()

let date = document.lastModified
document.querySelector("#lastModified").textContent = date;

let a = new Date();
let b = a.getFullYear();
document.getElementById("currentYear").textContent = b;

let upToDate = new Date();
let element = document.querySelector('#upToDate').textContent = upToDate;

function togglerMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;