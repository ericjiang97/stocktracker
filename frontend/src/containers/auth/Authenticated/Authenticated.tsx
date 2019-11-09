import React, { useContext } from "react";

import { AuthenticatedProps } from "./types";
import AuthenticationContext from "../../../contexts/AuthenticationContext";

export const Authenticated: React.FC<AuthenticatedProps> = ({
  children,
  inverted,
  loading
}) => {
  const { isLoaded, user } = useContext(AuthenticationContext);

  if (loading) {
    if ((inverted && isLoaded) || (!inverted && !isLoaded))
      return <>{children}</>;
  }

  if (!loading && isLoaded) {
    if (!inverted && user) {
      // Return children if not inverted and there is a user
      return <>{children}</>;
    } else if (inverted && !user) {
      // Return children if inverted and there is no user
      return <>{children}</>;
    }
  }

  return null;
};
