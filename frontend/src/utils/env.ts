/**
 * Returns `true` if we are on localhost.
 */
export const isLocal = () =>
  window.location.hostname === "localhost" &&
  process.env.NODE_ENV === "development";

/**
 * Returns `true` if we are in the development environment.
 */
export const isDevelopment = () =>
  isLocal() || /^\w+-dev\./.test(window.location.hostname);

/**
 * Returns true if we are in the production environment.
 */
export const isProduction = () => !isDevelopment();

/**
 * Checks if the application is hosted on a valid host location.
 */
export const isValidHost = () => {
  if (isDevelopment()) {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "stocktracker-dev.web.app"
    );
  } else {
    return window.location.hostname === "stocktracker-dev.web.app";
  }
};
