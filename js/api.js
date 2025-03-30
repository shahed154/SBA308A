//import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

async function getRandomPokemon() {
    try {
        const id = getRandomPokemonId();
        
      //  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
      const response = await axios.get(`${BASE_URL}/pokemon/${id}`);

       // const pokemonData = await response.json();
        return response.data;

    } catch (error) {
        console.error('Error getting random pokemon:', error);
        throw error;
    }
}
// this was more difficult than it shouldve been 
async function getRandomMove(pokemon, maxAttempts) 
{
    try 
    {
         maxAttempts = 10;
        const allMoves = pokemon.moves;
      
        
        // stole from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  
        const shuffledMoves = [...allMoves].sort(() => 0.5 - Math.random())
        
       
        const attempts = shuffledMoves.length;
        
   
        for (let i = 0; i < attempts; i++) 
            {
            
            const moveEntry = shuffledMoves[i]

            const moveUrl = moveEntry.move.url;
            
            const response = await axios.get(moveUrl);
            
            const moveData = response.data;
            
      
            if (moveData.power !== null && moveData.power > 0) 
                {
                return moveData;
            }
        }
        
   
        throw new Error(`No move with power ${attempts} attempts`);
        
    } catch (error) {
        console.error('Error getting random move with power', error);
        throw error;
    }
}

export { getRandomPokemon, getRandomMove };