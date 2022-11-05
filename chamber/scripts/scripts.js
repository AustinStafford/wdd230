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
    messageBanner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m. 🤝🏼";
}

// Make sure the images that you use are optimized for the layout.
// The images must not load until the user scrolls. Use a lazy loading technique.
// Using local storage, display the amount of time in days (rounded to a whole number)
// between user visits to this page by the user's agent (browser). You may elect to display
// this information where you deem fit on the page.

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
})

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
});

imagesToLoad.forEach((img) => {
    observer.observe(img);
});

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Using local storage, display the amount of time in days 
// (rounded to a whole number) between user visits to this 
// page by the user's agent (browser). You may elect to 
// display this information where you deem fit on the page.

// let visitDays = Number(window.localStorage.setItem("vistis", numberOfVisits));

// totalVisits++;

// localStorage.setItem("vistis", totalVisits);

// initialize display elements
// const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".user_visits");

let totalVisits = Number(window.localStorage.getItem("visits-ls"));


if (totalVisits !== 0) {
	visitsDisplay.textContent = totalVisits;
} 

totalVisits++;

localStorage.setItem("visits-ls", totalVisits);

todayDisplay.textContent = Date.now();