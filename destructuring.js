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
// const friends = ['TomHanks','TomBrady','TomCruise', 'TomSolaiman'];

// const arrow = () => {
//     for (const friend of friends) {
//         numberOfriendName = (friend.length);
//         // console.log(numberOfriendName);
//         const evenFriends = [];
//         const oddFriends = [];

//         if (numberOfriendName % 2 == 0) {
//             evenFriends.push(friend);
//             console.log(evenFriends);

//         }else {
//        }

//     }
// }

// arrow(friends);


// map function to get the square of an array and return a new array
// const numbers = [1,2,3,4,5,6,7,8,9];

//  const double = numbers.map( x => x * x);
//     console.log(double);


// forEach function to get the square of an array and no return a new array
    // const numbers = [1,2,3,4,5,6,7,8,9];

    // const double = numbers.forEach( x => console.log(x * x));
    //    console.log(double);

    

// filter function to get the even numbers from an array and return a new array
// const numbers = [1,2,3,4,5,6,7,8,9];
//   const even = numbers.filter(n => n % 2 == 0);
//     console.log(even);
 


// firter function to get the names with even number of characters and provied a new array
// const friends = ['TomHanks','TomBrady','TomCruise', 'TomSolaiman'];

// const evenFriends = friends.filter(f => f.length % 2 == 0);
// console.log(evenFriends);



// find function to get the first name with even number of characters but not provide a new array
// const friends = ['TomHanks','TomBrady','TomCruise', 'TomSolaiman'];

// const evenFriends = friends.find(f => f.length % 2 == 0);
// console.log(evenFriends);



// class to create a person object and set the name, age and country in the constructor


// class Teacher{

//      ono( name ,qualification, subject){
//         this.name = name;
//         this.qualification = qualification;
//         this.subject = subject;
//         }

//     lecture(){
//         console.log('I am a teacher')
//     }
// }

// const teacher = new Teacher( 'Ismail','MSc', 'Math');

// console.log(teacher);



// class car{
//     constructor( name, model, color){
//         this .name = name ;
//         this.model =model;
//         this.color = color;
//     }
//     move(){
//         console.log('I am moving');
//     }
// }

// const myCar = new car('Toyata',2023, 'Black');
// console.log(myCar);
// myCar.move();


// class Privetecar extends car{
//     constructor(name, model, color, owner){
//     super(name, model, color)
//     this.owner = owner;
//     }
//     carOwner(){
//         console.log('My car owner is ' + this.owner);
//     }
// }

// const myPrivetecar = new Privetecar('Ismail');

// console.log(myPrivetecar);
// myPrivetecar.carOwner();


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     rateKiKore(){

//         console.log(`${this.name} Rate gumay`)
//     }
//     dineKikore(){
//         console.log(`Dine ${this.name} Kage and class kore and thinking kore and shikhe shikhe `)
//     }
// }

// const personInfo = new Person('Ismail',25);
// console.log(personInfo);
// personInfo.rateKiKore();
// personInfo.dineKikore();


// class S{
    
//     // constructor(name){
//     //     this.name = name;
//     // }
    
//     sayHello(name){
//         console.log("Hi " + name)
//     }

//     sayBye(){
//         console.log("Bye " + this.name)
//     }
// }

// const cl = new S();

// cl.sayHello("Ismail")
// cl.sayBye()



// task console log the secondary school loocation of sophia 

// let data = {
//     Sophia: {id: 20, study:[
//                             {primary:[
//                                 {schoolName: "quarter school", location: "kotwali"}
//                             ]},
//                              {secondary:[
//                                 {schoolName: "sunshine school", location: "mirpur"}
//                             ]},
//                             {hiegherSecondary:[
//                                 {schoolName: "college", location: "uttara"}
//                             ]},
//                             ]
//             },
// }

// console.log(data.Sophia.study[1].secondary[0].location);


// task 2 console.log output : Persburger, Herry


// let stdudents = {222:{
//                         name: "Jack",
//                         section:"c",
//                         class: "xl",
//                         address:{
//                                 "buldding no":23,
//                                 "street": "St. Jonson",
//                                 "city": "Petersburg",
//                                 "country": "UK"
//                             }
//                         }, 
//                 333:{
//                         name: "Herry",
//                         section:"b",
//                         class: "x",
//                         address:{
//                                 "buldding no": 12,
//                                 "street": "St. Martin",
//                                 "city": "Huston",
//                                 "country": "USA"
//                             }
//                         }
//              };
                
//              console.log( stdudents[222].address.city);
//                 console.log( stdudents[333].name);



const oddNumbers = [1,3,5,7,9];

const odnumber = oddNumbers.map(n => n);

for (const number of odnumber) {
     const evenNums = [];


    let convertEvn = (number+1);

    // console.log(convertEvn);


  const evenArray = evenNums.push(convertEvn);

 console.log(evenArray);
}

