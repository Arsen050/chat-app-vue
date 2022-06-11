<template>
  <header>
    <p class="text">Hey there {{ username }}</p>
    <button @click="$emit('logOut')" class="btn">Logout</button>
  </header>
</template>

<script>
export default {
  props: ["username"],
  setup() {},
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: rgb(220, 181, 108);
  border-radius: 4px;
}
</style>