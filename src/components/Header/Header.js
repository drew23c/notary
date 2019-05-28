import React, {Component} from 'react';
import writerHeader from '../pics/writer-header.jpg';
import profile from '../pics/profile.JPG';
import './header.css';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="header-title">VC Mobile Signing Agent</h1>
                <img className="writer-header" src={writerHeader} />
                <img className="profile" src={profile} />
                <h1 className="name-title">Vivienne Caldwell, Mobile Signing Agent</h1><br/>
            </div>
        )
    }
}