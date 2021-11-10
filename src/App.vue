<template>
  <div id="app">
    <!-- Излишняя инициализация которую можно убрать -->
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
/* Большая часть стилей даже не используются в этом компоненте, они должны быть перенесены на соответствующие компоненты, где используются, таким образом все декомпозируется в соответствии с необходимостью стиля, это будет удобно поправлять, а не бегать по другим компонентам и искать где же там стиль объявлен */
/* ??? Странные after, before стили, не понимаю зачем они */
*,
:after,
:before {
  box-sizing: border-box;
}
/* Нет смысла задавать heoght: 100%; так как без конкретных систем исчислений стиль высоты не будет применяться */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* Стиль текстов лучше вставлять в звездочку как и цвет текста, с высотой та же история что и выше */
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 0;
  height: 100%;
}
/* Стиль не имеет смысла, описано выше почему */
#app > .container,
.main-container {
  height: 100%;
}
/* Высота снова не будет никакого эффекта иметь, автоматическое определение по иксу опасно, может легко перетечь в скролл горизонтальный */
.main-container > .col {
  padding: 60px 20px;
  max-height: 100%;
  overflow-x: auto;
}
/* Упомянул выше */
.container-main {
  height: 100%;
}
/* Стиль лучше подписать не в каком компоненте он используется, а в какой цвет перекрашивает */
.bg-section {
  background: #f6f3f1;
}
/* Если это стиль кнопки (по сути должен быть он  если судить по названию) */
.btn {
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  widows: auto;
}
.btn-primary {
  height: 56px;
  padding: 13px 25px;
  background: #b69b89;
  color: #fff;
}
.btn-link {
  background: transparent;
}
.btn-info {
  color: #b69b89;
  background: transparent;
}
.btn-block {
  width: 100%;
}
.bold {
  font-weight: bold;
}
</style>
