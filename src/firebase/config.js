import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ36yBfd5cPC8Bjq3_itd2mpkdwYe-vnU",
  authDomain: "chat-vue-d206f.firebaseapp.com",
  projectId: "chat-vue-d206f",
  storageBucket: "chat-vue-d206f.appspot.com",
  messagingSenderId: "1096873940861",
  appId: "1:1096873940861:web:2f1847223378b9067c5e14",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { firestore, timestamp, auth };
