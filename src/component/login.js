import React, { Component } from 'react';
import wand from '../assets/images/hpwand.png';
import Loader from './loader';

export default class login extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            firstnameclass:'validate',
            lastname:'',
            laststnameclass:'validate',
            email:'',
            emailclass:'validate',
            password:'',
            passwordclass:'validate',
            submitBTN: true
        }
    }
    render() {
        const cardfooter = this.state.submitBTN ? <button class="btn login-btn" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button> : <Loader/>;
        return (
            <div className="login-box">
                <div className="row">
                    <div className="login-header">
                            Start your journey in wizardry
                    </div>
                    <div className="login-card">
                        <div className="card-content">
                        <span className="login-card-title">Create Account</span>
                            <div className="row">
                                <form className="col s12" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <img src={wand} class="prefix"/>
                                            <input id="first_name" type="text" value={this.state.firstname} onChange={(e)=>{this.setState({firstname:e.target.value})}} className={this.state.firstnameclass} required/>
                                            <label htmlFor="first_name">First Name</label>
                                            <span class="helper-text" data-error="First Name is required"></span>
                                        </div>
                                        <div className="input-field col s6">
                                            <img src={wand} class="prefix"/>
                                            <input id="last_name" type="text" value={this.state.lastname} onChange={(e)=>{this.setState({lastname:e.target.value});}} className={this.state.laststnameclass} required/>
                                            <label htmlFor="last_name">Last Name</label>
                                            <span class="helper-text" data-error="Last Name is required"></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <img src={wand} class="prefix"/>
                                            <input id="email" type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} className={this.state.emailclass} required/>
                                            <label htmlFor="email">Email</label>
                                            <span class="helper-text" data-error="Need a valid email"></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <img src={wand} class="prefix"/>
                                            <input id="password" type="password" value={this.state.password} minLength={6} onChange={(e)=>{this.setState({password:e.target.value})}} className={this.state.passwordclass} required/>
                                            <label htmlFor="password">Password</label>
                                            <span class="helper-text" data-error="Password should be 6 characters long"></span>
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
            </div>
        )
    }
    validate = () => {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isError = false;
        if (this.state.firstname === '') {
            isError = true;
            this.setState({firstnameclass:'invalid'})
        }else{
            this.setState({firstnameclass:'valid'})
        }
        if (this.state.lastname === '') {
            isError = true;
            this.setState({laststnameclass:'invalid'})
        }
        else{
            this.setState({laststnameclass:'valid'})
        }
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
    
    handleSubmit = event =>{
        event.preventDefault();
        let err = this.validate();
        console.log(err);
        if (!err) {
            this.setState({submitBTN:false})   
        }
    };
}
