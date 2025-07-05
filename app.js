const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  difficulty: "Med",
  catchPokemon: function(pokemonObj) {
    this.party.push(pokemonObj);
  },
  partyCount: function() {
    return this.party.length;
  },
  gymStatus: function() {
    const gymTally = { completed: 0, incomplete: 0 };
    for (let gym of this.gyms) {
      if (gym.completed) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    }
    console.log(gymTally);
  }
};
// Exercise 1
console.log(pokemon[58].name);

// Exercise 4
game.party.push(pokemon[0]); 

// Exercise 5
game.party.push(pokemon[25]); 
game.party.push(pokemon[94]); 
game.party.push(pokemon[130]); 

// Exercise 6
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

// Exercise 7
game.party.splice(0, 1, pokemon[1]); 

// Exercise 8
for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name);
}

// Exercise 9
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter) {
    console.log(pokemon[i].name);
  }
}

// Exercise 10
game.catchPokemon(pokemon[15]); 

// Exercise 11
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].name === "pokeball") {
      this.items[i].quantity--;
    }
  }
};
game.catchPokemon(pokemon[16]); 
console.log(game.items); 

// Exercise 12
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

// Exercise 13
game.gymStatus();

// Exercise 14
console.log(game.partyCount());

// Exercise 15
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}

// Exercise 16
console.log(game);