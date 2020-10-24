import { deleteCookie, getCookie, setCookie } from "./cookies";
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from "./localStorage";

export const setAuthentication = (token, user) => {
    setCookie('user', user);
    setLocalStorage('token', token);
};

export const isAuthenticated = () => {
    if(getCookie('user') && getLocalStorage('token')) {
        return getCookie('user');
    }  else {
        return false;
    }
}

export const logout = (next) => {
    deleteCookie('user');
    deleteLocalStorage('token');

    next();

}