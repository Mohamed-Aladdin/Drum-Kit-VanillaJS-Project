let sounds = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];

let keys = ["w", "a", "s", "d", "j", "k", "l"];

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() {
    clickSound(i);
    buttonAnimation(document.querySelectorAll('.drum')[i].innerHTML)
  });
}

document.addEventListener("keydown", function(event) {
  keySound(event.key);
  buttonAnimation(event.key)
})

function clickSound(index) {
  let audio = new Audio(`sounds/${sounds[index]}`);
  audio.play();
}

function keySound(key) {
  index = keys.indexOf(document.querySelector(`.${key}`).innerHTML);
  let audio = new Audio(`sounds/${sounds[index]}`);
  audio.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');
  
  setTimeout(function(){
    activeButton.classList.remove('pressed')
  }, 100)
}

// function handleClick() {
//   alert("I got clicked!");
// }