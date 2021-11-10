<template>
  <div id="app">
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
*,
:after,
:before {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 0;
  height: 100%;
}
#app > .container,
.main-container {
  height: 100%;
}
.main-container > .col {
  padding: 60px 20px;
  max-height: 100%;
  overflow-x: auto;
}
.container-main {
  height: 100%;
}
.bg-section {
  background: #f6f3f1;
}
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
