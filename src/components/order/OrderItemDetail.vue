<template>
  <div class="order-item-detail">
    <div class="order-info-left">
      <h5 class="order-item-name">{{ product.name }}</h5>
      <span class="text-sm">Артикул: {{ product.product_id }}</span>
    </div>
    <div class="order-info-right">
      <div class="order-item-count">{{ product.count }} шт</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItemDetail",
  props: {
    id: Number,
    product: Object,
  },
};
</script>

<style scoped>
.order-item-detail {
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: 10px;
}
h5.order-item-name,
.order-item-name {
  font-weight: bold;
  margin: 0 0 4px 0;
  font-size: 20px;
  line-height: 24px;
}
.order-item-detail + .order-item-detail {
  margin: 16px 0 0 0;
}
</style>
