<template>
  <div>
    <OrderItem
      v-for="(order, index) in orderListByStatus"
      :key="order.id"
      :order="order"
      @click.native="clickActiveOrder(index, order)"
      :class="{ active: activeElement == order.id }"
    ></OrderItem>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import OrderItem from "./OrderItem.vue";

export default {
  name: "OrdersList",
  data: () => ({
    activeElement: 0,
    orderItem: {},
  }),
  components: {
    OrderItem,
  },
  props: {
    orderListByStatus: Array,
    orderId: Number,
  },
  methods: {
    clickActiveOrder(index, order) {
      if (!order.products[0].in_work && index != 0) {
        return false;
      } else {
        this.activeElement = order.id;
        eventBus.$emit("clickActiveOrder", {
          orderItem: order,
        });
      }
    },
  },
};
</script>
