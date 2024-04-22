import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe1eDugydkRzTQI1zShVaZsoDTl0D4HoA",
  authDomain: "carrot-clone-retry.firebaseapp.com",
  databaseURL:
    "https://carrot-clone-retry-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-clone-retry",
  storageBucket: "carrot-clone-retry.appspot.com",
  messagingSenderId: "751543553052",
  appId: "1:751543553052:web:2461e3501e5a2a343c63d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
