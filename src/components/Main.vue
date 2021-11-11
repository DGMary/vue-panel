<template>
  <div class="container">
    <div class="container-main">
      <div class="col bg-section">
        <OrdersNew />
      </div>
      <div class="col">
        <OrdersInProgress :data="{inProgressCount, ordersInProgress}" />
      </div>
      <div class="col bg-section">
        <Order />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrdersNew from "../components/ordersNew/OrdersNew.vue";
import OrdersInProgress from "../components/ordersInProgress/OrdersInProgress.vue";
import Order from "../components/orderDetail/Order.vue";

export default {
  name: "App",
  data() {
    return {
      inProgressCount: 0,
      ordersInProgress: []
    }
  },
  components: {
    OrdersNew,
    OrdersInProgress,
    Order,
  },
  methods: {
    updateOrdersInProgress() {
      axios
      .get("http://localhost:3000/results")
      .then(response => this.inProgressCount = response.data.length)
      .catch((error) => console.log(error.response));
    }
  },
  created() {
    this.updateOrdersInProgress()
  }
};
</script>

<style scoped>
.container {
  max-width: 1540px;
  padding: 0 30px;
  margin: 0 auto;
}
.container-main {
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
}
.col {
  padding: 60px 20px;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-color: #b69b89 rgba(182, 155, 137, 0.2);
  scrollbar-width: thin;
}
.col::-webkit-scrollbar {
  width: 2px;
}
.col::-webkit-scrollbar-track {
  border-radius: 6px;
  background: rgba(182, 155, 137, 0.2);
}
.col::-webkit-scrollbar-thumb {
  background: #b69b89;
  border-radius: 6px;
}
</style>
