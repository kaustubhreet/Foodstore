import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  
  apiKey: "AIzaSyBWjK-ZhrpLy-UeQQ91nuBxaSH2m5p5_rU",
  authDomain: "foodstore-99700.firebaseapp.com",
  databaseURL:"https://foodstore-99700-default-rtdb.firebaseio.com",
  projectId: "foodstore-99700",
  storageBucket: "foodstore-99700.appspot.com",
  messagingSenderId: "505739357958",
  appId: "1:505739357958:web:d16ae3948d9f4d8bab3887",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

        
export { app, firestore, storage };
