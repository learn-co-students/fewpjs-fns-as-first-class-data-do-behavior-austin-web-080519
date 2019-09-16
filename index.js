/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  //split up time by :
  let hourstring = string.split(':')

  //convert to hour number type
  let hour = parseInt(hourstring[0])

  //If the time is earlier than 12pm, return "Good Morning".
  if (hour < 12) {
    console.log("Console Log - Good Morning")
    return("Good Morning")
  } 
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  else if (hour > 12 && hour < 18) {
    console.log("Console Log - Good Afternoon")
    return("Good Afternoon")
  } 
  // If the time is later than 5pm, return "Good Evening".
  else {
    console.log("Console Log - Good Evening")
    return("Good Evening")
  }
}


/* Write your implementation of displayMessage() */
// When the function runs it should update the text inside the 
// #greeting node with the content of the first argument.
function displayMessage(string) {
  let greeting = document.querySelector('#greeting')
  greeting.innerText = string
}