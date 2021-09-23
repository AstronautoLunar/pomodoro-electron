const header = {
    listHeader: window.document.querySelector('ul#nav-bar-list'),

    itemsListHeader: [
        {
            id: 1,
            src: "./assets/icon-house.svg",
            alt: "icon house (link main)"
        },
        {
            id: 2,
            src: "./assets/icon-about.svg",
            alt: "icon about (link about)"
        }
    ],

    loadInterfaceNavBar() {
        for(let i in this.itemsListHeader) {
            this.listHeader.innerHTML += `
                <li class="nav-bar-item">
                    <img
                        class="icon"
                        data-id="${this.itemsListHeader[i].id}"
                        src="${this.itemsListHeader[i].src}"
                        alt="${this.itemsListHeader[i].alt}"
                    />
                </li>
            `
        }
    }
}