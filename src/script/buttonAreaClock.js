// const { Notification } = require('electron');

const buttonAreaClock = {
    buttons: window.document.querySelectorAll("button.button-clock"),

    iconClockNotification: "./assets/icon-notification.png",

    timerOutButton: null,
    timerOutClock: null,

    loadButtonsClick() {

        this.buttons.forEach(item => {
            item.addEventListener('click', () => {
                item.style.bottom = "0px";

                clearTimeout(buttonAreaClock.timerOutButton);
                buttonAreaClock.timerOutButton = setTimeout(() => {
                    item.style.bottom = ""
                }, 100);
                
                switch(item.dataset.type) {
                    case "start":
                        clock.startClockPomo = true;
                        
                        clearInterval(buttonAreaClock.timerOutClock)
                        buttonAreaClock.timerOutClock = setInterval(() => {
                            clock.timer -= 1;
        
                            if(clock.timer === -1) {
                                clearInterval(buttonAreaClock.timerOutClock);
                                
                                clock.startClockPomo = false;
                                clock.audio.playAudio()

                                clock.cycleOfTimer += 1;
                                localStorage.setItem('cycle-timer', clock.cycleOfTimer);

                                buttonAreaClock.beepNotification({
                                    title: "Apitouuu!!!",
                                    body: "Terminou a sua contagem",
                                    icon: buttonAreaClock.iconClockNotification
                                });

                                theme.applyWebsiteStyle({
                                    themeString: theme.currentTheme,
                                    error: theme.error
                                });

                                clock.toggleTypeClock();
                            } else {
                                clock.loadClock();
                            }
                        }, 1000);

                        theme.applyWebsiteStyle({
                            themeString: theme.currentTheme,
                            error: theme.error
                        });

                        
                        break;
                    case "stop":
                        clock.startClockPomo = false;

                        clearInterval(buttonAreaClock.timerOutClock);
                        theme.applyWebsiteStyle({
                            themeString: theme.currentTheme,
                            error: theme.error
                        });
                        break;
                    case "reload":
                        clock.timer = 1500;

                        clock.loadClock();
                        break;
                    default:
                        return new Error("Invalidate button action")
                }
            })
        })
    },
    requestNotification() {
        Notification.requestPermission().then(result => console.log(result));
    },
    beepNotification({ title, body, icon }) {
        new Notification(title, { 
            body,
            icon,
        });
    }
}