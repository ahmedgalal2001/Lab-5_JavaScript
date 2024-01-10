/*
// Abastruct class
function Animal(name) {
  if (this.constructor === Animal) {
    throw new Error("Abstract classes cannot be instantiated.");
  }
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

// Usage
// This would throw an error since Animal is an abstract class
// var myAnimal = new Animal("Fluffy");

// Inherit from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

// Usage
var myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayName(); // Output: My name is Buddy


*/

/*
// Interface
// Define an interface
const CanSayName = {
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

// Implement the interface
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Mixin the interface
Object.assign(Dog.prototype, CanSayName);

// Usage
var myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayName(); // Output: My name is Buddy

*/

/* 
//Inheritance in function constructor  in js with examples

// Parent constructor
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

// Child constructor
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Inherit methods from the parent's prototype
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Create instances
var myAnimal = new Animal("Fluffy");
var myDog = new Dog("Buddy", "Golden Retriever");

myAnimal.sayName(); // Output: My name is Fluffy
myDog.sayName(); // Output: My name is Buddy
myDog.bark(); // Output: Woof!


*/
