const WIDTH_AND_HEIGHT_ICON = 20;

const theme = {
    button: window.document.querySelector("div#button-theme"),
    circle: window.document.querySelector("div#circle"),    

    icon: new Image(WIDTH_AND_HEIGHT_ICON, WIDTH_AND_HEIGHT_ICON),

    currentTheme: "light",
    error: false,

    configCircle(themeString) {
        function moveCircle(distance) {
            theme.circle.style.transform = `translate(${distance}%, -50%)`;
        }

        const RIGHT_SIDE_CIRCLE = 10;
        const LEFT_SIDE_CIRCLE = -110;

            this.applyActionSwitch(themeString, {
                light: () => {
                    moveCircle(LEFT_SIDE_CIRCLE);
                },
                dark: () => {
                    moveCircle(RIGHT_SIDE_CIRCLE);
            }
        })
    },

    toggleTheme() {
        this.applyActionSwitch(this.currentTheme, {
            light: () => {
                this.currentTheme = "dark";
                theme.setIconButton("dark");
                theme.configCircle("dark");
                theme.applyWebsiteStyle({
                    themeString: "dark",
                    error: theme.error
                });
            },
            dark: () => {
                this.currentTheme = "light";
                theme.setIconButton("light");
                theme.configCircle("light");
                theme.applyWebsiteStyle({
                    themeString: "light",
                    error: theme.error
                });
            }
        })
    },

    applyWebsiteStyle({ themeString, error }) {
        function applyBackgroundColor({element, color}) {
            element.style.backgroundColor = color;
        }

        const { header, main } = globalWebSite;

        this.applyActionSwitch(themeString, {
            light: () => {
                if(!error) {
                    if(clock.startClockPomo) {
                        applyBackgroundColor({
                            element: header,
                            color: "var(--sun-burst-yellow-black-light)"
                        });
                        applyBackgroundColor({
                            element: main,
                            color: "var(--sun-burst-yellow-light)"
                        });
                    } else {
                        applyBackgroundColor({
                            element: header,
                            color: "var(--parma-violet-light)"
                        });
                        applyBackgroundColor({
                            element: main,
                            color: "var(--greyed-lavender-light)"
                        });
                    }
                } else {
                    applyBackgroundColor({
                        element: header,
                        color: "var(--cinnabar-light)"
                    })
                    applyBackgroundColor({
                            element: main,
                        color: "var(--pastel-pink-light)"
                    })
                }
            },
            dark: () => {
                if(!error) {
                    if(clock.startClockPomo) {
                        applyBackgroundColor({
                            element: header,
                            color: "var(--sun-burst-yellow-black-dark)"
                        });
                        applyBackgroundColor({
                            element: main,
                            color: "var(--sun-burst-yellow-dark)"
                        });
                    } else {
                        applyBackgroundColor({
                            element: header,
                            color: "var(--parma-violet-dark)"
                        });
                        applyBackgroundColor({
                            element: main,
                            color: "var(--greyed-lavender-dark)"
                        });
                    }
                } else {
                    applyBackgroundColor({
                        element: header,
                        color: "var(--cinnabar-dark)"
                    })
                    applyBackgroundColor({
                            element: main,
                        color: "var(--pastel-pink-dark)"
                    })
                }
            },
            error: () => {
                
            }
        })
    },

    setIconButton(themeString) {
        this.applyActionSwitch(themeString, {
            light: () => {
                this.icon.src = "./assets/icon-moon.svg";
            },
            dark: () => {
                this.icon.src = "./assets/icon-sun.svg";
            }
        });
    },

    applyActionSwitch(themeString, action) {
        switch(themeString) {
            default:
            case "light":
                action.light();
                break;
            case "dark":
                action.dark();
                break;
            case "error":
                action.error();
                break;
        }
    },

    buttonEvent() {
        function onToggleTheme() {
            theme.toggleTheme();
        }

        theme.button.addEventListener('click', onToggleTheme, false)
    },

    loadInterface() {
        this.icon.setAttribute('id', 'icon-button');
        this.circle.appendChild(this.icon);
        this.setIconButton(this.currentTheme)
        this.configCircle(this.currentTheme);
        this.applyWebsiteStyle({
            themeString: theme.currentTheme,
            error: theme.error
        });
    }
}


