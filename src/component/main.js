import React, { Component } from 'react'
import Register from './auth/register';
import Login from './auth/login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home';
export default class main extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader: false,
            hat: true,
            house: ''
        };
    }
    render() {
        return (
            <div className="container">
                <Router>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/home" exact component={Home}/>
                </Router>
            </div>
        )
    }
}
