import firebase from 'firebase'
import 'firebase/firestore'
const app = firebase.initializeApp ({
    apiKey: "AIzaSyDiLcw_33M0mAyDU2ZoCyDXSbs3yMpQRLc",
    authDomain: "almacendequesos-678e0.firebaseapp.com",
    projectId: "almacendequesos-678e0",
    storageBucket: "almacendequesos-678e0.appspot.com",
    messagingSenderId: "763783515889",
    appId: "1:763783515889:web:3a43d437de35fd6cb6a350",
    measurementId: "G-BFKNVT7PHR"
})

export const getFirebase = () => app 
export const getFireStore = () => firebase.firestore(app) 