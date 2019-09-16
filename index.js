/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  // time is split by ' : '
  let hourstring = string.split(':')
  // converts hour string into integer
  let hour = parseInt(hourstring[0])
  // returns Good Morning if hour is less than 12
  if (hour < 12) {
    console.log("Good Morning")
    return("Good Morning")
  }
  // returns Good Afternoon if hour is greater than 12 and less than 18
  else if (hour > 12 && hour < 18) {
    console.log("Good Afternoon")
    return("Good Afternoon")
  } 
  // returns Good Evening if hour is past 18
  else {
    console.log("Good Evening")
    return("Good Evening")
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {

  let greeting = document.querySelector('#greeting')
  greeting.innerText = string

}