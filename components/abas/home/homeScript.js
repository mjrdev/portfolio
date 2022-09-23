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
            let vars = ['JavaScript', 'TypeScript'];
            let i = 0;
            let write = true

            function writeMachine() {
                if(write) {
                    state.language = vars[0].slice(0, i) + '|'
                    i++
                }
                
                if(!write) {
                    state.language = vars[0].slice(0, i) + '|'
                    i--
                }
            }

            setInterval(() => {

                vars[0].length == i ? (write = !write) : write;
                i == 0 ? write = true : write;

                writeMachine()
            },180)

            function revWrite() {

            }
        }
    }
}