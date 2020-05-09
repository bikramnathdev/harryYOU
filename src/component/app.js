import React from 'react';
import Header from './header';
import Main from './main';
import {BrowserRouter, Route} from 'react-router-dom';
import '../css/App.css';
export default function app() {
    return (
        <div>
        <Header/>
        <Main />
        </div>
    );
}
