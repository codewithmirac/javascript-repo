//Declaration of variables
let xp = 0
let health = 100
let gold = 50
let currentWeapon = 0
let fighting
let monsterHealth
//Adding an array
let inventory = ['stick']

//Manipulation of html-elements, we update this elements using js
//const: value can not be updated
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text = document.querySelector('#text')
const xpText = document.querySelector('#xpText')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const monsterStats = document.querySelector('#monsterStats')
const monsterNameText = document.querySelector('#monsterNameText')
const monsterHealthText = document.querySelector('#monsterHealthText')
//Enter object due property (key and value)
const locations = [{ name: 'town square' }]

//Initialize buttons -->3:40
button1.onclick = goStore //By clicking on button1 we call function goStore
button2.onclick = goCave
button3.onclick = fightDragon

function update(location) {}

function goTown() {
  button1.innerText = 'Go to store' //The text of the button1 changed
  button2.innerText = 'Go to cave'
  button3.innerText = 'Fightg dragon'
  button1.onclick = buyHealth //By clicking on button1 we call function goStore
  button2.onclick = buyWeapon
  button3.onclick = goTown
  text.innerText =
    'You are in the town square. You see a signs that says "store".'
}

//Defining functions
function goStore() {
  button1.innerText = 'Buy 10 health (10 gold)' //The text of the button1 changed
  button2.innerText = 'Buy weapon (30 gold)'
  button3.innerText = 'Go to town square'
  button1.onclick = buyHealth //By clicking on button1 we call function goStore
  button2.onclick = buyWeapon
  button3.onclick = goTown
  text.innerText = 'You entered the store'
}

function goCave() {
  console.log('Going to cave.') //Showed in developer tools > Console
}

function fightDragon() {
  console.log('Fighting dragon.') //Showed in developer tools > Console
}

function buyHealth() {}
function buyWeapon() {}
