<template>
  <div class="order-detail-inner">
    <!-- step  1 -->
    <div class="order-detail-top">
      <div class="order-info">
        <span class="order-num">Заказ № {{ orderItem.num }}</span>
        <span class="text-sm">
          на {{ orderItem.createdon | moment("DD.MM") }} к
          {{ orderItem.updatedon | moment("HH:mm") }}
        </span>
      </div>
      <template v-for="product in orderItem.products">
        <div :key="product.id">
          <span class="text-sm">Артикул: {{ product.article }}</span>
          <h3 class="order-name">{{ product.name }}</h3>
          <div class="order-count">{{ product.count }} шт</div>
          <div class="order-comment">
            <div class="order-title">Комментарий клиента</div>
            <p>
              {{ product.text_note }}
            </p>
          </div>
        </div>
      </template>

      <template v-if="step1">
        <button
          @click="activetedSecondStep"
          type="button"
          class="btn btn-primary"
        >
          Принять заказ
        </button>
      </template>
      <template v-if="orderItem.status == 5">
        <div class="order-maker"><span>Флорист</span>Розочкина Людмила</div>
        <button type="button" class="btn btn-primary">Заказ выполнен</button>
      </template>
    </div>
    <template v-if="step2">
      <div class="order-detail-bottom">
        <OrderBarcode :orderId="orderItem.id" />
      </div>
    </template>
    <template v-if="orderItem.status == 5">
      <div class="order-detail-bottom">
        <button
          @click="$emit('activated-second-step')"
          class="btn btn-link btn-danger"
        >
          Отказаться от сборки букета
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import OrderBarcode from "./OrderBarcode.vue";

export default {
  data: () => ({
    step1: true,
    step2: false,
    step3: false,
    floristName: "",
  }),
  props: {
    orderItem: Object,
  },
  name: "OrderDetail",
  components: {
    OrderBarcode,
  },
  methods: {
    activetedSecondStep: function () {
      this.step1 = false;
      this.step2 = true;
    },
  },
};
</script>
<style scoped>
.order-detail-inner {
  height: 100%;
}
.order-detail-top {
  margin: 0 0 60px;
}
.order-info {
  margin-bottom: 32px;
}
.order-num {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-right: 10px;
}
.order-name {
  margin: 5px 0;
}
.text-sm {
  font-size: 12px;
  line-height: 15px;
}
.order-title {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
}
p {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 5px 0 10px;
}
.order-comment {
  margin-top: 32px;
}
.btn-danger {
  text-align: left;
  width: auto;
  padding: 0;
  margin-top: 10px;
  color: #e83841;
}
.order-comment {
  margin-bottom: 32px;
}
.order-maker {
  margin: 0 0 32px;
}
</style>
