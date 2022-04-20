<template>
  <img alt="Vue logo" src="https://picsum.photos/200" style="border-radius:50%;">
  <HelloWorld msg="Carmen Alida"/>
  <CarmenComponent mensaje="carmen"/><br>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CarmenComponent from './CarmenComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CarmenComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
