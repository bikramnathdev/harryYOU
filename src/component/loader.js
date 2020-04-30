import React, { Component } from 'react'
import gs from '../assets/images/goldensnitch.png';

export default class loader extends Component {
    render() {
        return (
            <div>
                <img className='snitch' src={gs} alt="Smiley face"/>
            </div>
        )
    }
}
