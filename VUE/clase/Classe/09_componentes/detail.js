Vue.component('user-detail', {
    template:
    `    <div>
      <p>Hola:  {{first}} {{last}}</p>
    </div>`,
   props: ['first','last']
})