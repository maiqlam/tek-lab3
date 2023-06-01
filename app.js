const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

/* 1. Create a new function moveLocation().

    moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
    The location object will have the properties city, state, and zip.
    The function should change the city, state, and zip properties of the person to match those of the new location. */

function moveLocation(person, location) {
    person.location.city = location.city;
    person.location.state = location.state;
    person.location.zip = location.zip;
}

/* Test your function by using the following code. Does personTwo now live in Rochester? (They should.) */

// const nLoc = {
//     city: 'Rochester',
//     state: 'New York',
//     zip: 14604
// }

// moveLocation(personTwo, nLoc);

// nLoc.city = 'Buffalo';
// nLoc.zip = 14201;

// console.log(personTwo.location.city); //Rochester

/* 2. Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.
    Set Julie's location to Timmy's location by reference.
    Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.) */

personTwo.location = personOne.location;

const nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLoc);
//console.log(personOne.location.state); // California
//console.log(personTwo.location.state); // California

/* 3. The happy couple are having a baby! Create a new object personThree.
    Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
    Give personThree an age of 0.
    Set personThree's location to that of their parents, by reference so that the baby stays with its family.
    Test your code's behavior by using your moveLocation() function. */

const personThree = {
    name: {
        first: 'Bun',
        last: 'Timtim-July'
    },
    age: 0,
}
personThree.location = personOne.location

// console.log(personOne.location);
// console.log(personTwo.location);
// console.log(personThree.location);

/* Testing personThree's location with new move location */
// const moveTest = {
//     city: 'New Orleans',
//     state: 'Louisiana',
//     zip: 12345
// }

// moveLocation(personOne, moveTest);

// console.log(personOne.location);
// console.log(personTwo.location);
// console.log(personThree.location); //Family stays intact

/* 4. Years go by, and personThree is ready for a life of independance.
    Increment everyone's age values by 20.
    Create a copy of personThree's location that breaks the reference to the current location object, and set their location to that copy.
    Test your code by having personThree moveLocation() somewhere of your choosing. Does this change the locations of personOne or personTwo? (It shouldn't.) */

const people = [personOne, personTwo, personThree];
for (let person of people) {
 person.age += 20;
}

// console.log(personOne.age); // 50
// console.log(personTwo.age); // 48
// console.log(personThree.age); // 20

const movingOut = {
    city: 'Dallas',
    state: 'Texas',
    zip: 75287
}

const testLoc = {
    city: 'Richardson',
    state: 'Texas',
    zip: 75287
}

personThree.location = movingOut;

// moveLocation(personThree, testLoc);
// console.log(personOne.location.city);
// console.log(personTwo.location.city);
// console.log(personThree.location.city);

/* 5. Welcome to the future! We've invented both immortality and cloning.
    Increment everyone's age values by 300.
    Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age set to 0.
    These are all independant clones, so each should be able to move to its own location. Test your code by creating several clones of our persons and using moveLocation() to send them elsewhere. Are these locations unaffected by each other? (They should be.)
    Check the age values of your original persons to make sure you did not accidentally set them to 0!*/

const immortal = [personOne, personTwo, personThree];
for (let immortal of people) {
 immortal.age += 300;
}

// console.log(personOne.age); // 350
// console.log(personTwo.age); //348
// console.log(personThree.age); // 320

function clonePerson(original) {
    const clone = {
        name: {},
        age: 0,
        location: {}
    };

    clone.name.first = original.name.first;
    clone.name.last = original.name.last;
    clone.location.city = original.location.city;
    clone.location.state = original.location.state;
    clone.location.zip = original.location.zip;

    return clone;
}

const cloneOne = clonePerson(personOne);
const cloneTwo = clonePerson(personTwo);
const cloneThree = clonePerson(personThree);
// console.log(cloneOne); 
/* {
  name: { first: 'Timmy', last: 'Timtim' },
  age: 0,
  location: { city: 'Mountain View', state: 'California', zip: 94035 }
} */
// console.log(cloneTwo);
/* {
  name: { first: 'Julie', last: 'July' },
  age: 0,
  location: { city: 'Mountain View', state: 'California', zip: 94035 }
}*/
// console.log(cloneThree);
/*{
  name: { first: 'Bun', last: 'Timtim-July' },
  age: 0,
  location: { city: 'Dallas', state: 'Texas', zip: 75287 }
}*/

const nLoc1 = {
    city: 'Dallas',
    state: 'Texas',
    zip: 75287
}

const nLoc2 = {
    city: 'Richardson',
    state: 'Texas',
    zip: 75287
}

const nLoc3 = {
    city: 'Garland',
    state: 'Texas',
    zip: 75287
}

moveLocation(cloneOne, nLoc1)
moveLocation(cloneTwo, nLoc2)
moveLocation(cloneThree, nLoc3)

// console.log(cloneOne.location.city); // Dallas 
// console.log(cloneTwo.location.city); // Richardson
// console.log(cloneThree.location.city); // Garland

// console.log(personOne.age); // 350
// console.log(personTwo.age); // 348
// console.log(personThree.age); // 320

/* Create a new object called thoughts and give it some properties.
    Set personOne.thoughts to your thoughts object by reference.
    Do this for all of your persons and clones, such that changing the original thoughts object modifies the .thoughts property of every person.
    Test your code by modifying everyone's thoughts with a single line of code. Pass by reference is powerful.*/ 

let thoughts = {
    existential: "I don't want to live forever...",
    immortal: "I want to live forever!"
}

personOne.thoughts = thoughts;

thoughts = {
    happy: "This is great",
    sad: "I am sad"
}

personTwo.thoughts = thoughts;

thoughts = {
    hungry: "What's to eat?",
    still: "What's for dessert?"
}

personThree.thoughts = thoughts;

thoughts = {
    excited: "Hello!!"
}

cloneOne.thoughts = thoughts;

cloneTwo.thoughts = thoughts;

console.log(personOne);
/*{
  name: { first: 'Timmy', last: 'Timtim' },
  age: 350,
  location: { city: 'Mountain View', state: 'California', zip: 94035 },
  thoughts: {
    existential: "I don't want to live forever...",
    immortal: 'I want to live forever!'
  }
}*/
console.log(personTwo);
/*{
  name: { first: 'Julie', last: 'July' },
  age: 348,
  location: { city: 'Mountain View', state: 'California', zip: 94035 },
  thoughts: { happy: 'This is great', sad: 'I am sad' }
}*/
console.log(personThree);
/*{
  name: { first: 'Bun', last: 'Timtim-July' },
  age: 320,
  location: { city: 'Dallas', state: 'Texas', zip: 75287 },
  thoughts: { hungry: "What's to eat?", still: "What's for dessert?" }
}*/
console.log(cloneOne);
/*{
  name: { first: 'Timmy', last: 'Timtim' },
  age: 0,
  location: { city: 'Dallas', state: 'Texas', zip: 75287 },
  thoughts: { excited: 'Hello!!' }
}*/
console.log(cloneTwo);
/*{
  name: { first: 'Julie', last: 'July' },
  age: 0,
  location: { city: 'Richardson', state: 'Texas', zip: 75287 },
  thoughts: { excited: 'Hello!!' }
}*/
console.log(cloneThree);
/*{
  name: { first: 'Bun', last: 'Timtim-July' },
  age: 0,
  location: { city: 'Garland', state: 'Texas', zip: 75287 }
}*/