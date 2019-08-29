<template>
  <button @click.prevent="sendForm">Submit</button>
</template>

<script>
export default {
  name: "SendForm",
  props: ["inputs"],
  methods: {
    sendForm() {
      // eslint-disable-next-line
      console.log("emitted event");
      this.$emit("send-form");
    }
  }
};
</script>

<style>
</style>