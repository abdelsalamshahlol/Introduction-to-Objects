// A  - 1

var name = {
    firstName: 'Yan',
    lastname: 'Fan'
}

var items = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

var pet = {
    animal: 'dog',
    noise: 'bark',
    age: 3,
    type: 'Golden Retriever',
    color: 'Yellow',
}

// A - 2
var person = {
    firstName: 'Abdesalam',
    lastName: 'Shahlol',
    age: 25,
    hometown: 'Edinburgh'
}

//A - 3

var person = {
    firstName: 'Abdesalam',
    lastName: 'Shahlol',
    age: 25,
    hometown: 'Edinburgh',
    Dob: '19/03/1992',
    placeOfBirth: 'Edinburgh',
    favoriteTvShow: ['supernatural', 'silicon valley', 'the grand tour']
}

// A - 4

var person = {
    name: {
        first: 'Abdesalam',
        middle: 'Abdelhamid',
        last: 'Shahlol',
    },
    age: 25,
    hometown: 'Edinburgh',
    Dob: '19/03/1992',
    placeOfBirth: 'Edinburgh',
    favoriteTvShow: ['supernatural', 'silicon valley', 'the grand tour']
}

//A - 5

var item = {
    name: 'ps4',
    category: 'gaming',
    yearReleased: 2018,
    rating: 5,
    price: 200
}

//A - 9

var person = {
    name: {
        first: 'Abdesalam',
        middle: 'Abdelhamid',
        last: 'Shahlol',
    },
    age: 25,
    hometown: 'Edinburgh',
    Dob: '19/03/1992',
    placeOfBirth: 'Edinburgh',
    favoriteTvShow: ['supernatural', 'silicon valley', 'the grand tour']
};

person['favColor'] = 'Yellow';

// A - 10

var key = 'name';
var woman = {
    name: 'Grace Hopper',
    age: 85,
    occupation: 'computer scientist'
};

woman['age'];
// => 85 
woman.name;
// => 'Grace Hopper' 
woman['occupation']
// => ???

// A - 11

function formatName(person) {
    return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
}

// A - 12

var people = [{
    name: {
        first: 'Grace',
        middle: 'B.',
        last: 'Hopper'
    },
    age: 85
}, {
    name: {
        first: 'Adele',
        last: 'Goldstine'
    },
    age: 43
}, {
    name: {
        first: 'Ada',
        last: 'Lovelace'
    },
    age: 36
}, {
    name: {
        first: 'Hedy',
        middle: 'E.',
        last: 'Lamarr'
    },
    age: 85
}, {
    name: {
        first: 'Ruchi',
        last: 'Sanghvi'
    },
    age: 34
}, {
    name: {
        first: 'Abdesalam',
        middle: 'Abdelhamid',
        last: 'Shahlol'
    },
    age: 25
}];

function getPeopleFullName(people) {
    var result = [];
    for (var person of people) {
        result.push(formatName(person));
    }
    return result;
}

function getAgeAvg(people) {
    var ageSum = 0;
    for (var person of people) {
        ageSum += person.age;
    }
    return ageSum / people.length;
}

function getOlderThan(people, age) {
    var result = [];
    for (var person of people) {
        person.age > age ? result.push(person) : '';
    }
    return result;
}

// Bonus Points
// Heddy Lamar

// A -- 13

var dirtyObject = {
    _fht: 192492,
    name: 'Yan Fan',
    age: 27,
    _byz: 939205,
    _ttrs: 510852
}

function clean(obj) {
    for (var key in obj) {
        if (key[0] === '_') {
            delete obj[key];
        }
    }
    return obj;
}

//A --14

var vals = {
    people: 2,
    type: 'fast food',
    order: 5,
    greeting: 'Hello',
    total: 26
}

function removeOddValues(obj) {
    var result = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            if (obj[key] % 2 === 0) {
                result[key] = obj[key];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

//More Practice 

// A - 1

//First split the string
//compare the first instance of split array to other and count
// then move to the next one
//dont forget to push to object result

function countWords(str) {
    var splited = str.split(' ');
    var result = {};
    var compare = splited[0];
    for (var i in splited) {
        result[splited[i]] = getOccurnce(splited[i], splited);
    }
    return result
}

function getOccurnce(str, arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        str === arr[i] ? result++ : '';
    }
    return result;
}

// A - 2

function countCharacters(str) {
    var splited = str.split('');
    var result = {};
    var compare = splited[0];
    for (var i in splited) {
        result[splited[i]] = getOccurnce(splited[i], splited);
    }
    return result
}

// A - 3

function select(obj, keys) {
    var result = {};
    for (var key of keys) {
        if (typeof obj[key] !== 'undefined') {
            result[key] = obj[key];
        }
    }
    return result;
}

// A - 4 

function extend(obj1, obj2) {
    for (var i in obj2) {
        obj1[i] = obj2[i];
    }
    return obj1;
}

//Advanced 

// A - 1

// function getPeopleFullName2(people) {
//   // var result = [];
//   // for(var person of people){
//   //   result.push(formatName(person));
//   // }

//   if(people.length === 0 ){
//    // return formatName(people[0]);
//   }

//     console.log(people)
//   return formatName(people[0]) + getPeopleFullName2(people.slice(1));
// }

// var keys  = Object.keys(people);
// getPeopleFullName(Object.keys(people)).

// A - 2

// function likeStringify(obj){
//   //var result;
//   //if(Array.isArray(obj))      
//   //}
//   if (obj.length === 0){ 
//     return '' ;
//   }
//   var result = obj[0];
//     if(obj.length>1){
//       result += ',';
//     }
//   return result + likeStringify(obj.slice(1))

// //  return obj[0] + ',' + likeStringify(obj.slice(1))
// }

// Flatten the array and returns a string 
// Not complete! because it should work on Objects

function loop(arr, n) {
    result = n || '[';
    if (arr.length === 0) {
        return n + ']';
    } else if (n !== undefined) {
        result = result + ",";
    }

    return result + loop(arr.slice(1), arr[0]);
}
