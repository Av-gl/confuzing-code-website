// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth} from 'firebase/auth'
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm2I9GCo1iwNsNIOvHhKFxBB0pbSj_R2o",
  authDomain: "coding-competition-2022-903ea.firebaseapp.com",
  projectId: "coding-competition-2022-903ea",
  storageBucket: "coding-competition-2022-903ea.appspot.com",
  messagingSenderId: "562806428240",
  appId: "1:562806428240:web:4c9f5921a9ba4b2e04f755",
  measurementId: "G-9JF0P84T2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const perf = getPerformance(app);
export const db = getFirestore(app);
export const auth = getAuth()
