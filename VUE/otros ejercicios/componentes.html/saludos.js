Vue.component('saludo',{
    // template:'<h1> {{saludo}} </h1>',
    template: //html
    `
    <div>
        <h1> {{saludo}} </h1>
        <h2> aqui </h2>
    </div>
    `,
    data(){
        return{
            saludo: 'hola que tal?'
        }
    }
});