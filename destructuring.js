const actor ={name :'Tom Cruise', age: 58, country: 'USA'};

// const name = actor.name;
// const age = actor.age;
// const country = actor.country;

// console.log(name, age, country);

// Destructuring
// const {country,age,name} = actor;
// console.log( country);



// write an arrow function that will take 3 parameters, will multiply the parametersand will return the result

// const multiply = (a,b,c) => a*b*c;
// // const result = multiply(2,3,4);

// console.log(multiply(2,3,4));


// write the following sentence in three lines and print it

// const multiLine = ['I am a web developer.', 'I love to code.', 'I love to eat biryani.'];
//   for (const line of multiLine) {
//     console.log(line+" " + "\n"); 
//   }



// write an arrow function that will take two parameters: one come form you and the other will be a default parameter.
//   const arrow = (a,b=0) => a + b;
//     console.log(arrow(6,));



// You have an array of friends' names. Loop through the array and find out the names which have even number of characters and put them in a new array
const friends = ['TomHanks','TomBrady','TomCruise', 'TomSolaiman'];

const arrow = () => {
    for (const friend of friends) {
        numberOfriendName = (friend.length);
        // console.log(numberOfriendName);
        const evenFriends = [];
        const oddFriends = [];

        if (numberOfriendName % 2 == 0) {
            evenFriends.push(friend);
            console.log(evenFriends);

        }else {
       }

    }
}

arrow(friends);

