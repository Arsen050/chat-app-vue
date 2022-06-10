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
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
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