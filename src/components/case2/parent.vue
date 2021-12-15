<template>
  <child-with-slot id="parentDIV">{{ dataFromParent }}</child-with-slot>
</template>

<script>
import childWithSlot from "./childWithSlot.vue";
export default {
  name: "parent",
  data() {
    return {
      dataFromParent:
        "Weeeeeeeeeee, This is data from parent, sending to children",
    };
  },
  components: { childWithSlot },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
