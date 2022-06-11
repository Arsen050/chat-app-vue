import { firestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);
  const collectionRef = firestore.collection(collection).orderBy("createdAt");

  const onsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];

      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((invalidata) => {
    invalidata(() => onsub);
  });
  return { error, documents };
};

export { getCollection };
