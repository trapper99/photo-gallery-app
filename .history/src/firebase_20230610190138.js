// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6pP0HXP7HPpibubQu0eZlgZ0d54TA_Ak",
  authDomain: "stanley99-photo-gallery-app.firebaseapp.com",
  projectId: "stanley99-photo-gallery-app",
  storageBucket: "stanley99-photo-gallery-app.appspot.com",
  messagingSenderId: "608707087752",
  appId: "1:608707087752:web:803b2e4555eb0bb49f7e3d",
  measurementId: "G-0T9H8M1VGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytivcs)