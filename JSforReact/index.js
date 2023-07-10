/*objeto basico js*/
/*
const user ={
  name : 'ryan',
  lastname : 'perez',
  age : 30,
  address:{
    contry: 'colombia',
    city: 'bogota',
    street: 'main street 123'
  },
  friends:['brandon', 'elena'],
  active: true,
  /*sendMail: function(){
    return 'sending email...'
  }*/
  //tambien se puede hacer una funcion dentro de un objeto asi
  /*
  sendMail(){
    return 'sending email...'
  },
};
*/
/*llamar objeto*/
//console.log(user)
/*llamar objeto accediendo a las propiedades de un objeto*/
//console.log(user.active)
//console.log(user.sendMail()) llamar funcion dentro de un objeto

// const name = 'lapton'
// const price = 3000
// const newProdcut = {
  /*
  name:name,
  price: price*/
  //otra forma de declar una propiedad, se puede hacer cuando el key y el valor asignado apartir de una variable tienen el mismo nombre
//   name,
//   price 
// }
//console.log(newProdcut)
//Manipulacion de DOM (document object model), el documento HTML basicamente
//Generar interfaz con JS
/*
const title=document.createElement('h1')//crear elementos de HTML
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = ('click')
//programar logica para elementos de HTML
button.addEventListener('click', function(){
  console.log('Hola mundo')
  title.innerText = 'Texto actualizado con JS'
  alert('se realizo un click')
})

document.body.append(title)
document.body.append(button)
*/
/*
const user ={
  name: 'joe',
  age: 30
}
function printInfo(user){
  return '<h1>Hola '+user.name+'</h1>'
}
console.log(printInfo(user))
document.body.innerHTML = printInfo(user)
document.body.innerHTML = '<h2>texto añadido</h2>'
*/
//destructing de objetos
/*
const user ={
  name: 'joe',
  age: 30
}

function printInfo({age}){ //recibir un valor de objeto
  return '<h1>Hola '+age+'</h1>'
}
function printInfo(user){
  const {name, age} = user;
  console.log (name, age);
  return '<h1>Hola '+name+'</h1>'
}
console.log(printInfo(user))
document.body.innerHTML = printInfo(user)
*/
//funciones anonimas
/*
console.log(function (){
  return 'Starting...'
}())
*/
//funcion anonima
/*
const button = document.createElement('button');
button.innerText = 'click me'
//funcion no anonima
/*
function handleClick(){
  alert('clicked')
}
button.addEventListener('click', handleClick)
*/
//funcion anonima
/*
button.addEventListener('click', function (){
  alert('clicked')
})
*/
//document.body.append(button);
//arrow functions
/*
function add(x,y){//funcion normal
  return x + y;
}
const add = (x,y) =>{//arrow function
  return x + y;
}*/
// inline arrow functions
/*
const showtext = () =>{
  return 'Hola mundo'
}
const showtext = () => 'Hola mundo' // se crea un return directamente
const showNumber = () => 22;
const shownBoolean = () => true;
const showArray = () => [1,2,3]
const showObject = () => ({name: 'ryaan'})
*/
/*
//return en funciones
const button = document.createElement('button');
button.innerText = 'click me'
const isAuthorized = true;

button.addEventListener('click', () =>{
  if (isAuthorized) {
    alert('esta autorizado')
  }else{
    alert('no esta autorizado')
  }
});

button.addEventListener('click', () =>{
  //return puede ser una forma de acabar una funcion o reemplzar el else
  if (isAuthorized) {
    return alert('esta autorizado')
  }
    alert('no esta autorizado')
});
document.body.append(button)
*/
//string literals: concatenar o unir strings, ademas interpretar valores dentro de un string
/*
const background = 'gray'
const color = 'white'
const isAuthorized = true;


const button = document.createElement('button');
button.innerText = 'click me';
button.style = 'background: red; color: white;'
//button.style = `background: ${background}; color:${color}`//string literal para estilizar un boton
button.style = `background: ${isAuthorized ? background : 'red'}; color:${color}`//string literal para estilizar un boton


button.addEventListener('click', () =>{
  //return puede ser una forma de acabar una funcion o reemplzar el else
  if (isAuthorized) {
    return alert('esta autorizado')
  }
    alert('no esta autorizado')
});
document.body.append(button)
*/
/*
//array metodos
const names = ['ryan', 'joe', 'maria']

//for (let i = 0; i < names.length; i++) {
//  const element = names[i];
//  console.log(element)
//}

// names.forEach(function (name){
//   console.log(name)
// })
// const newnames = names.map(function (name){
//   return `Hola ${name}`

// })
// console.log(newnames)

// const nameFound = names.find(function (name){
//   if (name == 'marco') {
//     return name
//   }
// })
// console.log(nameFound)

// const newNames = names.filter(function (name){
//   if (name !== 'joe') {
//     return name
//   }
// })
// console.log(newNames)
const newNames = ['marcos', 'mario', 'john']

console.log(names.concat(newNames))
*/
//spread operator
/*
const names = ['ryan', 'joe', 'maria']
const newNames = ['marcos', 'mario', 'john']

//console.log([...names, ...newNames])

const user ={
  name:"ryan",
  lastname: "rya"
}

const address={
  street:'main street 123',
  city:'bogota'
}

const userInfo ={
  ...user,
  ...address
}

console.log(userInfo)
*/
//Ecmascript modules
// import {add, multiply,active,points,title} from './add.js';

// console.log(active, points, title)
// console.log(add(10,20))
// console.log(multiply(10,20))
//importar por defecto
// import addModule from "./add.js"
// console.log(addModule)
/*
//optional chaining
// const person ={
//   name:'ryan',
//   adress:{
//     city:'london'
//   }
// }

//console.log(person.adress.city)
//console.log(person.location.city) = console.log(person.undefined.city)

// const person ={
//   name:'ryan',
//   adress:{
//     city:'london'
//   },
//   location:{}
// }
// if (person.location) {
//   console.log(person.location.city)
// }

const person ={
  name:'ryan',
  adress:{
    city:'london'
  },
}
  console.log(person.location?.city)
*/

//Async/Await
const ul = document.createElement("ul")

// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
//   return response.json()
// }).then(function (data){
//   console.log(data)
//   data.forEach(function(post) {
//     const li = document.createElement("li")
//     li.innerText = post.title
//     ul.append(li)
//   })
//   document.body.append(ul)
// })

//   console.log('linea 2')

async function loadData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
     data.forEach(function(post) {
     const li = document.createElement("li")
    li.innerText = post.title
     ul.append(li)
   })
   document.body.append(ul)
}
  loadData()
  console.log('linea 2')



