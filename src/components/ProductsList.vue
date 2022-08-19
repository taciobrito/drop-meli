<template>
  <div class="">
    <h1>Produtos</h1>

    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Condição</th>
          <th>Quantidade</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, idx) in products" :key="idx">
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.condition }}</td>
          <td>{{ product.available_quantity }}</td>
        </tr>
      </tbody>
    </table>

    <hr />
    <ProductForm></ProductForm>
  </div>
</template>

<script>
  import ProductForm from './ProductForm.vue';
  import ProductService from '../services/ProductService';

  export default {
    name: 'products-list',
    components: {
      ProductForm
    },
    data() {
      return {
        products: [],
        loading: false
      }
    },
    methods: {
      submit() {
        this.loading = true;

        ProductService.getAll()
          .then(response => this.products = response.data)
          .catch(error => alert(error.response.message))
          .finally(() => this.loading = false);
      }
    }
  }

</script>

<style scoped>
  table tr {
    border-bottom: 1px solid #666666;
  }
</style>
