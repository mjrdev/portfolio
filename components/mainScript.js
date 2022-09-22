import Header from "./abas/header/Header.vue";
import Home from "./abas/home/Home.vue";
import Skills from "./abas/skills/Skills.vue";
import Projects from "./abas/projects/Projects.vue";
import aos from '~/mixins/aos.js';

export default {
    mixins: [aos],
    name: 'Main',
    components: { Header, Home, Skills, Projects },
    data() {
        return {
            scrollY: 0,
            headerFloat: true,
            scrollUp: true,
            headerAbsolute: true,
            color: 'red',
            eventScroll: null,
            time: null
        }
    },
    transition: 'header',
    mounted() {

        let dataComponent = this;

        function handleScroll() {
            
            clearInterval(dataComponent.time);

            dataComponent.time = setTimeout(() => {
                dataComponent.scrollY = window.scrollY
                console.log(window.scrollY)
            }, 20)
        }

        this.eventScroll = document.addEventListener('scroll', handleScroll)
    },
    methods: {
        
    }
}