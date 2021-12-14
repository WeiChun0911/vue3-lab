<template>
  <div class="hello">
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'newSolution',
    props: {
    modelValue: String // Can't rename modelValue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
