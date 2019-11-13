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
        return $('#card1').append(randomCard1),
            $('#card2').append(randomCard2),
            $('#card3').append(randomCard3),
            $('#card4').append(randomCard4),
            $('#card5').append(randomCard5),
            $('#card6').append(randomCard6),
            $('#card7').append(randomCard7),
            $('#card8').append(randomCard8),
            $('#card9').append(randomCard9),
            $('#card10').append(randomCard10),
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

	$("#dealButton").on("click", function() {
		$("#dealButton").removeClass('btn_visible');
		$("#resetButton").removeClass('btn_hidden');
		$("#resetButton").addClass('btn_visible');
		$("#dealButton").addClass('btn_hidden');
	});
	
	$("#resetButton").on("click", function() {
		$("#dealButton").removeClass('btn_hidden');
		$("#resetButton").removeClass('btn_visible');
		$("#resetButton").addClass('btn_hidden');
		$("#dealButton").addClass('btn_visible');
	});

    console.log(cardDeck);
    