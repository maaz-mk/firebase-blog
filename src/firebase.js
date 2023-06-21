import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd3Lt31RqAToJDzsyvTUzIao04Gdiq9iE",
  authDomain: "react-blogs-app-99b27.firebaseapp.com",
  projectId: "react-blogs-app-99b27",
  storageBucket: "react-blogs-app-99b27.appspot.com",
  messagingSenderId: "858131880420",
  appId: "1:858131880420:web:360cb961ed6ab469278ff1"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCW_lL5bpXEickNp1PD1Nyq3-BW6LZQcZ0",
//   authDomain: "react-blogs-app.firebaseapp.com",
//   projectId: "react-blogs-app",
//   storageBucket: "react-blogs-app.appspot.com",
//   messagingSenderId: "520626893881",
//   appId: "1:520626893881:web:5432b7c30440ec4a0749e8"
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
