const BASE_URL = 'https://pokeapi.co/api/v2';

const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

async function getRandomPokemon() {
    try {
        const id = getRandomPokemonId();
        

        

    } catch (error) {

        console.error('Error ', error);

        throw error;
    }
}