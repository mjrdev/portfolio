
export default {
    name: 'Menu',
    props: {
        abas: Array
    },
    data() {
        return {
            menu: false
        }
    }, 
    methods: {
        changeMenu: function () {
            console.log(this.menu);
            this.menu = !this.menu
        },
    }
}