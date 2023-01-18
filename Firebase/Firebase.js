// Import the functions you need from the SDKs you need
import { firebaseConfig } from './FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection , doc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
class Firebase {
  constructor() {
    this.db = db
    this.auth = auth
  }
  useAuth = () => this.auth;
  users = () => collection(this.db, 'users');
  getUser = (id) => {
    return doc(this.db, 'users', id);
  }
}
export { Firebase };
