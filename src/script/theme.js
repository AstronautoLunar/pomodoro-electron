const theme = {
    button: window.document.querySelector("div#button-theme"),
    circle: window.document.querySelector("div#circle"),

    currentTheme: "light",

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
                theme.configCircle("dark");
                theme.applyWebsiteStyle("dark");
            },
            dark: () => {
                this.currentTheme = "light";
                theme.configCircle("light");
                theme.applyWebsiteStyle("light");
            }
        })
    },

    applyWebsiteStyle(themeString) {
        function applyBackgroundColor({element, color}) {
            element.style.backgroundColor = color;
        }

        const { header, main } = globalWebSite;

        this.applyActionSwitch(themeString, {
            light: () => {
                applyBackgroundColor({
                    element: header,
                    color: "var(--parma-violet-light)"
                })
                applyBackgroundColor({
                    element: main,
                    color: "var(--greyed-lavender-light)"
                })
            },
            dark: () => {
                applyBackgroundColor({
                    element: header,
                    color: "var(--parma-violet-dark)"
                })
                applyBackgroundColor({
                        element: main,
                    color: "var(--greyed-lavender-dark)"
                })
            }
        })
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
        }
    },

    buttonEvent() {
        function onToggleTheme() {
            theme.toggleTheme();
        }

        theme.button.addEventListener('click', onToggleTheme, false)
    },

    loadInterface() {
        this.configCircle(this.currentTheme);
        this.applyWebsiteStyle(this.currentTheme);
    }
}