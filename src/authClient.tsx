import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CHECK,
  AUTH_ERROR
} from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        if (username === "admin" && password === "compara.1234"){
          localStorage.setItem('username', username);
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
      const { status } = params;
      if (status === 401 || status === 403) {
          localStorage.removeItem('token');
          return Promise.reject();
      }
      return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
