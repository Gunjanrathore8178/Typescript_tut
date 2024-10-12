"use strict";
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
/*Lesson-6*/
let age;
age = 25;
age = 'shreya';
age = true;
age = { name: 'roshi' };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
let ninja;
ninja = { name: 'yoshi', age: 45 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
