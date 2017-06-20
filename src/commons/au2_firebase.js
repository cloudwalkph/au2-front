var firebase = require("firebase/app");
require("firebase/auth");

// Initialize Firebase
var defaultAppConfig = {
  apiKey: "AIzaSyDDq59OwIAcWBO1ZOVLUKndxePaXfRUy8c",
  authDomain: "au2-website.firebaseapp.com",
  databaseURL: "https://au2-website.firebaseio.com",
  projectId: "au2-website",
  storageBucket: "au2-website.appspot.com",
  messagingSenderId: "170237174810"
};
// Initialize the default app
var defaultApp = firebase.initializeApp(defaultAppConfig);

function checkLoginState(signInProvider) {
  var provider = null;
  if(signInProvider === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if(signInProvider === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
  }

  if(provider) {
    defaultApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}

// function getUser() {
//   defaultApp.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       return user;
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });
// }

function signUpUser(email, password) {
  defaultApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

var Au2_Firebase = {
  defaultApp,
  signUpUser,
  checkLoginState,
  // getUser,
}

module.exports = Au2_Firebase;