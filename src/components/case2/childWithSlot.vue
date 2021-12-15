<template>
  <div>
    <h1>Slot practicing</h1>
    <h2>This is childWithSlot component</h2>

    <p>Below is the data receiving from my parent</p>
    <div id="slot">
      <slot></slot>
    </div>
    <!-- don't put anything inside. It won't worl. It's render by parent -->
    <hr />

    <h2>And this is childWithSlot origin data</h2>
    <p id="originData">{{ dataInsideChild }}</p>
  </div>
</template>

<script>
export default {
  name: "childWithSlot",
  data() {
    return {
      dataInsideChild: "This is origin data within Child",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slot {
  margin: 1em;
}
#slot,
#originData {
  display: inline-block;
  color: red;
  border: 1px solid;
}
</style>
