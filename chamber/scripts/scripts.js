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

//To change the display property in JavaScript, consider the use of 
//.style.display = "block" in a selection structure where the condition 
//looks at the day of the week through the Date() object and getDay() 
//methodLinks to an external site.. Note that you most likely already have 
//a date type variable that you can use given the current date and/or copyright
// year is published to the page using JavaScript.

//Use JavaScript to display a banner on Mondays or Tuesdays only at the very 
//top of the page that says "🤝🏼 Come join us for the chamber meet and greet 
//Wednesday at 7:00 p.m." Make sure your design matches your schema for the site.

//const remindDate = a.getDay('Monday');
//if remindDate = 'Monday':
//document.getElementById("banner").textContent = b;


//let banner = getElementById('banner');
//banner.scr = new Date().getDate();

const now = new Date();
const currentDate = now.getDay();
const messageBanner = document.querySelector('#bannerMessage');

if (currentDate == 1 || currentDate == 2)  {
    messageBanner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
