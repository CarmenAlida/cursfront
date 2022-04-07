const app = new Vue({
    el: "#my-app",
    data:{
        name: "carmen ",
        mensaje: 'este es un componente',
        count: 0,
    },
    methods: {
        onAdd(){
            this.count += 1
        }
    }
})