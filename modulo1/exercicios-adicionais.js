const jkp = () => {
    const jkpObj = ['Pedra', 'Papel', 'Tesoura'];
    let player1 = Math.floor(Math.random() * jkpObj.length);
    console.log('player 1 escolheu: ',jkpObj[player1])
    let player2 = Math.floor(Math.random() * jkpObj.length);
    console.log('player 2 escolheu: ', jkpObj[player2])
  
    player1 == 'Pedra' && player2 == 'Tesoura' ? console.log('Player 1 Ganhou!') :
    player1 == 'Papel' && player2 == 'Pedra' ? console.log('Player 1 Ganhou!') :
    player1 == 'Tesoura' && player2 == 'Papel' ? console.log('Player 1 Ganhou!') :
    player1 === player2 ? console.log('Player 1 e Player 2 empataram!') :
    console.log('Player 2 Ganhou!')
  
    // if (jkpObj[player1] === jkpObj[player2]){
    //   console.log('Player 1 e Player 2 empataram!')
    // } else if ((jkpObj[player1] == 'Pedra' && jkpObj[player2] == 'Tesoura') || 
    //            (jkpObj[player1] == 'Papel' && jkpObj[player2] == 'Pedra') || 
    //            (jkpObj[player1] == 'Tesoura' && jkpObj[player2] == 'Papel')) {
    //   console.log('Player 1 Ganhou!')
    // } else {
    //   console.log('Player 2 Ganhou!')
    // }  
    // else if (player1 == 'Papel' && player2 == 'Pedra'){
    //   console.log('Player 1 Ganhou!')
    // } else if (player1 == 'Tesoura' && player2 == 'Papel'){
    //   console.log('Player 1 Ganhou!')
    // } 
  }
  console.log("Hello")
  jkp();