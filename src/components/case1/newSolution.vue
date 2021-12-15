<template>
  <div class="hello">
    <input
      :value="testing"
      @input="$emit('update:testing', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "newSolution",
  props: {
    testing: String, // Can't rename modelValue
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
