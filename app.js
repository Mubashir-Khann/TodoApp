const firebaseConfig = {
  apiKey: "AIzaSyDUJxIHab0XxT07b1L52jgMHlgmX8PyDa4",
  authDomain: "tododata-4272c.firebaseapp.com",
  databaseURL: "https://tododata-4272c-default-rtdb.firebaseio.com",
  projectId: "tododata-4272c",
  storageBucket: "tododata-4272c.appspot.com",
  messagingSenderId: "603073305118",
  appId: "1:603073305118:web:bfbe34abb7d2a3cde66c0f",
};

const frb = firebase.initializeApp(firebaseConfig);

console.log(frb.auth);

//...................................SignUp..............................//

function signUp() {
  var email = document.getElementById("Email");
  var pass = document.getElementById("Pass");
  //   console.log(email.value, pass.value);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      window.location.assign("./todo.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
}

// ................................Login.........................//

function signIn() {
  var emailL = document.getElementById("EmailLogin");
  var passL = document.getElementById("PassLogin");

  firebase
    .auth()
    .signInWithEmailAndPassword(emailL.value, passL.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      window.location.assign("./todo.html");
    })
    .catch((error) => {
      //   var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      alert("wrong email or password");
    });
}
function loginfnc() {
  window.location.assign("./login.html");
}

// function signupWithGoogle() {
//   var provider = new firebase.auth.GoogleAuthProvider();

//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       var credential = result.credential;

//       var token = credential.accessToken;
//       var user = result.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
//       console.log(errorMessage);
//     });
// }
