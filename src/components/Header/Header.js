import React, {Component} from 'react';
import writerHeader from '../pics/writer-header.jpg';
import profile from '../pics/IMG_5617.JPG';
import './header.css';
import fingerprint from '../pics/live-scan-fingerprint-scanner.jpg';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="header-title">VC Mobile Signing Agent/ Livescan Fingerprinting</h1>
                <img className="writer-header" src={writerHeader} />
                <img className="writer-header-right" src={fingerprint} />
                <img className="profile" src={profile} />
                <h1 className="name-title">Vivienne Caldwell, Mobile Signing Agent</h1><br/>
            </div>
        )
    }
}