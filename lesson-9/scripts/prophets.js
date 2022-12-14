const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

function addSuffix(number) {
    if (number == 1)
        return 'st'
    else if (number == 2)
        return 'nd' 
    else if (number == 3)
        return 'rd'
    else 
        return 'th'
}

fetch(requestURL)
  .then(function (response) {
    console.log(response.body);
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

//   const prophets = jsonObject['prophets'];
  
function displayProphets(prophet) {
// Create elements to add to the document
let card = document.createElement('section');
let h2 = document.createElement('h2');
let prophet_paragraph = document.createElement('p');
let portrait = document.createElement('img');
  
// Change the textContent property of the h2 element to contain the prophet's full name
h2.textContent = prophet.name + ' ' + prophet.lastname;
  
// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
//(Fill in the blank with the appropriate variable).
portrait.setAttribute('src', prophet.imageurl);
portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${addSuffix(prophet.order)} Latter-day President`);
portrait.setAttribute('loading', 'lazy');
  
// Add/append the section(card) with the h2 element
card.appendChild(h2);
card.appendChild(portrait);

let dob_paragrapgh = document.createElement('p');
dob_paragrapgh.innerHTML = `Date of birth: ${prophet.birthdate}`; 
card.appendChild(dob_paragrapgh);
let pob_paragrapgh = document.createElement('p');
pob_paragrapgh.innerHTML = `Date of birth: ${prophet.birthplace}`; 
card.appendChild(pob_paragrapgh);
// prophet_paragraph.appendChild('Date of birth:' + prophet.birth );
// prophet_paragraph.appendChild('Birth place: ' + prophet );
  
// Add/append the existing HTML div with the cards class with the section(card)
 document.querySelector('div.cards').appendChild(card);
}