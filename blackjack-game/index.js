let messageel=document.getElementById("message-el")
let sumcards=document.getElementById("sum-cards")
let cards=document.getElementById("cards")

let hasblackjack=false
let isalive=false
let message="";
let sum=0;
let cardarr=[]

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startgame(){
    isalive=true
    document.getElementById("start-btn").style.display="none";
    document.getElementById("new-card-btn").style.display="inline";
    document.getElementById("new-game-btn").style.display="inline";

    let firstCard=randomInteger(2,11);
    let secondCard=randomInteger(2,11);
    cardarr.push(firstCard)
    cardarr.push(secondCard)
    sum+=cardarr[0]+cardarr[1]
    rendergame()
}

function rendergame(){
    sumcards.textContent="Sum: "+ sum
    cards.textContent = "Cards: "
    for(let i=0;i<cardarr.length;i++){
        cards.textContent+=cardarr[i]+" ";
        console.log(cardarr[i]);
    }

    if(sum<21){
        message="Do you want to draw another card? :| "
    }
    else if(sum===21){
        message="Wohoo, its a blackjack! :) "
        hasblackjack=true;
    }
    else{
        message="You LOSE! :("
        isalive=false
    }

    console.log(message);
    messageel.textContent=message;
    
    if(!isalive){
        document.getElementById("new-card-btn").style.display="none";
        document.getElementById("new-game-btn").style.display="inline";
        document.getElementById("cards").style.display="none";
    }
}

function newcard(){
    if(isalive==true && hasblackjack==false){
        message+="Drawing a new card from the deck"
        let thirdCard=randomInteger(2,11)
        cardarr.push(thirdCard)
        sum+=thirdCard
        rendergame()
    }
}

function newgame(){
    sum=0;
    startgame()
}