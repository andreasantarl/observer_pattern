'use strict';
// var target = undefined;

// Create a new instance of count
var counter1 = new Count();
var min = 1;

// var round = 1;

// Add an observer to the instance.
counter1.addObserver(function () {
 console.log("observer added");
});

// function randomNumber (min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// };
//
function getTarget (min) {
  let max = counter1.setMax(counter1.level);
  counter1.setTarget(min, max);
  $(".target").text(counter1.target);
}


// When a button is clicked, it will notify and call all observers
function startGame () {
  $('.binaryButton').on('click', function () {
    let amount, value;
    $(this).toggleClass('active');
    amount = $(this).data('value');
    if ($(this).hasClass('active')) {
      $(this).prop('value','1');
      value = counter1.increment(amount);
    } else {
      $(this).prop('value','0');
      value = counter1.decrement(amount);
    }
    $(".sumClicks").text(counter1.total);
    endGame();
  })
};

function endGame(){
  if (counter1.total === counter1.target) {
    counter1.removeAllObservers();
    $('.gameValues').text("Game over");
    $('.binaryButton').unbind('click');
  }
};

function setLevel() {
  if (counter1.round > 4) {
    counter1.incrementLevel();
  }
}


setLevel();
getTarget(min);
startGame();
