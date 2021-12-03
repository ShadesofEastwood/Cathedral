class character {
  constructor() {
    this.characterCreation = characterCreation;
    this.flameStrike = flameStrike
    this.wellofRot = wellofRot
    this.manaSteal = manaSteal
    this.powerAttack = powerAttack
    this.fullBend = fullBend
    this.cast = cast
    this.fight = fight
    this.heal = heal
  }
}

let hero = new character()

// These functions are what both the user and the enemy NPC's use to attack and defend. All of them are divided into different functions based on the attack, spell, or action. Some are derivitive. The Cast function is just a prompt asking the user to pick a spell to use. While the spells are functions that actually effect the enemy or user.

function claw (enemy) {
    if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with their claw attack`)
        enemy.hp = enemy.hp - this.damage
    } else {
        console.log(`${this.name} has missed ${enemy.name} with their claw attack`)
    }
}

function swordAttack(enemy) {
if (Math.random() < this.accuracy) {
    console.log(`${this.name} has hit ${enemy.name} with their sword. Dealing ${this.damage} points of damage.`)
    enemy.hp = enemy.hp - this.damage
} else {
    console.log(`${this.name} has missed ${enemy.name} with their sword.`)
}
}

function bowAttack (enemy) {
    if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with their bow. Dealing ${this.damage} points of damage.`)
        enemy.hp = enemy.hp - this.damage
    } else {
        console.log(`${this.name} has missed ${enemy.name} with their bow.`)
    }
}

function staffAttack (enemy) {
    if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with their staff. Dealing ${this.damage} points of damage.`)
        enemy.hp = enemy.hp - this.damage
    } else {
        console.log(`${this.name} has missed ${enemy.name} with their staff.`)
    }
}

function flameStrike (enemy) {
if (Math.random() < this.accuracy) {
console.log(`${this.name} has hit ${enemy.name} with their flame strike. Dealing critical damage.`)
enemy.hp = enemy.hp - (this.damage * 2)
} else {
    console.log(`${this.name} has missed ${enemy.name} with their flame strike`)
}
}

function wellofRot (enemy) {
        if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with their well of rot. ${enemy.name} now has reduced accuracy with their attacks.`)
        enemy.accuracy = enemy.accuracy - 0.2
        } else {
            console.log(`${this.name} has missed ${enemy.name} with their well of rot.`)
        }
}

