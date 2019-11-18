var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var redCards = ['da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var blackCards = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];
var playedCards = [];

var yourChoice = 'black';
var correctAnswer;

var cardIdentifier;
var loopIdentifier;
var roundIdentifier;
var switchIdentifier;
var endLoopIdentifier;

var attemptAmount = 0;
var succeedAmount = 0;

var randomCards = new Array();

var dealCards = new Audio("assets/sounds/deal_cards.wav");
var flipCard = new Audio("assets/sounds/flip_card.wav");

function checkCardColor() {
    for (i = 0; i < 26; i++) {
        if (randomCards[cardIdentifier].indexOf(redCards[i]) > -1) {
            correctAnswer = `red`;
        } else if (randomCards[cardIdentifier].indexOf(blackCards[i]) > -1) {
            correctAnswer = `black`;
        }
    }
}

$('#dealButton').click(function () {
    dealCards.play();
    $('#warning_textfield').empty();

    if (cardDeck.length < 5) {
        for (i = 0; i < playedCards.length; i++) {
            cardDeck.push(playedCards[i]);
        }
        playedCards = [];
    }

    for (i = randomCards.length; i < 10; i++) {
        randomCards.push(cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
        console.log(randomCards.length);
    }

    for (i = 1; i < 11; i++) {
        if (i > 4) {
            $('#btn_card' + i).prop('disabled', true);
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
        } else if (i <= 4) {
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
            $('#btn_card' + i).prop('disabled', false);
        }
    }

    $("#dealButton").removeClass('btn_visible');
    $("#resetButton").removeClass('btn_hidden');
    $("#resetButton").addClass('btn_visible');
    $("#dealButton").addClass('btn_hidden');

    console.log(`Card deck contains: ${cardDeck.toString()}`);
    console.log(`Card deck length: ${cardDeck.length}`);
    console.log(`Playedcards contains: ${playedCards.toString()}`);
    console.log(`Playedcards length: ${playedCards.length}`);
    console.log(`Randomcards contains: ${randomCards.toString()}`);
    console.log(`Randomcards length: ${randomCards.length}`);
});

$('#resetButton').click(function () {
    $('#warning_textfield').empty();
    window.scrollTo(0, 0);

    for (i = 1; i < 11; i++) {
        $('#card' + i).empty();
    }

    $("#dealButton").removeClass('btn_hidden').addClass('btn_visible');
    $("#resetButton").removeClass('btn_visible').addClass('btn_hidden');

    $('#showStats').empty();
    $('#showStats').append(`<p>Attempts: ${attemptAmount}<br>Wins: ${succeedAmount}</p>`);
    console.log(`You had ${attemptAmount} attempts and won ${succeedAmount} times.`);
    console.log(`------------------------------------------------------------`);
});

function changeColor() {
    if ($('#color_choice').is(':checked')) {
        yourChoice = `red`;
        console.log(`Your choice is now RED`);
    } else {
        yourChoice = `black`;
        console.log(`Your choice is now BLACK`);
    }
};

$('#btn_card1, #btn_card2, #btn_card3, #btn_card4, #btn_card5, #btn_card6, #btn_card7, #btn_card8, #btn_card9').click(function () {
    flipCard.play();
    $('#warning_textfield').empty();

    if (this.id == 'btn_card1') {
        cardIdentifier = 0;
        loopIdentifier = cardIdentifier + 1;
        roundIdentifier = 1;
        switchIdentifier = 4;
        endLoopIdentifier = 8;
    } else if (this.id == 'btn_card2') {
        cardIdentifier = 1;
        loopIdentifier = cardIdentifier + 1;
        roundIdentifier = 1;
        switchIdentifier = 4;
        endLoopIdentifier = 8;
    } else if (this.id == 'btn_card3') {
        cardIdentifier = 2;
        loopIdentifier = cardIdentifier + 1;
        roundIdentifier = 1;
        switchIdentifier = 4;
        endLoopIdentifier = 8;
    } else if (this.id == 'btn_card4') {
        cardIdentifier = 3;
        loopIdentifier = cardIdentifier + 1;
        roundIdentifier = 1;
        switchIdentifier = 4;
        endLoopIdentifier = 8;
    } else if (this.id == 'btn_card5') {
        cardIdentifier = 3;
        loopIdentifier = cardIdentifier + 2;
        roundIdentifier = 5;
        switchIdentifier = 7;
        endLoopIdentifier = 10;
        window.scrollTo(0, 100);
    } else if (this.id == 'btn_card6') {
        cardIdentifier = 4;
        loopIdentifier = cardIdentifier + 2;
        roundIdentifier = 5;
        switchIdentifier = 7;
        endLoopIdentifier = 10;
        window.scrollTo(0, 100);
    } else if (this.id == 'btn_card7') {
        cardIdentifier = 5;
        loopIdentifier = cardIdentifier + 2;
        roundIdentifier = 5;
        switchIdentifier = 7;
        endLoopIdentifier = 10;
        window.scrollTo(0, 100);
    } else if (this.id == 'btn_card8') {
        cardIdentifier = 5;
        loopIdentifier = cardIdentifier + 3;
        roundIdentifier = 8;
        switchIdentifier = 9;
        endLoopIdentifier = 11;
        window.scrollTo(0, 370);
    } else if (this.id == 'btn_card9') {
        cardIdentifier = 6;
        loopIdentifier = cardIdentifier + 3;
        roundIdentifier = 8;
        switchIdentifier = 9;
        endLoopIdentifier = 11;
        window.scrollTo(0, 370);
    }

    checkCardColor();

    if (yourChoice === correctAnswer) {
        for (i = roundIdentifier; i < endLoopIdentifier; i++) {
            $('#card' + i).empty();
            if (i > switchIdentifier) {
                $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card' + i).prop('disabled', false);
            } else if (i <= switchIdentifier) {
                $('#btn_card' + i).prop('disabled', true);
                if (i == loopIdentifier) {
                    $('#card' + i).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                } else {
                    $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
        $('#warning_textfield').append('<p>You WIN! Continue to the next round.</p>');
        console.log(`You WIN! Continue to the next round.`);
    } else {
        for (i = roundIdentifier; i < 11; i++) {
            $('#card' + i).empty();
            if (i != loopIdentifier) {
                $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
            }
            $('#btn_card' + i).prop('disabled', true);
        }
        $('#card' + loopIdentifier).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
        attemptAmount = attemptAmount + 1;
        $('#warning_textfield').append('<p>You were wrong! Try again.</p>');
        console.log(`You were wrong! Try again.`);
    }

    playedCards.push(randomCards[cardIdentifier]);
    randomCards.splice(cardIdentifier, 1);
    console.log(`Playedcards contains: ${playedCards.toString()}`);
    console.log(`Playedcards length: ${playedCards.length}`);
    console.log(`Randomcards contains: ${randomCards.toString()}`);
    console.log(`Randomcards length: ${randomCards.length}`);
});

$('#btn_card10').click(function () {
    flipCard.play();
    $('#warning_textfield').empty();

    cardIdentifier = 6;

    checkCardColor();

    console.log(yourChoice);
    console.log(correctAnswer);

    if (yourChoice === correctAnswer) {
        $('#card10').empty();
        $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
        succeedAmount = succeedAmount + 1;
        $('#warning_textfield').append('<p>Congratulations! You WON the game! Choose the next person to enter the buss.</p>');
        console.log(`Congratulations! You WON the game! Choose the next person to enter the buss.`);
    } else {
        $('#card10').empty();
        $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
        attemptAmount = attemptAmount + 1;
        $('#warning_textfield').append('<p>You were wrong! Try again.</p>');
        console.log(`You were wrong! Try again.`);
    }

    playedCards.push(randomCards[cardIdentifier]);
    randomCards.splice(6, 1);
    console.log(randomCards.toString());
});

console.log(cardDeck);