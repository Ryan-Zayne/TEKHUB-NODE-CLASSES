// callback
function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function performOperation(x, y, operationFunction) {
	return operationFunction(x, y);
}

const result = performOperation(20, 30, add);

// Promises

function getUser(id) {
	return new Promise((resolve, reject) => {
		$.getJSON({
			url: `https://api.github.com/users/${id}`,
			success: resolve,
			error: reject,
		});
	});
}

function getWeather(user) {
	return new Promise((resolve, reject) => {
		$.getJSON({
			url: getLocationURL(user.location.split(',')),
			success: resolve,
			error: reject,
		});
	});
}

$('#btn').on('click', () => {
	const userPromise = getUser('tylermcginnis');

	userPromise
		.then((user) => getWeather(user))
		.then((weather) => updateUI(weather))
		.then((info) => console.log('random'))
		.catch(showError);
});

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject();
	}, 5000);
});

promise.then(() => console.log('Success!'));

promise.catch(() => console.log('Error!'));
