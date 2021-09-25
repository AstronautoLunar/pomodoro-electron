const clock = {
    elementClock: window.document.querySelector("span#clock"),

    timer: 5,
    startClockPomo: false,

    convertSecondsInTimeline({ totalSeconds, type }) {
        function increment0(seconds) {
            return seconds > 9 ? seconds : `0${seconds}`;
        }
        
        return new Promise(resolve => {
            try {
                const hour = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds - (hour * 3600)) / 60);
                const seconds = Math.floor(totalSeconds % 60);

                switch(type) {
                    case "full":
                        resolve(
                            `${increment0(hour)}:${increment0(minutes)}:${increment0(seconds)}`
                        );
                        break;
                    default:
                    case "pomodoro":
                        resolve(
                            `${increment0(minutes)}:${increment0(seconds)}`
                        );
                        break;
                }
            } catch (error) {
                theme.applyWebsiteStyle({
                    themeString: theme.currentTheme,
                    error: error ? true : false
                })
            }
        })
    },

    setClock({ timer, element }) {
        clock.convertSecondsInTimeline({
            totalSeconds: timer,
            type: "pomodoro"
        }).then(data => {
            element.innerText = data;
        });
    },

    loadClock() {
        this.setClock({
            timer: this.timer,
            element: this.elementClock
        });
    },
}