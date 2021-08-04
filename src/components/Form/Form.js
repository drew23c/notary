import React, {Component} from 'react';
import './form.css';
import Badge from '../Badge/Badge';

export default class Form extends Component{
    render(){
        return(
            <div className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnfeKQk0k5cBa4j3eI_wSbI_3F4pC22q5ykhabFevCJ_h5Ww/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                <div>
                    <a href="https://www.bbb.org/new-york-city/customer-reviews/notary-public/vc-mobile-signing-agent-in-saint-albans-ny-87150500/add/" target="_blank" rel="nofollow"><img src="https://seal-newyork.bbb.org/customer-reviews/badge-10-bbb-87150500.png" alt="VC Mobile Signing Agent BBB Business Review" /></a>
                </div>
                <a href='https://play.google.com/store/apps/details?id=com.vcmobilesigningagent&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
                <Badge/>
            </div>
        )
    }
}