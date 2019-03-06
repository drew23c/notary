import React, {Component} from 'react';
import writerHeader from '../pics/writer-header.jpg';
import './header.css';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>VC Mobile Signing Agent</h1>
                <img className="writer-header" src={writerHeader} />
            </div>
        )
    }
}