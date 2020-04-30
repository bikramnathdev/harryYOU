import React, { Component } from 'react'
import Loader from './loader';
import hp from '../assets/images/harrypotter.png';
import sh from '../assets/images/sortinghat.png';
export default class main extends Component {
    render() {
        return (
            <div className="container">
                <img className='flying' src={hp} alt="Smiley face"/>
                <img className='sortng-hat' src={sh} alt="Smiley face"/>                
                <Loader/>
            </div>
        )
    }
}
