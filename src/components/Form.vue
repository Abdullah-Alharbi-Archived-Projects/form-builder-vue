<template>
  <div class="forms">
    <br />
    <div v-for="(input, index) in inputs" :key="input.id">
      <DeleteForm :index="index" @delete-form="deleteForm" />
      <form :method="method">
        <div v-for="(field, fieldIndex) in schema.fields" :key="fieldIndex">
          <Input
            :type="getType(fieldIndex)"
            :model="getPropName(input, fieldIndex)"
            :placeholder="schema.placeholder[fieldIndex]"
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
    getType(index){
      const { type } = this.schema;
      if(typeof type !== 'string') {
        // array
        return type[index];
      } else {
        // string
        return type;
      }
    },
    deleteForm(index) {
      this.$emit("delete-form", index);
    }
  }
};
</script>

<style>
</style>