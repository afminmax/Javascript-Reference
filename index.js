        // Javascript comment here
        // let title = 'Waterpolo World';
        // let isApproved = true; //Boolean literal
        //let age = 45;
        let persons = {
            firstname: 'Arya',
            number: 23
        };
let nummer = 34;
persons.firstname = 'Jimmy';

console.log(persons.firstname);

console.log('Hello World from the Shrike!!!!');

// ARRAYS - Used to store lists

let selectedColors = []; //initialize array to empty brackets
let someColors = ['red','blue','green'];
someColors[3] = 'green';
console.log(someColors);

someColors[4] = 4;
console.log(someColors);
console.log(someColors.length)
console.log(someColors[0]);


//FUNCTIONS - like any other in C# or Python
function someFunctionName(){}  // this is the standard nomenclature

function greet(){
   console.log('Hello Universe'); 
}

greet();

function greetName(name, num){
    console.log('Hello ' + name + ' Universe ' + num); 
 }

 greetName(someColors[2], nummer)


 function square(){
     return nummer * nummer;
 }

 console.log(square(4)) // 2 function calls here
