<template>
  <div class="orders-in-work">
    <div v-if="data.inProgressCount > 0">
      <OrdersInProgressList :ordersInProgress="data.ordersInProgress"  />
    </div>
    <div v-else>
      <OrdersEmpty />
    </div>
  </div>
</template>

<script>
import OrdersEmpty from "./OrdersEmpty";
import OrdersInProgressList from "./OrdersInProgressList";

export default {
  name: "OrdersInProgress",
  props: {
    data: {
      type: Object,
    }
  },
  components: {
    OrdersEmpty,
    OrdersInProgressList,
  },
  // methods: {
  //   async getOrdersInProgress() {
  //     await axios
  //       .get("../orders.json")
  //       .then((response) => {
  //         this.inProgressCount = response.data.results.length;
  //         this.ordersNew = response.data.results;
  //       })
  //       .catch((error) => console.log(error));
  //   },
  // },
  updated() {
    // this.getOrdersInProgress();
    console.log(this.data);
  },
};
</script>