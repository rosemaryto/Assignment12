// STEP 1
// function Cat (breed) {};
// var Dog = function (breed) {};

// STEP 2
// var persian = new Cat("Persian");
// var shibaInu = new Dog("ShibaInu");

// STEP 3
// var Animal = function () {
//     "use strict";
//     window.console.log("The Animal has been created");
// };
// var dog = new Animal();


// STEP 4
// var Animal = function (bird) {
//     "use strict";
//     this.bird = bird;
//     window.console.log("The animal is a " + this.bird);
// };
// var birdType = new Animal("HummingBird");

// STEP 5
// var Animal = function (type, breed, color, height, length) {
//     "use strict";
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     window.console.log("The type of animal is " + this.type + ". The breed of " + this.breed + " is " + this.color + " with a height of " + this.height + " & length of " + this.length);
// };
// var HummingBird = new Animal ("Bird", "Humming Bird", "blue", "3 inches", "4 inches");

// STEP 6
// var Animal = function (type, breed, color, height, length) {
//     "use strict";
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// };
// var HummingBird = new Animal ("Bird", "Humming Bird", "blue", "3 inches", "4 inches");
// for (var animal in HummingBird) {
//     window.console.log(animal);
// }


// STEP 7
//ANIMAL CLASS
// var Animal = function (type) {
//     "use strict";
//     this.type = type;
// };
//SPEAK METHOD
// Animal.prototype.speak = function() {
//     "use strict";
//     if (this.type === "Dog") {
//         return "The Black Dog is barking!";
//     } else {
//         return "The White Cat is meowing!";
//     }
// };
//NEW ANIMAL INSTANCE
// var Dog = new Animal ("Dog");
// var Cat = new Animal ("Cat");
//CALL METHOD
// window.console.log(Dog.speak());


// STEP 8
//ANIMAL CLASS
var Animal = function (type, speak) {
    var type = "Cat";
    this.animalType = type;
    this.speak = type + " ";
    
};
Animal.prototype.checkType = function (Animal) {
    if (this.animalType === "Cat") {
        return this.speak + " has made a noise!";
    } else {
        return this;
    }
}
//NEW ANIMAL INSTANCE
var myPet = new Animal ("Cat", "Meow");

// CALL METHOD
window.console.log(myPet.checkType());



// STEP 9
// String.prototype.findWords = function () {
//     "use strict";
    
// }
// var str = 'This is a paragraph paragraph paragraph.';
    
//     var getwords = str.search("paragraph");
// window.console.log(getwords);