let speaking = false;

function speakText() {

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        speaking = false;
        return;
    }

    const text = document.getElementById("info").innerText;
    const language = document.getElementById("language").value;

    const speech = new SpeechSynthesisUtterance(text);

    switch (language) {
        case "te":
            speech.lang = "te-IN";
            break;
        case "hi":
            speech.lang = "hi-IN";
            break;
        case "ta":
            speech.lang = "ta-IN";
            break;
        default:
            speech.lang = "en-US";
    }

    speech.onend = function () {
        speaking = false;
    };

    speaking = true;
    window.speechSynthesis.speak(speech);
}
