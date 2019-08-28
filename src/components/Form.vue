<template>
  <div class="forms">
    <br />
    <div v-for="(input, index) in inputs" :key="input.id">
      <DeleteForm :index="index" @delete-form="deleteForm" />
      <form :method="method">
        <div v-for="(type, typeIndex) in schema.type" :key="typeIndex">
          <Input
            :type="type"
            :model="getPropName(input, typeIndex)"
            :placeholder="schema.placeholder[typeIndex]"
          />
        </div>
      </form>
      <br />
    </div>
  </div>
</template>

<script>
import Input from "./Input";
import DeleteForm from "./DeleteForm";

export default {
  name: "Form",
  props: ["method", "inputs", "schema"],
  components: { Input, DeleteForm },
  methods: {
    getPropName(object, index) {
      const props = Object.keys(object);
      return { object, props, index };
    },
    deleteForm(index) {
      this.$emit("delete-form", index);
    }
  }
};
</script>

<style>
</style>