import React, { FC, useState, useEffect, useCallback } from "react";
import { User } from "firebase/app";

import AuthenticationContext from "../contexts/AuthenticationContext";

import { useAuth } from "../firebase/firebase";

/**
 * This component checks the user's authentication state
 * and passes the user's info and decoded token (if available)
 * to the context.
 */
export const AuthenticationProvider: FC = props => {
  const auth = useAuth();

  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState<Nullable<User>>(auth.currentUser);

  const [tokenLoaded, setTokenLoaded] = useState(false);
  const [token, setToken] = useState<Nullable<firebase.auth.IdTokenResult>>(
    null
  );

  useEffect(() => {
    auth.onAuthStateChanged(userInfo => {
      console.debug(
        "Component: UserProvider",
        "auth state changed",
        userInfo && userInfo!.toJSON()
      );
      setUser(userInfo);
      setUserLoaded(true);
    });
  }, [auth]);

  useEffect(() => {
    if (user && !token) {
      user.getIdTokenResult(true).then(result => {
        setToken(result);
        setTokenLoaded(true);
      });
    }
  }, [user, token, setToken]);

  const refreshToken = useCallback(() => {
    setToken(null);
    setTokenLoaded(false);
  }, [setToken]);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoaded: userLoaded,
        user,
        isTokenLoaded: tokenLoaded,
        token,
        refreshToken
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
