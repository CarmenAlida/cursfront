Vue.component("friend-contact", {
    template: `<div>
    <li>
      <h2>{{name}}</h2>
      <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
      <ul v-if="detailsAreVisible">
              <li><strong>Phone:</strong>{{phone}} </li>
              <li><strong>Email:</strong> {{email}}</li>
            </ul>
            </li>
  </div>`,
  data (){
      return {
          detailsAreVisible: false,
       }
  
  },
  
  props:['name','phone','email'
      
  ],
  methods: {
      toggleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible
      }
  }
  });