import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp.App({
apiKey: "AIzaSyA0yY6E1xavu4axivxwVXSsYPIPvUR9ciw",
  authDomain: "gp-growshop.firebaseapp.com",
  projectId: "gp-growshop",
  storageBucket: "gp-growshop.appspot.com",
  messagingSenderId: "749478135010",
  appId: "1:749478135010:web:dc690fe9be64668f7f8abb"
})

export function getFirebase() {
    return app;
}

export function getFirebase(){
    return firebase.firestore(app);
}