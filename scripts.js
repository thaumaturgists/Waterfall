// scripts.js
// Javascript Dom Manipulation, creating the html from Javascript
// For more detailed comments See EXTRA at bottom

// // Create a new div element
// var clock = document.createElement('div');
// // Set the inner HTML of the clock div
// clock.innerHTML = `
//     <div class="clock" id="clock"></div>
// `;
// document.body.appendChild(clock);

// Create a new h1 element
const header = document.createElement('h1');
// Set class of h1 to header
header.className = 'header';
// Sets h1 text
header.textContent = 'Hello World!';
document.body.append(header);


// Creat a new div element
const clock = document.createElement('div');
// Set class of div to clock
clock.className = 'clock';
document.body.appendChild(clock);

// Create a new button element
const button = document.createElement('button');
// Set the ID of the button
button.id = 'changeBackground';
// Set the text content of the button
button.textContent = 'Change Background';
// Append the button to the body
document.body.appendChild(button);



// Create a new style element
const style = document.createElement('style');
style.type = 'text/css'; // style.type = 'text/css'; is often seen in older JavaScript code when creating style elements dynamically. 

// Add CSS rules to the style element
style.appendChild(document.createTextNode(`
body {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    height: 100vh;
    background-color: #87CEFA;
    background-image: url('understories.png'); /* Replace with a garden image */
    background-size: cover; /* Cover the entire background */
    background-position: center; /* Center the background image */
    color: #87CEFA; /*  #fff */
    font-family: 'Georgia', serif; /* A more elegant font */
    font-size: 48px;
}

h1 {
    color: #ffcc00; /* A golden color for the heading */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add a shadow for depth */
}

.clock {
    border: 2px solid #ffcc00; /* Golden border */
    padding: 20px;
    border-radius: 15px; /* Softer corners */
    background-color: rgba(255, 255, 255, 0.8); /* Light background for readability */
    margin: 20px 0; /* Add margin for spacing */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
}

button {
    background-color: #ffcc00; /* Golden button */
    color: #282c34; /* Dark text for contrast */
    border: none; /* Remove default border */
    border-radius: 10px; /* Softer corners */
    padding: 10px 20px; /* Padding for button */
    font-size: 24px; /* Smaller font size for button */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s; /* Smooth transition */
}

button:hover {
    background-color: #ffd700; /* Lighter gold on hover */
}


`));
// Append the style element to the head
document.head.appendChild(style);


// // Add event listener to the button to change the background
// document.getElementById('changeBackground').addEventListener('click', function() {
//     document.body.style.backgroundImage = "url('triwaterfall.png')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundPosition = "center";
// });

// Check if the button exist before adding an event listner
if (button) {
    button.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('triwaterfall.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    })
}


// // Function updating clock
// function updateClock() {
//     const now = new Date(); // new Date() initializes the object to the current date and time based on the system's local time.
//     let hours = now.getHours(); // Get the current hour (0-23) 
//     const minutes = String(now.getMinutes()).padStart(2, '0'); // .padStart(2, '0') method in JavaScript is a string method that is used to pad the beginning of a string with a specified character until the string reaches a specified length.
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     // Determine AM or PM suffix
//     const ampm = hours >= 12 ? 'PM' : 'AM'; // uses the ternary operator to determine whether the time is in the AM or PM period based on the value of the hours variable.

//     // Convert to 12-hour formant
//     hours = hours % 12; // If hours is 12 (noon), 12 % 12 results in 0
//     hours ? String(hours).padStart(2, '0') : '12'; // If hours is 0, display as '12' (midnight)

//     const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
//     document.getElementById('clock').textContent = timeString;
//  }

// Function updating clock
function updateClock() {
    var now = new Date();
    var timeString = now.toLocaleTimeString('en-GB');
    clock.textContent = timeString; // Update the content of the clock
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);




////////////////////////////////////////////////////////////////////
// EXTRA

// // const now = new Date(); is a common way to get the current date and time in JavaScript, and it allows you to work with date and time values using the various methods provided by the Date object.
// ```javascript
// const now = new Date();

// console.log(now); // Outputs the current date and time
// console.log(now.getFullYear()); // Outputs the current year
// console.log(now.getMonth() + 1); // Outputs the current month (0-11, so +1 for human-readable format)
// console.log(now.getDate()); // Outputs the current day of the month
// console.log(now.getHours()); // Outputs the current hour
// console.log(now.getMinutes()); // Outputs the current minutes
// console.log(now.getSeconds()); // Outputs the current seconds
// ```

// // .padStart(2, '0') method in JavaScript is a string method that is used to pad the beginning of a string with a specified character until the string reaches a specified length.
// ```javascript
// str.padStart(targetLength, padString)
// ```
// targetLength: The length of the resulting string once the current string has been padded. If the current string is already longer than this length, no padding is applied.
// padString: The string to pad the current string with. If this string is too long, it will be truncated from the start to fit.
// Padding the beginning of a string in JavaScript can be accomplished using the String.prototype.padStart() method. This method allows you to add a specified string (or character) to the beginning of the original string until it reaches a specified length.
// ```javascript
// str.padStart(targetLength, padString)
// ```
//     - targetLength: The length of the resulting string once the current string has been padded. If the current string is already longer than this length, no padding is applied.
//     - padString: The string to pad the current string with. If this string is too long, it will be truncated from the start to fit.
// Truncation: If the padString is longer than the remaining space needed to reach targetLength, it will be truncated from the start. For example:
// ```javascript
// let str = 'abc';
// let paddedStr = str.padStart(6, '12345'); // Pads with '12345'
// console.log(paddedStr); // Outputs: "12abc" (only '12' is used)
// ```

// // The line const ampm = hours >= 12 ? 'PM' : 'AM'; is a JavaScript statement that uses the ternary operator to determine whether the time is in the AM or PM period based on the value of the hours variable.
// const ampm: This declares a constant variable named ampm that will hold the result of the ternary operation.

// hours >= 12: This is the condition being evaluated. It checks if the value of hours is greater than or equal to 12. In a 12-hour clock format:
//     - Hours from 0 to 11 correspond to AM (midnight to just before noon).
//     - Hours from 12 to 23 correspond to PM (noon to just before midnight).
// ? 'PM' : 'AM': This is the ternary operator's syntax:
//     - If the condition (hours >= 12) is true, the expression evaluates to 'PM'.
//     - If the condition is false, it evaluates to 'AM'.
// ? (Ternary Operator): The ternary operator has the following syntax:
// ```javascript
// condition ? valueIfTrue : valueIfFalse
// ```
//     - If the condition evaluates to true, the expression returns valueIfTrue.
//     - If the condition evaluates to false, it returns valueIfFalse.


// // The toLocaleTimeString() method is a built-in JavaScript function that converts a Date object into a string representing the time portion of that date, formatted according to the conventions of a specific locale. 
// ```javascript
// dateObj.toLocaleTimeString([locales[, options]])
// ```
// Example:
// ```javascript
// const now = new Date();

// // Default locale
// console.log(now.toLocaleTimeString()); // e.g., "3:45:12 PM"

// // Specifying a locale
// console.log(now.toLocaleTimeString('en-GB')); // e.g., "15:45:12"

// // Custom options
// const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
// console.log(now.toLocaleTimeString('en-US', options)); // e.g., "03:45:12"
// ```

// img
//body { background-color: lightblue; }

// // Create a new h1 element
// var header = document.createElement('h1');
// // Set the inner HTML of the header h1
// header.innerHTML = `
// <h1 class="header" id="header">Waterfall Dom!</h1>
// `;
// document.body.appendChild(header);
