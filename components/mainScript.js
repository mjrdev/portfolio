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
            animation: {
              'animation-in': false, 'animation-out': false, 'default-header': true
            },
        }
    },
    transition: 'header',
    mounted() {

      const eventFunction = () => {
        this.timeEventsHeader ? clearTimeout(this.timeEventsHeader) : null
        this.timeEventsHeader = setTimeout(() => {
          
          const position = window.scrollY;
          if(position <= 300) {
            this.animation['default-header'] = true;
            this.animation['animation-in'] = false;
            this.animation['animation-out'] = false;
            return
          }
          if(position > this.posScrollY) {
            this.animation['animation-in'] = true;
            this.animation['animation-out'] = false;
            this.animation['default-header'] = false;
          } else {
            this.animation['animation-out'] = true;
            this.animation['animation-in'] = false;
            this.animation['default-header'] = false;
          }

          this.posScrollY = position

        }, 100)
      }

      addEventListener('scroll', eventFunction)
    },
    methods: {
        
    }
}