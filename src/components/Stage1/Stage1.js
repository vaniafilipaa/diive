import React from 'react';
import './Stage1.css';

import diive_blue from './img/diive_blue.png';

export default class Stage1 extends React.Component {

    render() {
        return (
            <div id="stage1" className="container">
                <div className="anyplace-anywhere-anytime text-center">

                    <div className="never-settle container">

                        <div className="row">
                            <h2>Anyplace, Anywhere, Anytime!</h2>

                            <div className="never col-12 text-left">
                                <h1>NEVER</h1>
                            </div>
                            <div className="settle col-12 text-right">
                                <h1>SETTLE</h1>
                            </div>
                        </div>

                        <div className="diive-blue row">
                            <div className="description col-sm-12 col-md-4 col-lg-3">
                                <p className="text-left">
                                    Best water-resistant bluetooth speaker with flexible mount for a small price!
                                </p>
                                <div className="rounded-circle outer-circle">
                                    <div className="rounded-circle inner-circle">
                                        <span>15$</span>
                                    </div>
                                </div>
                            </div>
                            <div className="diive-blue-img col-sm-12 col-md-12 col-lg-12">
                                <img src={diive_blue} className="img-fluid" alt="diive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }
}