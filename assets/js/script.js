var cardDeck = ['sa', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
var randomCard1;
var randomCard2;
var randomCard3;
var randomCard4;
var randomCard5;
var randomCard6;
var randomCard7;
var randomCard8;
var randomCard9;
var randomCard10;

function pickRandomCard(a) {
    a = cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1);
    return a;
}

function assignRandomCard(event) {
    randomCard1 = pickRandomCard();
    randomCard2 = pickRandomCard();
    randomCard3 = pickRandomCard();
    randomCard4 = pickRandomCard();
    randomCard5 = pickRandomCard();
    randomCard6 = pickRandomCard();
    randomCard7 = pickRandomCard();
    randomCard8 = pickRandomCard();
    randomCard9 = pickRandomCard();
    randomCard10 = pickRandomCard();
    return console.log(randomCard1),
        console.log(randomCard2),
        console.log(randomCard3),
        console.log(randomCard4),
        console.log(randomCard5),
        console.log(randomCard6),
        console.log(randomCard7),
        console.log(randomCard8),
        console.log(randomCard9),
        console.log(randomCard10),
        console.log(cardDeck);
}

function resetCardDeck() {
    cardDeck = ['sa', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
    randomCard1 = [];
    randomCard2 = [];
    randomCard3 = [];
    randomCard4 = [];
    randomCard5 = [];
    randomCard6 = [];
    randomCard7 = [];
    randomCard8 = [];
    randomCard9 = [];
    randomCard10 = [];
    return console.log(randomCard1),
        console.log(randomCard2),
        console.log(randomCard3),
        console.log(randomCard4),
        console.log(randomCard5),
        console.log(randomCard6),
        console.log(randomCard7),
        console.log(randomCard8),
        console.log(randomCard9),
        console.log(randomCard10),
        console.log(cardDeck);
}

console.log(cardDeck);
