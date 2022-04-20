<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Modificando VUE
      <a href="https://www.linkedin.com/in/carmenfermin" target="_blank" rel="noopener">mi LinkedIn</a>.
    </p>
    
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 5px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}
</style>
