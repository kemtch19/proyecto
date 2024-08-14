<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hola que tal esto te hablo desde el app.vue"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <h1>Título de Practica</h1>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ComponentExample />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import ComponentExample from "./components/ComponentExample.vue";
</script>

<style lang="sscs" scoped>
</style>