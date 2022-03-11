export function api(url, successCallback) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			successCallback(data);
		})
		.catch((error) => {
			console.log(error);
		});
}
