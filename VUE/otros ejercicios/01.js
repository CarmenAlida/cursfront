const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'hola mundo con Vue',
        frutas: [
            {nombre: 'pera', cantidad:10},
            {nombre: 'lulo', cantidad:0},
            {nombre: 'yogurt', cantidad:11}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})