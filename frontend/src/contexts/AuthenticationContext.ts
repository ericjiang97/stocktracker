import React from "react";
import { AuthenticationContextState } from "./types";

const AuthenticationContext = React.createContext<AuthenticationContextState>({
  isLoaded: false,
  user: null,
  isTokenLoaded: false,
  token: null,
  refreshToken: () => {}
});

export default AuthenticationContext;
