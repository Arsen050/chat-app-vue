<template>
  <div class="welcome">
    <div class="container">
      <div v-if="showLogin">
        <SignIn @toggle-show="toggleShow" />
      </div>
      <div v-else><SignUp @toggle-show="toggleShow" /></div>
    </div>
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import { ref } from "vue";
export default {
  components: { SignUp, SignIn },
  name: "WelcomeView",
  setup() {
    const showLogin = ref(true);
    const toggleShow = (bool) => {
      showLogin.value = bool;
    };
    return { showLogin, toggleShow };
  },
};
</script>
