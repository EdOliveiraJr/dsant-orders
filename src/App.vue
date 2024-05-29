<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Pedidos D'Sant</h1>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/orders">Pedidos</router-link>
    </nav>
  </header>
  <RouterView/>
</template>

<style scoped>
</style>
