import React, { FC, useContext } from "react";
import { Redirect } from "react-router";

import Authenticated from "../Authenticated";
import Loader from "../../../components/Loader";
import AuthenticationContext from "../../../contexts/AuthenticationContext";

/**
 * This is a convenience component that combines the functionality
 * of `Authenticated` and `Authorised`.  Child content will be rendered
 * if the user is authenticated and authorised. Otherwise, a login
 * screen/forbidden screen will be shown as appropriate.
 */
export const Protected: FC = ({ children }) => {
  const { isLoaded } = useContext(AuthenticationContext);

  return (
    <>
      {!isLoaded && <Loader title="Authenticating..." />}
      <Authenticated inverted>
        <Redirect to="/" />
      </Authenticated>
      <Authenticated>{children}</Authenticated>
    </>
  );
};
