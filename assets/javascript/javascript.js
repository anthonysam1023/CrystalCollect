var wins = 0; //"wins:" + 0;
var losses =  0; //"losses: " + 0;
var comPick;
var yourScore = 0;
var min = 20;
var max = 60;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
start ();

$("#crystalOne").on("click", function (){
yourScore = (yourScore + crystalOne);
$("#yourScore").text(yourScore);
checkWin();
})
$("#crystalTwo").on("click", function (){
    yourScore = (yourScore + crystalTwo);
    $("#yourScore").text(yourScore);
    checkWin();
})
$("#crystalThree").on("click", function (){
yourScore = (yourScore + crystalThree);
$("#yourScore").text(yourScore);
checkWin();
})
$("#crystalFour").on("click", function (){
yourScore = (yourScore + crystalFour);
 $("#yourScore").text(yourScore);
 checkWin();
})
function start (){
    crystalOne= Math.floor(Math.random() * 15)+ 1;
    crystalTwo = Math.floor(Math.random() * 15)+ 1;
    crystalThree = Math.floor(Math.random() * 15)+ 1;
    crystalFour = Math.floor(Math.random() * 15)+ 1;
    comPick = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
    yourScore = 0;
    $("#comPick").text(comPick);
    $("#wiLos").text("wins: " + wins + " losses: " + losses);
}


function checkWin(){
    if (yourScore === comPick){
        wins ++;
       alert("You won");
        start ();
    }
    else if (yourScore > comPick){
    losses ++;
    alert ("You lose");
    start ();
    }
    
}
