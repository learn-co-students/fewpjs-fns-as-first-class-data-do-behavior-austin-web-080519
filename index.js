/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let hour = string.split(':');
  let number = parseInt(hour[0]);
  if(number < 12) {
    // console.log(number)
    console.log("Morning");
    return "Good Morning";
  } else if(number >= 12 && number <= 17) {
    console.log("Afternoon");
    return "Good Afternoon";
  } else {
    console.log("Evening");
    return "Good Evening";
  }
}
greet("8:40");
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector('#greeting').innerText = `${string}`;
  return string
}
