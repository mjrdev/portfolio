import setScroll from './scripts/scroll.js'
import Menu from './Menu.vue'

let link =  [
    {
        rel: "stylesheet",
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }
]

export default {
    components: { Menu },
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
                    content: 'projetos', action: 'projects' 
                },
                {
                    content: 'about', action: 'about' 
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