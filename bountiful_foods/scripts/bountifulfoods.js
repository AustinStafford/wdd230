// ----------NAVIGATION---------- //

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

// ----------FOOTER---------- //
let date = document.lastModified
document.querySelector("#lastModified").textContent = date;

let a = new Date();
let b = a.getFullYear();
document.getElementById("currentYear").textContent = b;