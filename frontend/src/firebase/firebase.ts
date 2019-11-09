import * as firebase from "firebase/app";
import * as env from "../utils/env";

import "firebase/auth";
import "firebase/database";

export const initialiseFirebase = async () => {
  let config = null;
  try {
    // Get config from hosted URL if available
    const response = await fetch("/__/firebase/init.json");
    config = await response.json();
  } catch (error) {
    // If we are on local host, we can retrieve it from environment variables.
    if (window.location.hostname === "localhost") {
      const firebaseJSON = process.env.REACT_APP_FIREBASE_CONFIG || "";
      if (firebaseJSON) {
        config = JSON.parse(firebaseJSON);
        // For debugging on localhost
        console.debug("Util: initialiseFirebase", "Firebase config", config);
      }
    }
  }

  if (config) {
    // Initialise Firebase if we successfully retrieved the config
    firebase.initializeApp({
      ...config,
      authDomain: env.isDevelopment()
        ? "stocktracker-dev.web.app"
        : "stocktracker-prod.web.app"
    });
  } else {
    console.error(
      "Firebase: initialiseFirebase",
      "Failed to retrieve Firebase configuration"
    );
  }
};

if (!firebase.apps.length) {
  initialiseFirebase();
}

export const auth = firebase.auth();
export const db = firebase.database();

export const useAuth = () => auth;
