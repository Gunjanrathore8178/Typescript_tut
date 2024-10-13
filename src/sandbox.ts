/*lessons-4
let names=['luigi','mario','yoshi'];
names.push('toad');

let numbers=[10,20,30,40]
numbers.push(25);
//numbers.push(akash)

let mixed=['ken',4,'chunli',8,9,true];
mixed.push('yoshi')
mixed.push(10)
mixed[0]=9

//Objects
 let ninja={
    name:'mario',
    belt:'black',
    age:30
 };
 ninja.age=90;
 ninja.name='riya';
 //ninja.age='4'
 //ninja.skills=['fighting']

 /*ninja={
    name:'yoshi',
    belt:'black',
    age:20,
    skills:[]
 }
*/



/*Lesson-5

//explicit types
let character:string;
let age:number;
let isloggedIn:boolean;

//age='40'
age=30;
isloggedIn=true;

//arrays
let ninjas:string[];
//ninjas=[10,23]
ninjas=['rya','tot']
//ninjas.push('riya')


//Union type{more than one types of array etc}
let mixed:(string|number)[]=[];
mixed.push('riya');
mixed.push(25);
//mixed.push(false);
console.log(mixed);

let uid:string|number;
uid='toto';
uid=0;
//uid=false


//Objects
let ninja1:object;
ninja1={name:'yoshi',age:30};
//ninja1=[]
let ninja2:{
    name:string,
    age:number,
    belt:string
}
ninja2={
    name:'mario',
    age:30,
    belt:'black'
}
*/


/*Lesson-6
let age: any;
age = 25;
age = 'shreya'
age = true;
age = { name: 'roshi' }
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };
ninja = { name: 'yoshi', age: 45 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
*/


/*Lesson-7
console.log('test');
//config file
*/


/*Leeson-8
let greet = () => {
    console.log('hellor, world');
}
//greet='rya'
const add = (a: number, b: number, c: number | string=10) => {
    console.log(a + b);
    console.log(c);
}
add(5, 10);

const minus=(a:number,b:number)=>{
    return a+b;
}
let result=minus(10,7);
*/


/*Lesson-9

type StringOrNum=string|number;
const logDetails=(uid: StringOrNum, item: string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet=(user: {name:string, uid:string | number})=>{
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
}
*/

/*Lesson-10
//let greet:Function;

//example1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}
//example2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}
//example3
let logDetails: (obj: { name: string, age: number }) => void;
logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old `);
}
*/



/*Lesson-11*/
