module.exports = {
  data() {
    return {
      mixinData: "Everyone needs me! I'm from mixin!",
    };
  },
  methods: {
    mixinMethod: function () {
      alert(this.mixinData);
    },
  },
};
