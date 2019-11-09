import { User } from "firebase/app";

export interface AuthenticationContextState {
  /**
   * This value should be `true` once the initial loading of
   * the current authentication state has completed.
   */
  isLoaded: boolean;

  /**
   * The currently authenticated user if available.
   */
  user: Nullable<User>;

  /**
   * This value should be `true` once the initial loading
   * of the user's token (if authenticated) has completed.
   */
  isTokenLoaded: boolean;

  /**
   * The current user's id token if available.
   */
  token: Nullable<firebase.auth.IdTokenResult>;

  /**
   * Call this function to refresh the id token.
   */
  refreshToken: () => void;
}
