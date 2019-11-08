import { auth } from "./firebase";

import googleAuthProvider from "./providers/googleAuthProvider";

export const doSignInWithGoogle = () => {
  auth.signInWithPopup(googleAuthProvider);
};

export const doSignOut = () => {
  auth.signOut();
};
