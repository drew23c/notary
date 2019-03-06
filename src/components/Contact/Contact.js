import React, {Component} from 'react';
import phone from '../pics/phone.png';
import './contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <h2>Click to Call</h2>
                <a href="tel:3478586383"><img className="phone" src={phone} /></a>
                <h2>Call me at 347-858-6383</h2>
            </div>
        )
    }
}