// API Call
//function is a parameter
document.getElementById("search-button").addEventListener("click", function(event) {
	// Prevent Default Click
	event.preventDefault();

	//Url is the URI that the API requires
	const url = "https://geek-jokes.sameerkumar.website/api";

	//Get the response from the url
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {

			//Get results
			let results = "";
			results += "<p>";
			results += json;
			results += "</p>";
			document.getElementById("jokeResults").innerHTML = results;
		});
});