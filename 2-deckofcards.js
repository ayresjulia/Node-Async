let url = 'https://deckofcardsapi.com/api/deck';

// one card from a deck
axios
	.get(`${url}/new/shuffle/?deck_count=1`)
	.then(res => {
		let deck_id = res.data['deck_id'];
		return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
	})
	.then(res => {
		let card = res.data['cards'][0];
		console.log(`${card['value']} of ${card['suit']}`);
	})
	.catch(err => console.log('rejected!', err));

// two cards from the same deck
axios
	.get(`${url}/new/shuffle/?deck_count=1`)
	.then(res => {
		let deck_id = res.data['deck_id'];
		return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
	})
	.then(res => {
		let deck_id = res.data['deck_id'];
		let card = res.data['cards'][0];
		console.log(`${card['value']} of ${card['suit']}`);
		return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
	})
	.then(res => {
		let deck_id = res.data['deck_id'];
		let card = res.data['cards'][0];
		console.log(`${card['value']} of ${card['suit']}`);
		return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
	})
	.catch(err => console.log('rejected!', err));
