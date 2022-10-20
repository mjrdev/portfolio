import {mapState} from "vuex";

export default {
    data() {
        return {
            de: 1,
            dev: 'Manoel Júnior',
            language: "",
            run: this.writeMachineEffect(this)
        }
    },
    computed: mapState(['user']),
    methods: {
        writeMachineEffect: function (state) {
            let vars = ['JavaScript', 'TypeScript', 'PHP', 'NodeJs', 'VueJs', 'ReactJs', 'TailwindCSS', 'SQL'];
            let lang = 0;
            let i = 0;
            let write = true
            let count = 0

            function writeMachine() {
                if(count === vars[lang].length * 2) {
                    if(lang + 1 == vars.length) {
                        lang = 0;
                    } else {
                        lang++;
                    }
                    count = 0;
                } count++;

                if(write) {
                    state.language = vars[lang].slice(0, i) + '|'
                    i++
                }
                
                if(!write) {
                    state.language = vars[lang].slice(0, i) + '|'
                    i--
                }
            }

            setInterval(() => {

                vars[lang].length == i ? (write = !write) : write;
                i == 0 ? write = true : write;

                writeMachine()
            },250)

            function revWrite() {

            }
        }
    }
}