import * as functions from "firebase-functions";
import admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const createUser = functions.auth.user().onCreate(async user => {
  const db = admin.firestore();
  await db
    .collection("users")
    .doc(user.uid)
    .set({
      ...user
    });
});
