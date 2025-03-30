function displayPokemon(element, pokemon) {
    element.innerHTML = 
    `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
}

function displayOpponentPokemon(element,pokemon)
{
    element.innerHTML = 
    `<h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> `;

}


function displayMove(element, move) {
    element.innerHTML = 
    `<h2>${move.name.toUpperCase()}</h2>
    <h3>Power: ${move.power}</h3>
   `;
}

export { displayPokemon, displayOpponentPokemon, displayMove };