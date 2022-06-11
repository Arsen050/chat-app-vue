<template>
  <div class="chat" v-if="user">
    <div class="container">
      <Header @log-out="handleLogout" :username="user.displayName" />
      <div class="chat-content">
        <MessagesList />
        <ChatForm />
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "../composables/getUser";
import Header from "../components/Header.vue";
import { useLogout } from "../composables/useLogout";
import { useRouter } from "vue-router";
import ChatForm from "@/components/ChatForm.vue";
import MessagesList from "@/components/MessagesList.vue";
export default {
  components: { Header, ChatForm, MessagesList },
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    };

    return { user, handleLogout };
  },
};
</script>

<style>
.chat-content {
  max-width: 600px;
  height: 600px;
  margin-bottom: 20px;
  margin: 10px auto;
  background-color: rgb(220, 181, 108);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>