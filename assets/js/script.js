var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var redCards = ['da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
var blackCards = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];
var playedCards = [];

var yourChoice = 'BLACK';
var correctAnswer;

var cardIdentifier;
var roundIdentifier;
var switchIdentifier;
var endLoopIdentifier;

var roundRule;
var rule1;
var rule2;
var rule3;
var rule4;

var playerName;

var attemptAmount = 0;
var succeedAmount = 0;

var randomCards = new Array();
var scrollSize;

var dealCards = new Audio("assets/sounds/deal_cards.wav");
var flipCard = new Audio("assets/sounds/flip_card.wav");

if (window.matchMedia('(min-width: 768px)').matches) {
    scrollSize = 100;
} else {
    scrollSize = 0;
}

function changeColor() {
    if ($('#color_choice').is(':checked')) {
        yourChoice = `RED`;
    } else {
        yourChoice = `BLACK`;
    }
};

function startGame() {
    $('.intro-settings').css('overflow','hidden');
    $('.intro-settings').css('height','0px');
    $('#game_info').css('top','0');
    $('body').css('overflow','auto');

    playerName = $('#player_name').val();
    if ($('#round_one_rule').val() == '') {
        rule1 = 'Take one zip';
    } else {
        rule1 = $('#round_one_rule').val();
    }
    if ($('#round_two_rule').val() == '') {
        rule2 = 'Take two zips';
    } else {
        rule2 = $('#round_two_rule').val();
    }
    if ($('#round_three_rule').val() == '') {
        rule3 = 'Take three zips';
    } else {
        rule3 = $('#round_three_rule').val();
    }
    if ($('#round_four_rule').val() == '') {
        rule4 = 'Take one shot';
    } else {
        rule4 = $('#round_four_rule').val();
    }

    dealCards.play();
    $('#warning_textfield').empty();

    for (i = randomCards.length; i < 10; i++) {
        randomCards.push(cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
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

$('#modal_message').on('hidden.bs.modal', function (e) {
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
});

$('#reset_button').click(function () {
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
});

$('#btn_card0, #btn_card1, #btn_card2, #btn_card3, #btn_card4, #btn_card5, #btn_card6, #btn_card7, #btn_card8, #btn_card9').click(function () {
    flipCard.play();
    $('#warning_textfield').empty();

    for (i = 0; i < 10; i++) {
        if (i == this.id.substr(this.id.length - 1)) {
            cardIdentifier = i;
        }
    }
    
    for (i = 0; i < 10; i++) {
        if (cardIdentifier <= 3) {
            roundIdentifier = 0;
            switchIdentifier = 3;
            endLoopIdentifier = 7;
            roundRule = rule1;
        } else if (cardIdentifier <= 6) {
            roundIdentifier = 4;
            switchIdentifier = 6;
            endLoopIdentifier = 9;
            roundRule = rule2;
            window.scrollTo({ top: scrollSize, behavior: 'smooth' });
        } else if (cardIdentifier <= 8) {
            roundIdentifier = 7;
            switchIdentifier = 8;
            endLoopIdentifier = 10;
            roundRule = rule3;
            window.scrollTo({ top: scrollSize * 4, behavior: 'smooth' });
        } else if (cardIdentifier == 9) {
            roundIdentifier = 9;
            switchIdentifier = 9;
            endLoopIdentifier = 10;
            roundRule = rule4;
        }
    }

    for (i = 0; i < 26; i++) {
        if (randomCards[cardIdentifier].indexOf(redCards[i]) > -1) {
            correctAnswer = `RED`;
        } else if (randomCards[cardIdentifier].indexOf(blackCards[i]) > -1) {
            correctAnswer = `BLACK`;
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
            $('#message_header').empty();
            $('#message_body').empty();
            $('#message_header').append(`<h5>Congratulations! You WON and may leave the buss!</h5>`);
            $('#message_body').append(`<p>You choose <b>${yourChoice}</b></p><img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
            $('#modal_message').modal('show');
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
        $('#message_header').empty();
        $('#message_body').empty();
        $('#message_header').append(`<h5>You lost...</h5>`);
        $('#message_body').append(`<p>You choose <b>${yourChoice}</b>.<br>${roundRule} and try again.</p><img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
        $('#modal_message').modal('show');
    }

    $('#showStats').empty();
    $('#showStats').append(`<p>Attempts: ${attemptAmount}<br>Wins: ${succeedAmount}</p>`);

    playedCards.push(randomCards[cardIdentifier]);
    randomCards.splice(cardIdentifier, 1);
    if (cardDeck.length < 1) {
        for (i = 0; i < playedCards.length; i++) {
            cardDeck.push(playedCards[i]);
        }
        playedCards = [];
    }
    randomCards.splice(cardIdentifier, 0, cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
    console.log(randomCards.toString());
    console.log(`Push in new card`);
    console.log(`-------------------------`);
});