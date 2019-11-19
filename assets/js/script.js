var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var redCards = ['da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var blackCards = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];
var playedCards = [];

var yourChoice = 'black';
var correctAnswer;

var cardIdentifier;
var roundIdentifier;
var switchIdentifier;
var endLoopIdentifier;

var roundRule;
var rule1 = 'Take 1 zip';
var rule2 = 'Take 2 zips';
var rule3 = 'Take 3 zips';
var rule4 = 'Take 1 shot';

var playerName;

var attemptAmount = 0;
var succeedAmount = 0;

var randomCards = new Array();

var dealCards = new Audio("assets/sounds/deal_cards.wav");
var flipCard = new Audio("assets/sounds/flip_card.wav");

function changeColor() {
    if ($('#color_choice').is(':checked')) {
        yourChoice = `red`;
    } else {
        yourChoice = `black`;
    }
};

function startGame() {
    playerName = $('#player_name').val();
    rule1 = $('#round_one_rule').val();
    rule2 = $('#round_two_rule').val();
    rule3 = $('#round_three_rule').val();
    rule4 = $('#round_four_rule').val();
    
    $('.controls-background-settings').css('height','160px');
    $('#game_info').css('top','0');

    dealCards.play();
    $('#warning_textfield').empty();

    for (i = randomCards.length; i < 10; i++) {
        randomCards.push(cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
        console.log(randomCards.length);
    }

    for (i = 0; i < 10; i++) {
        if (i > 3) {
            $('#btn_card' + i).prop('disabled', true);
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
        } else if (i <= 3) {
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
            $('#btn_card' + i).prop('disabled', false);
        }
    }
    $('#warning_textfield').append(`<p>Good luck ${playerName}!</p>`);

    console.log(randomCards.toString());
    console.log(`-- Create random Cards --`);
}

$('#resetButton').click(function () {
    dealCards.play();
    $('#warning_textfield').empty();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    for (i = 0; i < 10; i++) {
        $('#card' + i).empty();
    }

    for (i = 0; i < 10; i++) {
        if (i > 3) {
            $('#btn_card' + i).prop('disabled', true);
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
        } else if (i <= 3) {
            $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
            $('#btn_card' + i).prop('disabled', false);
        }
    }
    console.log(randomCards.toString());
    console.log(`-- RESET CLICKED --`);
});

$('#btn_card0, #btn_card1, #btn_card2, #btn_card3, #btn_card4, #btn_card5, #btn_card6, #btn_card7, #btn_card8, #btn_card9').click(function () {
    flipCard.play();
    $('#warning_textfield').empty();

    console.log(randomCards.toString());
    console.log(randomCards.length);
    console.log(`First Check`);

    if (this.id == 'btn_card0') {
        cardIdentifier = 0;
        roundIdentifier = 0;
        switchIdentifier = 3;
        endLoopIdentifier = 7;
        roundRule = rule1;
    } else if (this.id == 'btn_card1') {
        cardIdentifier = 1;
        roundIdentifier = 0;
        switchIdentifier = 3;
        endLoopIdentifier = 7;
        roundRule = rule1;
    } else if (this.id == 'btn_card2') {
        cardIdentifier = 2;
        roundIdentifier = 0;
        switchIdentifier = 3;
        endLoopIdentifier = 7;
        roundRule = rule1;
    } else if (this.id == 'btn_card3') {
        cardIdentifier = 3;
        roundIdentifier = 0;
        switchIdentifier = 3;
        endLoopIdentifier = 7;
        roundRule = rule1;
    } else if (this.id == 'btn_card4') {
        cardIdentifier = 4;
        roundIdentifier = 4;
        switchIdentifier = 6;
        endLoopIdentifier = 9;
        roundRule = rule2;
        window.scrollTo({ top: 100, behavior: 'smooth' });
    } else if (this.id == 'btn_card5') {
        cardIdentifier = 5;
        roundIdentifier = 4;
        switchIdentifier = 6;
        endLoopIdentifier = 9;
        roundRule = rule2;
        window.scrollTo({ top: 100, behavior: 'smooth' });
    } else if (this.id == 'btn_card6') {
        cardIdentifier = 6;
        roundIdentifier = 4;
        switchIdentifier = 6;
        endLoopIdentifier = 9;
        roundRule = rule2;
        window.scrollTo({ top: 100, behavior: 'smooth' });
    } else if (this.id == 'btn_card7') {
        cardIdentifier = 7;
        roundIdentifier = 7;
        switchIdentifier = 8;
        endLoopIdentifier = 10;
        roundRule = rule3;
        window.scrollTo({ top: 380, behavior: 'smooth' });
    } else if (this.id == 'btn_card8') {
        cardIdentifier = 8;
        roundIdentifier = 7;
        switchIdentifier = 8;
        endLoopIdentifier = 10;
        roundRule = rule3;
        window.scrollTo({ top: 380, behavior: 'smooth' });
    } else if (this.id == 'btn_card9') {
        cardIdentifier = 9;
        roundIdentifier = 9;
        switchIdentifier = 9;
        endLoopIdentifier = 10;
        roundRule = rule4;
    }

    for (i = 0; i < 26; i++) {
        if (randomCards[cardIdentifier].indexOf(redCards[i]) > -1) {
            correctAnswer = `red`;
        } else if (randomCards[cardIdentifier].indexOf(blackCards[i]) > -1) {
            correctAnswer = `black`;
        }
    }

    if (yourChoice === correctAnswer) {
        for (i = roundIdentifier; i < endLoopIdentifier; i++) {
            $('#card' + i).empty();
            if (i > switchIdentifier) {
                $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card' + i).prop('disabled', false);
            } else if (i <= switchIdentifier) {
                $('#btn_card' + i).prop('disabled', true);
                if (i == cardIdentifier) {
                    $('#card' + i).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                } else {
                    $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
        if (cardIdentifier == 9) {
            succeedAmount = succeedAmount + 1;
            $('#warning_textfield').append('<p>Congratulations! You WON the game and may leave the buss!<br> Choose the next person to enter the buss.</p>');
        } else {
            $('#warning_textfield').append('<p>You were CORRECT! Choose your next card.</p>');
        }
    } else {
        for (i = roundIdentifier; i < 11; i++) {
            $('#card' + i).empty();
            if (i != cardIdentifier) {
                $('#card' + i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
            }
            $('#btn_card' + i).prop('disabled', true);
        }
        $('#card' + cardIdentifier).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
        attemptAmount = attemptAmount + 1;
        $('#warning_textfield').append(`<p>You were wrong! ${roundRule} and try again.</p>`);
    }

    $('#showStats').empty();
    $('#showStats').append(`<p>Attempts: ${attemptAmount}<br>Wins: ${succeedAmount}</p>`);
    console.log(randomCards.toString());
    console.log(randomCards.length);
    console.log(`Before New Card`);
    playedCards.push(randomCards[cardIdentifier]);
    randomCards.splice(cardIdentifier, 1);
    console.log(randomCards.toString());
    console.log(randomCards.length);
    console.log(`Take out Card`);
    if (cardDeck.length < 1) {
        for (i = 0; i < playedCards.length; i++) {
            cardDeck.push(playedCards[i]);
        }
        playedCards = [];
    }
    randomCards.splice(cardIdentifier, 0, cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
    console.log(randomCards.toString());
    console.log(randomCards.length);
    console.log(`Push in new card`);
    console.log(`-------------------------`);
});