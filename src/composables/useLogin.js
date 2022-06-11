import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signin = async (email, password) => {
  error.value = null;
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { signin, error };
};

export { useLogin };
