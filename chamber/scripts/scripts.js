//let upToDate = new Date (lastModified)
//let element = document.querySelector()

let date = document.lastModified
document.querySelector("#lastModified").textContent = date;

let a = new Date();
let b = a.getFullYear();
document.getElementById("currentYear").textContent = b;

let upToDate = new Date();
let element = document.querySelector('#upToDate').textContent = upToDate;

function toggleMenu() {
    document.getElementById("navButton").classList.toggle("hide");
}