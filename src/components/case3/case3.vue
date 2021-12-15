<template>
  <h1>List Rendering and Change detection</h1>
  <p>This example proves that Vue3 can detect changes in array</p>
  <div v-for="data in arrayOfData" :key="data.name">
    <input type="text" v-model="data.name" />
  </div>

  <button @click="replaceDataInArray">replace Whole Data In Array</button>
  <button @click="updateDataInArray">update single Data In Array</button>
</template>

<script>
  export default {
    name: "case3",
    data() {
      return {
        arrayOfData: [
          { name: "A", value: 1, data: { nestedValue: 1 } },
          { name: "B", value: 2, data: { nestedValue: 2 } },
          { name: "C", value: 3, data: { nestedValue: 3 } },
        ],
      };
    },
    watch: {
      arrayOfData: {
        handler: function (val, oldValue) {
          console.log(val, ">>>>>>>", oldValue);
        },
        deep: true,
      },
    },
    methods: {
      //This will not work in Vue2. But in Vue3 this is fine.
      replaceDataInArray: function () {
        this.arrayOfData = [
          { name: "D", value: 4, data: { nestedValue: 4 } },
          { name: "E", value: 5, data: { nestedValue: 5 } },
          { name: "F", value: 6, data: { nestedValue: 6 } },
        ];
      },
      updateDataInArray: function () {
        //This will not work in Vue2. But in Vue3 this is fine.
        //As long as whole object is changed
        this.arrayOfData[1] = { ...this.arrayOfData[1], value: 777 };

        //For nested object, it won't work
        this.arrayOfData[1].value = 777;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    display: block;
    margin: 2em auto;
  }
</style>
