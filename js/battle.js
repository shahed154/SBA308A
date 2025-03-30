function battle(playerPokemon, playerMove, opponentPokemon, opponentMove)


{
    const battleLog = [];

    battleLog.push(`${playerPokemon.name.toUpperCase()} VERSUS ${opponentPokemon.name.toUpperCase()}!`)
    ///
    battleLog.push(`${playerPokemon.name.toUpperCase()} used ${playerMove.name.toUpperCase()} (Power: ${playerMove.power})`);
    battleLog.push(`${opponentPokemon.name.toUpperCase()} used ${opponentMove.name.toUpperCase()} (Power: ${opponentMove.power})`);
    
    let winner;
    let winnerDetails;

    if (playerMove.power > opponentMove.power) {
        winner = 'player';
        winnerDetails = `${opponentPokemon.name.toUpperCase()} fainted! ${playerPokemon.name.toUpperCase()} with ${playerMove.name.toUpperCase()} Wins !  `;

    } else if (opponentMove.power > playerMove.power) {
        winner = 'opponent';
        winnerDetails = `${playerPokemon.name.toUpperCase()} fainted! ${opponentPokemon.name.toUpperCase()} with ${opponentMove.name.toUpperCase()} win! `;

    } else {
        winner = 'tie';
        winnerDetails = "Tied! THEY BOTH FAINTED";
    }

    battleLog.push(winnerDetails)

    return {
        winner: winner,
        battleLog: battleLog
    };

}

function displayBattleResults(battleLogElement, battleResults) {

    battleLogElement.innerHTML = '<h3>Battle Results</h3>';
    
    battleResults.battleLog.forEach((entry, index) => {
        

        setTimeout(() => {
          
            const logEntry = document.createElement('p');

            logEntry.textContent = entry
        
            
            battleLogElement.appendChild(logEntry);
            
           
  

        }, index * 2500); 

    });
   
}

export { battle, displayBattleResults };



