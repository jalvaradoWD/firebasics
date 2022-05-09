import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js';
import * as firestore from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js';
import * as firebaseAuth from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDoPUYnRKnwhQ5KF_3K4vvu4s3SDECzDk',
  authDomain: 'firebasics-349703.firebaseapp.com',
  projectId: 'firebasics-349703',
  storageBucket: 'firebasics-349703.appspot.com',
  messagingSenderId: '671514582007',
  appId: '1:671514582007:web:d5c488da97a5f1c3e02cf2',
  measurementId: 'G-KDGZPHDE05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
