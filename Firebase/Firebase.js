// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
class Firebase {
  constructor() {
    this.db = db;
  }
  users = () => collection(this.db, "users");
}
export { Firebase };
