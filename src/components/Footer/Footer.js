import React, {Component} from 'react';
import './footer.css';
import email from '../pics/email.png';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul className="footer-list">
                    <li className="title">VC Mobile Signing Agent</li>
                    <li><a className="email-icon" href="mailto:viviennecaldwell35@gmail.com"><img src={email} /></a></li>
                </ul>
            </div>
        )
    }
}