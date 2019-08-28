<template>
  <button @click.prevent="deleteForm">Delete</button>
</template>

<script>
export default {
  name: "DeleteForm",
  props: ["index"],
  methods: {
    deleteForm() {
      this.$emit("delete-form", this.index);
    }
  }
};
</script>

<style>
</style>