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


if (totalVisits !== 0) {
	visitsDisplay.textContent = totalVisits;
} else {
	visitsDisplay.textContent = 0;
}

totalVisits++;

localStorage.setItem("visits-ls", totalVisits);

// todayDisplay.textContent = Date.now();