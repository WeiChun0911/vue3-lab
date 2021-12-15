<template>
  <router-link
    class="routerLink"
    to="/case1"
    v-if="!['/case1'].includes($route.path)"
  >
    Go to case1
  </router-link>
  <router-link
    class="routerLink"
    to="/case2"
    v-if="!['/case2'].includes($route.path)"
  >
    Go to case2
  </router-link>
  <router-link
    class="routerLink"
    to="/case3"
    v-if="!['/case3'].includes($route.path)"
  >
    Go to case3
  </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.routerLink {
  display: inline-block;
  margin: 2em 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
