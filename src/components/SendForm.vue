<template>
  <button @click.prevent="sendForm">Submut</button>
</template>

<script>
export default {
  name: "SendForm",
  props: ["inputs"],
  methods: {
    sendForm() {
      this.$emit("send-form");
      console.log("emitted event");
    }
  }
};
</script>

<style>
</style>