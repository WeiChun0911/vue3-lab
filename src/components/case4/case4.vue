<template>
  <h1>Mixin</h1>
  <p>This example shows usage of Vue3 mixin</p>
  <button @click="mixinMethod">This button triggers method from mixin</button>
</template>

<script>
  import mixin from "./mixin";
  export default {
    mixins: [mixin],
    name: "case4",
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
