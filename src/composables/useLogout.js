import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const logout = async (email, password, displayName) => {
  error.value = null;
  try {
    await auth.signOut();
    console.log("user is logout!");
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { logout, error };
};

export { useLogout };
