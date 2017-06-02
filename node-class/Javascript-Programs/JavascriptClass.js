


function Person(name) {

  this.name = name;
  this.action;

  this.greeting = function(action) {
    this.action = action;

    console.log('Hi! I\'m ' + this.name + '.'+this.action);
  };
}

var person1 = new Person('Kiran');
    console.log(person1.name);
    person1.greeting('Help Me');

var person2 = new Person('Ashok');
console.log(person2.name);
 //person2.greeting();
