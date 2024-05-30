<template>
  <div class="orders-list">
    <h3>Lista de Pedidos</h3>
    <div v-for="(order, index) in orders" :key="index">
      <p>Cliente: <strong>{{ order.clientName }}</strong></p>

      <p>Destinatário: <strong>{{ order.addressee }}</strong></p>

      <p>Endereço: <strong>{{ order.address }}</strong></p>

      <p>Referência: <strong>{{ order.reference }}</strong> </p>

      <p>Data do Pedido: <strong>{{ order.requestDate }}</strong></p>

      <p>Data da Entrega: <strong>{{ order.deliveryDate }}</strong></p>

      <p>Produto: <strong>{{ order.product }}</strong></p>
      <hr>
    </div>
    <OrdersForm header="Adicionar Pedido" :visible="true"/>
  </div>
</template>

<script>
import OrdersForm from './OrdersForm.vue' 
export default {
  name: 'OrdersList',
  components: { OrdersForm },
  data(){
    return {
      orders: [
        { 
          clientName: 'Francisco Edvaldo',
          addressee: 'Tainá dos Santos',
          address: 'Rua Inácio José de Alvarenga Peixoto, 490, Xaxim',
          reference: 'Posto de Gasolina',
          product: 'Cesta Café da manhã laço verde com branco',
          requestDate: '2024-05-24 16:01:00',
          deliveryDate: '2024-05-25 06:00:00'  
        },
        { 
          clientName: 'Francisco Edvaldo',
          addressee: 'Tainá dos Santos',
          address: 'Rua Inácio José de Alvarenga Peixoto, 490, Xaxim',
          reference: 'Posto de Gasolina',
          product: 'Cesta Café da manhã laço verde com branco',
          requestDate: '2024-05-24 16:01:00',
          deliveryDate: '2024-05-25 06:00:00'  
        },
        { 
          clientName: 'Francisco Edvaldo',
          addressee: 'Tainá dos Santos',
          address: 'Rua Inácio José de Alvarenga Peixoto, 490, Xaxim',
          reference: 'Posto de Gasolina',
          product: 'Cesta Café da manhã laço verde com branco',
          requestDate: '2024-05-24 16:01:00',
          deliveryDate: '2024-05-25 06:00:00'  
        }
      ]
    }
  }
}
</script>

<style>
</style>