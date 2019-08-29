<template>
  <div id="app">
    <h1>Hello, Builder</h1>
    <AddNew :schema="formSchema" :inputs="inputs" />
    <SendForm :inputs="inputs" @send-form="submitForm" />
    <Form method="POST" :inputs="inputs" :schema="formSchema" @delete-form="deleteForm" />
  </div>
</template>

<script>
import Form from "./components/Form";
import AddNew from "./components/AddNew";
import SendForm from "./components/SendForm";

export default {
  name: "app",
  data() {
    return {
      inputs: [],
      formSchema: {
        type: ["text", "password"],
        placeholder: ["Username", "Password"],
        fields: ["username", "password"]
      }
    };
  },
  components: { Form, AddNew, SendForm },
  methods: {
    submitForm() {
      // eslint-disable-next-line
      console.log("sending form data", this.inputs);
    },
    deleteForm(index) {
      const inputs = [...this.inputs];
      const newInputs = inputs.filter(
        (input, inputIndex) => inputIndex !== index
      );

      this.inputs = [...newInputs];
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
