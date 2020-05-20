import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../config/FirebaseConfig";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    /* Helper */
    this.serverValue = app.firestore.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.firestore();
    this.db.enablePersistence().catch(function (err) {
      console.log(err.toString());
    });
    /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
    this.githubProvider = new app.auth.GithubAuthProvider();
  }

  // *** Auth API ***
  currentUser = () => this.auth.currentUser;
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);
  doSignInWithGithub = () => this.auth.signInWithPopup(this.githubProvider);
  doSignInAnonymous = () => this.auth.signInAnonymously();
  doSignOut = () => this.auth.signOut();
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
  // *** User API ***
  users = () => this.db.collection("users");
  students = () => this.db.collection("students");
  getStudentByName = (githubName) =>
    this.students().where("githubName", "==", githubName);
  getAllStudents = () => this.students();
  getStudentsInSchool = (schoolName) =>
    this.students().where("school", "==", schoolName);
}

export default Firebase;
