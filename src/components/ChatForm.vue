<template>
  <form @keydown.enter.prevent="onSubmit" class="form">
    <textarea
      name="message"
      placeholder="enter text"
      v-model="message"
      rows="4"
      cols="99"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import { getUser } from "../composables/getUser";
import { useCollection } from "../composables/useCollection";
import { timestamp } from "@/firebase/config";
export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");
    const message = ref("");
    const onSubmit = async () => {
      const doc = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(doc);
      message.value = "";
    };
    return { message, onSubmit };
  },
};
</script>

<style scoped>
form {
  max-width: 100% !important;
  margin-top: 0px;
}
textarea {
  width: 100% !important;
  resize: none;
  border-radius: 8px;
  padding: 5px;
  margin-top: 7px;
  font-size: 15px;
}
</style>