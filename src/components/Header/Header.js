import React, {Component} from 'react';
import writerHeader from '../pics/writer-header.jpg';
import profile from '../pics/IMG_5617.JPG';
import './header.css';
import fingerprint from '../pics/live-scan-fingerprint-scanner.jpg';
import bbb from '../pics/Picture1.jpg';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="header-title">VC Mobile Signing Agent/ Livescan Fingerprinting</h1>
                <img className="writer-header" src={writerHeader} />
                <img className="writer-header-right" src={fingerprint} />
                <img className="profile" src={profile} />
                <h1 className="name-title">Vivienne Caldwell, Mobile Signing Agent Livescan/Card Fingerprinting</h1><br/>
                <div>
                    <img className="payment" src={bbb} />
                    <a href="https://www.bbb.org/new-york-city/customer-reviews/notary-public/vc-mobile-signing-agent-in-saint-albans-ny-87150500/add/" target="_blank" rel="nofollow"><img src="https://seal-newyork.bbb.org/customer-reviews/badge-10-bbb-87150500.png" alt="VC Mobile Signing Agent BBB Business Review" /></a>
                </div>
            </div>
        )
    }
}