import React, { Component } from 'react'
import gs from '../assets/images/goldensnitch.png';

export default class loader extends Component {
    render() {
        return (
            <img className='snitch' src={gs} alt="Snitch loader"/>
        )
    }
}
