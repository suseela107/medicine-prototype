function speakText() {

    // Stop any speech that is already playing
    window.speechSynthesis.cancel();

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

    window.speechSynthesis.speak(speech);
}
