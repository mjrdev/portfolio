export default {
    data() {
        return {
            de: "Desenvolvedor",
            dev: 'Manoel Júnior'
        }
    },
    methods: {
        devTitle2: (obj) => {
            setInterval(() => {
                obj._data.dev == '"PHP"' ? obj._data.dev == '"JAVASCRIPT"' : obj._data.dev == '"PHP"'
            } ,1000)
        }
    }
}