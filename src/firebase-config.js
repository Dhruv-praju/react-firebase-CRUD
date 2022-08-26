// Here goes initial configuration before conneting to firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase connection
const app = initializeApp(firebaseConfig);
// connect to firestore(cloud database)
const db = getFirestore(app)

export default db