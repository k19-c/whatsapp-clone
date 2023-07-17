import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig={
  apiKey: "AIzaSyAVOolEgcypj25KlQK6qGmrFwAXhZzk1oA",
  authDomain: "whatsapp-application-ac70d.firebaseapp.com",
  projectId: "whatsapp-application-ac70d",
  storageBucket: "whatsapp-application-ac70d.appspot.com",
  messagingSenderId: "430026546752",
  appId: "1:430026546752:web:7f1eb9ae7cebbf824509a5",
  measurementId: "G-ZZXN34CYV3"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
