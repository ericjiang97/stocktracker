export interface AuthenticatedProps {
  /**
   * If this is `true`, it will only render children
   * if the user is **NOT** authenticated. If the
   * `loading` prop is also `true`, it will render
   * children when the authentication state is **NOT**
   * loading.
   * @default false
   */
  inverted?: boolean;

  /**
   * If this is `true`, it will only render children
   * if the authentication state is **loading**.
   */
  loading?: boolean;
}
