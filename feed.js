console.log('You are now on a feed page.');
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const avatar = document.getElementById('avatar');
        avatar.setAttribute('src', `${user.photoURL}`);
        console.log('User is signed in.', user);
    } else {
        console.log('No user is signed in.');
    }
  });

  const signOutBtn = document.getElementById('sign-out-btn');
  signOutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        console.log('Sign-out successful.');
        window.location.href = '/index.html';
      }).catch((error) => {
        console.log('An error happened.');
        console.log(error);
      });
  });