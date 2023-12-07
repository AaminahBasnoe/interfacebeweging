// JavaScript Document
console.log("Howdy!");

var button1 = document.querySelector('.functie1');
var button2 = document.querySelector('.functie2');
var button3 = document.querySelector('.functie3');
var body = document.querySelector('body');

function functie1(){
    body.classList.add('gooien');
};

function functie2(){
    body.classList.add('dojo');
};

function functie3(){
    body.classList.add('sluipen');
};

button1.addEventListener('click', functie1);
button2.addEventListener('click', functie2);
button3.addEventListener('click', functie3);