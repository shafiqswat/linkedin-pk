/** @format */

import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyYlD5AGWuwTckCcI4NGM8JmKy62h-u5w",
  authDomain: "agora-1c17a.firebaseapp.com",
  databaseURL:
    "https://agora-1c17a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agora-1c17a",
  storageBucket: "agora-1c17a.firebasestorage.app",
  messagingSenderId: "145808880125",
  appId: "1:145808880125:web:cf58b1784d39e643dae994",
  measurementId: "G-P6FWW5Q72T",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);
export default app;
