    var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
    var randomCards = new Array();
    
    $('#dealButton').click(function() {
        
        for (i = 1; i < 11; i++) {
            var chosenCard = cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1);
            randomCards.push(chosenCard);
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
    });

    $('#btn_card1').click(function() {
        for (i = 1; i < 8; i++) {
            $('#card'+i).empty();
            if (i > 4) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 5) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 1) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[0]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card2').click(function() {
        for (i = 1; i < 8; i++) {
            $('#card'+i).empty();
            if (i > 4) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 5) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 2) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[1]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card3').click(function() {
        for (i = 1; i < 8; i++) {
            $('#card'+i).empty();
            if (i > 4) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 5) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 3) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[2]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card4').click(function() {
        for (i = 1; i < 8; i++) {
            $('#card'+i).empty();
            if (i > 4) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 5) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 4) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[3]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card5').click(function() {
        for (i = 5; i < 10; i++) {
            $('#card'+i).empty();
            if (i > 7) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 8) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 5) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[4]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card6').click(function() {
        for (i = 5; i < 10; i++) {
            $('#card'+i).empty();
            if (i > 7) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 8) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 6) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[5]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card7').click(function() {
        for (i = 5; i < 10; i++) {
            $('#card'+i).empty();
            if (i > 7) {
                $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card'+i).prop('disabled', false);
            } else if (i < 8) {
                $('#btn_card'+i).prop('disabled', true);
                if (i == 7) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[6]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                }
            }
        }
    });
    
    $('#btn_card8').click(function() {
        for (i = 8; i < 11; i++) {
            $('#card'+i).empty();
            if (i > 9) {
                $('#card10').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card10').prop('disabled', false);
            } else if (i < 10){
                if (i == 8) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[7]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                    $('#btn_card'+i).prop('disabled', true);
                }
            }
        }
    });
    
    $('#btn_card9').click(function() {
        for (i = 8; i < 11; i++) {
            $('#card'+i).empty();
            if (i > 9) {
                $('#card10').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
                $('#btn_card10').prop('disabled', false);
            } else if (i < 10){
                if (i == 9) {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/cards/${randomCards[8]}.png"></img>`);
                } else {
                    $('#card'+i).append(`<img class="card_style" src="assets/images/card_covers/card_cover_default_disabled.png"></img>`);
                    $('#btn_card'+i).prop('disabled', true);
                }
            }
        }
    });
    
    $('#btn_card10').click(function() {
        $('#card10').empty();
        $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCards[9]}.png"></img>`);
    });

    $('#resetButton').click(function() {
        cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
        
        randomCards = [];
        
        for (i = 1; i < 11; i++) {
            $('#card'+i).empty();
        }
        
        $("#dealButton").removeClass('btn_hidden');
		$("#resetButton").removeClass('btn_visible');
		$("#resetButton").addClass('btn_hidden');
		$("#dealButton").addClass('btn_visible');
        
        return console.log(cardDeck);
    });

    console.log(cardDeck);