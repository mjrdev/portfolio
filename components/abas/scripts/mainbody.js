import {mapState} from "vuex"

export default {
    data() {
        return {
            de: "Desenvolvedor",
            dev: 'Manoel Júnior'
        }
    },
    computed: mapState(['theme']) 
}