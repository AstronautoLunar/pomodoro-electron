const buttonAreaClock = {
    buttons: window.document.querySelectorAll("button.button-clock"),

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

                                theme.applyWebsiteStyle({
                                    themeString: theme.currentTheme,
                                    error: theme.error
                                });
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
    }
}