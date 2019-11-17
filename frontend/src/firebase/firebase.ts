import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import FIREBASE_CONFIG from "../config/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

export const useAuth = () => auth;
