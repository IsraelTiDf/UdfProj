import axios from "axios";

const client = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
  /* `validateStatus` defines whether to resolve or reject the promise for a given
   * HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
   * or `undefined`), the promise will be resolved; otherwise, the promise will be
   *rejected.
   */
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },
});

client.interceptors.response.use(
  function handleResponseSuccess(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  async function handleResponseError(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401 || error.response.status === 419) {
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default client;
