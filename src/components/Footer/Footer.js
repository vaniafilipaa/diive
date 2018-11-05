import React from 'react'
import './Footer.css'

import { SocialIcon } from 'react-social-icons'

export default class Footer extends React.Component {
    render() {

        const data = [
            { 
                "network": "facebook", 
                "link": "https://www.facebook.com"
            },
            { 
                "network": "instagram", 
                "link": "https://www.instagram.com"
            }, 
            {
                "network": "snapchat",
                "link": "https://www.snapchat.com"
            },
            { 
                "network": "twitter",
                "link": "https://www.twitter.com"
            },  
            { 
                "network": "youtube",
                "link": "https://www.youtube.com" 
            }
        ];
        
        const listItems = data.map((d) => <li className="list-inline-item" key={d.network}>
            <SocialIcon network={d.network} color="transparent" className="btn-floating btn-sm rgba-white-slight mx-1" url={d.link} target="_blank" rel="noopener noreferrer"/>
        </li>);

        return (
            <footer className="page-footer">
                <div className="container text-center text-md-left">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <p className="rights-reserved text-center text-md-left">® 2018 DIIVE, All rights reserved</p>
                            <div className="why-lavva">
                                <a href="/" target="_blank">Why lavva?</a>
                            </div>
                        </div>            
                        <div className="col-sm-12 col-md-6 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    {listItems}       
                                </ul>
                            </div>
                        </div>        
                    </div>                     
                </div>                   
            </footer>
        );

    }
}
