import { deleteCookie, getCookie, setCookie } from "./cookies";
import { getToken } from "./CreateProduct";
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from "./localStorage";
import React from 'react';
import NewProduct from './NewProduct';


export const setAuthentication = (token, user) => {
    setCookie('token', token)
    setLocalStorage('user', user);
   
};

export const isAuthenticated = () => {
    if (getCookie('token') && getLocalStorage('user')) {
        return getLocalStorage('user');
    }  else {
        return false;
    }
}

export const logout = (next) => {
    deleteCookie('token');
    deleteLocalStorage('user');

    next();

}