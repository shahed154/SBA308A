import { getRandomPokemon , getRandomMove } from './api.js'
import { displayPokemon, displayOpponentPokemon , displayMove} from './pokemon.js'
import { battle, displayBattleResults } from './battle.js';

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

addEventListener("DOMContentLoaded", (event) => 
    {
getRandomOpponentPokemon();
//

});

////////// roll pokemons 
rollPokemonButton.addEventListener('click', rollPlayerPokemon);

async function rollPlayerPokemon() {
    try {
    
        const pokemon = await getRandomPokemon();
        playerPokemon = pokemon;
        
        displayPokemon(playerPokemonElement, pokemon);
        
        pokemonRollsLeft--;
        rollPokemonButton.textContent = `Roll Pokemon (${pokemonRollsLeft} left)`;
        
        if (pokemonRollsLeft == 0) {
            window.alert("Out of Rolls!! "); // i cant see this for some reason
            rollPokemonButton.disabled = true;
        }
        rollMoveButton.disabled = false;
        
    } catch (error) {
        console.error('Error rolling Pokemon:', error);
        playerPokemonElement.innerHTML = '<p>Error fetching Pokemon.</p>';
    }
}

async function getRandomOpponentPokemon() {
    try {
    
        const pokemon = await getRandomPokemon();
        opponentPokemon = pokemon;
        
        displayOpponentPokemon(opponentPokemonElement, pokemon);
        await getRandomOpponentMove()

    } catch (error) {
        console.error('Error rolling Pokemon:', error);
        opponentPokemonElement.innerHTML = '<p>Error fetching Opponent Pokemon.</p>';
    }
}
////////////// roll moves 

rollMoveButton.addEventListener('click', rollPlayerMove);

async function rollPlayerMove() {
    try {
        if (!playerPokemon) {
            alert('You need to roll a Pokémon first!');
            return;
        }
        
        const move = await getRandomMove(playerPokemon);
        playerMove = move;
        
        displayMove(playerMoveElement, move);
        
        moveRollsLeft--;
        rollMoveButton.textContent = `Roll Move (${moveRollsLeft} left)`;
        
        if (moveRollsLeft === 0) {
            rollMoveButton.disabled = true;
        }
        
        
        if (playerPokemon && playerMove && opponentPokemon) {
            startBattleButton.disabled = false;
        }
        
    } catch (error) {
        console.error('Error rolling move:', error);
        playerMoveElement.innerHTML = '<p>Error fetching move.</p>';
    }
}

async function getRandomOpponentMove()
 {
    try {
        if (!opponentPokemon) {
            console.error('Opponent Pokémon not set');
            return;
        }
        
        const move = await getRandomMove(opponentPokemon);
        opponentMove = move;
        
        displayMove(opponentMoveElement, move);
        
    } catch (error) {
        console.error('Error getting opponent move:', error);
        opponentMoveElement.innerHTML = '<p>Error fetching opponent move.</p>';
    }
}

///////////// battle 

startBattleButton.addEventListener('click', startBattle);

async function startBattle() 
{
    
    if (!opponentMove) {
        await getRandomOpponentMove()
    }
 
    if (!playerPokemon || !playerMove || !opponentPokemon || !opponentMove) {
        alert('Make sure you have a Pokemon and a move selected first!');
        return;
    }

    const battleResults = battle(playerPokemon, playerMove, opponentPokemon, opponentMove);

    displayBattleResults(battleLogElement, battleResults);
 
    startBattleButton.disabled = true;

}


/////////////// reset 


resetGameButton.addEventListener('click', resetGame);

function resetGame() {

    playerPokemon = null;
    opponentPokemon = null;
    playerMove = null;
    opponentMove = null;
    pokemonRollsLeft = 3
    moveRollsLeft = 3
    
    playerPokemonElement.innerHTML = '<p>Roll a random Pokemon!</p>'
    playerMoveElement.innerHTML = '<p>Roll a random move!</p>';
    
    rollPokemonButton.disabled = false;
    rollPokemonButton.textContent = `Roll Pokemon (${pokemonRollsLeft} left)`;
    
    rollMoveButton.disabled = true;
    rollMoveButton.textContent = `Roll Move (${moveRollsLeft} left)`;
    
    startBattleButton.disabled = true;
    battleLogElement.innerHTML = '<h3>Battle log ...</h3>';
    
    getRandomOpponentPokemon();
    
}