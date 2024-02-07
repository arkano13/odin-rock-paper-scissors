let pcScore=0;
let playerScore=0;


playerSelect="";
document.getElementById("rock").addEventListener("click",function(){
    playerSelect = 1
    console.log(playerSelect)
    playgame()
});

document.getElementById("paper").addEventListener("click",function() {
    playerSelect = 2
    console.log(playerSelect)
    playgame()
});

document.getElementById("scissors").addEventListener("click",function(){
    playerSelect = 3
    console.log(playerSelect)
    playgame()
});


let optionsPlayer={
    1: "rock",
    2: "paper",
    3: "scissors"
}
let playerNum = optionsPlayer;





function computerselection(){
    let computerS = Math.floor(Math.random()*3)+1;


    //asigna el valor que necesitamos al numero 
let options={
    1: "rock",
    2: "paper",
    3: "scissors"
}

//el numero obtiene el valor que nosotros requerimos
let pcNum= options[computerS]

//retorna el valor que la computadora selecciona
return computerS 


}

function comparison(player, computer){
    
 

   if((player==1 && computer==2)||
    (player==2 && computer==3)||
    (player==3 && computer==1)){
        dsplaymessage(" computer win");
        pcScore++;
    } 
    else if (
        (computer == 1 && player == 2) ||
        (computer == 2 && player == 3) ||
        (computer == 3 && player == 1)
    ) {
        dsplaymessage(" player win");
        playerScore++;

    
    }  
else {
    dsplaymessage(" its a tie ");
}

document.getElementById("PlayerScore").textContent="Playerscore: "+playerScore;
document.getElementById("pcScore").textContent="computer score: "+pcScore;



if (playerScore===5 || pcScore===5){
displaywinner(playerScore===5 ? "the player win" : "the computer win");
pcScore=0;
playerScore=0;

}

}



function dsplaymessage(win){
document.getElementById("win").textContent= win;
}

function displaywinner(winner){
document.getElementById("winner").textContent= winner;

}



function playgame(){
    let computerschoice =  computerselection();
    comparison (playerSelect, computerschoice);
}

