<template>
  <div class="order-item-holder">
    <div class="order-item-top">
      <span class="order-item-num">Заказ № {{ order.num }} </span>
      <span class="text-sm">
        на {{ order.createdon | moment("DD.MM") }} к
        {{ order.updatedon | moment("HH:mm") }}
      </span>
    </div>
    <template v-for="product in order.products">
      <OrderItemDetail :key="product.id" :product="product" />
    </template>
    <template v-if="order.florist">
      <div class="order-maker">
        <span>Флорист</span>{{ order.florist || "Розочкина Людмила" }}
      </div>
    </template>
  </div>
</template>
<script>
import OrderItemDetail from "./OrderItemDetail";

export default {
  name: "OrderItem",
  data: () => ({}),
  props: {
    order: Object,
  },
  components: {
    OrderItemDetail,
  },
};
</script>

<style scoped>
.order-item-holder {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s linear;
  padding: 20px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.order-item-holder.active {
  border-color: #b69b89;
  cursor: default;
}
.order-item-holder:hover {
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
}
.text-sm {
  font-size: 12px;
  line-height: 15px;
}
.order-item-count {
  font-size: 13px;
  line-height: 16px;
}
.order-item-num {
  display: inline-flex;
  margin-right: 5px;
}
.order-item-top {
  margin-bottom: 20px;
}
.row + .row {
  margin-top: 20px;
}
.order-maker {
  font-size: 13px;
  line-height: 16px;
  margin-top: 15px;
}
.order-maker span {
  display: inline-flex;
  margin-right: 6px;
  font-weight: bold;
}
</style>
