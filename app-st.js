var input = document.querySelector("#txtarea-input");
var btntranslate = document.querySelector("#button-translate");
var output = document.querySelector("#txtarea-output");


var serverurl = "https://api.funtranslations.com/translate/shakespeare.json";

function getGeneratedUrl() {
    var url = serverurl + "?text=" + input.value;
    return url;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("Something is wrong! \nPlease try again after a moment");
}

function clickHandler() {
    fetch(getGeneratedUrl())
        .then(response => response.json())
        .then(json => output.innerText=json.contents.translated)
    // output.innerText=json.contents.translated;
         .catch(errorHandler)
}



btntranslate.addEventListener("click",clickHandler);

