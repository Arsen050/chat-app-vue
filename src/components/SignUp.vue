<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>Sign Up</h2>
    <label>Display name</label>
    <input type="text" class="field" name="displayName" v-model="displayName" />
    <label>Email</label>
    <input type="email" class="field" name="email" v-model="email" />
    <label>Password</label>
    <input type="password" class="field" name="password" v-model="password" />
    <button class="btn">Sign Up</button>
    <p class="desc">
      There is an account you can
      <span @click="$emit('toggleShow', true)" class="link">login</span>
    </p>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>