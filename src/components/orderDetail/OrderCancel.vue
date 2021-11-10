<template>
  <div class="order-detail-inner">
    <div class="order-detail-top">
      <!-- cancel step  1 -->
      <template v-if="step1">
        <div class="order-top">
          <div class="order-maker">
            <span class="bold">Флорист</span>Розочкина Людмила
          </div>
          <h3 class="h3">Вы хотите отказаться от сборки</h3>
          <div class="btn-holder">
            <button type="button" class="btn btn-primary btn-block">
              Вернуть в список новых заказов
            </button>
          </div>
          <div class="btn-holder">
            <button type="button" class="btn btn-primary btn-block">
              Изменить флориста
            </button>
          </div>
        </div>
      </template>
      <!-- cancel step  2 -->
      <template v-if="step2">
        <div class="order-top">
          <h6>
            Чтобы изменить флориста, сканируйте карту флориста, который возьмет
            заказ в работу
          </h6>
        </div>
        <OrderBarcode />
      </template>
    </div>
    <div class="order-detail-bottom">
      <button type="button" class="btn btn-info" @click="$emit('close-info')">
        Продолжить сборку заказа
      </button>
    </div>
  </div>
</template>

<script>
import OrderBarcode from "./OrderBarcode.vue";

export default {
  name: "OrderCancel",
  data: () => ({
    step1: true,
    step2: false,
  }),
  components: {
    OrderBarcode,
  },
};
</script>

<style scoped>
h6 {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.h3 {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin: 20px 0 30px;
}
.btn-holder {
  margin-bottom: 20px;
}
.order-maker span {
  display: inline-flex;
  margin-right: 5px;
}
</style>
