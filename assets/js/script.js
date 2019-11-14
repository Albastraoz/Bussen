    var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
    var redCards = ['da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
    var blackCards = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck'];
    var yourChoice = '';
    var correctAnswer;

    var cardIdentifier;
    var loopIdentifier;

    var attemptAmount = 0;
    var succeedAmount = 0;

    var randomCards = new Array();
    
    function checkCardColor() {
        for (i = 0; i < 26; i++) {
            if (randomCards[cardIdentifier].indexOf(redCards[i]) > -1) {
                correctAnswer = `red`;
            } else if (randomCards[cardIdentifier].indexOf(blackCards[i]) > -1) {
                correctAnswer = `black`;
            }
        }
    }

    $('#dealButton').click(function() {
        
        for (i = randomCards.length; i < 10; i++) {
            randomCards.push(cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1));
            console.log(randomCards.length)
        }

        for (i = 1; i < 11; i++) {
            if (i > 4) {
                $('#btn_card'+i).prop('disabled', true);
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
            } else if (i < 5) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            }
        }
        
        $("#dealButton").removeClass('btn_visible');
		$("#resetButton").removeClass('btn_hidden');
		$("#resetButton").addClass('btn_visible');
		$("#dealButton").addClass('btn_hidden');
        
        console.log(cardDeck);
        console.log(randomCards.toString());
    });

    $('#choice_red').click(function() {
        yourChoice = `red`;
        console.log(`Your choice is now RED`);
    });
    $('#choice_black').click(function() {
        yourChoice = `black`;
        console.log(`Your choice is now BLACK`);
    });

    $('#btn_card1, #btn_card2, #btn_card3, #btn_card4').click(function() {    
        if (yourChoice === '') {
            console.log(`Please select a color first.`);
        } else {
            if (this.id == 'btn_card1') {
                cardIdentifier = 0;
                loopIdentifier = cardIdentifier + 1;
            } else if (this.id == 'btn_card2') {
                cardIdentifier = 1;
                loopIdentifier = cardIdentifier + 1;
            } else if (this.id == 'btn_card3') {
                cardIdentifier = 2;
                loopIdentifier = cardIdentifier + 1;
            } else if (this.id == 'btn_card4') {
                cardIdentifier = 3;
                loopIdentifier = cardIdentifier + 1;
            }
            
            checkCardColor();

            if (yourChoice === correctAnswer) {
                for (i = 1; i < 8; i++) {
                    $('#card'+i).empty();
                    if (i > 4) {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                        $('#btn_card'+i).prop('disabled', false);
                    } else if (i < 5) {
                        $('#btn_card'+i).prop('disabled', true);
                        if (i == loopIdentifier) {
                            $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                        } else {
                            $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                        }
                    }
                }
                console.log(`You WIN! Continue to the second round.`);
            } else {
                for (i = 1; i < 11; i++) {
                    $('#card'+i).empty();
                    if (i != loopIdentifier) {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                    }
                    $('#btn_card'+i).prop('disabled', true);
                }
                $('#card'+loopIdentifier).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                attemptAmount = attemptAmount + 1;
                console.log(`You were wrong! Try again.`);
            }
        
        randomCards.splice(cardIdentifier, 1);
        console.log(randomCards.length);
        }
    });
    
    $('#btn_card5, #btn_card6, #btn_card7').click(function() {
        if (this.id == 'btn_card5') {
            cardIdentifier = 3;
            loopIdentifier = cardIdentifier + 2;
        } else if (this.id == 'btn_card6') {
            cardIdentifier = 4;
            loopIdentifier = cardIdentifier + 2;
        } else if (this.id == 'btn_card7') {
            cardIdentifier = 5;
            loopIdentifier = cardIdentifier + 2;
        }

        checkCardColor();

        if (yourChoice === correctAnswer) {
            for (i = 5; i < 10; i++) {
                $('#card'+i).empty();
                if (i > 7) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                    $('#btn_card'+i).prop('disabled', false);
                } else if (i < 8) {
                    $('#btn_card'+i).prop('disabled', true);
                    if (i == loopIdentifier) {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                    } else {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                    }
                }
            }
            console.log(`You WIN! Continue to the third round.`);
        } else {
            for (i = 5; i < 11; i++) {
                $('#card'+i).empty();
                if (i != loopIdentifier) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
                $('#btn_card'+i).prop('disabled', true);
            }
            $('#card'+loopIdentifier).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
            attemptAmount = attemptAmount + 1;
            console.log(`You were wrong! Try again.`);
        }

        randomCards.splice(cardIdentifier, 1);
        console.log(randomCards.length);
    });
    
    $('#btn_card8, #btn_card9').click(function() {
        if (this.id == 'btn_card8') {
            cardIdentifier = 5;
            loopIdentifier = cardIdentifier + 3;
        } else if (this.id == 'btn_card9') {
            cardIdentifier = 6;
            loopIdentifier = cardIdentifier + 3;
        }
        
        checkCardColor();

        if (yourChoice === correctAnswer) {
            for (i = 8; i < 11; i++) {
                $('#card'+i).empty();
                if (i > 9) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                    $('#btn_card'+i).prop('disabled', false);
                } else if (i < 10) {
                    $('#btn_card'+i).prop('disabled', true);
                    if (i == loopIdentifier) {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
                    } else {
                        $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                    }
                }
            }
            console.log(`You WIN! Continue to the last round.`);
        } else {
            for (i = 8; i < 11; i++) {
                $('#card'+i).empty();
                if (i != loopIdentifier) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
                $('#btn_card'+i).prop('disabled', true);
            }
            $('#card'+loopIdentifier).append(`<img class="card_style" src="assets/images/cards/${randomCards[cardIdentifier]}.png"></img>`);
            attemptAmount = attemptAmount + 1;
            console.log(`You were wrong! Try again.`);
        }

        randomCards.splice(cardIdentifier, 1);
        console.log(randomCards.length);
    });
    
    $('#btn_card10').click(function() {
        checkCardColor();
        if (yourChoice === correctAnswer) {
            $('#card10').empty();
            $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCards[6]}.png"></img>`);
            succeedAmount = succeedAmount + 1;
            console.log(`Congratulations! You WON the game! Choose the next person to enter the buss.`);
        } else {
            $('#card10').empty();
            $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCards[6]}.png"></img>`);
            attemptAmount = attemptAmount + 1;
            console.log(`You were wrong! Try again.`);
        }
        
        randomCards.splice(6, 1);
        console.log(randomCards.toString());
    });

    $('#resetButton').click(function() {
        if (cardDeck.length < 5) {
            cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
            randomCards = [];
        }
        
        for (i = 1; i < 11; i++) {
            $('#card'+i).empty();
        }
        
        $("#dealButton").removeClass('btn_hidden');
		$("#resetButton").removeClass('btn_visible');
		$("#resetButton").addClass('btn_hidden');
        $("#dealButton").addClass('btn_visible');
        
        console.log(`You had ${attemptAmount} attempts and won ${succeedAmount} times.`);    
        console.log(cardDeck);
    });

    console.log(cardDeck);