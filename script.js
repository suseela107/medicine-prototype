function speakText(){

let text=document.getElementById("info").innerText;

let language=document.getElementById("language").value;

let speech=new SpeechSynthesisUtterance(text);

if(language=="te")
speech.lang="te-IN";

else if(language=="hi")
speech.lang="hi-IN";

else if(language=="ta")
speech.lang="ta-IN";

else
speech.lang="en-US";

window.speechSynthesis.speak(speech);

}