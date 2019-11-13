    var cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
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

    $('#dealButton').click(function() {
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
        $('#card1').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
        $('#card2').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
        $('#card3').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
        $('#card4').append(`<img class="card_style" src="assets/images/card_covers/card_cover_default.png"></img>`);
        $('#card5').append(`<img class="card_style" src="assets/images/cards/${randomCard5}.png"></img>`);
        $('#card6').append(`<img class="card_style" src="assets/images/cards/${randomCard6}.png"></img>`);
        $('#card7').append(`<img class="card_style" src="assets/images/cards/${randomCard7}.png"></img>`);
        $('#card8').append(`<img class="card_style" src="assets/images/cards/${randomCard8}.png"></img>`);
        $('#card9').append(`<img class="card_style" src="assets/images/cards/${randomCard9}.png"></img>`);
        $('#card10').append(`<img class="card_style" src="assets/images/cards/${randomCard10}.png"></img>`);
        
        $("#dealButton").removeClass('btn_visible');
		$("#resetButton").removeClass('btn_hidden');
		$("#resetButton").addClass('btn_visible');
		$("#dealButton").addClass('btn_hidden');
        
        console.log(cardDeck);
    });

    $('#btn_card1').click(function() {
        $('#card1').empty();
        $('#card1').append(`<img class="card_style" src="assets/images/cards/${randomCard1}.png"></img>`);
        $('#btn_card2').prop('disabled', true);
        $('#btn_card3').prop('disabled', true);
        $('#btn_card4').prop('disabled', true);
    });
    $('#btn_card2').click(function() {
        $('#card2').empty();
        $('#card2').append(`<img class="card_style" src="assets/images/cards/${randomCard2}.png"></img>`);
        $('#btn_card1').prop('disabled', true);
        $('#btn_card3').prop('disabled', true);
        $('#btn_card4').prop('disabled', true);
    });
    $('#btn_card3').click(function() {
        $('#card3').empty();
        $('#card3').append(`<img class="card_style" src="assets/images/cards/${randomCard3}.png"></img>`);
        $('#btn_card2').prop('disabled', true);
        $('#btn_card1').prop('disabled', true);
        $('#btn_card4').prop('disabled', true);
    });
    $('#btn_card4').click(function() {
        $('#card4').empty();
        $('#card4').append(`<img class="card_style" src="assets/images/cards/${randomCard4}.png"></img>`);
        $('#btn_card2').prop('disabled', true);
        $('#btn_card3').prop('disabled', true);
        $('#btn_card1').prop('disabled', true);
    });

    $('#resetButton').click(function() {
        cardDeck = ['sa', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'da', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 'ca', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'ha', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', ];
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
        $('#card1').empty();
        $('#card2').empty();
        $('#card3').empty();
        $('#card4').empty();
        $('#card5').empty();
        $('#card6').empty();
        $('#card7').empty();
        $('#card8').empty();
        $('#card9').empty();
        $('#card10').empty();
        
        $("#dealButton").removeClass('btn_hidden');
		$("#resetButton").removeClass('btn_visible');
		$("#resetButton").addClass('btn_hidden');
		$("#dealButton").addClass('btn_visible');
		
		$('#btn_card1').prop('disabled', false);
		$('#btn_card2').prop('disabled', false);
		$('#btn_card3').prop('disabled', false);
		$('#btn_card4').prop('disabled', false);
        
        return console.log(cardDeck);
    });

    console.log(cardDeck);