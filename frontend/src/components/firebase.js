import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGy1XiIK0Xhv0A_Ifpigh15EibqrO4sgc",
    authDomain: "finance-news-b3890.firebaseapp.com",
    projectId: "finance-news-b3890",
    storageBucket: "finance-news-b3890.appspot.com",
    messagingSenderId: "274216096396",
    appId: "1:274216096396:web:0c90e948ad87483bfb21a9"
});
const db = firebaseApp.firestore();


export {db};
