// Code your solutions in this file
// Assignment 1
const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';
console.log(writeCards(names, event));

function writeCards(names, event) {
  let message = [];

  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the amazing ${event} gift!`);
  }

  return message;
}

//Assignment 2

function countDown(number) {
  while (number >= 0) {
    console.log(number); 
    number--; 
  }
}
