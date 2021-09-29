const saveTheme = {


    loadThemeForStorage() {
        if(theme.storageTheme === null) {
            theme.currentTheme = "light";
        } else {
            theme.currentTheme = theme.storageTheme;
        }
        theme.loadInterface();
    }
}