import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ChatView from "../views/ChatView.vue";
import { auth } from "@/firebase/config";

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;

  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  const user = auth.currentUser;

  if (user) {
    next({ name: "Chat" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeView,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatView,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
