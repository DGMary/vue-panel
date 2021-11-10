<template>
  <h2>{{ emptyText }}</h2>
</template>

<script>
export default {
  name: "OrdersEmpty",
  data: () => ({
    emptyText: "Нет заказов в работе",
  }),
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  line-height: 39px;
  font-weight: normal;
}
</style>
