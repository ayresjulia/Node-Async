let url = 'https://pokeapi.co/api/v2/pokemon';

// get names and urls for every pokemon in db
axios
	.get(`${url}`)
	.then(res => {
		console.log(res.data.results);
	})
	.catch(err => {
		console.log(err);
	});

//pick random three pokemons, and get data for them
axios.get(`${url}`).then(res => {
	let first = res.data.results[Math.floor(Math.random() * 21)];
	let second = res.data.results[Math.floor(Math.random() * 21)];
	let third = res.data.results[Math.floor(Math.random() * 21)];
	let url1 = first['url'];
	let url2 = second['url'];
	let url3 = third['url'];
	let list = [];
	list.push(url1, url2, url3);
	list.forEach(url => {
		axios
			.get(url)
			.then(data => console.log(data))
			.catch(err => {
				console.log(err);
			});
	});
});

// filter en language and get description
axios.get(`${url}`).then(res => {
	let first = res.data.results[Math.floor(Math.random() * 21)];
	let second = res.data.results[Math.floor(Math.random() * 21)];
	let third = res.data.results[Math.floor(Math.random() * 21)];
	let url1 = first['url'];
	let url2 = second['url'];
	let url3 = third['url'];
	let list = [];
	list.push(url1, url2, url3);
	list.forEach(url => {
		axios.get(url).then(res => {
			let randomSpecieUrl = res.data.species['url'];
			axios.get(randomSpecieUrl).then(res => {
				let name = res.data.name;
				let flavor_text_entries = res.data['flavor_text_entries'];
				flavor_text_entries.find(text => {
					if (text.language.name === 'en') {
						let result = `${name}: ${text['flavor_text']}`;
						console.log(result);
					}
				});
			});
		});
	});
});
