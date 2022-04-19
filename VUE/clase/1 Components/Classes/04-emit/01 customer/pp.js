var pp = new Vue({
    el: '#pp',
    data: {
        name:'The Mob'
    },

        mounted() {
            console.log("before mounted ");
            divfondo = this.$refs.fondo;
            console.log(divfondo);
            divfondo.style.backgroundImage = "url('img/coche rojo.png')";
            divfondo.style.height = "500px";
            divfondo.style.backgroundRepeat = "no-repeat";
            divname = this.$refs.name;
            divname.style.color="red";
            }
    })  