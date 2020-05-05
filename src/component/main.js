import React, { Component } from 'react'
// import Loader from './loader';
// import hp from '../assets/images/harrypotter.png';
// import sh from '../assets/images/sortinghat.png';
import APIS from '../API/apis';
import Login from './login';
export default class main extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader: false,
            hat: true,
            house: ''
        };
        this.get_house = this.get_house.bind(this);
    }
    render() {
        // let hat_sniff = ''
        // if (this.state.loader && !this.state.hat) {
        //     hat_sniff = <Loader/>
        // }else if(!this.state.loader && this.state.hat){
        //     hat_sniff = <img className='sortng-hat' src={sh} alt="sorting hat" onClick={this.get_house}/>
        // }else{
        //     hat_sniff = <div className="text-container">
        //                     <span className="house-heading">you are a</span>
        //                     <span className="house-name">
        //                         {this.state.house}
        //                     </span>
        //                 </div>
        // }
        return (
            <div className="container">
                <Login/>
                {/* <img className='flying' src={hp} alt="harry potter flies"/>
                <span className="objects">{hat_sniff}</span> */}
            </div>
        )
    }
    get_house = () => {
        this.setState({loader:true,hat:false});
        APIS.getHogwartHouse().then(
            (response)=>{
                this.setState({loader:false,house: response});
            }
        );
    }
}
