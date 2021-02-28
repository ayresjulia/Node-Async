let url = 'http://numbersapi.com';

// get fact about my fav number
axios
	.get(`${url}/3?json`)
	.then(res => {
		console.log(res.data['text']);
	})
	.catch(err => console.log('rejected!', err));

// get facts about multile numbers and display on the page
axios
	.get(`${url}/5..7?json`)
	.then(res => {
		for (let [num, fact] of Object.entries(res.data)) {
			console.log(`${fact}`);
		}
	})
	.catch(err => console.log('rejected!', err));

// get 4 facts on my fav number
axios
	.get(`${url}/3?json`)
	.then(res => {
		console.log(res.data['text']);
		return axios.get(`${url}/3?json`);
	})
	.then(res => {
		console.log(res.data['text']);
		return axios.get(`${url}/3?json`);
	})
	.then(res => {
		console.log(res.data['text']);
		return axios.get(`${url}/3?json`);
	})
	.then(res => {
		console.log(res.data['text']);
		return axios.get(`${url}/3?json`);
	})
	.catch(err => console.log('rejected!', err));
