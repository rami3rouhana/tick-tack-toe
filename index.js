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

// Game Status
let gameStatus=true;

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
                gameStatus = false;
                yellowScore += 1;
                document.getElementById("yellow-score").innerHTML = yellowScore;
            }
            else{
                gameStatus = false;
                redScore += 1;
                document.getElementById("red-score").innerHTML = redScore;
            }
        }
    });
}

// Event listners
document.getElementById("top-left").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[0][0]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[0][0]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
    }}
})
document.getElementById("top-center").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[0][1]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[0][1]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("top-right").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[0][2]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[0][2]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("middle-left").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[1][0]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[1][0]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("middle-center").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[1][1]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[1][1]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("middle-right").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[1][2]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[1][2]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("bottom-left").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[2][0]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[2][0]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("bottom-center").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[2][1]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[2][1]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})
document.getElementById("bottom-right").addEventListener("click",(e) => {
    if(gameStatus){
        if(gameSetup[2][2]==0){
            players.indexOf(playerTurn)==0?playerTurn="yellow":playerTurn="red";
            gameSetup[2][2]=playerTurn;
            checkWin();
            const image = document.createElement("img");
            image.classList.add("fade-in-image");
            image.src=`./images/${playerTurn}.png`;
            e.currentTarget.appendChild(image);
        }}
})

// Reset Score
document.getElementById("reset").addEventListener("click", () => {
    redScore=0;
    yellowScore=0;
    document.getElementById("red-score").innerHTML = redScore;
    document.getElementById("yellow-score").innerHTML = yellowScore;
})

// Restart Score
document.getElementById("restart").addEventListener("click", () => {
    gameStatus = true;
    gameSetup = [[0,0,0],[0,0,0],[0,0,0]];
    let images = document.getElementsByTagName("img");
    images = Array.from(images);
    images.forEach(img => {
        img.src = "";
    })
})