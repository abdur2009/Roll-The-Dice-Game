// Player names change
var player1 = prompt("Enter First Player's name");
var player2 = prompt("Enter Second Player's name");
console.log(`${player1} and ${player2} are Playing!`);

document.getElementById('player1name').innerText = player1;
document.getElementById('player2name').innerText = player2;

// Change player names done

// Generation of random number
let currentScore = 0;
let currentScore2 = 0;
let isPlayer1Turn = true; // Renamed variable

function numberfordice() {
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    if (isPlayer1Turn) {
        currentScore += diceNumber;
        document.getElementsByClassName('currentscorep1')[0].innerText = currentScore;
        console.log(diceNumber);
        document.getElementById('dice').src = `./Assets/${diceNumber}.png`;

        if (diceNumber === 1) {
            currentScore = 0; // Reset score for player 1
            document.getElementsByClassName('currentscorep1')[0].innerText = currentScore;
            // alert(`Turn for ${player2}`);
            isPlayer1Turn = false; // Switch turn to player 2
        }
    } else {
        currentScore2 += diceNumber;
        document.getElementsByClassName('currentscorep2')[0].innerText = currentScore2;
        console.log(diceNumber);
        document.getElementById('dice').src = `./Assets/${diceNumber}.png`;

        if (diceNumber === 1) {
            currentScore2 = 0; // Reset score for player 2
            document.getElementsByClassName('currentscorep2')[0].innerText = currentScore2;
            // alert(`Turn for ${player1}`);
            isPlayer1Turn = true; // Switch turn to player 1
        }
    }
}
// Generation of random number IS DONE now working on new game button

function reset() {
     currentScore = 0;
 currentScore2 = 0;
 isPlayer1Turn = true; 
 var player1 = prompt("Enter First Player's name");
var player2 = prompt("Enter Second Player's name");
console.log(`${player1} and ${player2} are Playing!`);

document.getElementById('player1name').innerText = player1;
document.getElementById('player2name').innerText = player2;

 document.getElementsByClassName('currentscorep1')[0].innerText = currentScore;
 document.getElementsByClassName('currentscorep2')[0].innerText = currentScore2;
 
}
//new game button is done now last hold button
let scorep1=0
let scorep2=0
function hold() {
    if (isPlayer1Turn==true) {
        scorep1 += currentScore; 
        document.getElementsByClassName('scorep1')[0].innerText = scorep1; 
        currentScore = 0;
        document.getElementsByClassName('currentscorep1')[0].innerText = currentScore; 
        if (scorep1 >= 100) {
            document.getElementsByClassName('scorep1')[0].innerText = scorep1; 
            alert(`${player1} has won!`);
            reset();
            return;
        }
        isPlayer1Turn = false; 
    } else { 
        scorep2 += currentScore2;
        document.getElementsByClassName('scorep2')[0].innerText = scorep2; 
        currentScore2 = 0; 
        document.getElementsByClassName('currentscorep2')[0].innerText = currentScore2; 
        if(scorep2>=100){
            document.getElementsByClassName('scorep2')[0].innerText = scorep2; 
            alert(`${player2} has won`)
            reset()
            return
        }
        isPlayer1Turn = true;
    }
}