let data = {
    text: "Text hämtad från ett js-objekt"
}

function solutionOne() {
    console.log("solutionOne()")
    let newTextFromJavascript = document.getElementById("new-text-from-javascript-solution-one")
    let newTextToApplyToDom = data.text
    newTextFromJavascript.innerText = newTextToApplyToDom
}

function solutionTwo() {
    console.log("solutionTwo()")
    document.getElementById("new-text-from-javascript-solution-two").innerText = data.text
}

function getInfoFromJavaScript() {
    console.log("getInfoFromJavaScript()")
    solutionOne()
    solutionTwo()
}
