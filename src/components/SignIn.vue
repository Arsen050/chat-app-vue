<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>Login</h2>
    <label>Email</label>
    <input type="email" class="field" name="email" v-model="email" />
    <label>Password</label>
    <input type="password" class="field" name="password" v-model="password" />

    <button class="btn">Login</button>
    <p class="desc">
      There is no account you can
      <span class="link" @click="$emit('toggleShow', false)">register</span>
    </p>
  </form>
</template>

<script>
import { ref } from "vue";
import { useLogin } from "../composables/useLogin";
export default {
  setup(props, context) {
    const { signin, error } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const result = await signin(email.value, password.value);
      if (!error.value) {
        context.emit("login"); 
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>