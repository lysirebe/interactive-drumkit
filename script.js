let sound = new Audio();

const b1 = document.querySelector('.ride')
const b2 = document.querySelector('.crash')
const b3 = document.querySelector('.floorTop')
const b4 = document.querySelector('.floorLow')
const b5 = document.querySelector('.floorRest')
const b6 = document.querySelector('.midTop')
const b7 = document.querySelector('.midLow')
const b8 = document.querySelector('.bass')


b1.addEventListener('click', function() {
      sound.src = "ride.wav";
      sound.play();
    })

b2.addEventListener('click', function() {
      sound.src = "crash.wav";
      sound.play();
    })

b3.addEventListener('click', function() {
      sound.src = "medium-tom.wav";
      sound.play();
    })

b4.addEventListener('click', function() {
  sound.src = "floor-tom.wav";
  sound.play();
})

b5.addEventListener('click', function() {
  sound.src = "hi-hat.wav";
  sound.play();
})

b6.addEventListener('click', function() {
  sound.src = "high-tom.wav";
  sound.play();
})

b7.addEventListener('click', function() {
  sound.src = "snare.wav";
  sound.play();
})

b8.addEventListener('click', function() {
  sound.src = "bass-drum.wav";
  sound.play();
})
