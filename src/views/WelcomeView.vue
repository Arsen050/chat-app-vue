<template>
  <div class="welcome">
    <div class="container">
      <div v-if="showLogin">
        <SignIn @login="enterChat" @toggle-show="toggleShow" />
      </div>
      <div v-else><SignUp @signup="enterChat" @toggle-show="toggleShow" /></div>
    </div>
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignUp, SignIn },
  name: "WelcomeView",
  setup() {
    const router = useRouter();
    const showLogin = ref(true);
    const toggleShow = (bool) => {
      showLogin.value = bool;
    };
    const enterChat = () => {
      router.push({ name: "Chat" });
    };
    return { showLogin, toggleShow, enterChat };
  },
};
</script>
