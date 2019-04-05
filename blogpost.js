// const button = document.querySelector(".button");

// const heart = document.querySelector(".heart");

// heart.onclick = function() {
//   heart.classList.toggle("pressed");
//   button.classList.toggle("pressed");
// };

// #counter2

// #btn2


var button1 = document.getElementById("btn1")
var count1 = 0;
button1.onclick = function() {
  count1 += 1;
  button1.innerHTML = count1 + " Likes";
};


var button2 = document.getElementById("btn2")
var count2 = 0;
button2.onclick = function() {
  count2 += 1;
  button2.innerHTML = count2 + " Likes";
};


var button3 = document.getElementById("btn3")
var count3 = 0;
button3.onclick = function() {
  count3 += 1;
  button3.innerHTML = count3 + " Likes";
};


// let button1 = document.getElementById('btn1')
// let button2 = document.getElementById('btn2')
// let button3 = document.getElementById('btn3')

// let count = 0;

// let increase = () => {
//     count += 1;
//     this.innerHTML = count + " Like";
// }

// console.log(count);

// button1.addEventListener("click", increase());
// button2.addEventListener("click", increase());
// button3.addEventListener("click", increase());