import { firestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    try {
      await firestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };
  return { addDoc, error };
};

export { useCollection };
