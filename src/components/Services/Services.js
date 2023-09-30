import React, {Component} from 'react';
import './services.css';
import qrcode from '../pics/qrCode.png';

export default class Services extends Component{
    render(){
        return(
            <div className="services">
            <img className="qrcode" src={qrcode} alt="qrcode" />
            <h2>Certified Mobile Notary Signing Agent travels to you.  Our service is strictly mobile by appointment only.</h2>
            <h2>Servicing the Queens, Brooklyn, Nassau and Suffolk Counties.</h2>
                <ul>
                    <li>~Fingerprinting background check livescan.</li>
                </ul>
            </div>
        )
    }
}