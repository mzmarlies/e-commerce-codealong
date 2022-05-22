const promptApp = {}

promptApp.apiKey = configObject.myKey;
console.log(configObject.myKey)

// api url:
promptApp.apiUrl = "https://api.openai.com/v1/engines/text-curie-001/completions"

// api key access:

promptApp.userAnswer = [];

promptApp.getApiResponse = () => {
    const url = new URL(promptApp.apiUrl);
    url.search = new URLSearchParams({
    "Authorization": promptApp.apiKey
    })
    fetch(url).then((response) => {
        return response.json();
    })
}

promptApp.userAnswer = () => {
    document.querySelector('.userInput').textContent = "";
}

// promptApp.getUserAnswer = function() {
//     document.querySelector('.userInput').addEventListener('submit', function() {

//     })
// }

// promptApp.init = () => {
//     promptApp.getUserAnswer();
// }

promptApp.init();


