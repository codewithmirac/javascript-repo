//Declaration and Initializing of variables
//Declare it before you use it on your program
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

//adding weapons
const weapons=[
{
  name:'stick',
  power:5
},
{
  name:'dagger',
  power:30
},
{
  name:'claw hammer',
  power:50
},
{
  name:'sword',
  power:100
}
]

//Array for monsters 
const monsters=[
  {
    name:'slime',
    level:8,
    health:15
  },
  {
    name:'fanged beast',
    level:8,
    health:60
  },
  {
    name:'drageon',
    level:20,
    health:300
  },
]

//Enter object due property (key (like name) and value(like 'town square')) -> Store data of location
//'button text' is 2 words, we need to add '' for the key
const locations = [
  { 
    name: 'town square',
    'button text':['Go to store','Go to cave','Fight dragon'], 
    'button functions':[goStore,goCave,fightDragon],
    text:'You are in the town square. You see a signs says "Store"'
  },
  {
    //We are adding an object with the name store (what is in function goStore)
    name:'store',
    'button text':['Buy 10 health (10 gold)','Buy weapon (30 gold)','Go to town square'],
    'button functions':[buyHealth,buyWeapon,goTown],
    text:'You enter the store'
  },
  {
  name:'cave',
  'button text': ['Fight slime','Fight beast','Go to town square'],
  'button function': [fightSlime,fightBeast,goTown] ,
  text: 'You entered the cage, you see some monsters'
  },
  {
   name:'fight',
   'button text': ['Attack','Dodge','Run'],
   'button functions': [attack, dodge, goTown],
   text:'You are fighting a monster'
  }

]

//Initialize buttons -> button opens the function
button1.onclick = goStore //By clicking on button1 we call function goStore
button2.onclick = goCave
button3.onclick = fightDragon

//Defining functions
function goStore() {
  /*
  This code is not needed anymore
  ->console.log("Going to store") -> Developer Tools: Console
  ->The text of the buttons changed
  button1.innerText = 'Buy 10 health (10 gold)' 
  button2.innerText = 'Buy weapon (30 gold)'
  button3.innerText = 'Go to town square'
  ->Changing the onCLick property of the buttons
  button1.onclick = buyHealth 
  button2.onclick = buyWeapon
  button3.onclick = goTown
  text.innerText = 'You entered the store'
*/
 //we call the update function with an argument
 update(locations[1])
}

function goCave() {
 //console.log('Going to cave.') //Showed in developer tools > Console
 update(locations[2])
}

function goTown() {
  /*
  This code is copied into the update function
  button1.innerText = 'Go to store' //The text of the button1 changed
  button2.innerText = 'Go to cave'
  button3.innerText = 'Fight dragon'
  button1.onclick = goStore //By clicking on button1 we call function goStore
  button2.onclick = goCave
  button3.onclick = fightDragon
  text.innerText =
  'You are in the town square. You see a signs that says "store".'
  */

  //we call the update function with an argument
  update(locations[0])
}

//The code is repeting so we create new function update
function update(location){
  button1.innerText = location['button text'][0] //We reference to "Go to store"
  button2.innerText = location['button text'][1]
  button3.innerText = location['button text'][2]
  button1.onclick =  location['button functions'][0]//By clicking on button1 we call function goStore
  button2.onclick = location['button functions'][1]
  button3.onclick = location['button functions'][2]
  text.innerText =
  location.text //Just works for single keys, alternative:location[text]
}


function buyHealth() {
  /*gold = gold-10;
  health = health + 10*/

if (gold >= 10){
//Compound way
  gold -=10
  health += 10
  goldText.innerText=gold
  healthText.innerText=health
} else{
  text.innerText='You do not enough gold to buy health'
}

  
}
function buyWeapon() {
 if (currentWeapon < weapons.length-1){ 
  if(gold >= 30){
    gold -= 30
    currentWeapon++ //Add 1 to currentWeapon
    gold.innerText=gold
    let newWeapon = weapons[currentWeapon].name
    text.innerText='You have a' + newWeapon + '.'
    inventory.push(newWeapon) //adding to index of array
    text.innerText += 'In your inventory you have' + inventory
  }else{
    text.innerText='You do not enough gold to buy a weapon'
  }
}else{
  text.innerText='You already have the most powerful weapon.'
  button2.innerText='Sell weapon for 15 gold'
button2.onclick = sellWeapon
}
}

function sellWeapon(){
  if (inventory.length >1){
    gold += 15
    goldText.innerText=gold
    let currentWeapon = inventory.shift(); //removing the first element of array
    text.innerText='You sold a ' + currentWeapon+ '.'
    text.innerText += 'In your invesntory you have ' + inventory //Adding a new line of text due to +=
  }else{
    text.innerText = 'Do not sell your only weapon!'
  }
}
function fightSlime(){
  fighting=0
  goFight()
}
function fightBeast(){
  fighting=1
  goFight()
}
function fightDragon() {
  //console.log('Fighting dragon.') //Showed in developer tools > Console
  fighting=2
  goFight()
}
function goFight(){
  update(locations[3])
  monsterHealth=monsters[fighting].health //monsters array->fighting=0->health
  monsterStats.style.display='block'//in css is the monstery property hidden, how to solve?
  monsterNameText.innerText=monsters[fighting].name
  monsterHealthText.innerText=monsterHealth
}

function attack(){
text.innerText='The' +monsters[fighting.name]+' attacks.'
text.innerText += 'You attack with yout ' +weapons[currentWeapon].name +'.'
health -= monsters[fighting].level
monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random()*xp)+1;
healthText.innerText=health
monsterHealthText.innerText=monsterHealth;
if(health<=0){lose()}
else if(monsterHealth<=0){
defeatMonster()}
}

function dodge(){
text.innerHTML='You dodge the attack from the '+ monsters[fighting].name
}
function lose(){

}
function defeatMonster(){
  gold+=Math.floor(monsters[fighting].level*6.7)
  xp+=Math.floor(monsters[fighting].level)
  goldText.innerText=gold
  xpText.innerText=xp
}