import { deleteLocalStorage, getLocalStorage, getLocalStorages } from "./localStorage";



export const setAuthentication = (token, user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

export const isAuthenticated = () => {
    if (getLocalStorage('token') && getLocalStorages('user')) {
        return getLocalStorages('user');
    }  else {
        return false;
    }
}

export const logout = (next) => {
  deleteLocalStorage('token');
    deleteLocalStorage('user');

    next();

}