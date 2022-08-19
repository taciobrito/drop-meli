<template>
  <div class="">
    <h1>Novo Produto</h1>

    <form @submit.prevent="submit">
        <div class="field">
            <label>Título</label>
            <input type="text" v-model="product.title" />
        </div>

        <div class="field">
            <label>Descrição</label>
            <textarea v-model="product.description"></textarea>
        </div>

        <div class="field">
            <label>Condição</label>
            <select v-model="product.condition">
                <option value="new">Novo</option>
                <option value="used">Usado</option>
            </select>
        </div>

        <div class="field">
            <label>Quantidade disponível</label>
            <input type="number" v-model="product.available_quantity" />
        </div>

        <div class="field">
            <label>Preço</label>
            <input type="number" v-model="product.price" />
        </div>

        <div class="field">
            <label v-if="loading">Salvando, aguarde...</label>
            <button type="submit" :disabled="loading">Salvar</button>
        </div>
    </form>
  </div>
</template>

<script>
    import ProductService from '../services/ProductService';

    export default {
        name: 'Products',
        data() {
            return {
                product: {
                    item_id: null,
                    title: null,
                    description: null,
                    condition: 'new',
                    available_quantity: 0,
                    pictures: [],
                    category_id: '',
                    category: 'Outros',
                    price: 0,
                    sold_quantity: 0,
                    currency_id: 'BRL'
                },
                loading: false
            }
        },
        methods: {
            submit() {
                this.loading = true;

                ProductService.save(this.product)
                    .then(() => {
                        alert('Salvo com sucesso!');
                    })
                    .catch(error => alert(error.response.message))
                    .finally(() => this.loading = false);
            }
        }
    }

</script>

<style scoped>
    .field {
        margin-bottom: 20px;
        display: flex;
    } 
</style>
