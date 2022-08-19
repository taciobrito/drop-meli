<template>
  <div id="products">
    <products-list></products-list>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  components: {
    ProductsList
  }
}
</script>
