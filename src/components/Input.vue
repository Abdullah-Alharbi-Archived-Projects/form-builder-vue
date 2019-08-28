<template>
  <input :type="type" :placeholder="placeholder" v-model="model.object[getPropName]" />
</template>

<script>
export default {
  name: "Input",
  props: ["model", "placeholder", "type"],
  computed: {
    getPropName() {
      const { props, index } = this.model;
      return props[index];
    }
  }
};
</script>

<style>
</style>