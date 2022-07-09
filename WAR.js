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

var playerAtally = 0
var playerBtally = 0
var tie = 'tie'

function createDeck(){
    var suits = ['H', 'C', 'D', 'S']
    var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    var deck = []; 
    
    for(var suitCounter = 0; suitCounter < 4; suitCounter++){
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

var playerhandA = testdeck.splice(0, 26);
//console.log(playerhandA)
var playerhandB = testdeck.splice(0, 27, 52);
//console.log(playerhandB)

while (typeof (i = playerhandA.shift()) !== 'undefined'){
    while (typeof (j = playerhandB.shift()) !== 'undefined')

    if (playerhandA > playerhandB) {
        console.log(playerhandA);
        console.count(playerAtally += 1);
        console.log(playerAtally)
        
        
     } else if (playerhandA < playerhandB) {
        console.log(playerhandB);
       console.count(playerBtally += 1);
        console.log(playerBtally);
         
     } else if (playerhandA == playerhandB){
        console.log(tie)
     }
     }

     if (playerAtally > playerBtally)
     {
        alert('player A wins')
     } else if (playerAtally < playerBtally){
        alert ('player B wins')
     }
