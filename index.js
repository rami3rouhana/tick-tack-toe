// Add game setup
let gameSetup = [["red","yellow","red"],["red","yellow","red"],["red","yellow","red"]];

// Add players
const players = ["red","yellow"];

// Add players turn
let playerTurn = players[Math.round(Math.random()*1)];

// Get player input
const input = []

// Add player input
gameSetup[input[0],input[1]] = players[playerTurn];

// Game Score
let yellowScore = 0;
let redScore = 0;

// Game rules
const gameRules = [
    [
      [1,0,0],
      [1,0,0],
      [1,0,0]
    ],
    [
      [0,1,0],
      [0,1,0],
      [0,1,0]
    ],
    [
      [0,0,1],
      [0,0,1],
      [0,0,1]
    ],
    [
      [1,1,1],
      [0,0,0],
      [0,0,0]
    ],
    [
      [0,0,0],
      [1,1,1],
      [0,0,0]
    ],
    [
      [0,0,0],
      [0,0,0],
      [1,1,1]
    ],
    [
      [0,0,1],
      [0,1,0],
      [1,0,0]
    ],
    [
      [1,0,0],
      [0,1,0],
      [0,0,1]
    ]
  ]

// Convert table

playerSetup = [[0,0,0],[0,0,0],[0,0,0]]

for(let j=0; j<gameSetup.length; j++){
    for(let i=0; i<gameSetup.length; i++){
        if(gameSetup[j][i] == playerTurn){
            playerSetup[j][i] = 1;
        }
    }
}

// Add win game
gameRules.forEach(gameRule => {
    let winCombo = 0;
    for(let i = 0; i<3; i++){
        if(JSON.stringify(gameRule[i]) === JSON.stringify(playerSetup[i])){
            winCombo++;
        }
    }
    if(winCombo === 3) {
        if(playerTurn === 'yellow'){
            yellowScore += 1;
        }
        else{
            redScore += 1;
        }
        alert(`${playerTurn} Wins!`);
    }
});