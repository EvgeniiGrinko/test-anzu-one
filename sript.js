console.log('Connected');

const googleBtn = document.getElementById('google-auth');
googleBtn.addEventListener('click', () => {
    console.log('ready to authenticate');
    authenticateWithGoogle();
});
function authenticateWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location.href = '/feed.html';
        
        // ...
      }).catch((error) => {
          console.log('error');
          console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
}
