//Exercise 1
let address = {
    street: "202 Road",
    city: "Festac",
    zip: 110023,
};

function showAddress(param) {
    for (let address in param) {
        console.log(address + " : " + param[address]);
    }
}


//Exercise 2
//Factory Function
function factoryAddress() {
    return {
        street: "202 Road",
        city: "Festac",
        zip: 110023,
    };
}
function ConstructorAddress() {
    this.street = "202 Road";
    this.city = "Festac";
    this.zip = 110023;
}

// Exercise 3
// Object 
let address1 = new ConstructorAddress();
let address2 = new ConstructorAddress();

function areEqual(obj1, obj2) {
    return (Object.keys(obj1) == Object.keys(obj2)) ? true : false;
}

function areSame(obj1, obj2) {
    return (obj1 == obj2) ? true : false;
}

// Exercise 4
// Blog Post
let blogPost = {
    title: "Harry Potter",
    body: "The series is produced and distributed by Warner Bros. Pictures and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone and culminating with Harry Potter and the Deathly Hallows",
    author: "J K Rowling",
    views: 20,
    comments: {
        comment1: {
            author: "Stephen Curry",
            body: "A good Movie, Highly Recommended"
        },
        comment2: {
            author: "Chris Hemsworth",
            body: "A bad movie!"
        },
        comment3: {
            author: "Stephen Curry",
            body: "A good Movie, Highly Recommended"
        },
        comment4: {
            author: "Chris Hemsworth",
            body: "A bad movie!"
        },
    },
    isLive: false,
}


// Exercise 5
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 5.1
programming.languages.push("Go");

// 5.2
programming.difficulty = 7;

// 5.3
delete programming.jokes;

// 5.4
Object.assign(programming, { isFun: true })

// 5.5
for (let language of programming.languages) {
    console.log(language);
}

// 5.6
for (let programme in programming) {
    console.log(programme);
}

// 5.7
for (let val in programming) {
    console.log(programming[val]);
}
