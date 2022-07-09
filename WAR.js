const CARD_VALUE_MAP = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'T' : 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
    'A' : 14,
}

var playeronetally = 0
var playertwotally = 0

function createDeck(){
    var suits = ['H', 'C', 'D', 'S']
    var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    var deck = []; 
    
    for(suitCounter = 0; suitCounter < 4; suitCounter++){
        for(var rankCounter = 0; rankCounter < 13; rankCounter++){
            //console.log(ranks[rankCounter] + suits[suitCounter])
            deck.push(ranks[rankCounter] + suits[suitCounter]);
        }
        
    } 
    return deck; 
}

function shuffleDeck(deck) {
for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck [i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
}
}

var testdeck = createDeck();
shuffleDeck(testdeck);

var playeronedeck = testdeck.splice(0, 26);
console.log(playeronedeck)
var playertwodeck = testdeck.splice(0, 27, 52);
console.log(playertwodeck)

let playeronedraw = playeronedeck.shift()
let playertwodraw = playertwodeck.shift()




while (typeof (i = playeronedeck.shift()) !== 'undefined'){
while (typeof (j = playertwodeck.shift()) !== 'undefined')
    


if (playeronedraw > playertwodraw) {
   //playeronedeck.push(playeronedraw, playertwodraw);
   console.log(playeronedraw);
   console.count(playeronetally += 1);
   console.log(playeronetally)
   
   
} else if (playeronedraw < playertwodraw) {
    //playertwodeck.push (playeronedraw, playertwodraw)
   console.log(playertwodraw);
  console.count(playertwotally += 1);
   console.log(playertwotally);
    
} 
}
