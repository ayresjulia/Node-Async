let url = 'https://deckofcardsapi.com/api/deck';
let deckId = null;
let btn = $('button');
let cardSpot = $('.card');

$.getJSON(`${url}/new/shuffle`, function (res) {
	deckId = res.deck_id;
});

btn.on('click', function () {
	$.getJSON(`${url}/${deckId}/draw`, function (res) {
		let img = res.cards[0].image;
		let angle = Math.random() * 90 - 45;
		let randomX = Math.random() * 40 - 20;
		let randomY = Math.random() * 40 - 20;
		cardSpot.append(
			$('<img>', {
				src: img,
				class: 'img-fluid',
				css: {
					transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
				}
			})
		);
		if (res.remaining === 0) {
			btn.remove();
			alert('The Deck is Empty!');
		}
	});
});
