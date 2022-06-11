import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);

    if (res.user) {
      res.user.updateProfile({ displayName });
    }
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { signup, error };
};

export { useSignup };
