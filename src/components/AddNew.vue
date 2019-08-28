<template>
  <div>
    <button @click.prevent="createForm">Add new</button>
  </div>
</template>

<script>
export default {
  name: "AddNew",
  props: ["schema", "inputs"],
  methods: {
    createForm() {
      const formObject = {};
      const { fields } = this.schema;

      const config = {
        value: "",
        writable: true,
        enumerable: true,
        configurable: true
      };

      fields.forEach(f => Object.defineProperty(formObject, f, config));
      this.inputs.push(formObject);
    }
  }
};
</script>

<style>
</style>