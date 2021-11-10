<template>
  <vue-tabs class="tab-list">
    <!-- new list -->
    <v-tab :title="statusCount(statusNew, newCount)">
      <div class="tab-content order-list-new">
        <template v-if="newCount > 0">
          <OrderList :orderListByStatus="ordersNew" />
        </template>
        <template v-else>
          <p>Новых заказов нет</p>
        </template>
      </div>
    </v-tab>
    <!-- canceled list -->
    <v-tab :title="statusCount(statusCanceled, canceledCount)">
      <div class="tab-content">
        <template v-if="canceledCount > 0">
          <OrderList :orderListByStatus="ordersCanceled" />
        </template>
        <template v-else>
          <p>Отмененных заказов нет</p>
        </template>
      </div>
    </v-tab>
  </vue-tabs>
</template>

<script>
import axios from "axios";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import OrderList from "../order/OrderList.vue";

export default {
  data: () => ({
    statusNew: "Новые ",
    statusCanceled: "Отмененные ",
    ordersNew: [],
    ordersCanceled: [],
    newCount: 0,
    canceledCount: 0,
    interval: null,
  }),
  props: {},
  name: "OrdersNew",
  components: {
    VueTabs,
    VTab,
    OrderList,
  },
  computed: {},
  methods: {
    statusCount(statusName, id) {
      return statusName + id;
    },
    async getOrdersNew() {
      await axios
        .get("../orders.json")
        .then((response) => {
          this.newCount = response.data.results.length;
          this.ordersNew = response.data.results;
          console.log("response.data.results", response.data.results);
        })
        .catch((error) => console.log(error));
    },
    async getOrdersCanceled() {
      await axios
        .get("../orders.json")
        .then((response) => {
          this.canceledCount = response.data.results.length;
          this.ordersCanceled = response.data.results;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.statusCount();
    this.getOrdersNew();
    this.getOrdersCanceled();

    // this.interval = setInterval(
    //   function () {
    //     this.getOrdersNew();
    //   }.bind(this),
    //   30000
    // );
  },
};
</script>

<style scoped>
.order-list-new .card:not(.active) {
  pointer-events: none;
}
</style>
