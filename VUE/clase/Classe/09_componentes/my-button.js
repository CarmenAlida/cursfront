Vue.component('my-button', {
    //template: "#boto",
    template: `<div><button @click="onAdd2">{{ count }} boto component</button><br> </div>`,
    data() {
        return {
            count: 0
        }
    },
   
    methods: {
        onAdd2() {
            this.countador += 1 
        }
    },
});