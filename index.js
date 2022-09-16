// Add game setup
let gameSetup = [[0,0,0],[0,0,0],[0,0,0]];

// Add players
let players = ["red","yellow"];

// Add players turn
let playerTurn = players[Math.round(Math.random()*1)];

// Get player input
const input = []

// Add player input
gameSetup[input[0],input[1]] = players[playerTurn];

// Add player Setup
playerSetup = [[0,0,0],[0,0,0],[0,0,0]];

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
const convertTable = () => {
    playerSetup = [[0,0,0],[0,0,0],[0,0,0]];

    for(let j=0; j<gameSetup.length; j++){
        for(let i=0; i<gameSetup.length; i++){
            if(gameSetup[j][i] == playerTurn){
                playerSetup[j][i] = 1;
            }
        }
    }
}

// Add win game
const checkWin = () => {    
    convertTable();
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
        players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
    });
}

// Event listners
document.getElementById("top-left").addEventListener("click",() => {
    if(gameSetup[0][0]==0){
        gameSetup[0][0]=playerTurn;
        checkWin();}
})
document.getElementById("top-center").addEventListener("click",() => {
    if(gameSetup[0][1]==0){
        gameSetup[0][1]=playerTurn;
        checkWin();}
})
document.getElementById("top-right").addEventListener("click",() => {
    if(gameSetup[0][2]==0){
        gameSetup[0][2]=playerTurn;
        checkWin();}
})
document.getElementById("middle-left").addEventListener("click",() => {
    if(gameSetup[1][0]==0){
        gameSetup[1][0]=playerTurn;
        checkWin();}
})
document.getElementById("middle-center").addEventListener("click",() => {
    if(gameSetup[1][1]==0){
        gameSetup[1][1]=playerTurn;
        checkWin();}
})
document.getElementById("middle-right").addEventListener("click",() => {
    if(gameSetup[1][2]==0){
        gameSetup[1][2]=playerTurn;
        checkWin();}
})
document.getElementById("bottom-left").addEventListener("click",() => {
    if(gameSetup[2][0]==0){
        gameSetup[2][0]=playerTurn;
        checkWin();}
})
document.getElementById("bottom-center").addEventListener("click",() => {
    if(gameSetup[2][1]==0){
        gameSetup[2][1]=playerTurn;
        checkWin();}
})
document.getElementById("bottom-right").addEventListener("click",() => {
    if(gameSetup[2][2]==0){
        gameSetup[2][2]=playerTurn;
        checkWin();}
})