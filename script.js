const question = document.getElementById("question");
const submitBtn = document.getElementById("submit-btn");
const overlookDisplay = document.getElementById("overlook");

let result;

submitBtn.addEventListener("click", () => {
    getAnswer();
})


async function getAnswer(){
    const respond = await fetch('./data.json');
    console.log(response);
    const result = await response.json();
    console.log(results);

    const resultArr = results.answer;

    const randomResuts = getRandomResults(resultsArr);

    setOverlook(randomResuts);
}

function getRandomResults(results){
    return results [Math.floor(Math.random() * results.length)];
}

function setOverlook(overlook){
    overlookDisplay.innerHTML = "<p class='fw-bold'>Overlook: <span class = 'fw-medium'>" + overlook + "</span> </p>";
}