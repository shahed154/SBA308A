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

export { getRandomPokemon };