// Exercise 1
let extractKey = (arr, user) => {
    let newArr = [];
    arr.forEach((person) => {
        newArr.push(person[user]);
    });
    return newArr;
};

//example for Exercise 1
console.log(
    extractKey(
        [
            { name: "Elie", isInstructor: true },
            { name: "Tim", isInstructor: true },
            { name: "Matt", isInstructor: true },
        ],
        "name"
    )
);

// Exercise 2
function filterLetters(lettersArray, letterInArray) {
    let count = 0;
    lettersArray.filter((value) => {
        if (
            value == letterInArray.toLowerCase() ||
            value == letterInArray.toUpperCase()
        ) {
            count += 1;
        }
    });
    return count;
}

//examples for Exercise 2
console.log(filterLetters(["a", "a", "b", "c", "A"], "a")); // 3
console.log(filterLetters(["a", "a", "b", "c", "A"], "z")); // 0
console.log(filterLetters(["a", "a", "b", "c", "A"], "B")); // 1

// Exercise 3
let printFirstAndLast = function (arrayOfObjects) {
    for (let letter of arrayOfObjects) {
        let word = letter.at(0) + "" + letter.at(-1);
        console.log(word);
    }
};

//examples for Exercise 3
printFirstAndLast(["awesome", "example", "of", "forEach"]);

// Exercise 4
function valTimesIndex(arrayOfNumbers) {
    return arrayOfNumbers.map((num, ind) => {
        return num * ind;
    });
}

//examples for Exercise 4
console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
console.log(valTimesIndex([5, 10, 15])); // [0,10,30]

// Exercise 5
function addKeyAndValue(arrayOfObjects, key, value) {
    return arrayOfObjects.reduce((prvVal, curVal) => {
        prvVal = Object.assign(arrayOfObjects);
        curVal[key] = value;
        return prvVal;
    }, []);
}

//examples for Exercise 5
console.log(
    addKeyAndValue(
        [{ name: "Joshua" }, { name: "Mark" }, { name: "Arthur" }],
        "isInstructor",
        true
    )
);

// More Exercise
// Part 1
let printEmails = (array) => {
    let emails = "";
    for (let email in array) {
        emails += array[email].email + "\n";
    }
    return emails;
};

let printHobbies = (array) => {
    let hob = "";
    array.forEach(function (val) {
        for (let hobby of val.hobbies) {
            hob += hobby + "\n";
        }
    });
    return hob;
};

function findHometownByState(arr, str) {
    return arr.find(function (info) {
        return info.hometown.state == str;
    });
}

let allLanguages = (array) => {
    let newArr = [];
    for (let language of array) {
        newArr.push(...language.favoriteLanguages);
    }
    return newArr.filter(function (lang, ind, arr) {
        if (arr.indexOf(lang) == ind) {
            return lang;
        }
    });
};

function hasFavoriteEditor(arr, str) {
    let bools = arr.find((editor) => {
        if (editor.favoriteEditor == str) {
            return true;
        }
    });
    return bools ? true : false;
}

let findByUsername = (array, string) => {
    return array.find((user) => {
        return user.username == string;
    });
};

let users = [
    {
        username: "larry",
        email: "larry@foo.com",
        yearsExperience: 22.1,
        favoriteLanguages: ["Perl", "Java", "C++"],
        favoriteEditor: "Vim",
        hobbies: ["Fishing", "Sailing", "Hiking"],
        hometown: {
            city: "San Francisco",
            state: "CA",
        },
    },
    {
        username: "jane",
        email: "jane@test.com",
        yearsExperience: 33.9,
        favoriteLanguages: ["Haskell", "Clojure", "PHP"],
        favoriteEditor: "Emacs",
        hobbies: ["Swimming", "Biking", "Hiking"],
        hometown: {
            city: "New York",
            state: "NY",
        },
    },
    {
        username: "sam",
        email: "sam@test.com",
        yearsExperience: 8.2,
        favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
        favoriteEditor: "Atom",
        hobbies: ["Golf", "Cooking", "Archery"],
        hometown: {
            city: "Fargo",
            state: "SD",
        },
    },
    {
        username: "anne",
        email: "anne@test.com",
        yearsExperience: 4,
        favoriteLanguages: ["C#", "C++", "F#"],
        favoriteEditor: "Visual Studio Code",
        hobbies: ["Tennis", "Biking", "Archery"],
        hometown: {
            city: "Albany",
            state: "NY",
        },
    },
    {
        username: "david",
        email: "david@test.com",
        yearsExperience: 12.5,
        favoriteLanguages: ["JavaScript", "C#", "Swift"],
        favoriteEditor: "VS Code",
        hobbies: ["Volunteering", "Biking", "Coding"],
        hometown: {
            city: "Los Angeles",
            state: "CA",
        },
    },
];

// Part 2
letters = ["a", "e", "i", "o", "u"];

function vowelCount(string) {
    let y = [];
    for (let x = 0; x < string.length; x++) {
        if (letters.includes(string[x])) {
            y.push(string[x]);
        }
    }

    return y.reduce(function (acc, val, ind) {
        acc[val] = y.filter((num) => num == val).length;
        return acc;
    }, {});
}

function removeVowels(string) {
    let str = [...string];

    return str.filter((acc, val, ind) => {
        if (!letters.includes(acc)) {
            return acc;
        }
    });
}
