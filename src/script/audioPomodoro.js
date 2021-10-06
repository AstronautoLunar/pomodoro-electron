class AudioPomodoro {
    constructor({ src }) {
        this.src = src;

        const audioLoaded = new Audio();
        audioLoaded.src = src;
        this.audio = audioLoaded;
    }

    playAudio() {
        this.audio.play();
    }
}