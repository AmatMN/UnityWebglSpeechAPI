mergeInto(LibraryManager.library, {

    Speech: function(str){
        var msg = new SpeechSynthesisUtterance(Pointer_stringify(str));
        msg.lang = "nl-NL";
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1; //0 to 2
            // stop any TTS that may still be active
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    }
})