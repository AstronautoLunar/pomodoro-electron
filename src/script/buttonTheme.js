const buttonTheme = {
    buttonTheme: window.document.querySelector("div#button-theme"),
    circle: window.document.querySelector("div#circle"),

    currentTheme: "light",

    configCircle(theme) {
        function moveCircle(distance) {
            buttonTheme.circle.style.transform = `translate(${distance}%, -50%)`;
        }

        const RIGHT_SIDE_CIRCLE = 10;
        const LEFT_SIDE_CIRCLE = -110;

        switch(theme) {
            default:
            case "light":
                moveCircle(LEFT_SIDE_CIRCLE);
                break;
            case "dark":
                moveCircle(RIGHT_SIDE_CIRCLE);
                break;
        }
    },

    toggleTheme() {
        switch(this.currentTheme) {
            default:
            case "light":
                this.currentTheme = "dark";
                
                buttonTheme.configCircle("dark");
                
                buttonTheme.applyWebsiteStyle("dark");
                break;
            case "dark":
                this.currentTheme = "light";
                    
                buttonTheme.configCircle("light");
                
                buttonTheme.applyWebsiteStyle("light");
                break;
        }
    },

    applyWebsiteStyle(theme) {
        function applyBackgroundColor({element, color}) {
            element.style.backgroundColor = color;
        }

        const { header, main } = globalWebSite;

        switch(theme) {
            default:
            case "light":
                
                applyBackgroundColor({
                    element: header,
                    color: "var(--parma-violet-light)"
                })
                applyBackgroundColor({
                    element: main,
                    color: "var(--greyed-lavender-light)"
                })
                break;
            case "dark":
                
                applyBackgroundColor({
                    element: header,
                    color: "var(--parma-violet-dark)"
                })
                applyBackgroundColor({
                    element: main,
                    color: "var(--greyed-lavender-dark)"
                })
                break;
        }
    },

    buttonEvent() {
        function onToggleTheme() {
            buttonTheme.toggleTheme();
        }

        buttonTheme.buttonTheme.addEventListener('click', onToggleTheme, false)
    },

    loadInterface() {
        this.configCircle(this.currentTheme);
        this.applyWebsiteStyle(this.currentTheme);
    }
}