
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCQl3xeZq5TvdLldILmiWJ5GT4YtNIwfBQ",
  authDomain: "publinkapp.firebaseapp.com",
  projectId: "publinkapp",
  storageBucket: "publinkapp.appspot.com",
  messagingSenderId: "1032152200492",
  appId: "1:1032152200492:web:d66332d6176b7500662889"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = initializeApp(firebaseapp);
const auth = initializeApp(firebaseapp);

export {db,auth};
