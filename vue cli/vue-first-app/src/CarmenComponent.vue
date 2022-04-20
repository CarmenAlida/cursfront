<template>
  <div >
    <img src="./assets/yo-.jpg" width="100"/>
    <div class="carmen">
      <h2> {{ name }}</h2>
      <p>{{ email }}</p>
      <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Carmen Alida Fermín Henríquez",
      email: "calidafh@gmail.com",
      phone: "+34 645 17 69 49",
      
    };
  },
};
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
  color: #0c4e64;
}
</style>