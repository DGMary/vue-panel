<template>
  <div>
    <h3>Заказы в работе</h3>
    <OrderList :orderListByStatus="ordersInProgressList" />
  </div>
</template>

<script>
import axios from "axios";
import OrderList from "../order/OrderList.vue";

export default {
  name: "OrdersInProgressList",
  data: () => ({
    ordersInProgressList: [],
  }),
  props: {},
  components: {
    OrderList,
  },
  computed: {},
  methods: {
    async getOrdersInProgress() {
      await axios
        .get("http://localhost:8010/proxy/rest/dashboard/orders?in_process")
        .then((response) => {
          this.ordersInProgressList = response.data.results;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getOrdersInProgress();
  },
};
</script>

<style scoped>
h3 {
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
}
</style>