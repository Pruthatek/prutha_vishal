import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOGWBq4WiK3hfxcOcLuuzneZPJcTDIBNw",
  authDomain: "pruthatek-12.firebaseapp.com",
  projectId: "pruthatek-12",
  storageBucket: "pruthatek-12.appspot.com",
  messagingSenderId: "40588563685",
  appId: "1:40588563685:web:0dc14eeab850228785b00c"
};

const app = initializeApp(firebaseConfig);

var db = getFirestore(app);
var sb = getStorage(app);

export { db };
export default sb;
