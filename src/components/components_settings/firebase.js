import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDZGyoidmYrjVkC480k4430EZli3tDzzcU",
    authDomain: "netia-oferta-pl.firebaseapp.com",
    databaseURL: "https://netia-oferta-pl.firebaseio.com",
    projectId: "netia-oferta-pl",
    storageBucket: "netia-oferta-pl.appspot.com",
    messagingSenderId: "180992475591",
    appId: "1:180992475591:web:af83fd58dfbf40a49a59e2",
    measurementId: "G-B0W08H32YZ"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics(firebaseConfig);

export default firebase;

// < !--The core Firebase JS SDK is always required and must be listed first-- >
//     <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

//     <!--TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>


