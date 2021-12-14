<template>
  <newSolution v-model="msgAInParent"></newSolution>
  <br>
  <div>{{msgAInParent}}</div>
  <p>By using v-model, you can modify massage from child's input field.</p>
  <p>It's more like a "Syntactic sugar"</p>
  <hr>

  <oldSolution v-bind:msgBInParent="msgBInParent" @whatEverEventNameYouWant="msgBOnChange"></oldSolution>
  <br>
  <div>{{msgBInParent}}</div>
  <p>In fact, Vue automatically interpret your code into this way.</p>
</template>

<script>
import newSolution from './newSolution.vue'
import oldSolution from './oldSolution.vue'

export default {
  name: 'App',
  data(){
    return {
      msgAInParent: "Value A from parent",
      msgBInParent: "Value B from parent"
    }
  },
  methods: {
    msgBOnChange: function(val){
      this.msgBInParent = val;
    }
  },
  components: {
    newSolution,
    oldSolution
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
