import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtFgf88YFSJA6Q_7ZSzsxDcrU37XYZnI",
  authDomain: "link-sharing-app-63cff.firebaseapp.com",
  projectId: "link-sharing-app-63cff",
  storageBucket: "link-sharing-app-63cff.appspot.com",
  messagingSenderId: "347502270146",
  appId: "1:347502270146:web:b9610b3ebaf8a51c2f8d5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication and get a reference to the sevice

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Now let’s make a function for signing in using an email and password

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Now, let’s create a function for registering a user with an email and password:

const registerUserWithEmailAndPassword = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

// Create a function that will send a password reset link to an email address:

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

// And finally, the logout function:

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign Out successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerUserWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
