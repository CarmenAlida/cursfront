Vue.component('blog-post', {
    props: ['post'],
    data: function () {
        return {
            valor: 1
        }
    },
    template: `
    <div class="blog-post">
    <h3>{{ post.title }}</h3> 
    Valor del texto <input v-model="valor"> 
    <button v-on:click="enviarPadre()"> Agrandar texto </button>
    </div>
    `,
    methods: {
        enviarPadre: function () {
            this.$emit('enlarge-text', this.valor);
        }
    }
})