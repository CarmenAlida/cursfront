Vue.component('contador',{
    template: //html
    `
    <div>
    <h4> {{numero}} </h4>
    <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return{
            numero: 0
        }
    }
})