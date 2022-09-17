function setScroll(win, element) {
    const el = win.document.querySelectorAll('[data-container-item]')
    el.forEach(container => {

        const NAVBAR_TOPSCROLL_HEIGHT = 95

        const containerName = container.dataset.containerItem
        const position = container.offsetTop

        if(containerName == element) {
            win.scroll({ top: element == 'main' || position - NAVBAR_TOPSCROLL_HEIGHT , behavior: 'smooth'})
        }
    });
}

let link =  [
    {
        rel: "stylesheet",
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }
]

export default {
    data() {
        return {
            aba: 0,
            contact: false,
            abas: [
                {
                    content: 'início', action: 'main'
                },
                {
                    content: 'habilidades', action: 'skill' 
                }, 
                {
                    content: 'projetos', action: 'project' 
                },
                {
                    content: 'mais', action: 'more' 
                }
            ]
        }
    },
    head() {
        return {
            link,
        }
    },
    methods: {
        clickSkill(element) {
            setScroll(window, element)
        }
    }
}