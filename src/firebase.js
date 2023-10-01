import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8P4jGXrq9Uu2WKhN_vaF5z-AvemsdVOs",
  authDomain: "netflix-clone-6df8c.firebaseapp.com",
  projectId: "netflix-clone-6df8c",
  storageBucket: "netflix-clone-6df8c.appspot.com",
  messagingSenderId: "340272308326",
  appId: "1:340272308326:web:c47ee290a54451798d0da7",
  measurementId: "G-6VB2R0D1LW"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);



export {auth,db};
