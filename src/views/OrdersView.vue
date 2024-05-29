<template>
  <div class="orders-view">
     <h2>Pedidos</h2>
     <OrdersList/>
  </div>
</template>

<script> 
import OrdersList from '../components/OrdersList.vue'
export default {
  name: 'OrdersView',
  components: { OrdersList }
}
</script>

<style>
</style>