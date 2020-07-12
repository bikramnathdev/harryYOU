import React, { Component } from 'react';
import wand from '../../assets/images/hpwand.png';
import Loader from '../loader';
import { Link } from "react-router-dom";
import APIS from '../../API/apis';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class register extends Component {   
    constructor(props){
        super(props);
        this.state={
            email:'',
            emailclass:'validate',
            password:'',
            passwordclass:'validate',
            submitBTN: true
        }
    }
    render() {
        const cardfooter = this.state.submitBTN ? <div><button className="btn login-btn" type="submit" name="action">Login
                                <i className="material-icons right">send</i>
                            </button>
                            <p>Don't have an account? <Link to="/register" className="btn sign-in-btn btn-small orange">Create Account</Link></p>
                        </div> :<div> <Loader/></div>;
        return (
            <div className="login-box">
                <div className="row">
                    <div className="login-header">
                            Start your journey in wizardry
                    </div>
                    <div className="login-card">
                        <div className="card-content">
                        <span className="login-card-title">Login</span>
                            <div className="row">
                                <form className="col s12" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <img src={wand} className="prefix" alt="prefix"/>
                                            <input id="email" type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} className={this.state.emailclass} required/>
                                            <label htmlFor="email">Email</label>
                                            <span className="helper-text" data-error="Need a valid email"></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <img src={wand} className="prefix" alt="prefix"/>
                                            <input id="password" type="password" value={this.state.password} minLength={6} onChange={(e)=>{this.setState({password:e.target.value})}} className={this.state.passwordclass} required/>
                                            <label htmlFor="password">Password</label>
                                            <span className="helper-text" data-error="Password is required"></span>
                                        </div>
                                    </div>
                                    <div className="login-card-footer">
                                        {cardfooter}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer autoClose={5000}/>
            </div>
        )
    }
    validate = () => {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isError = false;
        if (!emailReg.test(String(this.state.email).toLowerCase())) {
            isError = true;
            this.setState({emailclass:'invalid'})
        }
        else{
            this.setState({emailclass:'valid'})
        }
        if (this.state.password.length <6) {
            isError = true;
            this.setState({passwordclass:'invalid'})
        }
        else{
            this.setState({passwordclass:'valid'})
        }
        return isError;
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        let err = this.validate();
        if (!err) {
            this.setState({submitBTN:false});
            const newUser ={
                email: this.state.email,
                password: this.state.password
            }
            try {
                const requestObject = JSON.stringify(newUser);
                const apiRoute = '/api/auth';
                const res = await APIS.login(apiRoute,requestObject);
                console.log(res);
            } catch (error) {
                const errors = error.response.data.errors;
                this.setState({submitBTN:true});
                errors.forEach(element => {
                    this.notifyerror(element.msg);
                });
            }
        }
    };
    notifyerror = (message) => toast.error(message);
    notifysuccess = (message) => toast.success(message);
}
