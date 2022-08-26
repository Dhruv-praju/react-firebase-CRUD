// Here goes initial configuration before conneting to firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZX78I2E5tMbTIxnw7RlF2uYNKIP0H2vM",
  authDomain: "first-firebase-tutorial-21cee.firebaseapp.com",
  projectId: "first-firebase-tutorial-21cee",
  storageBucket: "first-firebase-tutorial-21cee.appspot.com",
  messagingSenderId: "988649911212",
  appId: "1:988649911212:web:7a227739c25d687c54c009",
  measurementId: "G-MKGZWXMXXM"
};

// Initialize Firebase connection
const app = initializeApp(firebaseConfig);
// connect to firestore(cloud database)
const db = getFirestore(app)

export default db