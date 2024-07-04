export interface Config {
  ansible: {
    /**
     * URL of AWX instance (with api endpoint e.g : https://localhost:8043/api/v2/)
     * @visibility backend
     */
    url: string
        /**
     * Token of AWX instance (write permission)
     * @visibility backend
     */
    token: string

  };
}
