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

// ------------ Banner get together ------------ //

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

// ------------ Local Storage ------------ //

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


// if (totalVisits !== 0) {
// 	visitsDisplay.textContent = totalVisits;
// } 

totalVisits++;

localStorage.setItem("visits-ls", totalVisits);

// todayDisplay.textContent = Date.now();

// ------------ directory js ------------ //

// Buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Business Cards
const requestURL = 'https://austinstafford.github.io/wdd230/chamber/scripts/data.json';
const cards = document.querySelector('.business_cards');

fetch(requestURL)
  .then(function (response) {
    console.log(response.body);
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject.businesses;
    businesses.forEach(displayData);
  });
  
function displayData(data) {
// Create elements to add to the document
let card = document.createElement('section');
let h2 = document.createElement('h2');
//let business_paragraph = document.createElement('p');
let image = document.createElement('img');
  
// Change the textContent property of the h2 element to contain the business name
h2.textContent = data.name + ' ' ;
  
// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
//(Fill in the blank with the appropriate variable).
image.setAttribute('src', `images/directory_images/${data.image}`);
image.setAttribute('alt', `Logo of ${data.name}`);
image.setAttribute('loading', 'lazy');
  
// Add/append the section(card) with the h2 element
card.appendChild(h2);
card.appendChild(image);

// address
let address_paragrapgh = document.createElement('p');
address_paragrapgh.innerHTML = `Address: ${data.address}`; 
card.appendChild(address_paragrapgh);

//phone number
let pn_paragrapgh = document.createElement('p');
pn_paragrapgh.innerHTML = `Address: ${data.phoneNumber}`; 
card.appendChild(pn_paragrapgh);

// website url
let url_paragrapgh = document.createElement('p');
url_paragrapgh.innerHTML = `Website URL: ${data.websiteUrl}`; 
card.appendChild(url_paragrapgh);

// membership level
let ml_paragrapgh = document.createElement('p');
ml_paragrapgh.innerHTML = `Membership Level: ${data.membershipLevel}`; 
card.appendChild(ml_paragrapgh);

// Add/append the existing HTML div with the cards class with the section(card)
 document.querySelector('div.business_cards').appendChild(card);
}