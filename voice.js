function speak(text) {
    if ("speechSynthesis" in window) {
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    }
}
