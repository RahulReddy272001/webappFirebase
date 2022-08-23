import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD7w9Tschi2iqCx8e7s9ckG37EN9vevRxA",
  authDomain: "reactcurd-9a315.firebaseapp.com",
  projectId: "reactcurd-9a315",
  storageBucket: "reactcurd-9a315.appspot.com",
  messagingSenderId: "583082815295",
  appId: "1:583082815295:web:41e797582db9532096ed8a",
  measurementId: "G-WPJ9HJ8WKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);