import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcnHl0By_VCNPLFnIXnalxk_MWPTbZGHM",
  authDomain: "netflix-clone-b9189.firebaseapp.com",
  projectId: "netflix-clone-b9189",
  storageBucket: "netflix-clone-b9189.appspot.com",
  messagingSenderId: "707849296130",
  appId: "1:707849296130:web:09edfb7398476db9874a1b",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth };
export default db;
