<template>
  <header>
    <h1>Pedidos D'Sant</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/orders">Pedidos</router-link>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
  <Footer/>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: { Footer }
  }

</script>

<style>
</style>
