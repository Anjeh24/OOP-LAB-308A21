
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    }
    }

    
for ( i = 0; i <= adventurer.inventory.length; i++) {
   console.log(adventurer.inventory[i]);
}

//Robins method

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: ...
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
         }
    }

   adventurer.roll()