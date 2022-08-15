import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBNpyl5xYTXrsLaVgYEniZYsvr3dhKlDYw",
  authDomain: "evolove-56393.firebaseapp.com",
  projectId: "evolove-56393",
  storageBucket: "evolove-56393.appspot.com",
  messagingSenderId: "989895439172",
  appId: "1:989895439172:web:c8a6fc354154abade69d11",
  measurementId: "G-CNFC0DVHMZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);


