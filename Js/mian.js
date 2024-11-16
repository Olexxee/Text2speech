function textToAudio() {
  let msg = document.querySelector(".text").value;
  let speech = new SpeechSynthesisUtterance(msg);

  speech.lang = "en-US";
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}

// CHAT CHATGPT CODE BELOW

/*
function textToAudio() {
  // Ensure browser support
  if (!'speechSynthesis' in window) {
    alert("Your browser does not support text-to-speech.");
    return;
  }

  // Get the text
  let msg = document.querySelector(".text")?.value;
  
  if (!msg || !msg.trim()) {
    alert("Please enter some text!");
    return;
  }

  // Create the speech utterance
  let speech = new SpeechSynthesisUtterance(msg);

  // Set properties
  speech.lang = "en-US";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  // Speak the text
  speechSynthesis.speak(speech);
}
*/
