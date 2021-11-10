<template>
  <div class="orders-in-work">
    <template v-if="inProgressCount > 0">
      <OrdersInProgressList />
    </template>
    <template v-else>
      <OrdersEmpty />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import OrdersEmpty from "./OrdersEmpty";
import OrdersInProgressList from "./OrdersInProgressList";

export default {
  name: "OrdersInProgress",
  data: () => ({
    inProgressCount: null,
  }),
  components: {
    OrdersEmpty,
    OrdersInProgressList,
  },
  methods: {
    async getOrdersInProgress() {
      await axios
        .get("../orders.json")
        .then((response) => {
          this.inProgressCount = response.data.results.length;
          this.ordersNew = response.data.results;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getOrdersInProgress();
  },
};
</script>