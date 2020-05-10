class AuthRepository {
  constructor(firebase) {
    this.firebase = firebase;
  }

  registerOnAuthListener(userLoggedIn, userNotLoggedIn, onError) {
    this.firebase.onAuthUserListener(
      (user) => {
        if (user) {
          userLoggedIn(user);
        } else {
          userNotLoggedIn();
        }
      },
      (fallback) => {
        userNotLoggedIn();
      }
    );
  }

  // Register a listener with registerOnAuthListener to get callback
  doSignInWithGithub(onError) {
    this.firebase
      .doSignInWithGithub()
      .then((result) => {
        console.log(result);
        this.token = result.credential.accessToken;
        let data = { token: result.credential.accessToken };
        this.firebase.users().doc(result.user.uid).set(data);
      })
      .catch((error) => {
        onError(error);
      });
  }

  getCurrentUser() {
    return this.firebase.currentUser();
  }

  logout() {
    this.firebase.doSignOut();
  }

  getToken() {
    return this.firebase
      .users()
      .doc(this.getCurrentUser().uid)
      .get()
      .then((user) => {
        return user.data().token;
      });
  }
}

export default AuthRepository;
