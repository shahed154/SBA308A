import { getRandomPokemon } from './api.js';


const playerPokemonElement = document.getElementById('player-pokemon')
const playerMoveElement = document.getElementById('player-move')
const opponentPokemonElement = document.getElementById('opponent-pokemon')
const opponentMoveElement = document.getElementById('opponent-move')
const battleLogElement = document.getElementById('battle-log')
const rollPokemonButton = document.getElementById('roll-pokemon')
const rollMoveButton = document.getElementById('roll-move')
const startBattleButton = document.getElementById('start-battle')
const resetGameButton = document.getElementById('reset-game');


let playerPokemon = null;
let opponentPokemon = null;
let playerMove = null;
let opponentMove = null;
let pokemonRollsLeft = 3
let moveRollsLeft = 3

rollPokemonButton.addEventListener('click', rollPlayerPokemon);

async function rollPlayerPokemon() {
    try {
    
        const pokemon = await getRandomPokemon();
        playerPokemon = pokemon;
        
        playerPokemonElement.innerHTML = `
      <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;
        
        pokemonRollsLeft--;
        rollPokemonButton.textContent = `Roll Pokemon (${pokemonRollsLeft} left)`;
        
        if (pokemonRollsLeft == 0) {
            window.alert("Out of Rolls!! "); // i cant see this for some reason
            rollPokemonButton.disabled = true;
        }
        
    } catch (error) {
        console.error('Error rolling Pokemon:', error);
        playerPokemonElement.innerHTML = '<p>Error fetching Pokemon. Try again.</p>';
    }
}