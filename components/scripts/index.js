import Header from "../abas/Header.vue";
import Home from "../abas/Home.vue";
import Skills from "../abas/Skills.vue";
import Projects from "../abas/Projects.vue";


export default {
    components: { Header, Home, Skills, Projects },
    data() {
        return {
            scrollY: 0,
            headerFloat: true,
            scrollUp: true,
            headerAbsolute: true,
            color: 'red',
            eventScroll: null
        }
    },
    transition: 'header',
    mounted() {

        let dataComponent = this
        this.eventScroll = document.addEventListener('scroll', function(pos) {

            dataComponent.scrollY = window.scrollY
        })
    },
    methods: {
        
    }
}