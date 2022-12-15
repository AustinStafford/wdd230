const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const label = document.querySelector('.fruit_choice');

fetch(requestURL)
  .then(function (response) {
    console.log(response.body);
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayFruits);
  });
  
function displayFruits(fruit) {
let input = document.createElement('input');

input.innerHTML = fruit.name;

fruitChoice.appendChild(input);

 document.querySelector('label.fruit_choice').appendChild(fruitChoice);
}

// <fieldset>
//           <legend>Fruit Combinations</legend>
//           <label class="fruit_choice"
//             ><input type="radio" name="audience" value="fruit" />NP
//             Membership</label
//           >
//         </fieldset>
// const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
// const cards = document.querySelector('.cards');

// // function addSuffix(number) {
// //     if (number == 1)
// //         return 'st'
// //     else if (number == 2)
// //         return 'nd' 
// //     else if (number == 3)
// //         return 'rd'
// //     else 
// //         return 'th'
// // }

// fetch(requestURL)
//   .then(function (response) {
//     console.log(response.body);
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const fruits = jsonObject['fruits'];
//     fruits.forEach(displayFruits);
//   });

// //   const prophets = jsonObject['prophets'];
  
// function displayFruits(fruit) {
// // Create elements to add to the document
// let fruitChoice = document.createElement('input');
// let h2 = document.createElement('h2');
// let prophet_paragraph = document.createElement('p');
// let portrait = document.createElement('img');
  
// // Change the textContent property of the h2 element to contain the prophet's full name
// h2.textContent = fruit.name + ' ' + fruit.lastname;
  
// // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
// //(Fill in the blank with the appropriate variable).
// portrait.setAttribute('src', fruit.imageurl);
// portrait.setAttribute('alt', `${fruit.name}`);
// portrait.setAttribute('loading', 'lazy');
  
// // Add/append the section(card) with the h2 element
// card.appendChild(h2);
// card.appendChild(portrait);

// let dob_paragrapgh = document.createElement('p');
// dob_paragrapgh.innerHTML = `Date of birth: ${fruit.birthdate}`; 
// card.appendChild(dob_paragrapgh);
// let pob_paragrapgh = document.createElement('p');
// pob_paragrapgh.innerHTML = `Date of birth: ${fruit.birthplace}`; 
// card.appendChild(pob_paragrapgh);
// // prophet_paragraph.appendChild('Date of birth:' + prophet.birth );
// // prophet_paragraph.appendChild('Birth place: ' + prophet );
  
// // Add/append the existing HTML div with the cards class with the section(card)
//  document.querySelector('label.fruit_choice').appendChild(card);
// }