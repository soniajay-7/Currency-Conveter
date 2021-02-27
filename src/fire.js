import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC54EOE7cy28ay6m3PxVdXF_CfZc3juGPI",
  authDomain: "currency-conveter.firebaseapp.com",
  projectId: "currency-conveter",
  storageBucket: "currency-conveter.appspot.com",
  messagingSenderId: "883425864145",
  appId: "1:883425864145:web:eaacd2fb5923cd59f758f0",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