function manaSteal (enemy) {
    if (enemy.mana > 0) {
        if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with their mana steal. ${enemy.name} now has 1 less mana.`)
        enemy.mana = enemy.mana - 1
        this.mana = this.mana + 2
        } else {
            console.log(`${this.name} has missed ${enemy.name} with their mana steal`)
        }
} else {
    console.log(`this creature has no mana to steal`)
}
}

function cast (enemy) {
    if (this.mana > 0) {
        this.mana = this.mana - 1
    let spellChoice = prompt("Which spell would you like to cast? Flame strike, Well of rot, or Mana steal","Enter Choice Here")
    if (spellChoice == "flame strike") {
        this.flameStrike(enemy)
    } else if (spellChoice == "well of rot") {
        this.wellofRot(enemy)
    } else if (spellChoice == "mana steal") {
        this.manaSteal(enemy)
    } else {
        console.log("incorrect spell choice")
    }
} else {
    console.log(`${this.name} is out of mana`)
}
}

function enemyCast (PC) {
    if (this.mana > 0) {
    if (Math.random() < .3 ) {
        this.flameStrike(PC)
    } else if (Math.random() < .6) {
        this.wellofRot(PC)
    } else {
        this.manaSteal(PC)
    }
} else {
    console.log(`${this.name} is out of mana`)
}
}

function powerAttack(enemy) {
    if (this.mana > 0) {
        this.accuracy = this.accuracy - 0.2
        this.mana = this.mana - 1
    if (Math.random() < this.accuracy) {
        console.log(`${this.name} has hit ${enemy.name} with thier power attack. Dealing ${this.damage * 2} points of critical damage.`)
        enemy.hp = enemy.hp - (this.damage * 2)
    } else {
        console.log(`${this.name} has missed ${enemy.name} with thier power attack.`)
    }
    this.accuracy = this.accuracy + 0.2
} else {
    console.log("You are out of mana")
}
}

function fullBend (enemy) {
    if (this.mana > 0) {
        this.mana = this.mana - 1
        console.log(`${this.name} has hit ${enemy.name} with thier full bend attack. Dealing ${this.damage} points of damage.`)
        enemy.hp = enemy.hp - this.damage
    
} else {
    console.log("You are out of mana")
}
}

function heal () { 
    if (this.healingPotions > 0) {
    this.healingPotions = this.healingPotions - 1
    this.hp = this.hp + 10
    } else {
        console.log("You are out of healing potions")
    }
}

// These prompts are loaded when the page loads. These decide the users race, class, and name. The funciton characterCreation is what applies the necessary stats to. 

let raceOption = prompt(
  "Choose your race. Elf, Dwarf, or Human",
  "Enter Choice Here"
);

let classOption = prompt(
  "Choose your class. Knight, Ranger, or Wizard",
  "Enter Choice Here"
);

function characterCreation() {

    this.damage = 5

  if (raceOption == "elf") {
    this.race = "elf";
    this.hp = 15
    this.accuracy = 0.9
    this.mana = 3
  } else if (raceOption == "dwarf") {
    this.race = "dwarf";
    this.hp = 25
    this.accuracy = 0.7
    this.mana = 3
  } else if (raceOption == "human") {
    this.race = "human";
    this.hp = 20
    this.accuracy = 0.8
    this.mana = 2
  }

  if (classOption == "knight") {
    this.classe = "knight";
    this.attack = swordAttack
    this.special = powerAttack
  } else if (classOption == "ranger") {
    this.classe = "ranger";
    this.attack = bowAttack
    this.special = fullBend
  } else if (classOption == "wizard") {
    this.classe = "wizard";
    this.attack = staffAttack
    this.special = cast
  }

  if (raceOption == "elf" && classOption == "knight") {
      document.getElementById("elfknightimage").style.opacity="1" 
  } else if (raceOption == "elf" && classOption == "ranger") {
    document.getElementById("elfrangerimage").style.opacity="1" 
} else if (raceOption == "elf" && classOption == "wizard") {
    document.getElementById("elfwizardimage").style.opacity="1" 
} else if (raceOption == "dwarf" && classOption == "knight") {
    document.getElementById("dwarfknightimage").style.opacity="1" 
} else if (raceOption == "dwarf" && classOption == "ranger") {
    document.getElementById("dwarfrangerimage").style.opacity="1" 
} else if (raceOption == "dwarf" && classOption == "wizard") {
    document.getElementById("dwarfwizardimage").style.opacity="1" 
} else if (raceOption == "human" && classOption == "knight") {
    document.getElementById("humanknightimage").style.opacity="1" 
} else if (raceOption == "human" && classOption == "ranger") {
    document.getElementById("humanrangerimage").style.opacity="1" 
} else if (raceOption == "human" && classOption == "wizard") {
    document.getElementById("humanwizardimage").style.opacity="1" 
  }
}

hero.characterCreation()

let nameOption = prompt("What is your characters name?","Enter Name Here")

hero.name = `${nameOption}`
hero.healingPotions = 3
hero.key = 0
hero.ratkey = 0

let skeleton = new character()
skeleton.name = "skeleton"
skeleton.hp = 10
skeleton.mana = 0
skeleton.damage = 3
skeleton.attack = claw
skeleton.accuracy = 0.5

let undeadBeast = new character()
undeadBeast.name = "undead rat"
undeadBeast.hp = 5
undeadBeast.mana = 0
undeadBeast.damage = 2
undeadBeast.attack = claw
undeadBeast.accuracy = 0.5

let necromancer = new character()
necromancer.name = "necromancer"
necromancer.hp = 20
necromancer.damage = 5
necromancer.accuracy = 0.6
necromancer.mana = 2
necromancer.enemyCast = enemyCast
necromancer.attack = staffAttack

let tazmin = new character()
tazmin.name = "Necromancer Tazmin"
tazmin.hp = 35
tazmin.mana = 5
tazmin.damage = 6
tazmin.attack = swordAttack
tazmin.accuracy = 0.7
tazmin.enemyCast = enemyCast

let boneWidow = new character()
boneWidow.name = "The Bone Widow"
boneWidow.hp = 35
boneWidow.mana = 0
boneWidow.damage = 8
boneWidow.attack = claw
boneWidow.accuracy = 0.6

function fight (enemy) {
    while (enemy.hp > 0) {
        let roundAction = prompt(`It is your turn. What would you like to do? Your current HP is ${this.hp}, your current number of healing potions is ${this.healingPotions} and your current MP is ${this.mana}. Mana is required to use your specials.`,"attack, heal, or use special")
        if (roundAction == "attack") {
        this.attack(enemy)
        } else if (roundAction == "heal") {
            this.heal()
        } else if (roundAction == "use special") {
            this.special(enemy)
        }
        if (enemy.hp > 0) {
            if (enemy.mana > 0 ) {
            if (Math.random() < .3) {
                enemy.enemyCast(this)
            } else {
                enemy.attack(this)
            }
        } else {
            enemy.attack(this)
        }
    } 
    if (this.hp <= 0 ) {
        alert("YOU DIED")
        break
    }
}
}

document.querySelector(".hp").innerHTML = `HP: ${hero.hp}`
document.querySelector('.mana').innerHTML = `MP: ${hero.mana}`
document.querySelector('.name').innerHTML = `Name: ${hero.name}`
document.querySelector('.race').innerHTML = `Race: ${hero.race}`
document.querySelector('.class').innerHTML = `Class: ${hero.classe}`


function leftRoom () {
alert("You enter to the room to the left and find an altar with a man in dark robes kneeling at its base. He turns as you enter and says -Tazmin has seen your coming for he is blessed by Corva herself. Now you will die!- He produces a staff from his back and attacks!")
hero.fight(necromancer)
if (necromancer.hp <= 0 ) {
    alert("As the body of the necromancer lies dead before you, a voice echoes out into the room and you hear -rise my child... rise again... and fight for me...- The body of the necromancer begins to stand once again! Now a skeletal warrior!")
    hero.fight(skeleton)
    if (skeleton.hp <= 0) {
        hero.mana = hero.mana + 2
        alert("The skeletal warrior lies still on the ground. You search its robes and find a black iron key. There are no other doors in this room.")
        hero.key = 1
        let leftroomChoice = prompt("You exit out of the room to the left and now see the stairs straight ahead and the room to the right. Where do you go now?", "right or straight?")
        if (leftroomChoice == "right") {
            if (hero.ratkey == 0) {
                rightRoom()
            } else if (hero.ratkey == 1) {
                alert("You have already cleared all rooms besides upstairs.")
                upStairs()
            }
        } else if (leftroomChoice == "straight") {
            upStairs()
        }
}
}
}

function rightRoom () {
alert(`You enter into a humid room with straw covering the ground. In the middle of the room there is a large undead rat that nibbles at the flesh of a peasants body. The rat turns to you and screeches!`)
hero.fight(undeadBeast)
if (undeadBeast.hp <= 0) {
    hero.mana = hero.mana + 2
    hero.ratkey = 1
    alert("You have slain the undead rat. There are no other doors in this room.")
    let rightroomChoice = prompt("You exit out of the room to the right and now see the stairs straight ahead and the room to the left. Where do you go now?", "left or straight?")
    if (rightroomChoice == "left") {
        if (hero.key == 0) {
            leftRoom()
        } else if (hero.key == 1) {
            alert("You have already cleared all rooms besides upstairs.")
            upStairs()
        }
    } else if (rightroomChoice == "straight") {
        upStairs()
    }
}
}

function upStairs () {
if (hero.key == 0) {
    alert("You approach a massive iron door with a menacing looking lock thats carved in the shape of a skull. You do not have the key") 
    let upstairsroomChoice = prompt("You exit back down the stairs and enter into the room you started in. There is still a door to your -left- and a door to your -right-. Which would you like to enter?","left or right")
    if (upstairsroomChoice == "left") {
        leftRoom()
    } else if (upstairsroomChoice == "right") {
        rightroom()
    }
} else if (hero.key == 1) {
    alert("You approach a massive iron door with a menacing looking lock thats carved in the shape of a skull. You take out the iron key and unlock the door.")
    alert("The door opens, revealing a necromancer with a jagged iron crown atop his head conducting a ritual over several corpses. It is Necromancer Tazmin! He roars over the swirling winds of arcane energy and yells to you -It is too late! The ritual is nearly done! The Bone Widow will arrive and all will hail in its glory!-")
    let quicktimeEvent = prompt("You have a chance to interrupt the ritual and possibly stop it by hurling an attack from a distance. Do you take the chance?", "yes or no")
    if (quicktimeEvent == "yes") {
        if (Math.random() < hero.accuracy) {
            alert("You hit Tazmin with your attack and stop the ritual! He screams in frustration and curses you! Necromancer Tazmin then screams and hurls a flame strike towards you! Prepare for battle!")
            hero.fight(tazmin)
            if (tazmin.hp <= 0) {
                alert("You have put a stop to Necromancer Tazmin and his plans to raise the dreaded bone widow. You can now return to the valley with joyous news of your victory! Congrats hero!")
            }
        } else {
            alert("You miss with your attack! The ritual cannot be stopped! You watch as the corpses combine in odd ways and form a spider looking creature made of cadavers! The bone widow immediately eats Necromancer Tazmin as it's first meal and then turns to you! Prepare for battle!")
            hero.fight(boneWidow)
            if (boneWidow.hp <= 0) {
                alert("You have put a stop to Necromancer Tazmin and his dreaded bone widow. You can now return to the valley with joyous news of your victory! Congrats hero!")
            }
        }
    } else if (quicktimeEvent == "no") {
            alert("You sit in horror as the corpses combine in odd ways and form a spider looking creature made of cadavers! The bone widow immediately eats Necromancer Tazmin as it's first meal and then turns to you! Prepare for battle!")
             hero.fight(boneWidow)
             if (boneWidow.hp <= 0) {
                alert("You have put a stop to Necromancer Tazmin and his dreaded bone widow. You can now return to the valley with joyous news of your victory! Congrats hero!")
            }
    }

}
}

function handleclickEvent() {
    let firstChoice = prompt("You step into the interior of the dilapidated chapel of Corva, Lady of the Grave. God of Death. You stand in front of rotted wooden pews and crumbled pillars. You are here to find the Necromancer Tazmin and kill him. There is a door to your -left- a door to your -right- and a staircase -straight-. Where would you like to go?", "Enter Choice Here")
    if (firstChoice == "left") {
        leftRoom()
    } else if (firstChoice == "straight") {
        upStairs()
    } else if (firstChoice == "right") {
        rightRoom()
    }

}

if (hero.classe == "knight") {
    document.querySelector('.specialAbility').innerHTML = "Special Ability: Power Attack(1 mana): Attempt a wild haymaker attack with lower accuracy but increased damage."
} else if (hero.classe == "ranger") {
    document.querySelector('.specialAbility').innerHTML = "Special Ability: Full Bend(1 mana): A precision bow attack that is guaranteed to hit."
} else if (hero.classe == "wizard") {
    document.querySelector('.specialAbility').innerHTML = "Special Ability: Spellcasting(1 mp per spell): Select a spell to cast from your spellbook. Flame-Strike, Well of Rot, or Mana Steal"
}

let playBtn = document.querySelector('.playButton')

playBtn.addEventListener("click",handleclickEvent)

