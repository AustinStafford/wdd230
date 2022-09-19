querySelector 
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = `Last Modified on ${day}, ${month} ${d.getDate()}, ${year}. `

document.getElementById("lastmodified").textContent = modifieddate;

alert(document.lastModified);
// returns current date and time. 

