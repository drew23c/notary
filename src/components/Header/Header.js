import React, {Component} from 'react';
import logo from '../pics/logo.png';
import profile from '../pics/profile.JPG';
import './header.css';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                {/* <h1 className="header-title">VC Mobile Signing Agent</h1> */}
                <img className="writer-header" src={logo} />
                <img className="profile" src={profile} />
                <h1 className="name-title">Vivienne Caldwell, Mobile Signing Agent</h1><br/>
            </div>
        )
    }
}