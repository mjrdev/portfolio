import Header from "./abas/header/Header.vue";
import Home from "./abas/home/Home.vue";
import Skills from "./abas/skills/Skills.vue";
import Projects from "./abas/projects/Projects.vue";
import About from "./abas/about/About.vue";

import aos from '~/mixins/aos.js';

export default {
    mixins: [aos],
    name: 'Main',
    components: { Header, Home, Skills, Projects, About },
    data() {
        return {
            color: 'red',
            timeEventsHeader: null,
            posScrollY: 0,
        }
    },
    transition: 'header',
    mounted() {

      const eventFunction = () => {
        this.timeEventsHeader ? clearTimeout(this.timeEventsHeader) : null
        this.timeEventsHeader = setTimeout(() => {
          
          const position = window.scrollY;
          if(position > this.posScrollY) {
            console.log('para baixo');
          } else {
            console.log('para cima');
          }

          this.posScrollY = position

        }, 500)
      }

      addEventListener('scroll', eventFunction)
    },
    methods: {
        
    }
}