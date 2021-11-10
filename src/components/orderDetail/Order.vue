<template>
  <div class="order-detail" v-if="isOpened" :isOpened="isOpened">
    <button type="button" class="btn btn-close" @click="closeDetailInfo">
      <i class="icon-close"></i>
    </button>

    <template v-if="OrderDeatail">
      <OrderDetail
        @activated-second-step="activatedSecondStep"
        :orderItem="orderItem"
      />
    </template>

    <template v-if="OrderCancel">
      <OrderCancel @close-info="closeDetailInfo" />
    </template>
  </div>
</template>

<script>
import OrderDetail from "./OrderDetail.vue";
import OrderCancel from "./OrderCancel.vue";
import { eventBus } from "../../main";

export default {
  name: "Order",
  data: () => ({
    OrderDeatail: false,
    OrderCancel: false,
    isOpened: false,
    orderItem: {},
  }),
  components: {
    OrderCancel,
    OrderDetail,
  },
  methods: {
    closeDetailInfo: function () {
      this.isOpened = false;
    },
    cancelOrder: function () {
      this.OrderCancel = true;
      this.OrderDeatail = false;
    },
    activatedSecondStep: function () {
      this.OrderDeatail = false;
      this.OrderCancel = true;
    },
  },
  created() {
    eventBus.$on("clickActiveOrder", (data) => {
      this.orderItem = data.orderItem;
    });
  },
  computed: {
    needWatch() {
      return this.orderItem;
    },
  },
  watch: {
    needWatch(newId, oldId) {
      if (newId !== oldId) {
        this.OrderDeatail = true;
        this.isOpened = true;
      }
    },
    statusWatch(newStatus, oldStatus) {
      if (newStatus !== oldStatus) {
        this.OrderDeatail = true;
        this.isOpened = true;
      }
    },
  },
};
</script>

<style scoped>
.order-detail {
  position: relative;
  height: 100%;
}
.order-detail-inner {
  display: grid;
  align-items: center;
  padding-top: 120px;
}
h5 {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin: 5px 0;
}
h6 {
  margin: 40px 0 10px 0;
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
}
.text-sm {
  font-size: 12px;
  line-height: 15px;
}
.order-num {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-right: 10px;
}
.order-top {
  margin-bottom: 40px;
}
.btn-close {
  position: absolute;
  top: -30px;
  right: 0px;
  margin: 0;
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
  background: none;
  transition: all 0.3s linear;
  width: 50px;
  height: 50px;
  background: rgba(182, 155, 137, 0.2);
  border-radius: 50%;
}
.btn-close:hover {
  background: rgba(182, 155, 137, 0.5);
}
.icon-close {
  display: inline-flex;
  width: 26px;
  height: 26px;
  background: url(../../assets/images/close.svg) center no-repeat;
}
img {
  width: 150px;
  height: 150px;
  margin: auto;
}
.btn-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: auto;
}
.btn-link {
  height: auto;
}
.btn-primary {
  height: 56px;
}
.btn-block {
  width: 100%;
}
.order-maker {
  font-size: 13px;
  line-height: 16px;
  margin: 0 0 10px;
}
.order-maker span {
  display: inline-flex;
  margin-right: 5px;
  font-weight: bold;
}
.order-detail h3 {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
.order-detail .btn-link {
  text-decoration: none;
}
.card-body .order-maker {
  margin-bottom: 0;
}
</style>
