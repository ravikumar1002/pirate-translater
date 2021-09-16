var inputText = document.querySelector("#input-text")
var translateBtn = document.querySelector("#translate-btn")
var outputText = document.querySelector("#output-text")
var errorMsg = document.querySelector(".error-msg")

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverurl ="https://api.funtranslations.com/translate/pirate.json"

function  urlAdd(inputurl){
    return serverurl +"?"+"text="+ inputurl
}

function textdisplaying(){
    var displayingMsg = inputText.value;
    fetch(urlAdd(displayingMsg))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;
        outputText.innerText = translateText;
        console.log(translateText)
        outputText.scrollIntoView()
    }
        )

}

translateBtn.addEventListener("click",function(){
    if( inputText.value === "" ){
        outputText.innerText = ""
        errorMsg.style.display = "block"
      errorMsg.innerText ="please type text what you want to translate"     
    }else{
        errorMsg.style.display = "none"
        inputText.style.color  = "rgb(100, 100, 100)"
        outputText.style.border = "2px solid rgba(34, 34, 194, 0.815)"
        textdisplaying()
    }
})
