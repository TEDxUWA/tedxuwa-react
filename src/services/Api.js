const API_ROOT = `${process.env.REACT_APP_HOST}/api`;

const commonConfig = {
  'content-type': 'application/json',
};

const fetcher = (path, body, method = 'GET') => {
  return fetch(`${API_ROOT}/${path}/`, {
    method,
    ...commonConfig,
    ...body
  }).then(res => {
    if (res.ok && typeof res.json === 'function') {
      return res.json();
    } else {
      throw new Error(res.json());
    }
  });
};

const methods = ["GET", "POST", "PATCH", "DELETE"];
const API = {};

methods.forEach(method => {
  API[method] = (...params) => fetcher(...params, method);
});

export default API;