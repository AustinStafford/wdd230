// ------------ directory js ------------ //

// Buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

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
address_paragrapgh.innerHTML = `${data.address}`; 
card.appendChild(address_paragrapgh);

//phone number
let pn_paragrapgh = document.createElement('p');
pn_paragrapgh.innerHTML = `${data.phoneNumber}`; 
card.appendChild(pn_paragrapgh);

// website url
let url_paragrapgh = document.createElement('p');
url_paragrapgh.innerHTML = `<a href="${data.websiteUrl}" target="_blank"> Website</a>`; 
card.appendChild(url_paragrapgh);

// membership level
let ml_paragrapgh = document.createElement('p');
ml_paragrapgh.innerHTML = `Membership Level: ${data.membershipLevel}`; 
card.appendChild(ml_paragrapgh);

// Add/append the existing HTML div with the cards class with the section(card)
 document.querySelector('div#cards').appendChild(card);
}