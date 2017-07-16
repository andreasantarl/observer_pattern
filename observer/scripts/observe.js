// Observe
function Count() {
 this.total = 0;
 this.observers = [];
 this.target = 0;
 this.level = 1;
 this.round = 1;
 this.max = 0;
 this.min = 0;
}

// Counter for increment
Count.prototype.increment = function (amount) {
 // let amount = $(this).data("value");
 this.total += amount;
 this.notify({ total: this.total });
 console.log("Total: " + this.total);
};

Count.prototype.decrement = function (amount) {
 // let amount = $(this).data("value");
 this.total -= amount;
 this.notify({ total: this.total });
 console.log("Total: " + this.total);
};

// Adding the observer
Count.prototype.addObserver = function (observer) {
 this.observers.push(observer);
 console.log(this.observers.length);

};

// Notifying the observer
Count.prototype.notify = function (data) {
 this.observers.forEach(function (observer) {
   observer.call(null, data);
 });
};

Count.prototype.removeObserver = function (id) {
  for (var i = this.observers.length - 1; i >= 0; i--) {
    this.observers[i]
    if (this.observers[i].id == id) {
      this.observers.splice(i, 1)
      console.log("observer removed");
      return true;
    };
  };
  return false
};

Count.prototype.removeAllObservers = function () {
  this.observers = [];
  console.log("Num observers: " + this.observers.length);
  return;
};

Count.prototype.setTarget = function(min, max) {
  this.target = Math.floor(Math.random() * (max - min)) + min;
  console.log(this.target);
};

Count.prototype.incrementLevel = function () {
  this.level += 1;
  console.log("level: " + this.level);
};

Count.prototype.incrementRound = function() {
  this.round += 1;
  console.log("round" + this.round);
};

Count.prototype.setMax = function () {
  if (this.level === 1) {
    this.max = 15;
  } else if (this.level === 2) {
    this.max = 63
  } else {
    this.max = 255;
  }
  console.log("max: " + this.max);
  return this.max;
}
