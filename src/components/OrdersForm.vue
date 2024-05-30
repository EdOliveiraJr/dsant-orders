<template>
	<Dialog class="orders-form" 
		:header="header" 
		v-model:visible="visibleDialog" 
		@after-hide="closeDialog"
	>
		<div v-if="!orderEdit">
			<FloatLabel>
				<InputText id="clientName" v-model="order.clientName" />
				<label for="clientName">Cliente</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="addressee" v-model="order.addressee" />
				<label for="addressee">Destinatário</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="address" v-model="order.address" />
				<label for="address">Endereço</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="reference" v-model="order.reference" />
				<label for="reference">Referência</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="requestDate" v-model="order.requestDate" />
				<label for="requestDate">Data do Pedido</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="deliveryDate" v-model="order.deliveryDate" />
				<label for="deliveryDate">Data da Entrega</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="product" v-model="order.product" />
				<label for="product">Produto</label>
			</FloatLabel>
			<div class="flex justify-content-end gap-2">
				<Button 
					class="btn-form"
					label="Cancelar"
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button 
					class="btn-form"
					label="Salvar"
					@click="saveNewOrder(order)"
				>
				</Button>
			</div>
		</div>
		<div v-else>
			<FloatLabel>
				<InputText id="name" v-model="orderEdit.name" />
				<label for="name">Nome</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="price" v-model="orderEdit.price" />
				<label for="price">Preço</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="description" v-model="orderEdit.description" />
				<label for="description">Descrição</label>
			</FloatLabel>
			<div class="flex justify-content-end gap-2">
				<Button
					class="btn-form"
					label="Cancelar" 
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button
					class="btn-form"
					label="Salvar"
					@click="saveEditOrder(orderEdit)"
				>
				</Button>
			</div>
		</div>
	</Dialog>
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

export default {
	name: 'OrdersForm',
	components: { 
    Button,
    Dialog,
    FloatLabel,
    InputText
  },
	props: {
		header: {
			type: String,
			required: true,
		},
		orderEdit: {
			type: Object,
		},
		visible: {
			type: Boolean,
		}
	},
	data() {
		return {
			order: {
				id: '',
				name: '',
				price: '',
				description: '',
				isActive: true
			},
			visibleDialog: this.visible
		}
	},
	mounted() {
		if (this.orderEdit) {
			this.order = this.orderEdit;
		}
	},
	methods: {
		closeDialog() {
			this.visibleDialog = false;
			this.$emit('closedDialog', this.visibleDialog);
		},
		saveEditOrder(order) {
			this.$emit('saveEditOrder', order);
			this.closeDialog();
		},
		saveNewOrders(order) {
			this.$emit('saveNewOrders', order);
			this.closeDialog();
		}
	}
}
</script>
<style></style>