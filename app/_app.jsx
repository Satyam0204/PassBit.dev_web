import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};
// Initialize firebase and google providerfirebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);
  return (
    <Component 
      {...pageProps} 
      user={user} 
      signIn={signIn} 
      signOut={signOut} 
    />
  );
}
export default MyApp;