function displayPokemon(element, pokemon) {
    element.innerHTML = `
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
export { displayPokemon , displayOpponentPokemon};