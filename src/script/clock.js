const clock = {
    elementClock: window.document.querySelector("span#clock"),

    timer: 1500,
    startClockPomo: false,
    typeClock: "pomo",

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

    setTypeClock({ type }) {
        switch(type) {
            case "pomo":
                clock.typeClock = "pomo";
                clock.timer = 1500;
                clock.loadClock();
                break;
            case "rest":
                clock.typeClock = "rest";
                clock.timer = 300;
                clock.loadClock();
                break;
            default:
                return new Error("Invalid watch type");
        }
    },
    toggleTypeClock() {
        if(clock.typeClock === "pomo") {
            clock.setTypeClock({ 
                type: 'rest'
            })
        } else {
            clock.setTypeClock({ 
                type: 'pomo'
            })
        }
    }
}