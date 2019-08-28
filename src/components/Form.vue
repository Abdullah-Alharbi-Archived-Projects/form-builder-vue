<template>
  <div class="forms">
    <br />
    <div v-for="input in inputs" :key="input.id">
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

export default {
  name: "Form",
  props: ["method", "inputs", "schema"],
  components: { Input },
  methods: {
    getPropName(object, index) {
      const props = Object.keys(object);
      return { object, props, index };
    }
  }
};
</script>

<style>
</style>