import { deleteCookie, getCookie, setCookie } from "./cookies";
import { getToken } from "./CreateProduct";
import { deleteLocalStorage, getLocalStorage, getLocalStorages, setLocalStorage } from "./localStorage";
import React from 'react';
import NewProduct from './NewProduct';
import  cookie  from "js-cookie";


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