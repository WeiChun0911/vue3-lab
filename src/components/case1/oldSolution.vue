<template>
  <div class="hello">
    <input v-model="msgInChild" @input="$emit('whatEverEventNameYouWant', $event.target.value)"/>  <!-- use copy data, and emit new value when update -->
  </div>
</template>

<script>
export default {
  name: 'oldSolution',
  props: {
    msgBInParent: String //get parent's value from props
  },
  data (){
    return {
      msgInChild: this.msgBInParent //copy into childs data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
