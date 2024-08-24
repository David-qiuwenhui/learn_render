<template>
  <rect x="100" y="100">
    <Circle x="100" y="100"> </Circle>
  </rect>
</template>

<script>
import Circle from "./components/Circle.vue";
export default {
  components: {
    Circle,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
