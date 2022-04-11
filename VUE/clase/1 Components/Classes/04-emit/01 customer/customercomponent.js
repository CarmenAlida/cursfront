Vue.component('customercomponent',{
    template :
    `
    <div class = "Table">
     <div class = "Row" >
         <div class = "Cell"><p>{{index}}</p></div>
         <div class = "Cell"><p>{{obj.fname}}</p></div>
         <div class = "Cell"><p>{{obj.lname}}</p></div>
         <div class = "Cell"><p>{{obj.addr}}</p></div>
         <div class = "Cell"><p>
            <button v-on:click = "$emit('removeelement', observaciones)">X</button></p>
         </div>
         <input v-model = "observaciones" type = "text">
      </div>
      </div>
    `,
    props: [ 'obj', 'index'],
    data: function() {
       return {
          observaciones: '',
       }
    },
    methods:{
       getcolor : function() {
          if (this.index % 2) {
             return "#FFE";
          } else {
             return "#FFF";
          }
       }
    }
 });