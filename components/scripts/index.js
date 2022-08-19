import Header from "../abas/Header.vue";
import Home from "../abas/Home.vue";
import Skills from "../abas/Skills.vue";


export default {
    components: { Header, Home, Skills },
    data() {
        return {
            scrollY: 0,
            headerFloat: true,
            scrollUp: true,
            headerAbsolute: true,
            color: 'red'

        }
    },
    transition: 'header',
    mounted() {

        let dataComponent = this
        let a = document.addEventListener('scroll', function() {
            dataComponent.scrollY = window.scrollY
            dataComponent.scrollAnimation()
        })
    },
    methods: {
        scrollAnimation: function() {

        }
    }
}