//get the two input values of temperature and wind speed,
//check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
//either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.

// const tempFunction = (() => {
//     let vaTemperature;
//     return function tempFunction(state, input) {
//         switch(state) {
//             case 'x':
//                 vaTemperature = calc(input);
//                 return vaTemperature;
//                 case 'y':
//                     return vaTemperature;
//                 }
//     };
// })();
// function add (number1, number2) {

//         return number1 + number2;
//     }
    
//     function temperature() {
//         let addend1 = parseInt(document.querySelector('#addend1').value);
//         let addend2 = parseInt(document.querySelector('#addend2').value);
//         let result = add(addend1, addend2);
    
    
//     document.querySelector('#sum').value = result;
//     }
//     document.querySelector('#addNumbers').addEventListener("click", addNumbers);


const vaTemp = parseFloat(document.getElementById('vaTemperature').textContent);

const vaSpeed = parseFloat(document.getElementById('vaSpeed').textContent);

const vaChill = 35.74 + (0.6215 * vaTemp) - (35.75 * Math.pow(vaSpeed, 0.16)) + (0.4275 * vaTemp * Math.pow(vaSpeed, 0.16));

if (vaTemp <= 50 && vaSpeed > 3) {
    document.getElementById('vaChill').innerHTML = Math.round(vaChill); 
} else {
    document.getElementById('vaChill').innerHTML = "N/A";
}